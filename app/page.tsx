import Portlet from "@/components/dashboard/Portlet";
import JsonLd from "@/components/JsonLd";
import { projects, skills, education, languages } from "@/app/data"; // Import data
import Link from "next/link";
import {
  Briefcase,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Settings,
  GraduationCap,
  Languages,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
      {/* --- LEFT COLUMN (3 Cols) --- */}
      <div className="md:col-span-3 flex flex-col gap-4">
        {/* 1. PROFILE PORTLET */}
        <Portlet title="My Profile" hidePadding>
          <div className="p-5 flex flex-col items-center text-center bg-white">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-3 flex items-center justify-center relative">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Nidhal Ghdiri"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-[#333]">Nidhal Ghdiri</h2>
            <p className="text-xs text-blue-600 font-medium mb-4">
              NetSuite Admin & Developer
            </p>
            <div className="w-full text-left space-y-2 text-[11px] border-t border-gray-100 pt-3">
              <ProfileItem
                icon={<MapPin size={14} />}
                text="Oman (Open to Remote)"
              />
              <ProfileItem
                icon={<Briefcase size={14} />}
                text="3+ Years Experience"
              />
              <ProfileItem icon={<Phone size={14} />} text="+968 98590405" />
              <ProfileItem
                icon={<Mail size={14} />}
                text="ghdiri.nidhal@gmail.com"
              />
            </div>
          </div>
          <div className="bg-gray-50 border-t border-gray-200 p-2 flex justify-center">
            <Link
              href="https://linkedin.com/in/nidhal-ghdiri"
              target="_blank"
              className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" /> View LinkedIn
            </Link>
          </div>
        </Portlet>

        {/* 2. SKILLS GRAPH (Dynamic Data) */}
        <Portlet title="Technical Skills Graph">
          <div className="space-y-4 pt-1">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                label={skill.name}
                percent={skill.level}
                // Auto-assign colors based on index for variety
                color={
                  index % 4 === 0
                    ? "bg-blue-600"
                    : index % 4 === 1
                      ? "bg-indigo-500"
                      : index % 4 === 2
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                }
              />
            ))}
          </div>
        </Portlet>

        {/* 3. LANGUAGES (New Graph Portlet) */}
        <Portlet title="Languages">
          <div className="space-y-3">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-[#444]">{lang.name}</span>
                  <span className="text-[#666]">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#607799] h-1.5 rounded-full"
                    style={{ width: lang.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Portlet>
      </div>

      {/* --- RIGHT COLUMN (9 Cols) --- */}
      <div className="md:col-span-9 flex flex-col gap-4">
        {/* 4. BIO (Release Preview) */}
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

        {/* 5. PROJECTS LIST (Dynamic from Data) */}
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
                  <th className="py-2 px-3">Business Impact / Memo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee]">
                {projects.map((p) => (
                  <ProjectRow
                    key={p.id}
                    id={p.id}
                    role={p.custEntity}
                    project={p.title}
                    stack={p.techStack.join(", ")} // Convert array to string
                    impact={p.memo}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-2 bg-[#f0f0f0] border-t border-[#ccc] flex justify-between text-[10px] text-gray-500">
            <span>Total Records: {projects.length}</span>
            <Link href="/projects" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
        </Portlet>

        {/* 6. EDUCATION (New Timeline Portlet) */}
        <Portlet title="Education Timeline">
          <div className="relative pl-4 space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white ring-1 ring-gray-200"></div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h4 className="font-bold text-[13px] text-[#333]">
                      {edu.degree}
                    </h4>
                    <div className="text-[11px] text-blue-600 font-medium mt-0.5 flex items-center gap-1">
                      <GraduationCap size={12} />
                      {edu.school}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded border border-gray-100 mt-1 sm:mt-0">
                    <Calendar size={10} />
                    {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Portlet>

        {/* 7. BLOG / ARTICLES */}
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
          </div>
        </Portlet>
      </div>
      <JsonLd />
    </div>
  );
}

// --- SUB COMPONENTS ---

function ProfileItem({ icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <div className="text-gray-400">{icon}</div>
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
        <div
          className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  );
}

function ProjectRow({ id, role, project, stack, impact }: any) {
  return (
    <tr className="hover:bg-[#eefaee] group cursor-pointer transition-colors bg-white">
      <td className="py-2 px-3 border-r border-[#eee] text-blue-600 font-medium text-[10px]">
        <Link href={`/projects/${id}`}>View</Link>
      </td>
      <td className="py-2 px-3 border-r border-[#eee] font-medium text-[#333]">
        {role}
      </td>
      <td className="py-2 px-3 border-r border-[#eee] text-blue-700 hover:underline font-medium">
        <Link href={`/projects/${id}`}>{project}</Link>
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
