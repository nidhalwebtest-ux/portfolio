import { projects } from "@/app/data";
import Link from "next/link";
import { Filter, Printer, Download } from "lucide-react";

export default function ProjectsListPage() {
  return (
    <div className="space-y-3">
      {/* 1. TITLE BAR */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-[#333]">Projects List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-white border border-gray-300 px-3 py-1 text-xs font-bold text-gray-600 rounded hover:bg-gray-50">
            <Printer className="w-3 h-3" /> Print
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 px-3 py-1 text-xs font-bold text-gray-600 rounded hover:bg-gray-50">
            <Download className="w-3 h-3" /> Export
          </button>
        </div>
      </div>

      {/* 2. FILTERS (The Blue Box) */}
      <div className="bg-[#e0e6ef] border border-[#b4b9c5] p-3 rounded-sm flex items-center gap-4 text-xs">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-[#555] uppercase">Type</label>
          <select className="border border-gray-300 rounded-sm p-1 w-40">
            <option>- All -</option>
            <option>Integration</option>
            <option>SuiteScript</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold text-[#555] uppercase">Status</label>
          <select className="border border-gray-300 rounded-sm p-1 w-40">
            <option>- All -</option>
            <option>Released</option>
          </select>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-1 rounded-sm font-bold hover:bg-blue-700">
          Submit
        </button>
      </div>

      {/* 3. THE RESULTS TABLE */}
      <div className="bg-white border border-[#b4b9c5] rounded-sm overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] border-collapse">
            <thead className="bg-[#f0f0f0] text-[#666] border-b border-[#ccc] uppercase">
              <tr>
                <th className="py-2 px-2 w-12 text-center">Edit</th>
                <th className="py-2 px-2 border-l border-white">Internal ID</th>
                <th className="py-2 px-2 border-l border-white">Date</th>
                <th className="py-2 px-2 border-l border-white">Type</th>
                <th className="py-2 px-2 border-l border-white">
                  Project Name
                </th>
                <th className="py-2 px-2 border-l border-white">Customer</th>
                <th className="py-2 px-2 border-l border-white">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee]">
              {projects.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-[#ffffd6] group transition-colors"
                >
                  <td className="py-1.5 px-2 text-center">
                    <Link
                      href={`/projects/${p.id}`}
                      className="text-blue-600 hover:underline font-bold"
                    >
                      View
                    </Link>
                  </td>
                  <td className="py-1.5 px-2">{p.id}</td>
                  <td className="py-1.5 px-2">{p.date}</td>
                  <td className="py-1.5 px-2">{p.type}</td>
                  <td className="py-1.5 px-2 font-medium text-blue-700 hover:underline cursor-pointer">
                    <Link href={`/projects/${p.id}`}>{p.title}</Link>
                  </td>
                  <td className="py-1.5 px-2">{p.custEntity}</td>
                  <td className="py-1.5 px-2">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Footer Pagination */}
        <div className="bg-[#f0f0f0] border-t border-[#ccc] p-2 text-[10px] text-[#555] flex justify-between">
          <span>Rows: {projects.length}</span>
          <div className="flex gap-2">
            <span className="cursor-pointer hover:underline">Previous</span>
            <span className="font-bold">1</span>
            <span className="cursor-pointer hover:underline">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}
