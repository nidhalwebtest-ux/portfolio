"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

// --- Mock Data ---
const chapters = [
  {
    id: "erp-development",
    title: "ERP Development",
    problem:
      "Businesses struggle with fragmented operations, manual data entry, and rigid software that doesn't fit their unique, evolving workflows.",
    solution:
      "I architect bespoke NetSuite environments, writing deep SuiteScript customizations that automate complex workflows and centralize operations to drive measurable efficiency and cost savings.",
    skills: ["SuiteScript 2.1", "RESTlet APIs", "SuiteAnalytics", "Workflows", "Map/Reduce"],
    projects: [
      {
        id: "p1",
        title: "Property Management System",
        impact: "Automated rent collection, lease renewals, and unit tracking entirely within the ERP.",
      },
      {
        id: "p2",
        title: "Native HR & Payroll Automation",
        impact: "Built a complete HRIS module replacing external software, syncing directly with finance.",
      },
      {
        id: "p3",
        title: "Fixed Assets Custom Module",
        impact: "Eliminated Excel tracking by automating depreciation journals and compliance reporting.",
      },
    ],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile",
    problem:
      "Field agents and end-customers require access to enterprise data on the go, but internet connectivity is often unreliable in remote locations.",
    solution:
      "I build lightning-fast, offline-first mobile apps and sleek web portals that sync seamlessly with your enterprise backend the moment connectivity is restored.",
    skills: ["Next.js", "React Native", "Kotlin", "Offline-first Sync", "Tailwind CSS"],
    projects: [
      {
        id: "p4",
        title: "Offline Android Sales App",
        impact: "Enabled field reps to create offline Sales Orders and print Bluetooth receipts.",
      },
      {
        id: "p5",
        title: "High-Speed B2B Portal",
        impact: "Built a Next.js portal allowing vendors to manage purchase orders directly.",
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    problem:
      "Customer support teams are overwhelmed by routine inquiries, leading to delayed responses and a poor customer experience.",
    solution:
      "I integrate conversational AI and automated webhook pipelines to handle scheduling, data retrieval, and customer interactions autonomously 24/7.",
    skills: ["WhatsApp Business API", "LLM Integrations", "Webhooks", "Node.js", "Python"],
    projects: [
      {
        id: "p6",
        title: "WhatsApp AI Receptionist",
        impact: "Automated booking inquiries and securely shared PDF invoices directly via WhatsApp.",
      },
      {
        id: "p7",
        title: "Automated Financial Reports",
        impact: "Engineered a pipeline to generate and distribute daily KPI digests automatically.",
      },
    ],
  },
  {
    id: "saas-projects",
    title: "SaaS Projects",
    problem:
      "Launching a new SaaS product requires scalable architecture, multi-tenant databases, and a flawless user experience from day one.",
    solution:
      "I design and develop robust, end-to-end SaaS platforms taking them from initial architecture and database design to a polished, production-ready release.",
    skills: ["System Architecture", "PostgreSQL / Prisma", "Supabase", "UI/UX Design", "Full-Stack"],
    projects: [
      {
        id: "p8",
        title: "Multi-Tenant Property SaaS",
        impact: "A standalone web app for landlords to manage tenants, units, and online payments.",
      },
      {
        id: "p9",
        title: "Retail POS Desktop App",
        impact: "Built a cross-platform Electron.js Point of Sale system with real-time cloud sync.",
      },
    ],
  },
];

export default function ChapterViewer() {
  return (
    <div className="w-full bg-[#f8f9fa] relative z-10">
      
      {/* 1. FIXED TOP NAVIGATION BAR */}
      <div className="sticky top-0 w-full z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 items-center justify-center md:justify-start">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-white border border-gray-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all"
            >
              {chapter.title}
            </a>
          ))}
        </div>
      </div>

      {/* 2. DYNAMIC SCROLL BLOCKS */}
      {chapters.map((chapter, index) => (
        <ChapterScrollBlock key={chapter.id} chapter={chapter} index={index} />
      ))}
    </div>
  );
}


// --- THE ENGINE: Scroll-linked Presentation Block ---
function ChapterScrollBlock({ chapter, index }: { chapter: any; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamically set the height based on the number of projects. 
  // 1 project = 100vh of scroll time.
  const heightStr = `${chapter.projects.length * 100}vh`;

  // Track the scroll position perfectly mapped to this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} id={chapter.id} style={{ height: heightStr }} className="relative w-full border-b border-gray-200">
      {/* STICKY CONTAINER: Locks the UI to the viewport while you scroll through the height */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-20">
          
          {/* LEFT COLUMN: Static Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">
              {chapter.title}
            </h2>
            
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">
                  The Problem
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-light">
                  {chapter.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-blue-600 mb-2 font-bold">
                  The Solution
                </h3>
                <p className="text-lg text-slate-800 font-medium leading-snug">
                  {chapter.solution}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-2">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {chapter.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-gray-200 text-slate-500 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Parallax Case Studies */}
          <div className="lg:col-span-7 relative h-[50vh] lg:h-[70vh] flex items-center">
            {chapter.projects.map((project: any, idx: number) => {
              // Calculate exactly when this project should appear based on scroll %
              const step = 1 / chapter.projects.length;
              const start = idx * step;
              const end = start + step;

              // We define keyframes for the transform based on scroll mapping:
              // Fade in as it arrives, stay opaque, fade out as you scroll past
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0]
              );
              // Slide up from bottom (100), sit at center (0), slide up to top (-100)
              const y = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.1, end - 0.1, end],
                [100, 0, 0, -100]
              );
              // Slight scale effect on entrance
              const scale = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.1],
                [0.9, 1]
              );

              return (
                <motion.div
                  key={project.id}
                  style={{ opacity, y, scale }}
                  className="absolute inset-0 flex flex-col justify-center w-full"
                >
                  <div className="p-8 lg:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl w-full">
                    
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-bold">
                      Case Study {idx + 1} of {chapter.projects.length}
                    </h3>
                    
                    <h4 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                      {project.title}
                    </h4>
                    
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {project.impact}
                    </p>
                    
                    <div className="inline-flex items-center text-base font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group">
                      View Deep Dive
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
