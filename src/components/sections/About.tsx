"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, MonitorPlay, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

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

// Interactive 3D Tilt Card Component
function TiltCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse positions to rotation (-10deg to 10deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Calculate Glare position
  const mouseXPos = useSpring(useMotionValue(0), { stiffness: 100, damping: 25 });
  const mouseYPos = useSpring(useMotionValue(0), { stiffness: 100, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse position between -0.5 and 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseXPos.set(mouseX);
    mouseYPos.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to flat state
    x.set(0);
    y.set(0);
  };

  const glareBackground = useMotionTemplate`radial-gradient(
    300px circle at ${mouseXPos}px ${mouseYPos}px,
    rgba(255, 255, 255, 0.1),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: skill.delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "glass-card p-6 flex flex-col gap-4 relative group transition-all duration-300",
        index % 2 === 1 ? "sm:mt-12" : "" // Staggered layout for desktop
      )}
    >
      {/* Glare/Highlight effect tracking the mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-plus-lighter"
        style={{ background: glareBackground }}
      />

      {/* Subtly Floating Internal Content */}
      <div
        className="transform-gpu space-y-6 flex flex-col h-full pointer-events-none"
        style={{ transform: "translateZ(30px)" }} // Pop out effect
      >
        <div className="p-3 bg-zinc-900/50 rounded-xl w-fit border border-white/5 shadow-inner backdrop-blur-md">
          {skill.icon}
        </div>

        <div className="space-y-3 relative z-10 mt-auto">
          <h4 className="text-xl font-semibold text-zinc-100 font-[family-name:var(--font-space-grotesk)] tracking-tight">
            {skill.title}
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[90%] font-light">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#020202]">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="w-full max-w-7xl z-10 flex flex-col gap-16 lg:flex-row items-center justify-between">

        {/* Left Side: Text and Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-10 lg:pr-12"
        >
          <div className="space-y-6">
            <h2 className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
              {"" /* Core Expertise */}
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.1]">
              Bridging the gap between <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-light italic">design</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-light italic">logic.</span>
            </h3>
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-xl">
            I specialize in crafting premium web interfaces that are not just visually stunning but technically excellent. By combining modern frameworks like Next.js with advanced animation libraries like Framer Motion, I build experiences that feel alive.
          </p>

          <div className="pt-6 flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)]">5+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Years Exp</span>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)]">40+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-[0.2em]">Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: 3D Overlapping Glass Cards */}
        <div className="flex-1 w-full max-w-2xl relative grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          {skills.map((skill, index) => (
            <TiltCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
