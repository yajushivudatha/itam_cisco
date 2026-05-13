import { NavLink, Outlet } from "react-router-dom";
import { AlertCircle, BarChart3, RefreshCw, Activity, MessageSquare } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-white h-screen flex flex-col pt-8 pb-4">
      <div className="px-6 mb-8 text-lg font-bold">ReadyOps ITAM Platform</div>
      
      <nav className="flex-1 space-y-1">
        <NavLink
          to="/incident-triage"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm font-medium ${
              isActive ? "bg-[#0f172a] text-white" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Incident Triage
        </NavLink>
        <NavLink
          to="/license-forecast"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm font-medium ${
              isActive ? "bg-[#0f172a] text-white" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          License Forecast
        </NavLink>
        <NavLink
          to="/asset-refresh"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm font-medium ${
              isActive ? "bg-[#0f172a] text-white" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Asset Refresh
        </NavLink>
        <NavLink
          to="/sla-watcher"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm font-medium ${
              isActive ? "bg-[#0f172a] text-white" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          SLA Watcher
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-sm font-medium ${
              isActive ? "bg-[#0f172a] text-white" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          AI Reports
        </NavLink>
      </nav>
    </div>
  );
}

export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50/50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-full">
        <div className="p-8 pb-16 min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
