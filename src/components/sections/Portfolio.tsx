"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Lumina Engine",
    category: "Web Application",
    image: "bg-gradient-to-tr from-zinc-800 to-zinc-950",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Aura OS Interface",
    category: "UI/UX Design",
    image: "bg-gradient-to-br from-zinc-900 to-black",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Quantum Dashboard",
    category: "Data Visualization",
    image: "bg-gradient-to-bl from-zinc-800 to-zinc-900",
    color: "from-emerald-500/20 to-transparent",
  },
];

function PortfolioCard({ project, index, yTransform }: { project: typeof projects[0], index: number, yTransform: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(
    300px circle at ${mouseX}px ${mouseY}px,
    black 20%,
    transparent 100%
  )`;

  const borderMaskImage = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    black 10%,
    transparent 100%
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-8 w-[85vw] md:w-[60vw] lg:w-[45vw]"
    >
      {/* Visual Container with Lens Effect */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black",
          project.image
        )}
      >
        {/* Dynamic Glow Border (Lens Effect) */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none rounded-3xl border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-plus-lighter"
          style={{ maskImage: borderMaskImage, WebkitMaskImage: borderMaskImage }}
        />

        {/* Revealed Detailed Texture underneath (The Lens) */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          {/* Subtle Grid / Texture that gets revealed */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay" />
        </motion.div>

        {/* Parallax Inner Pattern */}
        <motion.div
          style={{ y: yTransform }}
          className="absolute inset-[-15%] w-[130%] h-[130%] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"
        />

        {/* Floating Explore Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[0.16,1,0.3,1] z-30">
           <div className="bg-black/60 backdrop-blur-xl rounded-full px-6 py-4 border border-white/20 text-white flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <span className="font-semibold tracking-wide text-sm uppercase">Explore</span>
              <ArrowUpRight className="w-4 h-4" />
           </div>
        </div>
      </div>

      {/* Project Meta Info */}
      <div className="flex flex-col gap-4 px-2">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl md:text-4xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors tracking-tight">
            {project.title}
          </h4>
          <span className="text-sm text-zinc-600 font-medium tracking-[0.2em]">0{index + 1}</span>
        </div>
        <p className="text-zinc-500 tracking-[0.2em] text-xs uppercase font-medium">
          {project.category}
        </p>
      </div>

      {/* Luxury Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
    </motion.div>
  );
}

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smoother Parallax using Springs
  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 100 });

  // Extend horizontal scroll distance significantly
  const xTransform = useTransform(smoothProgress, [0, 1], ["5%", "-60%"]);
  const yTransform = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={containerRef} className="relative min-h-[250vh] py-32 flex flex-col justify-start items-center overflow-hidden bg-[#010101]">

      {/* Sticky Container for Horizontal Scroll */}
      <div className="w-full max-w-[100vw] px-4 md:px-8 z-10 sticky top-[15vh]">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-sm font-medium tracking-widest text-zinc-600 uppercase">
              {"" /* Selected Works */}
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.1]">
              Pixels crafted with <br className="hidden md:block"/>
              <span className="italic text-zinc-500 font-light">precision.</span>
            </h3>
          </div>

          <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-3 group border-b border-white/10 pb-2">
            <span className="text-xs uppercase tracking-[0.2em] font-medium">View Archive</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

        {/* Horizontal Scrolling Wrapper */}
        <div className="w-full relative">
          <motion.div
            style={{ x: xTransform }}
            className="flex gap-12 md:gap-24 w-max pl-4 md:pl-[calc(50vw-40vw)] lg:pl-[calc(50vw-35vw)]" // Offset starting position nicely
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
