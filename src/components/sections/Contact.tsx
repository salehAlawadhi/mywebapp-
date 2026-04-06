"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import PhysicalReveal from "@/components/ui/PhysicalReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { lang, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate a short network delay before showing the quiet closure
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-color-void py-40">

      {/* Decorative Deep Space Blur Background Element (Extremely restrained) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-color-deep-navy rounded-[100%] blur-[250px] pointer-events-none mix-blend-screen opacity-50" />

      <div className="w-full max-w-[85rem] z-10 flex flex-col lg:flex-row gap-24 lg:gap-40">

        {/* Left Side: Header & Contact Info */}
        <PhysicalReveal direction="left" amount={60} className="flex-1 space-y-20">
          <div className="space-y-10">
            <h2 className="label-text text-color-text-sub">
              {t.contact[lang].title}
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] leading-[1.05]">
              {t.contact[lang].subtitle_line1} <br />
              <span className="italic text-color-text-sub font-light">{t.contact[lang].subtitle_line2}</span>
            </h3>
            <p className="body-lg text-color-text-sub max-w-lg">
              {t.contact[lang].desc}
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-8 text-color-text-sub group cursor-none w-fit">
              <div className="w-16 h-16 rounded-full border border-color-glass-border bg-color-obsidian flex items-center justify-center transition-colors duration-[1000ms] group-hover:bg-color-deep-navy group-hover:border-white/[0.1]">
                <Mail className="w-5 h-5 transition-transform duration-[1000ms]" />
              </div>
              <span className="text-xl font-light group-hover:text-color-text-main transition-colors duration-[1000ms] tracking-widest">contact@helyro.com</span>
            </div>

            <div className="flex items-center gap-8 text-color-text-sub group cursor-none w-fit">
              <div className="w-16 h-16 rounded-full border border-color-glass-border bg-color-obsidian flex items-center justify-center transition-colors duration-[1000ms] group-hover:bg-color-deep-navy group-hover:border-white/[0.1]">
                <MapPin className="w-5 h-5 transition-transform duration-[1000ms]" />
              </div>
              <span className="text-xl font-light group-hover:text-color-text-main transition-colors duration-[1000ms] tracking-widest">+966 53 213 3581</span>
            </div>
          </div>
        </PhysicalReveal>

        {/* Right Side: Ultra Elegant Form or Success State */}
        <PhysicalReveal direction="right" amount={60} delay={0.3} className="flex-1 w-full max-w-xl flex flex-col justify-center min-h-[500px]">
          <div className="bg-transparent border border-color-glass-border rounded-[2rem] p-12 md:p-16 relative overflow-hidden group shadow-2xl h-full flex flex-col justify-center">

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  onSubmit={handleSubmit}
                  className="space-y-12"
                >
                  <div className="space-y-14 relative z-10">
                    <div className="relative group/input">
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-transparent border-b border-color-glass-border pb-5 text-color-text-main focus:outline-none focus:border-color-text-sub transition-colors duration-[1000ms] peer font-light text-lg tracking-wider"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 top-0 text-color-text-sub font-light transition-all duration-[1000ms] peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-color-cyan-logic peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-6 peer-valid:text-[10px] peer-valid:text-color-text-ghost peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                      >
                        {t.contact[lang].label_name}
                      </label>
                    </div>

                    <div className="relative group/input pt-6">
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-transparent border-b border-color-glass-border pb-5 text-color-text-main focus:outline-none focus:border-color-text-sub transition-colors duration-[1000ms] peer font-light text-lg tracking-wider"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 top-6 text-color-text-sub font-light transition-all duration-[1000ms] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-color-cyan-logic peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-color-text-ghost peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                      >
                        {t.contact[lang].label_email}
                      </label>
                    </div>

                    <div className="relative group/input pt-6">
                      <input
                        type="text"
                        id="projectType"
                        required
                        className="w-full bg-transparent border-b border-color-glass-border pb-5 text-color-text-main focus:outline-none focus:border-color-text-sub transition-colors duration-[1000ms] peer font-light text-lg tracking-wider"
                        placeholder=" "
                      />
                      <label
                        htmlFor="projectType"
                        className="absolute left-0 top-6 text-color-text-sub font-light transition-all duration-[1000ms] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-color-cyan-logic peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-color-text-ghost peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                      >
                        {t.contact[lang].label_type}
                      </label>
                    </div>

                    <div className="relative group/input pt-6">
                      <textarea
                        id="message"
                        required
                        rows={3}
                        className="w-full bg-transparent border-b border-color-glass-border pb-5 text-color-text-main focus:outline-none focus:border-color-text-sub transition-colors duration-[1000ms] peer resize-none font-light text-lg tracking-wider"
                        placeholder=" "
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-6 text-color-text-sub font-light transition-all duration-[1000ms] peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-color-cyan-logic peer-focus:tracking-[0.2em] peer-focus:uppercase peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-color-text-ghost peer-valid:tracking-[0.2em] peer-valid:uppercase cursor-text pointer-events-none"
                      >
                        {t.contact[lang].label_msg}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group/btn relative w-full overflow-hidden bg-color-text-main text-color-obsidian px-10 py-5 rounded-full font-bold tracking-[0.2em] uppercase text-xs mt-16 transition-all duration-[1000ms] hover:bg-white flex items-center justify-center gap-4 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>{t.contact[lang].btn_submit}</span>
                    <ArrowRight className={cn("w-4 h-4 transition-transform duration-[1000ms]", lang === 'ar' ? "group-hover/btn:-translate-x-2 rotate-180" : "group-hover/btn:translate-x-2")} />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 w-full py-10"
                >
                  <div className="w-20 h-20 rounded-full border border-color-cyan-razor/20 bg-color-cyan-razor/5 flex items-center justify-center text-color-cyan-razor mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="headline text-2xl text-color-text-main">{t.contact[lang].success_msg}</h4>
                  <p className="body-md text-color-text-sub tracking-wider">
                    {t.contact[lang].success_desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PhysicalReveal>
      </div>

      {/* Refined Footer Branding */}
      <div className="w-full max-w-[85rem] mt-48 pt-12 border-t border-color-glass-border flex flex-col md:flex-row items-center justify-between gap-8 text-color-text-sub label-text z-10">
        <div className="flex flex-col gap-2">
           <p className="tracking-widest">{t.contact[lang].footer_rights}</p>
           <p className="tracking-widest text-color-text-main mt-2">{t.contact[lang].footer_brand}</p>
        </div>
        <div className="flex gap-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-color-text-main transition-colors duration-[1000ms]">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-color-text-main transition-colors duration-[1000ms]">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}