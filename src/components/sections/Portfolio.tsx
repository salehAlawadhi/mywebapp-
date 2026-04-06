"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PhysicalReveal from "@/components/ui/PhysicalReveal";
import { useLanguage } from "@/lib/LanguageContext";

const projects = [
  {
    title: "Through History",
    category: "WEB EXPERIENCE",
    image: "bg-[url('/n8n.jpeg')] bg-cover bg-center", // Will use next/image ideally, or custom rendering if needed. Wait, we have physical cards, let's keep the styling compatible.
    imgSrc: "/n8n.jpeg",
    link: "https://throughhistory.org/en",
    color: "from-cyan-500/30 to-transparent",
    wireframe: "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]",
    code: "Through History | Cinematic Storytelling",
    scanlineDelay: "delay-1000", // Standard delay for discovery
    hasScanline: true,
  },
  {
    title: "NewWays",
    category: "B2B PLATFORM",
    image: "bg-[url('/app-android.png')] bg-cover bg-center",
    imgSrc: "/app-android.png",
    link: "https://newways.sa/ar",
    color: "from-blue-500/30 to-transparent",
    wireframe: "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]",
    code: "NewWays SA | Enterprise Solutions",
    scanlineDelay: "delay-0",
    hasScanline: false, // Variance: No scanline, just clean reveal
  },
  {
    title: "Mobile Architecture",
    category: "ANDROID / IOS",
    image: "bg-[url('/android-app-ui.png')] bg-cover bg-center",
    imgSrc: "/android-app-ui.png",
    link: "#",
    color: "from-indigo-500/30 to-transparent",
    wireframe: "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]",
    code: "Native Performance | Fluid UI",
    scanlineDelay: "delay-[2000ms]", // Variance: Extremely slow discovery
    hasScanline: true,
  },
];

function PortfolioCard({ project, index, yTransform }: { project: typeof projects[0], index: number, yTransform: any }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // High-lag tracking for the premium "Lens Physics"
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { stiffness: 100, damping: 30, mass: 1 });
  const mouseY = useSpring(rawMouseY, { stiffness: 100, damping: 30, mass: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    rawMouseX.set(e.clientX - left);
    rawMouseY.set(e.clientY - top);
  };

  // The actual "Reveal Lens" mask - made softer and slightly wider for a more organic, exploratory feel
  const maskImage = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    black 25%,
    transparent 90%
  )`;

  // The subtle edge glow around the lens - reduced intensity further
  const edgeGlow = useMotionTemplate`radial-gradient(
    450px circle at ${mouseX}px ${mouseY}px,
    rgba(0, 200, 255, 0.08) 30%,
    transparent 90%
  )`;

  return (
    <PhysicalReveal
      direction="none"
      delay={index * 0.25}
      className="group flex flex-col gap-8 w-[85vw] md:w-[60vw] lg:w-[45vw]"
    >
      {/* Visual Container with Reveal System */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative block w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#020202] border border-white/[0.05] cursor-none",
        )}
      >
        {/* Base Layer: Desaturated Wireframe / Ghost State */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
          <div className={cn("absolute inset-0 opacity-40 mix-blend-screen", project.wireframe)} />
          <div className="absolute w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
             <div className="w-16 h-16 border border-white/5 rounded-full" />
          </div>
          <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-bold">
            Unrevealed Topology
          </span>
        </div>

        {/* Dynamic Lens Edge Glow */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] mix-blend-screen"
          style={{ background: edgeGlow }}
        />

        {/* Revealed Detailed Full-Color Layer underneath (The Lens) */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms]"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          {/* Scanline Effect (Hover Only) - Reduced Intensity & Added Variance */}
          {project.hasScanline && (
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
               <div className={cn("w-full h-[1px] bg-color-cyan-razor opacity-40 shadow-[0_0_8px_rgba(0,229,255,0.2)] absolute top-[-10px] left-0 transform -translate-y-full group-hover:translate-y-[800px] transition-transform duration-[4s] ease-linear", project.scanlineDelay)} />
            </div>
          )}

          {/* The full vibrant image/gradient */}
          <div className={cn("absolute inset-0", project.image)} />
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 mix-blend-overlay", project.color)} />

          {/* Secret Code that appears during scanline / hover - Very subtle discovery */}
          {project.hasScanline && (
            <div className={cn("absolute inset-0 z-10 p-10 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]", project.scanlineDelay)}>
               <pre className="text-color-text-ghost font-mono text-[10px] leading-relaxed opacity-30 mix-blend-plus-lighter">
                 {project.code}
               </pre>
            </div>
          )}

          {/* Parallax Inner Details inside the revealed lens */}
          <motion.div
            style={{ y: yTransform }}
            className="absolute inset-[-15%] w-[130%] h-[130%] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
             <div className="bg-white/10 backdrop-blur-2xl rounded-full px-8 py-5 border border-white/20 text-white flex items-center gap-4 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <span className="label-text">Explore</span>
                <ArrowUpRight className="w-4 h-4" />
             </div>
          </div>
        </motion.div>
      </a>

      {/* Project Meta Info */}
      <div className="flex flex-col gap-5 px-2">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl md:text-5xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors duration-1000 tracking-tight">
            {project.title}
          </h4>
          <span className="text-xs text-zinc-600 font-bold tracking-[0.3em] uppercase">0{index + 1}</span>
        </div>
        <p className="text-zinc-500 tracking-[0.3em] text-[10px] uppercase font-bold">
          {project.category}
        </p>
      </div>

      {/* Luxury Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-white/[0.08] via-white/[0.02] to-transparent" />
    </PhysicalReveal>
  );
}

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Physical Parallax using heavy Springs
  const smoothProgress = useSpring(scrollYProgress, { damping: 40, stiffness: 80, mass: 1.5 });

  // Deep horizontal scroll distance
  const xTransform = useTransform(smoothProgress, [0, 1], ["5%", "-65%"]);
  // Vertical Parallax for the lens interiors
  const yTransform = useTransform(smoothProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="work" ref={containerRef} className="relative min-h-[300vh] py-40 flex flex-col justify-start items-center overflow-hidden bg-transparent">

      {/* Sticky Container for Horizontal Scroll */}
      <div className="w-full max-w-[100vw] px-4 md:px-8 z-10 sticky top-[15vh]">

        {/* Header Section */}
        <PhysicalReveal direction="up" amount={50} className="max-w-[85rem] mx-auto flex flex-col md:flex-row md:items-end justify-between mb-32 gap-10">
          <div className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
              {t.portfolio[lang].tag}
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
              {t.portfolio[lang].title_line1} <br className="hidden md:block"/>
              <span className="italic text-zinc-500 font-light">{t.portfolio[lang].title_line2}</span>
            </h3>
            <p className="text-sm md:text-base text-zinc-500 font-light font-[family-name:var(--font-inter)] max-w-sm tracking-wide mt-6">
              {t.portfolio[lang].description}
            </p>
          </div>

          <button className="text-zinc-600 hover:text-white transition-colors duration-1000 flex items-center gap-4 group border-b border-white/5 pb-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t.portfolio[lang].btn_all}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </PhysicalReveal>

        {/* Horizontal Scrolling Wrapper */}
        <div className="w-full relative">
          <motion.div
            style={{ x: xTransform }}
            className="flex gap-16 md:gap-32 w-max pl-4 md:pl-[calc(50vw-40vw)] lg:pl-[calc(50vw-35vw)]"
          >
            {projects.map((project, index) => (
              <PortfolioCard key={index} project={project} index={index} yTransform={yTransform} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
