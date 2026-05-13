import { useState } from 'react';
import { getAssets } from '../data/parser';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export function AssetRefresh() {
  const assets = getAssets();
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", ...Array.from(new Set(assets.map(a => a.Department)))].sort();

  const filteredAssets = selectedDept === "All" 
    ? assets 
    : assets.filter(a => a.Department === selectedDept);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Asset Refresh Planner</h1>
          <p className="text-muted-foreground mt-1">Identify high-risk assets and generate budget-ready replacement justification.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-600">Department</span>
            <Select value={selectedDept} onValueChange={setSelectedDept}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(d => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="default" className="bg-slate-500 hover:bg-slate-600">
            Draft Justification Email
          </Button>
        </div>
      </div>

      <div className="border rounded-xl bg-white overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#f8fafc] text-slate-500 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 w-12"><Checkbox className="border-gray-300" /></th>
              <th className="px-6 py-4">Asset</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Age (months)</th>
              <th className="px-6 py-4">Repairs</th>
              <th className="px-6 py-4">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredAssets.sort((a, b) => b.Risk - a.Risk).map((asset) => (
              <tr key={asset.Asset} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <Checkbox className="border-gray-300" />
                </td>
                <td className="px-6 py-4 font-medium text-slate-800">{asset.Asset}</td>
                <td className="px-6 py-4 text-slate-600">{asset.Type}</td>
                <td className="px-6 py-4 text-slate-600">{asset.Department}</td>
                <td className="px-6 py-4 text-slate-600">{asset.User}</td>
                <td className="px-6 py-4 text-slate-600">{asset.Age}</td>
                <td className="px-6 py-4 text-slate-600">{asset.Repairs}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1.5 w-32">
                    <span className="text-xs text-slate-500">{asset.Risk.toFixed(1)}%</span>
                    <Progress value={asset.Risk} className="h-2.5 bg-gray-100 [&>div]:bg-rose-500" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
