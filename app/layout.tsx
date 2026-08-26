import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Modern geometric font
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nidhalghdiri.com"),
  title: "Nidhal Ghdiri | NetSuite Administrator & Full Stack Developer",
  description: "Portfolio of Nidhal Ghdiri, a NetSuite Administrator and SaaS Developer based in Oman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Changed background to a soft light gray (#f8f9fa) and default text to slate-900 */}
      <body className={`${outfit.className} bg-[#f8f9fa] text-slate-900 min-h-screen`}>
        {children}
        <GoogleAnalytics gaId="G-B3P12XQHKH" />
      </body>
    </html>
  );
}
