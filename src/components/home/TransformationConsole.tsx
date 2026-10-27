"use client";

import React, { useState } from 'react';

interface TransformationConsoleProps {
  lang: 'en' | 'ar';
}

export const TransformationConsole = ({ lang }: TransformationConsoleProps) => {
  const isAr = lang === 'ar';
  const [sliderPos, setSliderPos] = useState(50); // 0 to 100%

  return (
    <section id="transformation" className="py-24 md:py-36 bg-[#070D18] relative overflow-hidden border-t border-white/5 scroll-mt-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">
            {isAr ? 'فلسفة التحول الجذري' : 'THE TRANSFORMATION GAP'}
          </span>

          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
            {isAr ? 'الفارق بين القالب المكرر ومعيار هيـليرو' : 'The Gap Between Ordinary & Sovereign'}
          </h2>

          <p className="text-base md:text-xl text-slate-300 font-medium leading-relaxed">
            {isAr 
              ? 'حرّك الشريط التفاعلي لمشاهدة كيف نحوّل واجهتك الرقمية من موقع تقليدي باهت إلى منصة تفرض الهيبة والاعتماد.'
              : 'Interact with the split slider to witness how we elevate a standard template into an authoritative high-status digital asset.'}
          </p>
        </div>

        {/* COMPARISON STAGE */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1120]">
          
          {/* Top Elegant Status Bar */}
          <div className="px-6 py-4 bg-slate-900/80 border-b border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">
              {isAr ? 'المقارنة المباشرة للتجربة البصرية' : 'Visual Experience Benchmark'}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">
                {isAr ? 'نسبة العرض:' : 'RATIO:'} <strong className="text-cyan-400 font-bold">{sliderPos}%</strong>
              </span>
            </div>
          </div>

          {/* SPLIT SCREEN CONTAINER */}
          <div className="relative w-full aspect-[16/10] min-h-[380px] md:min-h-[500px] select-none overflow-hidden">
            
            {/* LAYER 1 (FULL / RIGHT): HELYRO MASTERPIECE (AFTER) */}
            <div className="absolute inset-0 bg-[#070D18] flex flex-col justify-between p-6 md:p-12">
              <div className="absolute inset-0 z-0">
                <img 
                  src="/horo.png" 
                  alt="Helyro After Transformation" 
                  className="w-full h-full object-cover opacity-60 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/90 via-transparent to-[#0B1120]/30" />
              </div>

              {/* After Label */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
                    {isAr ? 'معيار هيـليرو الفاخر' : 'HELYRO SOVEREIGN STANDARD'}
                  </span>
                </div>
              </div>

              {/* After Content Preview */}
              <div className="relative z-10 max-w-lg mt-auto" dir={isAr ? 'rtl' : 'ltr'}>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                  {isAr ? 'منصة تفرض حضورك وتكسب العقود' : 'Engineered For Market Dominance'}
                </h3>
                <p className="text-xs md:text-sm text-slate-200 font-medium leading-relaxed">
                  {isAr 
                    ? 'تصميم سينمائي مخصص، أفق الرياض ثلاثي الأبعاد، سرعة فائقة، وهيبة تليق بمستوى الشراكات الكبرى.'
                    : 'Bespoke 3D architecture, Riyadh skyline atmosphere, sub-second load times, and commanding market authority.'}
                </p>
              </div>
            </div>

            {/* LAYER 2 (CLIPPED / LEFT): OLD GENERIC TEMPLATE (BEFORE) */}
            <div 
              className="absolute inset-y-0 left-0 bg-[#F1F5F9] text-slate-800 overflow-hidden transition-[clip-path] duration-75 flex flex-col justify-between p-6 md:p-12 z-20 border-r-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-full h-full flex flex-col justify-between select-none">
                {/* Before Label */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-mono font-bold text-rose-800 uppercase tracking-wider">
                      {isAr ? 'المواقع النمطية التقليدية' : 'GENERIC CONVENTIONAL TEMPLATE'}
                    </span>
                  </div>
                </div>

                {/* Old Template Content */}
                <div className="my-auto py-4">
                  <div className="p-5 bg-white rounded-xl border border-slate-300 shadow-sm max-w-md">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Company Template
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                      We Do Big Things With New Ideas
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className="flex gap-2">
                      <div className="px-4 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-md">
                        Learn More
                      </div>
                      <div className="px-4 py-1.5 bg-slate-200 text-slate-700 text-xs font-medium rounded-md">
                        Contact
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-500">
                  {isAr ? 'تصميم مكرر يفتقر للهوية الفاخرة' : 'Overused layout with zero distinct identity'}
                </div>
              </div>
            </div>

            {/* DRAG HANDLE */}
            <div 
              className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 -ml-5 rounded-full bg-cyan-400 text-slate-950 shadow-xl shadow-cyan-400/80 border-2 border-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg font-black">drag_indicator</span>
              </div>
            </div>

            {/* INVISIBLE RANGE INPUT OVERLAY */}
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

          {/* Clean Core Strategic Values (No trivial instruction boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-slate-950/90 p-6 md:p-8" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="p-4 text-center">
              <h4 className="text-sm md:text-base font-bold text-white mb-1.5">
                {isAr ? 'الانطباع الأول (الـ 3 ثوانٍ الأولى)' : 'First 3 Seconds'}
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {isAr ? 'ينقل العميل المستهدف مباشرة إلى مشهد يفرض الهيبة والجدية.' : 'Transfers executive prospects directly into a commanding authority presence.'}
              </p>
            </div>

            <div className="p-4 text-center">
              <h4 className="text-sm md:text-base font-bold text-white mb-1.5">
                {isAr ? 'قوة الإقناع ومعدل التعاقد' : 'Conversion & Deal Velocity'}
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {isAr ? 'كل عنصر مبني ليبرر القيمة المرتفعة للعقود والشراكات.' : 'Engineered to support high-value contracts and decisive buyer conviction.'}
              </p>
            </div>

            <div className="p-4 text-center">
              <h4 className="text-sm md:text-base font-bold text-white mb-1.5">
                {isAr ? 'سرعة فائقة وأداء 60FPS' : 'Lightning 60 FPS Velocity'}
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {isAr ? 'عمق بصري ثلاثي الأبعاد مع سرعة تحميل فورية دون أي تأخير.' : 'Cinematic 3D depth optimized for sub-second load times on mobile.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
