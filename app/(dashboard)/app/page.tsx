import Portlet from "@/components/dashboard/Portlet";
import Link from "next/link";
import {
  BadgeCheck,
  Calendar,
  FileText,
  Settings,
  Star,
  TrendingUp,
  AlertCircle,
  Briefcase,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
      {/* LEFT COLUMN (Wide) */}
      <div className="md:col-span-8 space-y-3">
        {/* 1. WELCOME MESSAGE (Formatted like a Reminder) */}
        <div className="bg-[#ffffd6] border border-[#d4d498] p-3 text-xs text-[#333] flex gap-2 items-start rounded-sm mb-2 shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#b0b000] shrink-0 mt-0.5" />
          <div>
            <strong>System Note:</strong> You are viewing the portfolio of{" "}
            <strong>Nidhal Ghdiri</strong>. This environment is built with{" "}
            <strong>Next.js 14</strong> to demonstrate SuiteScript & Frontend
            capabilities.
          </div>
        </div>

        {/* 2. RECENT PROJECTS (As a "List" Portlet) */}
        <Portlet title="Recent Projects" hidePadding>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-[#f0f0f0] text-[#666] border-b border-[#ddd]">
                <tr>
                  <th className="py-1.5 px-2 border-r border-[#e0e0e0] w-8">
                    Edit
                  </th>
                  <th className="py-1.5 px-2 border-r border-[#e0e0e0]">
                    Date
                  </th>
                  <th className="py-1.5 px-2 border-r border-[#e0e0e0]">
                    Project Type
                  </th>
                  <th className="py-1.5 px-2 border-r border-[#e0e0e0]">
                    Project Name / ID
                  </th>
                  <th className="py-1.5 px-2 border-r border-[#e0e0e0]">
                    Status
                  </th>
                  <th className="py-1.5 px-2">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee]">
                <ProjectRow
                  date="02/02/2026"
                  type="Integration"
                  id="PRJ-001 WhatsApp Sync"
                  status="Released"
                  impact="Reduced manual data entry by 40%"
                />
                <ProjectRow
                  date="15/01/2026"
                  type="SaaS Development"
                  id="PRJ-002 Property Mgmt"
                  status="In Development"
                  impact="Next.js frontend with NetSuite Backend"
                />
                <ProjectRow
                  date="10/11/2025"
                  type="SuiteScript"
                  id="PRJ-003 Fixed Assets"
                  status="Completed"
                  impact="Automated depreciation schedule (Map/Reduce)"
                />
              </tbody>
            </table>
            <div className="bg-[#f0f0f0] border-t border-[#ccc] p-1 text-[10px] text-[#666] flex justify-between items-center px-2">
              <span>Total: 3 Records</span>
              <span className="hover:underline cursor-pointer">View All</span>
            </div>
          </div>
        </Portlet>
      </div>

      {/* RIGHT COLUMN (Narrow) */}
      <div className="md:col-span-4 space-y-3">
        {/* 3. SHORTCUTS (The Icons Grid) */}
        <Portlet title="Shortcuts">
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            <Shortcut
              label="Download Resume"
              icon={<FileText className="w-4 h-4 text-[#607799]" />}
            />
            <Shortcut
              label="GitHub Profile"
              icon={<Briefcase className="w-4 h-4 text-[#607799]" />}
            />
            <Shortcut
              label="Book Interview"
              icon={<Calendar className="w-4 h-4 text-[#607799]" />}
            />
            <Shortcut
              label="Certifications"
              icon={<BadgeCheck className="w-4 h-4 text-[#607799]" />}
            />
          </div>
        </Portlet>

        {/* 4. KEY PERFORMANCE INDICATORS */}
        <Portlet title="Key Performance Indicators" hidePadding>
          <table className="w-full text-[11px]">
            <thead className="bg-[#f5f5f5] text-[#666] border-b border-[#ddd]">
              <tr>
                <th className="py-1.5 px-3 text-left font-normal">Indicator</th>
                <th className="py-1.5 px-3 text-right font-normal">Period</th>
                <th className="py-1.5 px-3 text-right font-normal">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee]">
              <KPIRow label="SuiteScript 2.1" value="Expert" trend="up" />
              <KPIRow label="Next.js / React" value="Advanced" trend="up" />
              <KPIRow
                label="REST Integration"
                value="Intermediate"
                trend="flat"
              />
              <KPIRow label="SQL / Database" value="Advanced" trend="up" />
            </tbody>
          </table>
          <div className="p-2 text-[10px] text-[#888] text-center border-t border-[#eee]">
            Last Update: Today 8:45 PM
          </div>
        </Portlet>

        {/* 5. SETTINGS */}
        <Portlet title="Settings">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded">
              <Settings className="w-4 h-4 text-slate-400" />
              <span className="text-blue-600 hover:underline">
                Personalize Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded">
              <Star className="w-4 h-4 text-slate-400" />
              <span className="text-blue-600 hover:underline">
                Set Preferences
              </span>
            </div>
          </div>
        </Portlet>
      </div>
    </div>
  );
}

// --- Sub-components for cleaner code ---

function ProjectRow({ date, type, id, status, impact }: any) {
  return (
    <tr className="hover:bg-[#eefaee] group cursor-pointer transition-colors">
      <td className="py-1.5 px-2 border-r border-[#eee] text-blue-600 font-medium text-[10px]">
        Edit | View
      </td>
      <td className="py-1.5 px-2 border-r border-[#eee]">{date}</td>
      <td className="py-1.5 px-2 border-r border-[#eee] text-[#333]">{type}</td>
      <td className="py-1.5 px-2 border-r border-[#eee] font-medium text-blue-700 hover:underline">
        {id}
      </td>
      <td className="py-1.5 px-2 border-r border-[#eee]">{status}</td>
      <td className="py-1.5 px-2 text-[#555]">{impact}</td>
    </tr>
  );
}

function KPIRow({ label, value, trend }: any) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="py-1.5 px-3 font-medium text-[#333]">{label}</td>
      <td className="py-1.5 px-3 text-right font-bold text-[#333]">{value}</td>
      <td className="py-1.5 px-3 text-right">
        {trend === "up" ? (
          <TrendingUp className="w-4 h-4 text-green-600 inline" />
        ) : (
          <TrendingUp className="w-4 h-4 text-blue-400 inline rotate-90" />
        )}
      </td>
    </tr>
  );
}

function Shortcut({ label, icon }: any) {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <div className="p-1 border border-transparent group-hover:border-[#ccc] group-hover:bg-[#f0f0f0] rounded-sm transition">
        {icon}
      </div>
      <span className="text-blue-700 font-medium hover:underline decoration-blue-700">
        {label}
      </span>
    </div>
  );
}
