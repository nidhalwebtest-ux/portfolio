import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  LayoutTemplate,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation (Simple) */}
      <nav className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-blue-600">
            Nidhal<span className="text-slate-900">Ghdiri</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
            <Link
              href="mailto:ghdiri.nidhal@gmail.com"
              className="text-blue-600 hover:text-blue-700"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to Work: NetSuite Developer & Admin
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            I build <span className="text-blue-600">NetSuite</span> solutions
            that actually work.
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Hi, I'm Nidhal. I bridge the gap between standard ERP administration
            and advanced full-stack development. Specializing in{" "}
            <strong>SuiteScript 2.1</strong>,{" "}
            <strong>Next.js Integrations</strong>, and complex workflows.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:ghdiri.nidhal@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Hire Me Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="https://github.com/nidhalwebtest-ux"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
            >
              View GitHub
            </Link>
          </div>
        </div>

        {/* Feature Grid (Why You?) */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 border-t border-slate-100 pt-16">
          <FeatureCard
            icon={<Code2 className="w-6 h-6 text-blue-600" />}
            title="SuiteScript 2.1 Expert"
            desc="Complex Map/Reduce scripts, User Events, and Client Scripts that automate manual tasks."
          />
          <FeatureCard
            icon={<LayoutTemplate className="w-6 h-6 text-indigo-600" />}
            title="Next.js Portals"
            desc="Building modern, fast client-facing apps that sync real-time with your NetSuite backend."
          />
          <FeatureCard
            icon={<Database className="w-6 h-6 text-emerald-600" />}
            title="API Integrations"
            desc="Connecting NetSuite to WhatsApp, HubSpot, and 3rd party logistics via RESTlets."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="p-2 w-fit rounded-lg bg-slate-50 border border-slate-100 mb-2">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
