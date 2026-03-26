"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import PhysicalReveal from "@/components/ui/PhysicalReveal";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-transparent py-40">

      {/* Decorative Deep Space Blur Background Element (Reduced intensity for minimal finish) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.03] rounded-[100%] blur-[250px] pointer-events-none mix-blend-screen" />

      <div className="w-full max-w-[85rem] z-10 flex flex-col lg:flex-row gap-24 lg:gap-40">

        {/* Left Side: Header & Contact Info */}
        <PhysicalReveal direction="left" amount={60} className="flex-1 space-y-20">
          <div className="space-y-10">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
              {"" /* Initiate Connection */}
            </h2>
            <h3 className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
              Let&apos;s build the <br />
              <span className="italic text-zinc-500 font-light">future</span> together.
            </h3>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-[family-name:var(--font-inter)] font-light max-w-lg tracking-wide">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m currently available for remote collaborations worldwide.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-8 text-zinc-500 group cursor-none w-fit">
              <div className="w-16 h-16 rounded-full border border-white/[0.03] bg-white/[0.01] flex items-center justify-center transition-all duration-[1000ms] group-hover:bg-white/[0.05] group-hover:border-white/[0.1] group-hover:scale-110">
                <Mail className="w-5 h-5 transition-transform duration-[1000ms] group-hover:scale-110" />
              </div>
              <span className="text-2xl font-light group-hover:text-white transition-colors duration-[1000ms] tracking-widest">hello@helyro.os</span>
            </div>

            <div className="flex items-center gap-8 text-zinc-500 group cursor-none w-fit">
              <div className="w-16 h-16 rounded-full border border-white/[0.03] bg-white/[0.01] flex items-center justify-center transition-all duration-[1000ms] group-hover:bg-white/[0.05] group-hover:border-white/[0.1] group-hover:scale-110">
                <MapPin className="w-5 h-5 transition-transform duration-[1000ms] group-hover:scale-110" />
              </div>
              <span className="text-2xl font-light group-hover:text-white transition-colors duration-[1000ms] tracking-widest">Remote / Worldwide</span>
            </div>
          </div>
        </PhysicalReveal>

        {/* Right Side: Ultra Elegant Form */}
        <PhysicalReveal direction="right" amount={60} delay={0.3} className="flex-1 w-full max-w-xl flex flex-col justify-center">
          <form className="bg-transparent border border-white/[0.02] rounded-[3rem] p-12 md:p-16 space-y-12 shadow-2xl shadow-black relative overflow-hidden group">

            {/* Extremely subtle background glow inside form */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />

            <div className="space-y-14 relative z-10">
              <div className="relative group/input">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-white/[0.05] pb-5 text-zinc-100 focus:outline-none focus:border-white/50 transition-colors duration-[1000ms] peer font-light text-xl tracking-wider"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-zinc-600 font-light transition-all duration-[1000ms] peer-focus:-top-8 peer-focus:text-[10px] peer-focus:text-cyan-500/50 peer-focus:tracking-[0.4em] peer-focus:uppercase peer-valid:-top-8 peer-valid:text-[10px] peer-valid:text-zinc-500 peer-valid:tracking-[0.4em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  What&apos;s your name?
                </label>
              </div>

              <div className="relative group/input pt-6">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-white/[0.05] pb-5 text-zinc-100 focus:outline-none focus:border-white/50 transition-colors duration-[1000ms] peer font-light text-xl tracking-wider"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-6 text-zinc-600 font-light transition-all duration-[1000ms] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-500/50 peer-focus:tracking-[0.4em] peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-zinc-500 peer-valid:tracking-[0.4em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  Your email address
                </label>
              </div>

              <div className="relative group/input pt-6">
                <input
                  type="text"
                  id="service"
                  required
                  className="w-full bg-transparent border-b border-white/[0.05] pb-5 text-zinc-100 focus:outline-none focus:border-white/50 transition-colors duration-[1000ms] peer font-light text-xl tracking-wider"
                  placeholder=" "
                />
                <label
                  htmlFor="service"
                  className="absolute left-0 top-6 text-zinc-600 font-light transition-all duration-[1000ms] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-500/50 peer-focus:tracking-[0.4em] peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-zinc-500 peer-valid:tracking-[0.4em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  What are you looking for?
                </label>
              </div>

              <div className="relative group/input pt-6">
                <textarea
                  id="message"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/[0.05] pb-5 text-zinc-100 focus:outline-none focus:border-white/50 transition-colors duration-[1000ms] peer resize-none font-light text-xl tracking-wider"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-6 text-zinc-600 font-light transition-all duration-[1000ms] peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-cyan-500/50 peer-focus:tracking-[0.4em] peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[10px] peer-valid:text-zinc-500 peer-valid:tracking-[0.4em] peer-valid:uppercase cursor-text pointer-events-none"
                >
                  Tell me about your project...
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="group/btn relative w-full overflow-hidden bg-white/[0.03] text-zinc-300 border border-white/[0.05] px-10 py-7 rounded-full font-bold tracking-[0.3em] uppercase text-[10px] mt-16 transition-all duration-[1000ms] hover:bg-white hover:text-black hover:border-white flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Transmit Signal</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-[1000ms] group-hover/btn:translate-x-2" />
            </button>

          </form>
        </PhysicalReveal>
      </div>

      {/* Refined Footer Branding */}
      <div className="w-full max-w-[85rem] mt-48 pt-12 border-t border-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-600 text-[10px] tracking-[0.4em] uppercase font-bold z-10">
        <p>© {new Date().getFullYear()} HELYRO OS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-zinc-300 transition-colors duration-[1000ms]">Twitter / X</a>
          <a href="#" className="hover:text-zinc-300 transition-colors duration-[1000ms]">LinkedIn</a>
          <a href="#" className="hover:text-zinc-300 transition-colors duration-[1000ms]">GitHub</a>
        </div>
      </div>
    </section>
  );
}
