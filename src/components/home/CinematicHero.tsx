"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/layout/Logo';

interface CinematicHeroProps {
  lang: 'en' | 'ar';
  typedText: string;
}

export const CinematicHero = ({ lang, typedText }: CinematicHeroProps) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24 md:py-32 overflow-hidden">
      {/* 1. CINEMATIC 3D BACKGROUND STAGE */}
      <div className="absolute inset-0 z-0 bg-[#060A14]">
        {/* Architectural Metropolis Base */}
        <img 
          src="/horo.png" 
          className="w-full h-full object-cover object-center opacity-85 saturate-125 contrast-115 scale-105 transition-transform duration-1000" 
          alt="Helyro Cyber Architecture" 
          onError={(e) => { 
            e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
          }}
        />

        {/* Volumetric Nocturnal Atmospheric Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
        <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#0B1120] via-[#0B1120]/75 to-transparent`} />
        
        {/* Subtle Cyber Grid & Focal Beams */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
        <div className="hero-daylight opacity-70" />
        <div className="hero-orbit hidden md:block" />
        <div className="hero-scan hidden md:block" />

        {/* Top & Bottom Vignettes */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0B1120] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT & AUTHORITY */}
      <div className="max-w-screen-2xl mx-auto w-full z-10 relative mt-8 md:mt-0">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-5xl ${isAr ? 'text-right mr-auto' : 'text-left ml-0'}`}
        >
          {/* Studio Brand Emblem */}
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-end gap-5" dir="ltr">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition duration-500" />
              <div className="relative p-2 bg-[#0B1120]/90 border border-white/10 rounded-2xl">
                <Logo scrolled={false} className="h-16 w-16 md:h-20 md:w-20" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">HELYRO</span>
                <span className="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">STUDIO</span>
              </div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-blue-300/70 mt-1">
                {isAr ? 'هندسة المنصات والمواقع السيادية' : 'High-Status Digital Platforms'}
              </span>
            </div>
          </div>

          {/* Telemetry Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-wider text-slate-200">
              {isAr ? 'معيار رقمي يفرض الهيبة ويكسب ثقة العملاء' : 'Building the Future with Precision & Authority'}
            </span>
          </div>

          {/* Supreme Main Heading */}
          <h1 className="text-[clamp(2.8rem,6.8vw,7.2rem)] font-black tracking-tighter text-white mb-6 leading-[0.92] text-balance">
            {isAr ? (
              <>
                مواقع تُبنى <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">لتكسب العقود</span> وتفرض الثقة
              </>
            ) : (
              <>
                Websites engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">command authority</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl font-medium leading-relaxed mb-8 opacity-90 text-pretty">
            {isAr 
              ? 'نبني أول مشهد يراه عميلك المستهدف قبل أن يقرر التعاقد معك. حلول برمجية وتنفيذ فائق الدقة للشركات الجادة والمنشآت النخبوية.'
              : 'We architect the first page your high-ticket client encounters before deciding to partner with you. Uncompromising execution for serious enterprises.'}
          </p>

          {/* Typewriter Dynamic Line */}
          <div className="mb-10 min-h-[3.6rem] max-w-3xl p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-cyan-400">
                {isAr ? 'ننفّذ لك الآن' : 'Live Execution Pipeline'}
              </span>
            </div>
            <span className="typewriter-line text-xl md:text-3xl font-black text-white leading-tight tracking-tight">
              {typedText}
              <span className="typewriter-caret text-cyan-400" aria-hidden="true" />
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6">
            <a 
              href="#transformation"
              className="cyber-glow-btn px-8 py-5 md:px-10 md:py-6 rounded-2xl text-white font-black text-sm md:text-base tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center"
            >
              <span>{isAr ? 'شاهد فارق التحول (قبل وبعد)' : 'Witness The Transformation'}</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>

            <a 
              href="#services-totem"
              className="px-8 py-5 md:px-10 md:py-6 bg-white/5 border border-white/15 hover:border-white/30 text-white rounded-2xl font-black text-sm md:text-base tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center transition-all hover:bg-white/10 active:scale-95"
            >
              <span>{isAr ? 'استكشف برج الخدمات' : 'Explore Services Totem'}</span>
              <span className="material-symbols-outlined text-lg">layers</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
