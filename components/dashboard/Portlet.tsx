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
    // "h-fit" ensures it only takes the height it needs
    <div className="bg-white rounded-[3px] shadow-sm border border-[#b4b9c5] overflow-hidden mb-4 flex flex-col h-fit w-full">
      {/* HEADER: White bg, Black Bold Text */}
      <div className="px-3 py-2 flex items-center justify-between bg-white border-b border-[#cdd4df]">
        <h3 className="font-bold text-[13px] text-black tracking-tight uppercase">
          {title}
        </h3>

        {/* Controls */}
        <div className="flex gap-3 text-[#999]">
          <RefreshCw className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600 transition" />
          <Maximize2 className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600 transition" />
          <MoreHorizontal className="w-3.5 h-3.5 cursor-pointer hover:text-blue-600 transition" />
        </div>
      </div>

      {/* Content */}
      <div className={`text-[12px] text-[#333] ${hidePadding ? "" : "p-3"}`}>
        {children}
      </div>
    </div>
  );
}
