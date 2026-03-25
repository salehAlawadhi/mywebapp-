"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8">
      {/* Cinematic Glowing Background Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Top Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card px-4 py-2 mb-8 flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-zinc-400" />
        <span className="text-xs font-medium tracking-widest text-zinc-300 uppercase">
          HELYRO OS // Available for Work
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="relative text-center max-w-5xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 font-[family-name:var(--font-space-grotesk)] text-zinc-100"
        >
          Crafting <span className="text-zinc-500 italic">Cinematic</span>
          <br />
          Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-[family-name:var(--font-inter)] leading-relaxed"
        >
          I am a creative developer specializing in building premium, futuristic, and highly interactive web interfaces that leave a lasting impression.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative overflow-hidden bg-zinc-100 text-zinc-950 px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="glass-button px-8 py-4 rounded-full font-medium text-zinc-300 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20" />
    </section>
  );
}
