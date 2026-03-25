"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#020202]">

      {/* Cinematic Breathing Glowing Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          delay: 2, // Desync from the other halo
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-indigo-500/15 rounded-[100%] blur-[100px] pointer-events-none mix-blend-screen"
      />

      {/* Decorative Top Label */}
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 3.5, ease: [0.16, 1, 0.3, 1] }} // Delayed for preloader
        className="glass-card px-4 py-2 mb-10 flex items-center gap-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-xl"
      >
        <Sparkles className="w-4 h-4 text-zinc-400" />
        <span className="text-xs font-medium tracking-widest text-zinc-300 uppercase">
          HELYRO OS // Available for Work
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="relative text-center max-w-5xl z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 3.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[1] mb-8 font-[family-name:var(--font-space-grotesk)] text-zinc-100 mix-blend-plus-lighter"
        >
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 italic font-light">Cinematic</span>
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 4.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-14 font-[family-name:var(--font-inter)] leading-relaxed font-light"
        >
          I am a creative developer specializing in building premium, futuristic, and highly interactive web interfaces that leave a lasting impression.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 4.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative overflow-hidden bg-zinc-100 text-zinc-950 px-10 py-5 rounded-full font-semibold tracking-wide transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="glass-button px-10 py-5 rounded-full font-medium tracking-wide text-zinc-300 flex items-center gap-2 transition-all duration-500 hover:bg-white/10 hover:border-white/20">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Elegant Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-20" />

      {/* Decorative Grid Lines Overlay (Much softer now) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" />
    </section>
  );
}
