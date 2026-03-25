"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax calculations for the horizontal wrapper and internal images
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yTransform = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] py-32 flex flex-col justify-start items-center overflow-hidden bg-[#010101]">

      <div className="w-full max-w-7xl px-4 md:px-8 z-10 sticky top-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
              {"" /* Selected Works */}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
              Pixels crafted with <br className="hidden md:block"/>
              <span className="italic text-zinc-500">precision.</span>
            </h3>
          </div>

          <button className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group border-b border-white/10 pb-1">
            <span className="text-sm uppercase tracking-widest">View Full Archive</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

        {/* Horizontal Scrolling Parallax Container */}
        <div className="w-full overflow-hidden relative pb-16">
          <motion.div
            style={{ x: xTransform }}
            className="flex gap-8 md:gap-12 w-max"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-6 w-[85vw] md:w-[60vw] lg:w-[45vw]"
              >
                {/* Image / Visual Container with Parallax inner scale */}
                <div className={cn(
                  "relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/5",
                  project.image
                )}>
                  {/* Subtle Gradient Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-40 mix-blend-screen transition-opacity duration-700 group-hover:opacity-80",
                    project.color
                  )} />

                  {/* Internal Parallax Image Simulation */}
                  <motion.div
                    style={{ y: yTransform }}
                    className="absolute inset-[-10%] w-[120%] h-[120%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"
                  />

                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-10">
                     <div className="bg-black/40 backdrop-blur-md rounded-full p-4 border border-white/10 text-white flex items-center gap-2">
                        <span className="font-medium text-sm">Explore Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                     </div>
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl md:text-3xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] group-hover:text-white transition-colors tracking-tight">
                      {project.title}
                    </h4>
                    <span className="text-sm text-zinc-500 font-medium">0{index + 1}</span>
                  </div>
                  <p className="text-zinc-400 tracking-wide text-sm uppercase">
                    {project.category}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
