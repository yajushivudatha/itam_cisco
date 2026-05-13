import { useState } from 'react';
import { getIncidents } from '../data/parser';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format, parseISO } from 'date-fns';

export function IncidentTriage() {
  const incidents = getIncidents();
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = statusFilter === "All" 
    ? incidents 
    : incidents.filter(i => i.Status === statusFilter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Incident Triage</h1>
          <p className="text-muted-foreground mt-1">Review and manage recent IT incidents across all departments.</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-slate-600">Status</span>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] bg-white">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#f8fafc] text-slate-500 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Ticket ID</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Created Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((inc) => (
                <tr key={inc.TicketID} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{inc.TicketID}</td>
                  <td className="px-6 py-4 text-slate-600">{inc.Category}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={`
                      ${inc.Priority === 'P1' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                      ${inc.Priority === 'P2' ? 'bg-orange-50 text-orange-700 border-orange-200' : ''}
                      ${inc.Priority === 'P3' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                      ${inc.Priority === 'P4' ? 'bg-gray-50 text-gray-700 border-gray-200' : ''}
                    `}>
                      {inc.Priority}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{inc.Department}</td>
                  <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                    {inc.CreatedDate ? format(parseISO(inc.CreatedDate), 'MMM d, yyyy') : '-'}
                  </td>
                  <td className="px-6 py-4">
                    {inc.Status === 'Open' ? (
                      <Badge className="bg-amber-100 text-amber-700 border-0 hover:bg-amber-100 shadow-none">Open</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-700 border-0 hover:bg-gray-100 shadow-none">Closed</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
