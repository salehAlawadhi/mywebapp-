"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Logo } from '@/components/layout/Logo';

// Dynamically load the WebGL 3D City with SSR disabled
const CityCanvas = dynamic(() => import('@/components/3d/CityCanvas'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#060A14] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin opacity-50" />
    </div>
  )
});

interface CinematicHeroProps {
  lang: 'en' | 'ar';
  typedText: string;
}

export const CinematicHero = ({ lang, typedText }: CinematicHeroProps) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 py-24 md:py-32 overflow-hidden">
      
      {/* 1. REAL INTERACTIVE 3D WEBGL CITYSCAPE */}
      <div className="absolute inset-0 z-0 bg-[#060A14] overflow-hidden">
        <CityCanvas />

        {/* Soft Vignettes that preserve 3D visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-transparent pointer-events-none" />
        <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l from-[#060A14]/85 via-[#060A14]/30 to-transparent' : 'bg-gradient-to-r from-[#060A14]/85 via-[#060A14]/30 to-transparent'} pointer-events-none`} />
        
        {/* Top Vignette for Navbar */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#060A14] to-transparent pointer-events-none" />

        {/* 3D Telemetry Overlay Badge */}
        <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-cyan-500/30 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
            REAL-TIME WEBGL 3D ENGINE ACTIVE · 60 FPS
          </span>
        </div>
      </div>

      {/* 2. FOREGROUND CONTENT & AUTHORITY (Pointer Events Passthrough for 3D Interaction) */}
      <div className="max-w-screen-2xl mx-auto w-full z-10 relative mt-8 md:mt-0 pointer-events-none">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-3xl ${isAr ? 'text-right mr-0 ml-auto' : 'text-left ml-0 mr-auto'}`}
        >
          {/* Studio Brand Emblem */}
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-end gap-5 pointer-events-auto" dir="ltr">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition duration-500" />
              <div className="relative p-2.5 bg-[#0B1120]/90 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-xl">
                <Logo scrolled={false} className="h-14 w-14 md:h-18 md:w-18" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">HELYRO</span>
                <span className="px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full">
                  3D STUDIO
                </span>
              </div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-blue-200/80 mt-1">
                {isAr ? 'هندسة المنصات والمواقع السيادية' : 'High-Status Digital Platforms'}
              </span>
            </div>
          </div>

          {/* Telemetry Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-md mb-5 shadow-xl pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-wider text-slate-200">
              {isAr ? 'معيار رقمي يفرض الهيبة ويكسب ثقة العملاء' : 'Building the Future with Precision & Authority'}
            </span>
          </div>

          {/* Supreme Main Heading */}
          <h1 className="text-[clamp(2.6rem,5.8vw,6.4rem)] font-black tracking-tighter text-white mb-5 leading-[0.94] text-balance pointer-events-auto">
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
          <p className="text-base md:text-xl text-slate-200 max-w-2xl font-medium leading-relaxed mb-7 opacity-95 text-pretty pointer-events-auto">
            {isAr 
              ? 'نبني أول مشهد يراه عميلك المستهدف قبل أن يقرر التعاقد معك. حلول برمجية وتنفيذ فائق الدقة للشركات الجادة والمنشآت النخبوية.'
              : 'We architect the first page your high-ticket client encounters before deciding to partner with you. Uncompromising execution for serious enterprises.'}
          </p>

          {/* Typewriter Dynamic Line */}
          <div className="mb-8 min-h-[3.6rem] max-w-2xl p-4 rounded-2xl bg-slate-950/80 border border-white/15 backdrop-blur-md pointer-events-auto shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-cyan-400">
                {isAr ? 'ننفّذ لك الآن' : 'Live Execution Pipeline'}
              </span>
            </div>
            <span className="typewriter-line text-lg md:text-2xl font-black text-white leading-tight tracking-tight">
              {typedText}
              <span className="typewriter-caret text-cyan-400" aria-hidden="true" />
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 pointer-events-auto">
            <a 
              href="#transformation"
              className="cyber-glow-btn px-8 py-5 md:px-10 md:py-5 rounded-2xl text-white font-black text-xs md:text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center"
            >
              <span>{isAr ? 'شاهد فارق التحول (قبل وبعد)' : 'Witness The Transformation'}</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>

            <a 
              href="#services-totem"
              className="px-8 py-5 md:px-10 md:py-5 bg-slate-900/80 border border-white/20 hover:border-cyan-400/50 text-white rounded-2xl font-black text-xs md:text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center transition-all hover:bg-slate-800/80 active:scale-95 shadow-xl backdrop-blur-md"
            >
              <span>{isAr ? 'استكشف برج الخدمات' : 'Explore Services Totem'}</span>
              <span className="material-symbols-outlined text-base">layers</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
