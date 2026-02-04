import Portlet from "@/components/dashboard/Portlet";
import {
  BadgeCheck,
  Calendar,
  FileText,
  Settings,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import Image from "next/image"; // Make sure to use Next/Image

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
      {/* LEFT COLUMN (Narrower for Sidebar feel - 3 Cols) */}
      <div className="md:col-span-3 space-y-3">
        {/* 1. PROFILE SNAPSHOT (The "Reminder" Place) */}
        <Portlet title="My Profile" hidePadding>
          <div className="p-4 flex flex-col items-center text-center bg-white">
            {/* Profile Photo Circle */}
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-3 relative">
              {/* Replace src with your actual photo path later */}
              <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-300 font-bold text-2xl">
                NG
              </div>
            </div>

            <h2 className="font-bold text-lg text-[#333]">Nidhal Ghdiri</h2>
            <p className="text-xs text-blue-600 font-medium mb-4">
              NetSuite Admin & Developer
            </p>

            {/* Short Data Grid */}
            <div className="w-full text-left space-y-2 text-[11px] border-t border-gray-100 pt-3">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>Oman (Open to Remote)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>+968 98590405</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <a
                  href="mailto:ghdiri.nidhal@gmail.com"
                  className="hover:underline text-blue-600"
                >
                  ghdiri.nidhal@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Quick Actions Footer */}
          <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-center">
            <button className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> View LinkedIn
            </button>
          </div>
        </Portlet>

        {/* 2. SHORTCUTS (Moved to Left sidebar for better layout) */}
        <Portlet title="Quick Links">
          <div className="space-y-1">
            <Shortcut
              label="Download Resume (PDF)"
              icon={<FileText className="w-4 h-4 text-[#607799]" />}
            />
            <Shortcut
              label="GitHub Repositories"
              icon={<Briefcase className="w-4 h-4 text-[#607799]" />}
            />
            <Shortcut
              label="Book Interview"
              icon={<Calendar className="w-4 h-4 text-[#607799]" />}
            />
          </div>
        </Portlet>
      </div>

      {/* MIDDLE/RIGHT COLUMN (Wide Content - 9 Cols) */}
      <div className="md:col-span-9 space-y-3">
        {/* 3. RELEASE PREVIEW STYLE DESCRIPTION */}
        {/* This mimics the "New Release" banner in NetSuite */}
        <div className="bg-white border border-[#b4b9c5] rounded-[3px] shadow-sm overflow-hidden mb-4">
          {/* Special Header for "Release" look */}
          <div className="bg-[#254061] px-4 py-2 flex items-center justify-between text-white">
            <h3 className="font-bold text-[13px] tracking-wide">
              2026.1 Release Preview: About Me
            </h3>
            <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded text-white font-bold">
              NEW
            </span>
          </div>

          <div className="p-5 flex flex-col md:flex-row gap-6 items-start bg-gradient-to-b from-white to-blue-50/30">
            {/* Icon / Badge */}
            <div className="shrink-0 bg-blue-100 p-3 rounded-full hidden md:block border-4 border-blue-50">
              <Settings className="w-8 h-8 text-blue-700" />
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-[#333]">
                NetSuite Administrator & Developer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                I am a technical specialist with over{" "}
                <strong>3 years of experience</strong> bridging the gap between
                functional ERP requirements and advanced technical solutions.
                <br />
                <br />
                Unlike standard administrators, I specialize in{" "}
                <strong>
                  SuiteScript 2.1, RESTlets, and Next.js integrations
                </strong>
                . I have successfully built custom modules for HR and Fixed
                Assets, and engineered real-time integrations between NetSuite
                and platforms like WhatsApp and external POS systems.
              </p>
              <div className="pt-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-1.5 px-4 rounded shadow-sm transition">
                  View Full Bio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. RECENT PROJECTS GRID (Resume Order) */}
        <Portlet title="Experience & Projects" hidePadding>
          {/* We can use the table we built before, or a grid of cards. Let's stick to the NetSuite List view for authenticity */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-[#f0f0f0] text-[#666] border-b border-[#ddd]">
                <tr>
                  <th className="py-2 px-3 border-r border-[#e0e0e0] w-10">
                    View
                  </th>
                  <th className="py-2 px-3 border-r border-[#e0e0e0]">
                    Company / Role
                  </th>
                  <th className="py-2 px-3 border-r border-[#e0e0e0]">
                    Project Name
                  </th>
                  <th className="py-2 px-3 border-r border-[#e0e0e0]">
                    Tech Stack
                  </th>
                  <th className="py-2 px-3">Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee]">
                <ProjectRow
                  role="NetSuite Dev @ Global Trading"
                  project="WhatsApp Integration"
                  stack="SuiteScript 2.1, RESTlet, Node.js"
                  impact="Automated 100% of customer notifications"
                />
                <ProjectRow
                  role="NetSuite Dev @ Global Trading"
                  project="Fixed Assets Module"
                  stack="Map/Reduce Script, Custom Records"
                  impact="Replaced legacy Excel tracking system"
                />
                <ProjectRow
                  role="Freelance"
                  project="Property Mgmt SaaS"
                  stack="Next.js 14, NetSuite API"
                  impact="Real-time booking portal for tenants"
                />
              </tbody>
            </table>
          </div>
        </Portlet>
      </div>
    </div>
  );
}

// --- Helpers ---

function Shortcut({ label, icon }: any) {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer transition group border border-transparent hover:border-gray-200">
      {icon}
      <span className="text-blue-700 font-medium text-xs group-hover:underline decoration-blue-700">
        {label}
      </span>
    </div>
  );
}

function ProjectRow({ role, project, stack, impact }: any) {
  return (
    <tr className="hover:bg-[#eefaee] group cursor-pointer transition-colors bg-white">
      <td className="py-2 px-3 border-r border-[#eee] text-blue-600 font-medium text-[10px]">
        View
      </td>
      <td className="py-2 px-3 border-r border-[#eee] font-medium text-[#333]">
        {role}
      </td>
      <td className="py-2 px-3 border-r border-[#eee] text-blue-700 hover:underline font-medium">
        {project}
      </td>
      <td className="py-2 px-3 border-r border-[#eee] text-[#555]">{stack}</td>
      <td className="py-2 px-3 text-[#444]">{impact}</td>
    </tr>
  );
}
