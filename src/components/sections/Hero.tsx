"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// The magnetic CTA Button
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);

  // More mass and lower stiffness for more inertia and softer settling
  const x = useSpring(useMotionValue(0), { stiffness: 100, damping: 15, mass: 1.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 100, damping: 15, mass: 1.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Center of button
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Magnetic pull distance (max 15px)
    const px = (e.clientX - cx) * 0.15;
    const py = (e.clientY - cy) * 0.15;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    // Spring back to center
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden bg-zinc-100 text-[#010101] px-10 py-5 rounded-full font-bold tracking-[0.1em] text-sm uppercase transition-all duration-700 ease-[0.16,1,0.3,1] flex items-center gap-4 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-1" />

      {/* Internal button glow passing through */}
      <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.button>
  );
}

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { lang, t } = useLanguage();

  // Global mouse tracking for background depth
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Parallax subtle shifts for the text - increased damping and mass for slower, delayed response
  const textX = useSpring(useTransform(mouseX, [-1000, 1000], [20, -20]), { damping: 40, stiffness: 30, mass: 2 });
  const textY = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), { damping: 40, stiffness: 30, mass: 2 });

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-transparent">

      {/* Majestic Breathing Glowing Background Elements (Deep Layers) */}
      {/* Core Blue Oval */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12, // Extremely slow, calm breathing
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-[100%] blur-[180px] pointer-events-none mix-blend-screen"
      />

      {/* Deep Indigo Off-Center Halo */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 16,
          delay: 4, // Desync from the core halo
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-indigo-500/10 rounded-[100%] blur-[150px] pointer-events-none mix-blend-screen"
      />

      {/* Main Content Area */}
      <div className="relative text-center max-w-6xl z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(30px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 3.5, delay: 4.8, ease: [0.22, 1, 0.36, 1] }} // Slower, softer entrance
          className="border border-white/5 bg-white/[0.015] backdrop-blur-3xl px-6 py-3 rounded-full mb-12 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.02)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase">
            {t.hero[lang].tag}
          </span>
        </motion.div>

        {/* Majestic Typography with Parallax */}
        <motion.h1
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, scale: 0.7, filter: "blur(50px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 6, delay: 5.0, ease: [0.19, 1, 0.22, 1] }} // Exponential Monumental curve, extremely slow reveal
          className="text-5xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter leading-[1.05] mb-10 font-[family-name:var(--font-space-grotesk)] text-zinc-100 mix-blend-plus-lighter"
        >
          {t.hero[lang].title_line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 italic font-light">{t.hero[lang].title_line2}</span> <br /> {t.hero[lang].title_line3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 4, delay: 5.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 font-[family-name:var(--font-inter)] leading-relaxed font-light tracking-wide"
        >
          {t.hero[lang].description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 4, delay: 6.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <MagneticButton>
            {t.hero[lang].btn_explore}
          </MagneticButton>

          <button className="glass-button px-10 py-5 rounded-full font-medium tracking-[0.1em] text-sm uppercase text-zinc-400 flex items-center gap-2 hover:bg-white/[0.05] transition-colors cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero[lang].btn_start}
          </button>
        </motion.div>
      </div>

      {/* Elegant Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#010101] to-transparent pointer-events-none z-20" />

      {/* Decorative Grid Lines Overlay (Extremely subtle now) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-20 mix-blend-overlay" />
    </section>
  );
}
