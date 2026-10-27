"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesTotemProps {
  lang: 'en' | 'ar';
}

export const ServicesTotem = ({ lang }: ServicesTotemProps) => {
  const isAr = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "restaurant",
      titleEn: "Smart Restaurant Ecosystems",
      titleAr: "أنظمة المطاعم وقوائم الـ QR الفاخرة",
      subEn: "Digital Dining & Instant Ordering",
      subAr: "تجربة طعام رقمية فاخرة وسهلة الطلب",
      descEn: "Bespoke digital menus and ordering interfaces that eliminate platform commissions and elevate hospitality prestige.",
      descAr: "قوائم طعام تفاعلية وأنظمة طلب سريعة مصممة لأرقى المطاعم والوجهات. تعمل دون عمولات منصات وتمنح العميل تجربة بصرية باهرة.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1400",
      link: "/services/restaurant-menu"
    },
    {
      id: "corporate",
      titleEn: "Executive Corporate Platforms",
      titleAr: "مواقع الشركات الكبرى والويب التنفيذي",
      subEn: "Sovereign Digital Leadership",
      subAr: "منصات مؤسسية تفرض الهيبة والاعتماد",
      descEn: "Commanding corporate web infrastructure tailored for leadership entities, holding groups, and sovereign institutions.",
      descAr: "مواقع مؤسسية رفيعة المستوى تعكس ثقل الكيان وقوة مجلس إدارته. مصممة لتأهيل الشراكات الكبرى ومنافسات العقود والمشاريع الضخمة.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
      link: "/services/company-website"
    },
    {
      id: "dashboard",
      titleEn: "Intelligent Tech Dashboards",
      titleAr: "لوحات التحكم والأنظمة الوظيفية",
      subEn: "Intuitive Data & Operations",
      subAr: "واجهات اتخاذ القرار وإدارة العمليات",
      descEn: "Ultra-fast control panels and data suites that empower teams with visual clarity, real-time metrics, and instant actionability.",
      descAr: "لوحات تحكم برمجية واضحة تمنح فريقك وإدارتك رؤية لحظية لكل تفاصيل العمل، دون تعقيد أو بطء، مع سهولة تامة في اتخاذ القرار.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1400",
      link: "/services/app-dashboard"
    },
    {
      id: "ecommerce",
      titleEn: "High-Ticket Retail & E-Stores",
      titleAr: "المتاجر الإلكترونية العالمية الفاخرة",
      subEn: "Frictionless Conversion Architecture",
      subAr: "تجارة رقمية سلسة مصممة لرفع المبيعات",
      descEn: "Architected for high average order values, seamless payment flows, and lightning checkout speeds on all mobile devices.",
      descAr: "متاجر إلكترونية استثنائية للمنتجات والخدمات الفاخرة، تركز على وضوح قرار الشراء وتكامل بوابات الدفع السعودية السريعة.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400",
      link: "/services/ecommerce-store"
    },
    {
      id: "custom",
      titleEn: "Bespoke Enterprise Systems",
      titleAr: "الأنظمة الرقمية والبوابات الخاصة",
      subEn: "Tailored Operational Workflows",
      subAr: "قوة التشغيل والتحول الرقمي الكامل",
      descEn: "Custom-coded platforms solving unique operational bottlenecks with zero bloat and absolute reliability.",
      descAr: "أنظمة وبوابات رقمية مفصلة بالكامل وفق نموذج عمل شركتك، تربط الأنظمة وتؤتمت العمليات الحساسة بكفاءة مطلقة.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400",
      link: "/services/custom-system"
    }
  ];

  const activeService = services[activeIndex];

  return (
    <section id="services-totem" className="py-24 md:py-36 bg-[#060A14] relative overflow-hidden border-t border-white/5 scroll-mt-12">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">
              {isAr ? 'الخدمات والحلول المتخصصة' : 'CORE DISCIPLINES'}
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-tight">
              {isAr ? 'ما نقوم بهندسته وتنفيذه' : 'What We Engineer & Build'}
            </h2>
          </div>
          <p className="text-base md:text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
            {isAr 
              ? 'حلول برمجية وتنفيذ فاخر مصمم للشركات التي تبحث عن الوضوح والأداء والتفوق التنافسي.'
              : 'Specialized digital solutions engineered for organizations demanding performance and luxury execution.'}
          </p>
        </div>

        {/* 3D SHOWCASE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* DISCIPLINE SELECTOR */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {services.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300 relative overflow-hidden flex items-center justify-between ${
                    isCurrent 
                      ? 'bg-slate-900/90 border border-cyan-400/50 shadow-xl shadow-cyan-950/40' 
                      : 'bg-slate-900/40 border border-white/5 hover:border-white/20 hover:bg-slate-900/60'
                  }`}
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  {isCurrent && (
                    <motion.div 
                      layoutId="service-indicator"
                      className={`absolute top-0 bottom-0 ${isAr ? 'right-0' : 'left-0'} w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600`}
                    />
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium truncate mt-1">
                      {isAr ? item.subAr : item.subEn}
                    </p>
                  </div>

                  <span className={`material-symbols-outlined text-lg transition-transform ${isCurrent ? 'text-cyan-400' : 'text-slate-600'}`}>
                    {isAr ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE PROJECTION STAGE */}
          <div className="lg:col-span-7 relative min-h-[460px] md:min-h-[540px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950/80 p-8 md:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 z-0"
              >
                <img 
                  src={activeService.image} 
                  alt={activeService.titleEn}
                  className="w-full h-full object-cover opacity-30 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/40" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10" dir={isAr ? 'rtl' : 'ltr'}>
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-2 block">
                {isAr ? activeService.subAr : activeService.subEn}
              </span>
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {isAr ? activeService.titleAr : activeService.titleEn}
              </h3>
              <p className="text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
                {isAr ? activeService.descAr : activeService.descEn}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={activeService.link}
                className="cyber-glow-btn px-8 py-4 rounded-xl text-white font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-3 transition-all"
              >
                <span>{isAr ? 'مشاهدة النموذج التجريبي' : 'View Live Demo'}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
