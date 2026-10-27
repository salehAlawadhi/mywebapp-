"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Logo } from '@/components/layout/Logo';

// Dynamically load the WebGL Riyadh 3D Scene
const CityCanvas = dynamic(() => import('@/components/3d/CityCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#060A14]" />
});

interface CinematicHeroProps {
  lang: 'en' | 'ar';
  typedText: string;
}

export const CinematicHero = ({ lang, typedText }: CinematicHeroProps) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative min-h-[100dvh] flex items-center px-6 py-24 md:py-32 overflow-hidden">
      
      {/* 1. REAL RIYADH SKYLINE 3D WEBGL (برج المملكة والفيصلية) */}
      <div className="absolute inset-0 z-0 bg-[#060A14] overflow-hidden">
        <CityCanvas />

        {/* Soft atmospheric gradient allowing the 3D Riyadh skyline to breathe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A14] via-transparent to-transparent pointer-events-none" />
        <div className={`absolute inset-0 ${isAr ? 'bg-gradient-to-l from-[#060A14]/80 via-[#060A14]/25 to-transparent' : 'bg-gradient-to-r from-[#060A14]/80 via-[#060A14]/25 to-transparent'} pointer-events-none`} />
        
        {/* Top Fade for Seamless Header Integration */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#060A14] to-transparent pointer-events-none" />
      </div>

      {/* 2. FOREGROUND CONTENT & MAJESTIC TYPOGRAPHY */}
      <div className="max-w-screen-2xl mx-auto w-full z-10 relative mt-4 md:mt-0 pointer-events-none">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-3xl ${isAr ? 'text-right mr-0 ml-auto' : 'text-left ml-0 mr-auto'}`}
        >
          {/* Studio Brand Header */}
          <div className="mb-6 flex flex-col md:flex-row items-start md:items-end gap-5 pointer-events-auto" dir="ltr">
            <div className="relative group cursor-pointer">
              <div className="relative p-2.5 bg-[#0B1120]/80 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
                <Logo scrolled={false} className="h-14 w-14 md:h-16 md:w-16" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">HELYRO</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400/90 mt-1">
                {isAr ? 'استوديو المنصات الرقمية السيادية' : 'Sovereign Digital Architecture'}
              </span>
            </div>
          </div>

          {/* Supreme Main Heading */}
          <h1 className="text-[clamp(2.8rem,5.6vw,6.2rem)] font-black tracking-tighter text-white mb-6 leading-[0.95] text-balance pointer-events-auto">
            {isAr ? (
              <>
                مواقع تُبنى <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-white">لتكسب العقود</span> وتفرض الهيبة
              </>
            ) : (
              <>
                Websites engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-white">command authority</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-slate-200 max-w-2xl font-medium leading-relaxed mb-6 opacity-95 text-pretty pointer-events-auto">
            {isAr 
              ? 'نبني أول انطباع يراه عميلك قبل أن يقرر التعاقد معك. حلول برمجية وتنفيذ فائق الدقة للمنشآت النخبوية وكبرى الشركات.'
              : 'We architect the commanding first impression before enterprise clients commit to partnerships. Uncompromising precision for high-ticket entities.'}
          </p>

          {/* Elegant Frameless Typewriter Pipeline */}
          <div className="mb-8 min-h-[3.2rem] max-w-2xl pointer-events-auto">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                {isAr ? 'ننفّذ لك الآن' : 'Now Executing'}
              </span>
            </div>
            <span className="typewriter-line text-xl md:text-3xl font-black text-white leading-tight tracking-tight">
              {typedText}
              <span className="typewriter-caret text-cyan-400" aria-hidden="true" />
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 pointer-events-auto">
            <a 
              href="#transformation"
              className="cyber-glow-btn px-8 py-5 md:px-10 md:py-5 rounded-2xl text-white font-black text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center"
            >
              <span>{isAr ? 'شاهد فارق التحول' : 'Witness The Transformation'}</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>

            <a 
              href="#services-totem"
              className="px-8 py-5 md:px-10 md:py-5 bg-slate-900/60 border border-white/15 hover:border-cyan-400/50 text-white rounded-2xl font-black text-sm tracking-[0.1em] uppercase flex items-center justify-center gap-3 text-center transition-all hover:bg-slate-800/80 active:scale-95 shadow-xl backdrop-blur-md"
            >
              <span>{isAr ? 'استكشف الخدمات' : 'Explore Solutions'}</span>
              <span className="material-symbols-outlined text-base">layers</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
