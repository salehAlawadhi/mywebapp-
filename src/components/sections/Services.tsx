"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Paintbrush, LayoutTemplate, Zap, Database, Laptop, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import PhysicalReveal from "@/components/ui/PhysicalReveal";

const services = [
  {
    title: "Web Systems Engineering",
    description: "We don't build pages. We engineer structured digital systems optimized for performance, clarity, and conversion.",
    icon: <LayoutTemplate className="w-4 h-4 text-indigo-400" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/[0.02] to-transparent",
    delay: 0.1,
  },
  {
    title: "eCommerce Architecture",
    description: "Scalable commerce systems built for serious growth. Headless, conversion-optimized, and performance-tuned.",
    icon: <Database className="w-4 h-4 text-blue-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.2,
  },
  {
    title: "Automation Systems",
    description: "We eliminate manual workflows and replace them with intelligent, API-based system connections.",
    icon: <Zap className="w-4 h-4 text-yellow-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Growth & Advertising",
    description: "We design and manage full performance-driven marketing systems and data-driven optimizations.",
    icon: <Paintbrush className="w-4 h-4 text-emerald-400" />,
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-b from-emerald-500/[0.02] to-transparent",
    delay: 0.4,
  },
  {
    title: "SEO / GEO / AIO",
    description: "Advanced visibility engineering for modern search ecosystems and semantic content structuring.",
    icon: <Smartphone className="w-4 h-4 text-rose-400" />,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.5,
  },
  {
    title: "Application Development",
    description: "Scalable digital products, SaaS, and admin dashboards engineered for long-term growth.",
    icon: <Laptop className="w-4 h-4 text-purple-400" />,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.6,
  },
];

// Asymmetrical Hardware Module Card
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
    800px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.08),
    transparent 80%
  )`;

  const innerGlow = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.02),
    transparent 80%
  )`;

  return (
    <PhysicalReveal
      delay={service.delay}
      direction="up"
      amount={40}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] p-[1px] flex flex-col gap-4 backdrop-blur-2xl transition-all duration-[1000ms] ease-out h-full",
        service.className
      )}
    >
      <div ref={ref} onMouseMove={handleMouseMove} className="w-full h-full flex flex-col">
      {/* Light Scan Edge Effect (Outer Border) */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] ease-out"
        style={{ background: gradientBorder }}
      />

      {/* Static Subdued Border */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/[0.02] pointer-events-none group-hover:border-white/[0.05] transition-colors duration-[1000ms] ease-out" />

      {/* Internal Hardware Module Wrapper */}
      <div className="relative w-full h-full bg-[#010101] rounded-[calc(2rem-1px)] p-10 md:p-12 flex flex-col gap-8 z-10 overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">

        {/* Deep Internal Light Glow Tracking Mouse */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] mix-blend-screen"
          style={{ background: innerGlow }}
        />

        {/* Very subtle noise texture internally */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

        <div className="p-5 bg-white/[0.015] rounded-2xl w-fit border border-white/[0.02] shadow-[0_0_30px_rgba(255,255,255,0.01)] backdrop-blur-3xl transition-transform duration-[1000ms] group-hover:scale-105">
          {service.icon}
        </div>

        <div className="mt-auto space-y-4 relative z-20">
          <h4 className="text-2xl md:text-3xl font-bold text-zinc-100 font-[family-name:var(--font-space-grotesk)] tracking-tight">
            {service.title}
          </h4>
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-light font-[family-name:var(--font-inter)] max-w-[95%] tracking-wide">
            {service.description}
          </p>
        </div>
      </div>
      </div>
    </PhysicalReveal>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen py-40 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-transparent border-t border-white/[0.02]">

      {/* Deep Obsidian Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="w-full max-w-[85rem] z-10 flex flex-col gap-32">

        {/* Majestic Header */}
        <PhysicalReveal className="text-center space-y-10 max-w-4xl mx-auto" direction="up" amount={50}>
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
            {"" /* Engine Modules */}
          </h2>
          <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
            Engineered <br />
            <span className="italic text-zinc-500 font-light">Ecosystem.</span>
          </h3>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-2xl mx-auto tracking-wide">
            We don&apos;t build pages. We engineer structured digital systems optimized for performance, clarity, and conversion.
          </p>
        </PhysicalReveal>

        {/* Engine Modules (Bento Box Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(300px,auto)] gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
