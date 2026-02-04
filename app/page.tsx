import Portlet from "@/components/dashboard/Portlet";
import {
  FileText,
  Settings,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Database,
  LayoutTemplate,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
      {/* --- LEFT COLUMN (3 Cols) --- */}
      <div className="md:col-span-3 flex flex-col gap-4">
        {/* 1. PROFILE */}
        <Portlet title="My Profile" hidePadding>
          <div className="p-5 flex flex-col items-center text-center bg-white">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-3 flex items-center justify-center text-blue-300 font-bold text-2xl relative">
              <Image
                src="/profile.jpeg" // Just "/" points to the public folder automatically
                alt="Nidhal Ghdiri"
                fill // This makes the image fill the parent circle
                className="object-cover" // This ensures the image doesn't stretch/distort
                priority // Loads the image immediately (good for LCP)
              />
            </div>
            <h2 className="font-bold text-lg text-[#333]">Nidhal Ghdiri</h2>
            <p className="text-xs text-blue-600 font-medium mb-4">
              NetSuite Admin & Developer
            </p>
            <div className="w-full text-left space-y-2 text-[11px] border-t border-gray-100 pt-3">
              <ProfileItem
                icon={<MapPin size={15} />}
                text="Oman (Open to Remote)"
              />
              <ProfileItem
                icon={<Briefcase size={15} />}
                text="3+ Years Experience"
              />
              <ProfileItem icon={<Phone size={15} />} text="+968 98590405" />
              <ProfileItem
                icon={<Mail size={15} />}
                text="ghdiri.nidhal@gmail.com"
              />
            </div>
          </div>
          <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-center">
            <button className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> View LinkedIn
            </button>
          </div>
        </Portlet>

        {/* 2. SKILLS (Graphic Animation) */}
        <Portlet title="Technical Skills Graph">
          <div className="space-y-4 pt-1">
            <SkillBar
              label="SuiteScript 2.1"
              percent="95%"
              color="bg-blue-600"
            />
            <SkillBar
              label="Next.js / React"
              percent="85%"
              color="bg-indigo-500"
            />
            <SkillBar
              label="REST / APIs"
              percent="90%"
              color="bg-emerald-500"
            />
            <SkillBar
              label="SQL / Database"
              percent="80%"
              color="bg-amber-500"
            />
          </div>
        </Portlet>
      </div>

      {/* --- RIGHT COLUMN (9 Cols) --- */}
      <div className="md:col-span-9 flex flex-col gap-4">
        {/* 3. BIO (Release Preview) */}
        <div className="bg-white border border-[#b4b9c5] rounded-[3px] shadow-sm overflow-hidden">
          <div className="bg-[#254061] px-4 py-2 flex items-center justify-between text-white">
            <h3 className="font-bold text-[13px] tracking-wide">
              2026.1 Release Preview: About Me
            </h3>
            <span className="text-[10px] bg-blue-500 px-2 py-0.5 rounded text-white font-bold">
              NEW
            </span>
          </div>
          <div className="p-5 flex flex-col md:flex-row gap-6 items-start bg-gradient-to-b from-white to-blue-50/30">
            <div className="shrink-0 bg-blue-100 p-3 rounded-full hidden md:block border-4 border-blue-50">
              <Settings className="w-8 h-8 text-blue-700" />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-[#333]">
                NetSuite Administrator & Developer
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
                I am a technical specialist with over{" "}
                <strong>3 years of experience</strong> bridging the gap between
                functional ERP requirements and advanced technical solutions.
                Unlike standard administrators, I specialize in{" "}
                <strong>
                  SuiteScript 2.1, RESTlets, and Next.js integrations
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        {/* 4. PROJECTS LIST */}
        <Portlet title="Experience & Projects" hidePadding>
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
                  role="Global Trading (Oman)"
                  project="WhatsApp Integration"
                  stack="SuiteScript 2.1, RESTlet, Node.js"
                  impact="Automated 100% of customer notifications"
                />
                <ProjectRow
                  role="Global Trading (Oman)"
                  project="Fixed Assets Module"
                  stack="Map/Reduce, Custom Records"
                  impact="Replaced legacy Excel tracking system"
                />
                <ProjectRow
                  role="Freelance Project"
                  project="Property Mgmt SaaS"
                  stack="Next.js 14, NetSuite API"
                  impact="Real-time booking portal for tenants"
                />
              </tbody>
            </table>
          </div>
        </Portlet>

        {/* 5. BLOG / ARTICLES (Knowledge Base) */}
        <Portlet title="Knowledge Base (Blog)" hidePadding>
          <div className="divide-y divide-gray-100">
            <BlogRow
              category="Tutorial"
              title="How to build a RESTlet for external Webhooks"
              date="Feb 03, 2026"
            />
            <BlogRow
              category="Problem Solved"
              title="Fixing 'RCRD_HAS_BEEN_CHANGED' error in Map/Reduce scripts"
              date="Jan 28, 2026"
            />
            <BlogRow
              category="Guide"
              title="Connecting Next.js to NetSuite using Token Based Auth (TBA)"
              date="Jan 15, 2026"
            />
          </div>
          <div className="p-2 bg-gray-50 text-center border-t border-gray-200">
            <button className="text-[11px] font-bold text-blue-600 hover:underline">
              View All 12 Articles
            </button>
          </div>
        </Portlet>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function ProfileItem({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <div className="w-3.5 h-3.5 text-gray-400">{icon}</div>
      <span className="truncate">{text}</span>
    </div>
  );
}

function SkillBar({
  label,
  percent,
  color,
}: {
  label: string;
  percent: string;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-[10px] font-bold text-gray-700 uppercase">
          {label}
        </span>
        <span className="text-[10px] font-bold text-gray-500">{percent}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        {/* The width style here animates the bar */}
        <div
          className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: percent }}
        ></div>
      </div>
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

function BlogRow({ category, title, date }: any) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer transition">
      <div className="flex items-center gap-3">
        <span
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
            category === "Tutorial"
              ? "bg-green-50 text-green-700 border-green-200"
              : category === "Problem Solved"
                ? "bg-orange-50 text-orange-700 border-orange-200"
                : "bg-blue-50 text-blue-700 border-blue-200"
          }`}
        >
          {category}
        </span>
        <span className="text-[11px] font-medium text-[#333] hover:text-blue-600 hover:underline">
          {title}
        </span>
      </div>
      <span className="text-[10px] text-gray-400">{date}</span>
    </div>
  );
}
