import { projects } from "@/app/data";
import { notFound } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectRecordPage({ params }: Props) {
  const { slug } = await params;
  console.log("slug: ", slug);
  console.log("projects: ", projects);
  const project = projects.find((p) => p.id === slug);
  console.log("project: ", project);
  if (!project) return notFound();

  return (
    <div className="space-y-4">
      {/* 1. RECORD HEADER (Title + Buttons) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-[#333] font-normal">
            Project <span className="font-bold">{project.title}</span>
          </h1>
        </div>
        {/* The Button Bar */}
        <div className="bg-[#f0f0f0] border-y border-[#ccc] py-1.5 px-4 flex gap-2">
          <button className="bg-blue-600 text-white border border-blue-700 px-3 py-1 text-xs font-bold rounded-sm hover:bg-blue-700">
            Edit
          </button>
          <button className="bg-white text-[#333] border border-[#ccc] px-3 py-1 text-xs font-bold rounded-sm hover:bg-gray-50">
            Back
          </button>
          <div className="border-l border-gray-300 mx-1"></div>
          <button className="bg-white text-[#333] border border-[#ccc] px-3 py-1 text-xs font-bold rounded-sm hover:bg-gray-50">
            Actions
          </button>
        </div>
      </div>

      {/* 2. PRIMARY INFORMATION (Blue Box) */}
      <div className="bg-[#e0e6ef] p-4 rounded-sm border border-[#b4b9c5] text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-12">
          <Field label="Project ID" value={project.id} />
          <Field label="Customer" value={project.custEntity} isLink />
          <Field label="Date" value={project.date} />

          <Field label="Type" value={project.type} />
          <Field label="Status" value={project.status} />
          <Field label="Tech Stack" value={project.techStack.join(", ")} />
        </div>
      </div>

      {/* 3. SUBTABS (The Real Logic) */}
      <div className="mt-4">
        {/* Tab Headers */}
        <div className="flex border-b border-[#ccc] gap-1 px-2">
          <div className="bg-white border-x border-t border-[#ccc] px-3 py-1.5 text-xs font-bold text-[#333] rounded-t-sm relative top-[1px]">
            Overview & Logic
          </div>
          <div className="bg-[#f0f0f0] border-x border-t border-[#ccc] px-3 py-1.5 text-xs text-blue-600 hover:bg-[#e8e8e8] cursor-pointer rounded-t-sm">
            System Information
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white border border-[#ccc] p-4 text-sm leading-relaxed text-[#333] min-h-[200px]">
          <h3 className="font-bold text-xs uppercase text-gray-500 mb-2">
            Project Description
          </h3>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />

          <br />
          <h3 className="font-bold text-xs uppercase text-gray-500 mb-2">
            Technical Implementation (Memo)
          </h3>
          <p className="bg-yellow-50 border border-yellow-200 p-2 rounded text-xs">
            {project.memo}
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper for Fields
function Field({ label, value, isLink }: any) {
  return (
    <div className="flex flex-col gap-1">
      <span className="uppercase text-[10px] font-bold text-[#666]">
        {label}
      </span>
      <span
        className={`font-medium ${isLink ? "text-blue-600 hover:underline cursor-pointer" : "text-[#333]"}`}
      >
        {value}
      </span>
    </div>
  );
}
