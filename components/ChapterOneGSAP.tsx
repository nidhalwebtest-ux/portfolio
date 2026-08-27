"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { 
  Briefcase, 
  BarChart, 
  CheckCircle, 
  Code, 
  Package, 
  Link as LinkIcon, 
  ArrowRight 
} from "lucide-react";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stepsData = [
  {
    title: "3 Years Experience",
    image: "/NetSuite-Logo.png",
    content: "Over 3 years of deep, hands-on experience administering NetSuite and architecting custom SuiteScript solutions.\nFrom maintaining complex role permissions to building scalable custom records and advanced workflows.\nDedicated to ensuring the ERP strictly aligns with core business goals and peak operational efficiency.",
    action: "See my Resume",
  },
  {
    title: "60+ Custom Reports",
    image: "/report-image.png",
    content: "Built custom reports for Sales, collections, aging, performance and more. We also architect complete visual dashboards for managers to track company performance in real-time and easily identify operational gaps.",
    action: "See Some Reports",
  },
  {
    title: "300+ Issues Solved",
    image: "/solve-problem.png",
    content: "Standard ERPs are rarely perfectly adapted to unique business processes out of the box. I specialize in taking complex business challenges, designing tailored solutions, and translating them into native NetSuite logic.\nBy developing new features, automating manual bottlenecks, and implementing custom workflows, I've successfully reclaimed hundreds of hours of manual work, making users' daily operations dramatically easier and more efficient.",
    action: "Show some Problems solved",
  },
  {
    title: "120+ Scripts",
    image: "/scripts.png",
    content: "• Client & User Event: Triggering extra actions and validating conditions before a process completes.\n• Suitelets: Building highly flexible custom forms and beautiful, consolidated reports that merge multiple standard data sources.\n• Scheduled Scripts: Reliably automating recurring system actions in the background.\n• Map/Reduce: The ultimate automation engine—processing logic across thousands of records simultaneously.",
    action: "Explore Scripts",
  },
  {
    title: "5 Custom Modules",
    icon: Package,
    content: "Engineered complete end-to-end modules from scratch, including Property Management, Payroll, Fixed Assets, and School Management.",
    action: "Explore Details",
  },
  {
    title: "4 Core Integrations",
    icon: LinkIcon,
    content: "Seamlessly connecting NetSuite to external systems like WhatsApp Cloud API for automated reporting and SmartPay for payment gateways.",
    action: "Explore Details",
  },
];

export default function ChapterOneGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightContentRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const steps = stepsData.length;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: "power1.inOut"
        }
      }
    });

    gsap.set(leftCardsRef.current[0], { 
      opacity: 1, 
      scale: 1, 
      borderColor: "rgba(59,130,246,0.5)", 
      boxShadow: "0 0 30px rgba(59,130,246,0.15)" 
    });
    gsap.set(rightContentRef.current[0], { y: 0, autoAlpha: 1 });
    
    for(let j = 1; j < steps; j++) {
      gsap.set(rightContentRef.current[j], { autoAlpha: 0 });
    }

    stepsData.forEach((_, i) => {
      tl.addLabel(`step${i}`, i * 2);

      if (i > 0) {
        const t = (i * 2) - 1; 

        tl.to(leftCardsRef.current[i - 1], { 
            opacity: 0.4, 
            scale: 0.95, 
            borderColor: "rgba(255,255,255,0.05)",
            boxShadow: "none",
            duration: 1 
          }, t)
          .to(rightContentRef.current[i - 1], { 
            y: -50, 
            autoAlpha: 0, 
            duration: 1 
          }, t)
          
          .to(leftCardsRef.current[i], { 
            opacity: 1, 
            scale: 1, 
            borderColor: "rgba(59,130,246,0.5)", 
            boxShadow: "0 0 30px rgba(59,130,246,0.15)",
            duration: 1 
          }, t)
          .fromTo(rightContentRef.current[i], 
            { y: 50, autoAlpha: 0 }, 
            { y: 0, autoAlpha: 1, duration: 1 }, 
            t
          );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-[100dvh] w-full bg-slate-950 text-white overflow-hidden flex flex-col pt-16 sm:pt-20 lg:pt-24 border-y border-white/5">
      
      {/* Title */}
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto mb-4 sm:mb-6 lg:mb-10 shrink-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
          ERP Development
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow min-h-0 pb-10 lg:pb-20">
        
        {/* LEFT COLUMN: Metric Cards (Hidden on mobile for better UX) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 justify-start overflow-visible h-full">
          {stepsData.map((step, i) => (
            <div
              key={i}
              ref={(el) => { leftCardsRef.current[i] = el; }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 opacity-50 scale-95 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                {step.icon ? (
                  <step.icon className="w-5 h-5 text-gray-300" />
                ) : (
                  <span className="text-gray-300 font-bold text-sm">0{i + 1}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: The Deep Dive Content (Full width on mobile) */}
        <div className="col-span-1 lg:col-span-7 relative h-full flex items-start">
          {stepsData.map((step, i) => (
            <div
              key={i}
              ref={(el) => { rightContentRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col justify-start overflow-hidden pt-2 lg:pt-0"
            >
              {/* Mobile Only: Step Indicator */}
              <div className="lg:hidden inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase w-max shrink-0">
                Step 0{i + 1} of 0{stepsData.length}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 lg:mb-6 leading-tight shrink-0">
                {step.title}
              </h2>
              
              {/* Dynamic Image or Icon */}
              {step.image ? (
                <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md h-32 sm:h-40 lg:h-48 mb-6 lg:mb-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-contain p-4"
                  />
                </div>
              ) : step.icon ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 lg:mb-8 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </div>
              ) : null}
              
              {/* Scrollable Text Area if content overflows on tiny screens */}
              <div className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed mb-6 lg:mb-10 max-w-2xl font-light whitespace-pre-line overflow-y-auto pr-2 pb-4 scrollbar-hide min-h-0">
                {step.content}
              </div>
              
              {/* Call to Action Button */}
              <div className="mt-auto shrink-0 pb-4">
                <button className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-md transition-all flex items-center gap-3 text-white text-sm lg:text-base font-semibold shadow-lg hover:shadow-blue-500/20 w-max">
                  {step.action}
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
