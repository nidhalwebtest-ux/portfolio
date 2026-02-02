import { MoreHorizontal, Minus, RefreshCw, Maximize2 } from "lucide-react";

interface PortletProps {
  title: string;
  children: React.ReactNode;
  hidePadding?: boolean;
}

export default function Portlet({
  title,
  children,
  hidePadding = false,
}: PortletProps) {
  return (
    <div className="bg-white rounded-[3px] shadow-sm border border-[#b4b9c5] overflow-hidden mb-4 flex flex-col h-full">
      {/* Portlet Header: The Classic Gradient */}
      <div className="px-3 py-1.5 flex items-center justify-between bg-gradient-to-b from-[#f2f4f7] to-[#e1e6ef] border-b border-[#cdd4df]">
        <h3 className="font-bold text-[13px] text-[#333] tracking-tight">
          {title}
        </h3>

        {/* Controls */}
        <div className="flex gap-3 text-[#666]">
          <RefreshCw className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600" />
          <Maximize2 className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600" />
          <MoreHorizontal className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Content */}
      <div className={`text-[12px] text-[#333] ${hidePadding ? "" : "p-3"}`}>
        {children}
      </div>
    </div>
  );
}
