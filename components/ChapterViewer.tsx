"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChapter = chapters[activeIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
      className="relative w-full bg-[#f8f9fa] text-slate-900 py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- TAB SELECTOR --- */}
        <div className="flex flex-wrap items-center gap-2 mb-16 border-b border-gray-200 pb-6">
          {chapters.map((chapter, idx) => (
            <button
              key={chapter.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                activeIndex === idx
                  ? "text-slate-900 bg-white shadow-sm border border-gray-200"
                  : "text-slate-500 hover:text-slate-700 hover:bg-gray-100 border border-transparent"
              }`}
            >
              {chapter.title}
              {/* Active Tab Indicator Glow */}
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 rounded-full border border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.15)] pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- 2-COLUMN GRID (Sticky layout) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative items-start">
          
          {/* LEFT COLUMN: The Narrative (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col gap-8"
              >
                {/* The Problem */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-bold">
                    The Problem
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-light">
                    {activeChapter.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-blue-600 mb-3 font-bold">
                    The Solution
                  </h3>
                  <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug">
                    {activeChapter.solution}
                  </p>
                </div>

                {/* The Tech Stack */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeChapter.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 + 0.2, type: "spring" }}
                        className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: The Proof (Scrollable Projects) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-32 group/list">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id + "-projects"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {activeChapter.projects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    // Individual Project Card Scroll Animation
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                    // Card Hover State: Dims other cards in the group/list
                    className="group/card relative p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:bg-white overflow-hidden cursor-pointer group-hover/list:opacity-40 hover:!opacity-100 hover:shadow-xl"
                  >
                    {/* Subtle Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover/card:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {project.impact}
                      </p>
                      
                      <div className="flex items-center text-sm font-bold text-slate-700 group-hover/card:text-slate-900 transition-colors">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Visual spacer for scrolling effect feeling smoother */}
                {activeChapter.projects.length < 4 && (
                  <div className="h-[20vh] lg:h-[40vh] border-l border-dashed border-gray-300 ml-8 hidden lg:block" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
