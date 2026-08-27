import HeroSection from "@/components/HeroSection";
import ChapterOneGSAP from "@/components/ChapterOneGSAP";
import ChapterViewer from "@/components/ChapterViewer";

export default function Home() {
  return (
    <main className="bg-[#f8f9fa]">
      <div className="relative h-[150vh] w-full z-0">
         <HeroSection />
      </div>
      
      {/* The New GSAP Pinned Section (Dark aesthetic break) */}
      <div className="relative z-10">
        <ChapterOneGSAP />
      </div>

      {/* The remaining chapters and legacy framework */}
      <div className="relative z-20 bg-[#f8f9fa]">
         <ChapterViewer />
      </div>
    </main>
  );
}
