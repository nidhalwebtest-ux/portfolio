"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import {
  Database,
  Smartphone,
  Bot,
  Cloud,
  ArrowRight,
  Code2,
} from "lucide-react";

// --- Subcomponent: Magnetic Button ---
function MagneticButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className="relative group px-6 py-3 lg:px-8 lg:py-4 bg-white rounded-full border border-gray-200 overflow-hidden backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/20 transition-colors duration-500" />
      <span className="relative z-10 text-slate-800 group-hover:text-white font-medium tracking-wide flex items-center gap-2 text-sm lg:text-base transition-colors duration-500">
        {children}
      </span>
    </motion.button>
  );
}

// --- Main Component ---
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll of the entire 150vh container to create the transition effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cinematic Parallax Transition: Hero scales down and fades as you scroll away
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Internal subtle parallax for the background orbs
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Added id linking to scroll smoothly to Chapters
  const cards = [
    {
      id: "erp-development",
      icon: Database,
      title: "ERP Development",
      desc: "Deep NetSuite customizations & SuiteScript.",
    },
    {
      id: "web-mobile",
      icon: Smartphone,
      title: "Web & Mobile",
      desc: "Offline-first apps & fast web portals.",
    },
    {
      id: "ai-automation",
      icon: Bot,
      title: "AI & Automation",
      desc: "WhatsApp bots & scheduling.",
    },
    {
      id: "saas-projects",
      icon: Cloud,
      title: "SaaS Projects",
      desc: "End-to-end platforms & booking engines.",
    },
  ];

  return (
    // The wrapper is 150vh tall to allow scrolling, while the inner div stays sticky
    <div ref={containerRef} className="relative h-[150vh] w-full bg-[#f8f9fa] z-0">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 lg:py-10"
      >
        {/* 1. BACKGROUND ORBS & PARALLAX */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            style={{ y: yBg1 }}
            className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px]"
          />
          <motion.div
            style={{ y: yBg2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center">
          {/* 2. TOP GRID (Text & Visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-3"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Nidhal
                </span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-lg md:text-xl font-medium text-slate-600 mb-4"
              >
                NetSuite Administrator & Full-Stack Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-slate-500 font-light mb-8 max-w-xl leading-relaxed"
              >
                <strong className="text-slate-800 font-semibold">
                  Your Business Problem
                </strong>{" "}
                +{" "}
                <strong className="text-slate-800 font-semibold">
                  Custom Architecture
                </strong>{" "}
                ={" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold">
                  Measurable Value.
                </strong>
              </motion.p>

              <motion.div variants={itemVariants}>
                <a href="#erp-development">
                  <MagneticButton>
                    Explore the Chapters
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Orbiting Tech & Profile (Compact Size) */}
            <div className="flex justify-center items-center w-full mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex items-center justify-center shrink-0 w-[240px] h-[240px] md:w-[320px] md:h-[320px]"
              >
                {/* Center Profile Photo */}
                <div className="absolute z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-white">
                  <Image
                    src="/profile.jpeg" 
                    alt="Nidhal Ghdiri"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Orbit 1 (Inner) */}
                <div className="absolute w-[180px] h-[180px] md:w-[240px] md:h-[240px] border border-gray-200 rounded-full animate-[spin_15s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md animate-[spin_15s_linear_infinite_reverse]">
                    <Database className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md animate-[spin_15s_linear_infinite_reverse]">
                    <Smartphone className="w-4 h-4 text-purple-500" />
                  </div>
                </div>

                {/* Orbit 2 (Outer) */}
                <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] border border-gray-200 rounded-full animate-[spin_25s_linear_infinite_reverse]">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md animate-[spin_25s_linear_infinite]">
                    <Code2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md animate-[spin_25s_linear_infinite]">
                    <Bot className="w-5 h-5 text-sky-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Chapter Cards (Converted to scroll links) */}
        <div className="relative z-20 w-full px-6 max-w-7xl mx-auto mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, idx) => (
              <motion.a
                href={`#${card.id}`} // Links to the respective ChapterBlock
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="group relative p-4 lg:p-5 rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start mb-2 lg:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-50 border border-gray-100 transition-all">
                      <card.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="text-slate-900 font-semibold text-base">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm flex-grow">
                    {card.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
