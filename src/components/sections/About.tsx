"use client";

import { motion } from "framer-motion";
import { Code2, MonitorPlay, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    title: "Frontend Engineering",
    description: "Building scalable, high-performance web applications using React, Next.js, and TypeScript.",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    delay: 0.1,
  },
  {
    title: "Interactive UI/UX",
    description: "Creating immersive digital experiences with complex animations and intuitive layouts.",
    icon: <MonitorPlay className="w-6 h-6 text-emerald-400" />,
    delay: 0.2,
  },
  {
    title: "System Architecture",
    description: "Designing robust frontend architectures that scale seamlessly and maintain high code quality.",
    icon: <Layers className="w-6 h-6 text-amber-400" />,
    delay: 0.3,
  },
  {
    title: "Performance Optimization",
    description: "Ensuring blazing fast load times and buttery smooth 60fps animations across all devices.",
    icon: <Cpu className="w-6 h-6 text-rose-400" />,
    delay: 0.4,
  },
];

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#020202]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10 flex flex-col gap-16 lg:flex-row items-center justify-between">

        {/* Left Side: Text and Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-8 lg:pr-12"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-medium tracking-widest text-zinc-400 uppercase">
              {"" /* Core Expertise */}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">design</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">logic.</span>
            </h3>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)] max-w-xl">
            I specialize in crafting premium web interfaces that are not just visually stunning but technically excellent. By combining modern frameworks like Next.js with advanced animation libraries like Framer Motion, I build experiences that feel alive.
          </p>

          <div className="pt-4 flex gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-zinc-100">5+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="w-px h-16 bg-zinc-800" />
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-zinc-100">40+</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Overlapping Glass Cards */}
        <div className="flex-1 w-full max-w-2xl relative grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: skill.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "glass-card p-6 flex flex-col gap-4 relative group overflow-hidden transition-all duration-500",
                index % 2 === 1 ? "sm:mt-12" : "" // Staggered layout for desktop
              )}
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="p-3 bg-zinc-900/50 rounded-xl w-fit border border-white/5 shadow-inner">
                {skill.icon}
              </div>

              <div className="space-y-2 relative z-10">
                <h4 className="text-xl font-semibold text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
                  {skill.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
