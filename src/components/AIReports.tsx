import { useState, useRef, useEffect } from 'react';
import { contractsCSV, incidentsCSV, softwareCSV } from '../data/raw-datasets';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Loader2, SendHorizontal, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export function AIReports() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build context from data
      const systemPrompt = `
You are an AI reporting assistant for an IT Asset Management (ITAM) platform.
You have access to the following current datasets in CSV format.

--- CONTRACTS DATA ---
${contractsCSV}

--- INCIDENTS DATA ---
${incidentsCSV}

--- SOFTWARE DATA ---
${softwareCSV}

Answer the user's questions based ONLY on this data. Produce well-formatted Markdown reports.
If they ask for tables, provide Markdown tables. If they ask about things not in the data, politely decline.
Note: The current date is assumed to be ${new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} for this analysis.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemPrompt }] },
            { role: 'model', parts: [{ text: 'Understood. I will answer based on the datasets.' }] },
            ...messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.content }]
            })),
            { role: 'user', parts: [{ text: userMessage.content }] }
        ]
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || 'No response generated.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating report:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error generating the report. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">AI Reports</h1>
        <p className="text-muted-foreground mt-1">Ask questions about your IT assets, contracts, and incidents to generate custom reports.</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden bg-white shadow-sm border">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                <Bot className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">How can I help you today?</h3>
              <p className="text-sm text-slate-500">
                You can ask me to analyze the software spend by department, find high-priority incidents, or summarize upcoming contract renewals.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Button variant="outline" size="sm" onClick={() => setInput("Show me all contracts renewing in 2025.")}>
                  Renewals in 2025
                </Button>
                <Button variant="outline" size="sm" onClick={() => setInput("Which department has the most incidents?")}>
                  Incident breakdown
                </Button>
                <Button variant="outline" size="sm" onClick={() => setInput("List all open P1 incidents.")}>
                  Open P1 Incidents
                </Button>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-5 h-5 text-slate-600" />
                  </div>
                )}
                
                <div
                  className={`${
                    message.role === 'user'
                      ? 'bg-slate-900 text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white border rounded-2xl rounded-tl-sm text-slate-800'
                  } px-5 py-4 max-w-[80%] prose prose-sm prose-slate`}
                >
                  <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
                </div>

                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-5 h-5 text-slate-600" />
              </div>
              <div className="bg-white border rounded-2xl rounded-tl-sm px-5 py-4 flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                <span className="text-sm text-slate-500">Generating report...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t">
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-end gap-2 pr-2 border rounded-xl bg-white focus-within:ring-1 focus-within:ring-slate-900 overflow-hidden"
          >
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask for a report..."
              className="px-4 py-3 border-0 focus-visible:ring-0 resize-none min-h-[50px] shadow-none bg-transparent"
              rows={1}
            />
            <div className="py-2">
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className={`h-10 w-10 shrink-0 rounded-lg transition-colors ${input.trim() && !isLoading ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-400'}`}
              >
                <SendHorizontal className="w-5 h-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
