import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as standard font
import "./globals.css";
import { Search, HelpCircle, Bell, Plus, Settings, LogOut } from "lucide-react";

// Load Font
const inter = Inter({ subsets: ["latin"] });

// 1. SEO CONFIGURATION
export const metadata: Metadata = {
  title: "Nidhal Ghdiri | NetSuite Administrator & Developer",
  description:
    "Portfolio of Nidhal Ghdiri, a NetSuite Developer specializing in SuiteScript 2.1, Next.js Integrations, and Custom ERP Solutions.",
  keywords: [
    "NetSuite Developer",
    "SuiteScript",
    "NetSuite Admin",
    "Next.js",
    "Remote Developer",
  ],
  openGraph: {
    title: "Nidhal Ghdiri - NetSuite Expert",
    description:
      "Building modern integrations and custom modules for NetSuite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. MAIN BACKGROUND COLOR (#eff1f5) */}
        <div className="min-h-screen bg-[#eff1f5] font-sans text-[#333]">
          {/* TOP HEADER (White) */}
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

              {/* Global Search Bar */}
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

              {/* Right Icons */}
              <div className="flex items-center gap-5 w-64 justify-end">
                <div className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100">
                  <Plus className="w-5 h-5 text-[#555]" />
                </div>
                <div className="flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 border-r border-gray-300 pr-4">
                  <HelpCircle className="w-5 h-5 text-[#555]" />
                </div>
                <div className="flex flex-col items-end text-[11px] leading-tight cursor-pointer group relative">
                  <span className="font-bold text-[#333]">Nidhal Ghdiri</span>
                  <span className="text-[#666]">Administrator</span>
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

          {/* 3. NAVIGATION TABS (Blue with new active color) */}
          <div className="bg-[#4d6596] px-4 flex items-end gap-1 text-[13px] font-bold h-10 shadow-md">
            <NavTab label="Home" active />
            <NavTab label="About Me" />
            <NavTab label="Skills" />
            <NavTab label="Projects" />
            <NavTab label="Blog" /> {/* Added Blog */}
            <NavTab label="Contact Me" />
          </div>

          {/* MAIN CONTENT */}
          <main className="p-4 max-w-[1600px] mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

// Updated NavTab with #3b485c
function NavTab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`
      group relative px-4 py-2 cursor-pointer rounded-t-[3px] transition-all select-none
      ${
        active
          ? "bg-[#3b485c] text-white shadow-[0_-2px_5px_rgba(0,0,0,0.2)]" // Active color
          : "text-blue-100 hover:bg-[#3b485c] hover:text-white" // Hover color
      }
    `}
    >
      <span className="flex items-center gap-1">{label}</span>
    </div>
  );
}
