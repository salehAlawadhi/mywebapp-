"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, } from "lucide-react";


export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-[#000000] py-32 border-t border-white/5">

      {/* Decorative Blur Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Side: Header & Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
              {"" /* Initiate Connection */}
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)]">
              Let&apos;s build the <br />
              <span className="italic text-zinc-500">future</span> together.
            </h3>
            <p className="text-lg text-zinc-400 leading-relaxed font-[family-name:var(--font-inter)] max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, I&apos;m currently available for remote collaborations worldwide.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-zinc-300 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors group-hover:bg-white/10 group-hover:border-white/20">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium group-hover:text-white transition-colors">hello@helyro.os</span>
            </div>

            <div className="flex items-center gap-4 text-zinc-300 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors group-hover:bg-white/10 group-hover:border-white/20">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium group-hover:text-white transition-colors">Remote / Worldwide</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Elegant Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-xl"
        >
          <form className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-md space-y-6 shadow-2xl shadow-black/50">

            <div className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-zinc-100 focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-zinc-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-zinc-300 peer-valid:-top-6 peer-valid:text-xs peer-valid:text-zinc-300 cursor-text pointer-events-none"
                >
                  What&apos;s your name?
                </label>
              </div>

              <div className="relative group pt-4">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-zinc-100 focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-300 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-300 cursor-text pointer-events-none"
                >
                  Your email address
                </label>
              </div>

              <div className="relative group pt-4">
                <input
                  type="text"
                  id="service"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-zinc-100 focus:outline-none focus:border-white transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="service"
                  className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-300 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-300 cursor-text pointer-events-none"
                >
                  What are you looking for?
                </label>
              </div>

              <div className="relative group pt-4">
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-zinc-100 focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-zinc-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-300 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-zinc-300 cursor-text pointer-events-none"
                >
                  Tell me about your project...
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden bg-zinc-100 text-zinc-950 px-8 py-5 rounded-2xl font-bold tracking-wide mt-8 transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

          </form>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="w-full max-w-7xl mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm font-[family-name:var(--font-inter)] z-10">
        <p>© {new Date().getFullYear()} HELYRO OS. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-300 transition-colors">Twitter (X)</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
}
