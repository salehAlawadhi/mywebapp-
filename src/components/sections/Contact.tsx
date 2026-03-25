"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#000000] py-32 border-t border-white/[0.02]">

      {/* Decorative Deep Space Blur Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/5 rounded-[100%] blur-[250px] pointer-events-none mix-blend-screen" />

      <div className="w-full max-w-7xl z-10 flex flex-col lg:flex-row gap-20 lg:gap-32">

        {/* Left Side: Header & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-16"
        >
          <div className="space-y-8">
            <h2 className="text-xs font-medium tracking-[0.2em] text-zinc-600 uppercase">
              {"" /* Initiate Connection */}
            </h2>
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
              Let&apos;s build the <br />
              <span className="italic text-zinc-500 font-light">future</span> together.
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m currently available for remote collaborations worldwide.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 text-zinc-400 group cursor-pointer w-fit">
              <div className="w-14 h-14 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110">
                <Mail className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="text-xl font-light group-hover:text-white transition-colors duration-500 tracking-wide">hello@helyro.os</span>
            </div>

            <div className="flex items-center gap-6 text-zinc-400 group cursor-pointer w-fit">
              <div className="w-14 h-14 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110">
                <MapPin className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="text-xl font-light group-hover:text-white transition-colors duration-500 tracking-wide">Remote / Worldwide</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Ultra Elegant Form */}
        <motion.div
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-xl flex flex-col justify-center"
        >
          <form className="bg-[#020202] border border-white/5 rounded-[2rem] p-10 md:p-14 space-y-8 shadow-2xl shadow-black/80 relative overflow-hidden group">

            {/* Subtle glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.015] to-transparent pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-1000" />

            <div className="space-y-10 relative z-10">
              <div className="relative group/input">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-zinc-100 focus:outline-none focus:border-white/60 transition-colors duration-500 peer font-light text-lg tracking-wide"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-zinc-500 font-light transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-zinc-400 peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-6 peer-valid:text-xs peer-valid:text-zinc-500 peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  What&apos;s your name?
                </label>
              </div>

              <div className="relative group/input pt-4">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-zinc-100 focus:outline-none focus:border-white/60 transition-colors duration-500 peer font-light text-lg tracking-wide"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-zinc-500 font-light transition-all duration-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-500 peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  Your email address
                </label>
              </div>

              <div className="relative group/input pt-4">
                <input
                  type="text"
                  id="service"
                  required
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-zinc-100 focus:outline-none focus:border-white/60 transition-colors duration-500 peer font-light text-lg tracking-wide"
                  placeholder=" "
                />
                <label
                  htmlFor="service"
                  className="absolute left-0 top-4 text-zinc-500 font-light transition-all duration-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-500 peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  What are you looking for?
                </label>
              </div>

              <div className="relative group/input pt-4">
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 pb-4 text-zinc-100 focus:outline-none focus:border-white/60 transition-colors duration-500 peer resize-none font-light text-lg tracking-wide"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-zinc-500 font-light transition-all duration-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-400 peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-500 peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  Tell me about your project...
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="group/btn relative w-full overflow-hidden bg-zinc-100 text-zinc-950 px-8 py-6 rounded-2xl font-bold tracking-widest uppercase text-sm mt-12 transition-transform duration-500 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-2" />
            </button>

          </form>
        </motion.div>
      </div>

      {/* Refined Footer Branding */}
      <div className="w-full max-w-7xl mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600 text-xs tracking-widest uppercase font-medium z-10">
        <p>© {new Date().getFullYear()} HELYRO OS. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-zinc-300 transition-colors duration-500">Twitter (X)</a>
          <a href="#" className="hover:text-zinc-300 transition-colors duration-500">LinkedIn</a>
          <a href="#" className="hover:text-zinc-300 transition-colors duration-500">GitHub</a>
        </div>
      </div>
    </section>
  );
}
