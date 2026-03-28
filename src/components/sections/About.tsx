"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, MonitorPlay, Layers, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import PhysicalReveal from "@/components/ui/PhysicalReveal";

const skills = [
  {
    title: "Structure",
    description: "Every project is built on solid, scalable architectural foundations.",
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
    delay: 0.1,
  },
  {
    title: "Performance",
    description: "Ensuring high-speed load times and optimized runtime efficiency.",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    delay: 0.2,
  },
  {
    title: "Scalability",
    description: "Engineering systems designed to handle exponential future growth.",
    icon: <MonitorPlay className="w-5 h-5 text-amber-400" />,
    delay: 0.3,
  },
  {
    title: "Growth",
    description: "Delivering measurable, data-driven business results and conversions.",
    icon: <Code2 className="w-5 h-5 text-rose-400" />,
    delay: 0.4,
  },
];

// Interactive 3D Tilt Card Component (Floating Intelligence)
function TiltCard({ skill, index }: { skill: typeof skills[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ultra smooth springs for physical tilt
  const mouseXSpring = useSpring(x, { stiffness: 60, damping: 25, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 60, damping: 25, mass: 1 });

  // Map mouse positions to rotation (-5deg to 5deg for extreme subtlety)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  // Calculate Glare position with lag (inertia)
  const glareX = useSpring(useMotionValue(0), { stiffness: 30, damping: 20 });
  const glareY = useSpring(useMotionValue(0), { stiffness: 30, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    glareX.set(mouseX);
    glareY.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Slower return to flat state
    x.set(0);
    y.set(0);
  };

  const glareBackground = useMotionTemplate`radial-gradient(
    400px circle at ${glareX}px ${glareY}px,
    rgba(255, 255, 255, 0.08),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.8, delay: skill.delay, ease: [0.22, 1, 0.36, 1] }} // Slower, softer ease
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "bg-white/[0.01] border border-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 flex flex-col gap-6 relative group transition-all duration-[1000ms]",
        index % 2 === 1 ? "sm:mt-24" : "" // Heavier staggered layout
      )}
    >
      {/* Glare/Highlight effect tracking the mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] z-10 mix-blend-screen"
        style={{ background: glareBackground }}
      />

      {/* Subtly Floating Internal Content */}
      <div
        className="transform-gpu space-y-10 flex flex-col h-full pointer-events-none"
        style={{ transform: "translateZ(40px)" }} // Physical pop out effect
      >
        <div className="p-4 bg-[#010101] rounded-2xl w-fit border border-white/[0.03] shadow-inner backdrop-blur-3xl">
          {skill.icon}
        </div>

        <div className="space-y-4 relative z-10 mt-auto">
          <h4 className="text-2xl font-semibold text-zinc-100 font-[family-name:var(--font-space-grotesk)] tracking-tight">
            {skill.title}
          </h4>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-[90%] font-light tracking-wide">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Deep Parallax shifts for the entire background container
  const bgX = useSpring(useTransform(mouseX, [-1000, 1000], [40, -40]), { damping: 100, stiffness: 20 });
  const bgY = useSpring(useTransform(mouseY, [-500, 500], [30, -30]), { damping: 100, stiffness: 20 });

  return (
    <section className="relative min-h-[120vh] py-40 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-transparent">

      {/* Majestic Floating Background Elements */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[800px] h-[800px] bg-purple-500/5 rounded-[100%] blur-[200px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-indigo-500/5 rounded-[100%] blur-[200px] mix-blend-screen" />
      </motion.div>

      <div className="w-full max-w-[85rem] z-10 flex flex-col gap-24 lg:flex-row items-center justify-between">

        {/* Left Side: Deep Text and Intro */}
        <PhysicalReveal className="flex-1 space-y-14 lg:pr-16" direction="left" amount={60}>
          <div className="space-y-8">
            <h2 className="text-xs font-bold tracking-[0.3em] text-zinc-600 uppercase">
              {"" /* System Intelligence */}
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
              We approach digital products <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 font-light italic">as systems.</span>
            </h3>
          </div>

          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-xl tracking-wide">
            We don&apos;t just design experiences. We engineer environments that evolve. Every project is built on structure, performance, scalability, and measurable growth.
          </p>

          <div className="pt-10 flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-bold text-zinc-200 font-[family-name:var(--font-space-grotesk)]">V.12</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.25em] font-medium">System Architecture</span>
            </div>
            <div className="w-px h-20 bg-white/[0.05]" />
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-bold text-zinc-200 font-[family-name:var(--font-space-grotesk)]">∞</span>
              <span className="text-[10px] text-zinc-600 uppercase tracking-[0.25em] font-medium">Measurable Growth</span>
            </div>
          </div>
        </PhysicalReveal>

        {/* Right Side: 3D Floating Glass Cards */}
        <div className="flex-1 w-full max-w-2xl relative grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ perspective: "1500px" }}>
          {skills.map((skill, index) => (
            <TiltCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
