"use client";

import { motion } from "framer-motion";
import { Paintbrush, LayoutTemplate, Zap, Database, Laptop, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "UI/UX Design Integration",
    description: "Translating pixel-perfect Figma designs into responsive, accessible code without compromising the creative vision.",
    icon: <Paintbrush className="w-5 h-5 text-indigo-400" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500/10 to-transparent",
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
    className: "md:col-span-1 md:row-span-2 bg-gradient-to-b from-emerald-500/10 to-transparent",
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

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen py-32 flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#030303]">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10 flex flex-col gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <h2 className="text-sm font-medium tracking-widest text-zinc-400 uppercase">
            {"" /* Core Services */}
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
            Engineering digital <span className="italic text-zinc-500">excellence.</span>
          </h3>
          <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)]">
            A comprehensive suite of frontend development services designed to elevate your brand&apos;s digital presence.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 p-6 flex flex-col gap-4 backdrop-blur-sm transition-all duration-300 hover:border-white/15",
                service.className
              )}
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="p-3 bg-zinc-800/50 rounded-xl w-fit border border-white/5 shadow-inner backdrop-blur-md">
                {service.icon}
              </div>

              <div className="mt-auto space-y-2 relative z-10">
                <h4 className="text-xl font-semibold text-zinc-100 font-[family-name:var(--font-space-grotesk)] tracking-tight">
                  {service.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[90%]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
