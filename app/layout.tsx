import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as standard font
import "./globals.css";
import { Search, HelpCircle, Bell, Plus, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

// Load Font
const inter = Inter({ subsets: ["latin"] });

// 1. SEO CONFIGURATION
export const metadata: Metadata = {
  metadataBase: new URL("https://nidhalghdiri.com"),
  title: {
    default: "Nidhal Ghdiri | NetSuite Administrator & Full Stack Developer",
    template: "%s | Nidhal Ghdiri", // Child pages can use "Project Name | Nidhal Ghdiri"
  },
  description:
    "Portfolio of Nidhal Ghdiri, a NetSuite Administrator and SaaS Developer based in Oman. Specializing in ERP solutions and modern web development.",
  keywords: [
    "NetSuite",
    "Oman",
    "SaaS",
    "Full Stack Developer",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Nidhal Ghdiri - Portfolio",
    description: "NetSuite Administrator & Developer based in Oman.",
    url: "https://nidhalghdiri.com",
    siteName: "Nidhal Ghdiri",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
                  {/* <div className="absolute top-8 right-0 w-32 bg-white shadow-lg border border-gray-200 rounded-sm hidden group-hover:block z-50 py-1">
                    <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 text-xs">
                      <Settings className="w-3 h-3" /> Settings
                    </div>
                    <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 text-xs text-red-600">
                      <LogOut className="w-3 h-3" /> Sign Out
                    </div>
                  </div> */}
                </div>
                {/* <div className="mr-4">
                  <button className="bg-[#e86036] hover:bg-[#d64e26] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                    <span>Let's Talk</span>
                  </button>
                </div> */}
              </div>
            </div>
          </header>

          {/* 3. NAVIGATION TABS (Blue with new active color) */}
          <div className="bg-[#4d6596] px-4 flex items-end gap-1 text-[11px] font-bold h-9 shadow-md">
            <NavTab label="Home" href="/" active />
            <NavTab label="About Me" href="/" />
            <NavTabWithDropdown
              label="Skills"
              items={[
                { name: "SuiteScript 2.1", href: "/skills/suitescript" },
                { name: "Next.js / React", href: "/skills/nextjs" },
              ]}
              href="/"
            />
            <NavTabWithDropdown
              label="Projects"
              items={[
                { name: "Integration: WhatsApp", href: "/projects/PRJ-001" },
                { name: "Script: HR Module", href: "/projects/PRJ-002" },
                { name: "PDF: Invoice Layout", href: "/projects/PRJ-003" },
                { name: "View All Projects", href: "/projects" },
              ]}
              href="/projects"
            />
            <NavTab label="Blog" href="/" />
            <NavTab label="Contact Me" href="/" />
          </div>

          {/* MAIN CONTENT */}
          <main className="p-4 max-w-[1600px] mx-auto">{children}</main>
        </div>
        <GoogleAnalytics gaId="G-B3P12XQHKH" />
      </body>
    </html>
  );
}

// Updated NavTab with #3b485c
function NavTab({
  label,
  active,
  href,
}: {
  label: string;
  active?: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
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
    </Link>
  );
}
function NavTabWithDropdown({
  label,
  items,
  active,
  href,
}: {
  label: string;
  items: { name: string; href: string }[];
  active?: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`
      group relative px-4 py-2 cursor-pointer rounded-t-[3px] transition-all
      ${active ? "bg-[#3b485c] text-white" : "text-blue-100 hover:bg-[#3b485c] hover:text-white"}
    `}
    >
      <span className="flex items-center gap-1">{label}</span>

      {/* THE DROPDOWN MENU (NetSuite Style) */}
      <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-xl border border-gray-300 z-50 rounded-b-sm">
        {items.map((item, i) => (
          <Link href={item.href} key={i}>
            <div className="px-4 py-2 text-[12px] text-[#333] hover:bg-[#e0e6ef] hover:text-blue-600 border-b border-gray-100 last:border-0 transition-colors">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </Link>
  );
}
