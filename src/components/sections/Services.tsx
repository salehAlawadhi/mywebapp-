"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Paintbrush, LayoutTemplate, Zap, Database, Laptop, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

const services = [
  {
    title: "UI/UX Design Integration",
    description: "Translating pixel-perfect Figma designs into responsive, accessible code without compromising the creative vision.",
    icon: <Paintbrush className="w-5 h-5 text-indigo-400" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/5 to-transparent",
    delay: 0.1,
  },
  {
    title: "Web Applications",
    description: "Building robust SPA and MPA using React and Next.js.",
    icon: <Laptop className="w-5 h-5 text-blue-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.2,
  },
  {
    title: "Performance Audits",
    description: "Optimizing Core Web Vitals and load times for scale.",
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Full-Stack Capabilities",
    description: "Connecting flawless frontends with headless CMS or custom APIs.",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-b from-emerald-500/5 to-transparent",
    delay: 0.4,
  },
  {
    title: "Mobile First",
    description: "Ensuring perfect rendering across all devices.",
    icon: <Smartphone className="w-5 h-5 text-rose-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.5,
  },
  {
    title: "Custom Design Systems",
    description: "Creating scalable, reusable component libraries tailored to your brand identity.",
    icon: <LayoutTemplate className="w-5 h-5 text-purple-400" />,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.6,
  },
];

// Interactive Bento Box Card
function ServiceCard({ service }: { service: typeof services[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gradientBorder = useMotionTemplate`radial-gradient(
    500px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.2),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-[1px] flex flex-col gap-4 backdrop-blur-sm transition-all duration-500",
        service.className
      )}
    >
      {/* Dynamic Hover Border (Mouse Gradient) */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: gradientBorder }}
      />

      {/* Static Base Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none group-hover:border-white/10 transition-colors duration-500" />

      {/* Card Internal Content Wrapper */}
      <div className="relative w-full h-full bg-[#050505] rounded-[23px] p-8 flex flex-col gap-6 z-10 overflow-hidden">

        {/* Internal subtle glow on hover */}
        <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />

        <div className="p-4 bg-zinc-900/50 rounded-2xl w-fit border border-white/5 shadow-inner backdrop-blur-md">
          {service.icon}
        </div>

        <div className="mt-auto space-y-3 relative z-20">
          <h4 className="text-xl md:text-2xl font-semibold text-zinc-100 font-[family-name:var(--font-space-grotesk)] tracking-tight">
            {service.title}
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed font-light font-[family-name:var(--font-inter)] max-w-[90%]">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#030303]">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />

      <div className="w-full max-w-7xl z-10 flex flex-col gap-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
            {"" /* Core Services */}
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.1]">
            Engineering digital <br />
            <span className="italic text-zinc-500 font-light">excellence.</span>
          </h3>
          <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-2xl mx-auto">
            A comprehensive suite of frontend development services designed to elevate your brand&apos;s digital presence. Built for performance and aesthetics.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(220px,auto)] gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
