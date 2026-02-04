import Link from "next/link";
import {
  Search,
  HelpCircle,
  Bell,
  Plus,
  Clock,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e0e6ef] font-sans text-[#333]">
      {/* 1. TOP GLOBAL HEADER (White Background) */}
      <header className="bg-white h-14 shadow-sm z-50 relative flex flex-col justify-center border-b border-gray-200">
        <div className="flex items-center justify-between px-4">
          {/* Logo Area */}
          <div className="flex items-center gap-4 w-64">
            <div className="font-bold text-xl tracking-tight leading-none flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-[#555] font-semibold mb-0.5">
                Oracle
              </span>
              <span className="text-lg text-[#333]">
                Nidhal<span className="font-light text-[#555]">Suite</span>
              </span>
            </div>
          </div>

          {/* Global Search Bar (Classic Pill) */}
          <div className="flex-1 max-w-xl flex items-center justify-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-4 py-1.5 rounded-sm border border-gray-300 bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors shadow-inner"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2" />
            </div>
          </div>

          {/* Right Utilities (Gray Icons) */}
          <div className="flex items-center gap-5 w-64 justify-end">
            <div className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition">
              <Plus className="w-5 h-5 text-[#555]" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition border-r border-gray-300 pr-4">
              <HelpCircle className="w-5 h-5 text-[#555]" />
            </div>

            {/* User Profile Dropdown */}
            <div className="flex flex-col items-end text-[11px] leading-tight cursor-pointer group relative">
              <span className="font-bold text-[#333]">Nidhal Ghdiri</span>
              <span className="text-[#666]">Administrator</span>

              {/* Dropdown Indicator */}
              <div className="absolute top-8 right-0 w-32 bg-white shadow-lg border border-gray-200 rounded-sm hidden group-hover:block z-50 py-1">
                <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 text-xs">
                  <Settings className="w-3 h-3" /> Settings
                </div>
                <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 text-xs text-red-600">
                  <LogOut className="w-3 h-3" /> Sign Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. NAVIGATION TABS (Blue Background) */}
      <div className="bg-[#4d6596] px-4 flex items-end gap-1 text-[13px] font-bold h-10 shadow-md">
        {/* Portfolio Links mimicking NetSuite Modules */}
        <NavTab label="Home" active />
        <NavTab label="About Me" />
        <NavTab label="Skills" />
        <NavTab label="Projects" />
        <NavTab label="Experience" />
        <NavTab label="Contact Me" />
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <main className="p-3 max-w-[1600px] mx-auto">{children}</main>
    </div>
  );
}

// NetSuite Tab Component
function NavTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`
      group relative px-4 py-2 cursor-pointer rounded-t-[3px] transition-all
      ${
        active
          ? "bg-[#e0e6ef] text-[#333] shadow-[0_-2px_5px_rgba(0,0,0,0.1)]"
          : "text-blue-100 hover:bg-[#5c74a0] hover:text-white"
      }
    `}
    >
      <span className="flex items-center gap-1">{label}</span>
    </div>
  );
}
