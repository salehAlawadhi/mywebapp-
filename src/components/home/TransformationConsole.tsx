"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TransformationConsoleProps {
  lang: 'en' | 'ar';
}

export const TransformationConsole = ({ lang }: TransformationConsoleProps) => {
  const isAr = lang === 'ar';
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%

  return (
    <section id="transformation" className="py-24 md:py-36 bg-[#070D18] relative overflow-hidden border-t border-white/5 scroll-mt-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-emerald-400">
              {isAr ? 'فلسفة التحول الجذري · BEFORE & AFTER' : 'EXTREME TRANSFORMATION ENGINE'}
            </span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
            {isAr ? 'شاهد الفارق بين القالب المكرر ومعيار هيـليرو' : 'The Gap Between Ordinary & Sovereign'}
          </h2>

          <p className="text-base md:text-xl text-slate-300 font-medium leading-relaxed">
            {isAr 
              ? 'حرّك الشريط التفاعلي بيدك لترى كيف نحوّل وجودك الرقمي من قالب عادي يمر عليه العميل مرور الكرام إلى تحفة بصرية تفرض الهيبة وتجلب العقود.'
              : 'Drag the interactive split handle to witness how we elevate a generic, forgotten template into an unforgettable high-status digital empire.'}
          </p>
        </div>

        {/* INTERACTIVE COMPARISON STAGE */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1120]">
          
          {/* Top Stage Bar */}
          <div className="p-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-400 hidden sm:inline">transformation_benchmark.exe</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-[11px]">
                {isAr ? 'نسبة التحول:' : 'SPLIT RATIO:'} <strong className="text-cyan-400">{sliderPos}%</strong>
              </span>
            </div>
          </div>

          {/* SPLIT SCREEN CONTAINER */}
          <div className="relative w-full aspect-[16/10] min-h-[380px] md:min-h-[520px] select-none overflow-hidden">
            
            {/* LAYER 1 (FULL / RIGHT): HELYRO MASTERPIECE (AFTER) */}
            <div className="absolute inset-0 bg-[#070D18] flex flex-col justify-between p-6 md:p-12">
              {/* Background Cyber Glow */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/horo.png" 
                  alt="Helyro After Transformation" 
                  className="w-full h-full object-cover opacity-70 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/90 via-transparent to-[#0B1120]/40" />
              </div>

              {/* After Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
                    {isAr ? 'معيار هيـليرو (كيف صار)' : 'HELYRO STANDARD (AFTER)'}
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold hidden sm:block">
                  AUTHORITY: MAXIMUM
                </span>
              </div>

              {/* After Content Preview */}
              <div className="relative z-10 max-w-lg mt-auto" dir={isAr ? 'rtl' : 'ltr'}>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em] block mb-2">
                  SOVEREIGN EXECUTION
                </span>
                <h3 className="text-2xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-3">
                  {isAr ? 'منصة تفرض وجودك في الصدارة' : 'Engineered For Dominance'}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                  {isAr 
                    ? 'تصميم سينمائي مخصص ثلاثي الأبعاد، واجهات هولوغرافية، سرعة تحميل 0.4 ثانية، يرفع معدل التعاقدات لـ 3 أضعاف.'
                    : 'Bespoke 3D cyber atmosphere, HUD interfaces, sub-second load times, and commanding market credibility.'}
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-400/40 text-[10px] font-mono text-cyan-200">
                    SPEED: 99/100
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-600/30 border border-emerald-400/40 text-[10px] font-mono text-emerald-200">
                    CONVERSION: +320%
                  </span>
                </div>
              </div>
            </div>

            {/* LAYER 2 (CLIPPED / LEFT): OLD GENERIC TEMPLATE (BEFORE) */}
            <div 
              className="absolute inset-y-0 left-0 bg-[#E2E8F0] text-slate-800 overflow-hidden transition-[clip-path] duration-75 flex flex-col justify-between p-6 md:p-12 z-20 border-r-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              style={{ width: `${sliderPos}%` }}
            >
              {/* Fake Generic 2010s Template Interior */}
              <div className="w-full h-full flex flex-col justify-between select-none">
                {/* Before Badges */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-500/20 border border-rose-500/40">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider">
                      {isAr ? 'القالب التقليدي القديم (كيف استلمنا)' : 'GENERIC TEMPLATE (BEFORE)'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 hidden sm:block">
                    TRUST: LOW
                  </span>
                </div>

                {/* Old Template Content */}
                <div className="my-auto py-4">
                  <div className="p-4 bg-white rounded-lg border border-slate-300 shadow-sm max-w-md">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
                      Welcome to Company Template
                    </span>
                    <h4 className="text-xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                      We Do Big Things With New Ideas
                    </h4>
                    <p className="text-xs text-slate-600 leading-normal mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-amber-400 text-slate-900 text-[10px] font-bold rounded">
                        Read More
                      </div>
                      <div className="px-3 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded">
                        Contact Us
                      </div>
                    </div>
                  </div>
                  <span className="inline-block mt-3 px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold rounded">
                    {isAr ? 'قالب مكرر يراه العميل في 100 موقع آخر' : 'Overused template with zero authority'}
                  </span>
                </div>

                {/* Old Specs */}
                <div className="text-[11px] font-mono text-slate-500">
                  {isAr ? 'بطء في التحميل · انعدام الفخامة · مظهر رخيص' : 'Slow load · Zero prestige · Low engagement'}
                </div>
              </div>
            </div>

            {/* INTERACTIVE DRAG HANDLE */}
            <div 
              className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 -ml-5 rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/80 border-2 border-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg font-black">drag_indicator</span>
              </div>
            </div>

            {/* INVISIBLE RANGE INPUT OVERLAY FOR SEAMLESS TOUCH/MOUSE DRAG */}
            <input 
              type="range"
              min="5"
              max="95"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
              aria-label="Transformation split slider"
            />
          </div>

          {/* Bottom Analysis Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-slate-950/80 p-6 md:p-8" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="p-4 text-center">
              <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1">
                {isAr ? '01 · الانطباع الأول (First 3s)' : '01 · FIRST 3 SECONDS'}
              </span>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                {isAr ? 'ينقل العميل من خانة التردد إلى الانبهار الفوري بهيبة الكيان.' : 'Transforms skepticism into instant enterprise conviction.'}
              </p>
            </div>

            <div className="p-4 text-center">
              <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1">
                {isAr ? '02 · قوة الإقناع والبيع (Conversion)' : '02 · CONVERSION POWER'}
              </span>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                {isAr ? 'كل عنصر مصمم لتبرير الأسعار المرتفعة والعقود ذات القيمة العالية.' : 'Engineered to command high-ticket pricing with zero resistance.'}
              </p>
            </div>

            <div className="p-4 text-center">
              <span className="text-[11px] font-mono text-cyan-400 font-bold block mb-1">
                {isAr ? '03 · السرعة والأداء (Speed & 60FPS)' : '03 · LIGHTNING 60 FPS'}
              </span>
              <p className="text-xs md:text-sm text-slate-300 font-medium">
                {isAr ? 'تأثيرات بصرية ثلاثية الأبعاد دون التضحية بجزء من الثانية في التحميل.' : 'Cinematic spatial effects with sub-second responsive performance.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
