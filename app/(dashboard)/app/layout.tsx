import Link from "next/link";
import {
  Search,
  HelpCircle,
  Bell,
  Plus,
  Clock,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e0e6ef] font-sans text-[#333]">
      {/* 1. TOP GLOBAL HEADER (Exact NetSuite Blue) */}
      <header className="bg-[#4d6596] text-white h-16 shadow-sm z-50 relative flex flex-col justify-between">
        {/* Top Row: Logo, Search, User */}
        <div className="flex items-center justify-between px-4 pt-2">
          {/* Logo Area */}
          <div className="flex items-center gap-4 w-48">
            {/* The "Oracle" style logo */}
            <div className="font-bold text-xl tracking-tight leading-none flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-80 font-normal">
                Oracle
              </span>
              <span className="text-lg">
                Nidhal<span className="font-light">Suite</span>
              </span>
            </div>
          </div>

          {/* Global Search Bar (Classic Pill Shape) */}
          <div className="flex-1 max-w-2xl flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-3 pr-10 py-1.5 rounded-sm border-0 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-blue-300 shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-2 top-2" />
            </div>
          </div>

          {/* Right Utilities (Create, Help, User) */}
          <div className="flex items-center gap-4 w-48 justify-end">
            <div className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100">
              <Plus className="w-5 h-5" />
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100 border-l border-blue-400 pl-3">
              <Clock className="w-5 h-5" />
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex flex-col items-end text-[11px] leading-tight cursor-pointer">
              <span className="font-bold">Nidhal Ghdiri</span>
              <span className="opacity-70">Administrator</span>
            </div>
          </div>
        </div>

        {/* 2. NAVIGATION TABS (The Bottom Row) */}
        <div className="bg-[#4d6596] px-2 flex items-end gap-1 text-[13px] font-bold mt-1">
          <NavTab label="Home" active />
          <NavTab label="Activities" />
          <NavTab label="Transactions" />
          <NavTab label="Lists" />
          <NavTab label="Reports" />
          <NavTab label="Customization" />
          <NavTab label="Documents" />
          <NavTab label="Setup" />
        </div>
      </header>

      {/* 3. MAIN CONTENT AREA */}
      <main className="p-3 max-w-[1600px] mx-auto">{children}</main>
    </div>
  );
}

function NavTab({
  label,
  icon,
  active,
}: {
  label: string;
  icon?: any;
  active?: boolean;
}) {
  return (
    <div
      className={`
      flex items-center gap-2 px-4 py-2 cursor-pointer transition-colors rounded-t-sm
      ${active ? "bg-[#e0e6ef] text-[#333] border-t-2 border-blue-600" : "text-blue-50 hover:bg-[#6b82a5]"}
    `}
    >
      {icon}
      {label}
    </div>
  );
}
