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
      num: "01",
      titleEn: "Smart Restaurant Ecosystems",
      titleAr: "أنظمة المطاعم وقوائم الـ QR الفاخرة",
      subEn: "Digital Dining & Instant Ordering",
      subAr: "تجربة طعام رقمية فاخرة وسهلة الطلب",
      descEn: "Bespoke high-end digital menus and ordering interfaces that eliminate platform commissions and elevate hospitality prestige.",
      descAr: "قوائم طعام تفاعلية وأنظمة طلب سريعة مصممة لأرقى المطاعم واللاونجات. تعمل دون عمولات منصات وتمنح العميل تجربة بصرية باهرة.",
      metrics: isAr ? ["سرعة استجابة 0.3 ثانية", "صفر عمولات خارجية", "متوافق مع Apple Pay والواتساب"] : ["0.3s Instant Load", "Zero Commission Fees", "Apple Pay & WhatsApp Ready"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1400",
      link: "/services/restaurant-menu"
    },
    {
      id: "corporate",
      num: "02",
      titleEn: "Executive Corporate Platforms",
      titleAr: "مواقع الشركات الكبرى والويب التنفيذي",
      subEn: "Sovereign Digital Leadership",
      subAr: "منصات مؤسسية تفرض الهيبة والاعتماد",
      descEn: "Commanding corporate web infrastructure tailored for leadership entities, holding groups, and sovereign institutions.",
      descAr: "مواقع مؤسسية رفيعة المستوى تعكس ثقل الشركة وقوة مجلس إدارتها. مصممة لتأهيل الشراكات الكبرى ومنافسات العقود الحكومية والخاصة.",
      metrics: isAr ? ["معمارية بصرية سيادية", "حماية وأمان مؤسسي", "توثيق الاعتمادات والمشاريع"] : ["Sovereign Visual DNA", "Enterprise Grade Security", "Audit-Ready Portfolio"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
      link: "/services/company-website"
    },
    {
      id: "dashboard",
      num: "03",
      titleEn: "Intelligent Tech Dashboards",
      titleAr: "لوحات التحكم والأنظمة الوظيفية",
      subEn: "Intuitive Data & Operations",
      subAr: "واجهات اتخاذ القرار وإدارة العمليات",
      descEn: "Ultra-fast control panels and data suites that empower teams with visual clarity, real-time metrics, and instant actionability.",
      descAr: "لوحات تحكم برمجية واضحة تمنح فريقك وإدارتك رؤية لحظية لكل تفاصيل العمل، دون تعقيد أو بطء، مع سهولة تامة في الاستخدام.",
      metrics: isAr ? ["معالجة بيانات فورية", "واجهات مستخدم بديهية", "صلاحيات متعددة المستويات"] : ["Sub-second Data Feeds", "Intuitive UX Design", "Granular Access Roles"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1400",
      link: "/services/app-dashboard"
    },
    {
      id: "ecommerce",
      num: "04",
      titleEn: "High-Ticket Retail & E-Stores",
      titleAr: "المتاجر الإلكترونية العالمية الفاخرة",
      subEn: "Frictionless Conversion Architecture",
      subAr: "تجارة رقمية سلسة مصممة لرفع المبيعات",
      descEn: "Architected for high average order values (AOV), seamless payment flows, and lightning checkout speeds on all mobile devices.",
      descAr: "متاجر إلكترونية استثنائية للمنتجات الفاخرة والخدمات المتخصصة، تركز على وضوح قرار الشراء وتكامل بوابات الدفع السعودية (مدى، تابي، تمارا).",
      metrics: isAr ? ["دعم مدى وتابي وتمارا", "إتمام طلب بـ 3 خطوات", "تجربة جوال فائقة السلاسة"] : ["Mada & BNPL Integrated", "3-Step Instant Checkout", "Mobile-First UX"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1400",
      link: "/services/ecommerce-store"
    },
    {
      id: "custom",
      num: "05",
      titleEn: "Bespoke Enterprise Systems",
      titleAr: "الأنظمة الرقمية والبوابات الخاصة",
      subEn: "Tailored Operational Workflows",
      subAr: "قوة التشغيل والتحول الرقمي الكامل",
      descEn: "Custom-coded platforms solving unique operational bottlenecks with zero bloat and absolute reliability.",
      descAr: "أنظمة وبوابات رقمية مفصلة بالكامل وفق نموذج عمل شركتك، تربط الأنظمة الداخلية وتؤتمت العمليات الحساسة بكفاءة مطلقة.",
      metrics: isAr ? ["كود مخصص بدون قوالب جاهزة", "ربط كامل عبر APIs", "بنية تحتية قابلة للتوسع"] : ["100% Bespoke Codebase", "Deep API Orchestration", "Scalable Cloud Infra"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400",
      link: "/services/custom-system"
    }
  ];

  const activeService = services[activeIndex];

  return (
    <section id="services-totem" className="py-24 md:py-36 bg-[#060A14] relative overflow-hidden border-t border-white/5 scroll-mt-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                {isAr ? 'برج الخدمات التفاعلي · HUD TOTEM' : 'HOLOGRAPHIC SERVICES TOTEM'}
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-tight">
              {isAr ? 'ما نقوم بهندسته وتنفيذه' : 'Bespoke Digital Disciplines'}
            </h2>
          </div>
          <p className="text-base md:text-xl text-slate-400 max-w-xl font-medium leading-relaxed">
            {isAr 
              ? 'تفاعل مع البرج لاكتشاف التخصصات البرمجية الدقيقة التي نقدمها لعملائنا لضمان التفوق الرقمي.'
              : 'Interact with the totem to explore our specialized engineering verticals engineered for market dominance.'}
          </p>
        </div>

        {/* 3D HUD / TOTEM LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: THE HOLOGRAPHIC TOTEM (Interactive Vertical Console) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500 mb-1 px-2 flex items-center justify-between">
              <span>{isAr ? 'اختر التخصص البرمجي' : 'SELECT DISCIPLINE'}</span>
              <span className="text-cyan-400 font-mono">0{activeIndex + 1} / 05</span>
            </div>

            {services.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-400 relative overflow-hidden group flex items-center gap-4 ${
                    isCurrent 
                      ? 'hud-panel-active scale-[1.02]' 
                      : 'hud-panel hover:bg-slate-900/60 opacity-75 hover:opacity-100'
                  }`}
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  {/* Active Neon Accent Bar */}
                  {isCurrent && (
                    <motion.div 
                      layoutId="totem-indicator"
                      className={`absolute top-0 bottom-0 ${isAr ? 'right-0' : 'left-0'} w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600`}
                    />
                  )}

                  <span className={`font-mono text-sm md:text-base font-black ${isCurrent ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {item.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base md:text-lg font-black tracking-tight leading-snug transition-colors ${isCurrent ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
                      {isAr ? item.subAr : item.subEn}
                    </p>
                  </div>

                  <span className={`material-symbols-outlined text-lg transition-transform ${isCurrent ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`}>
                    {isAr ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: THE INTERACTIVE PROJECTION STAGE (Backdrop & Specs) */}
          <div className="lg:col-span-7 relative min-h-[480px] md:min-h-[580px] rounded-3xl overflow-hidden hud-panel p-6 md:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0"
              >
                {/* Visual Backdrop */}
                <img 
                  src={activeService.image} 
                  alt={activeService.titleEn}
                  className="w-full h-full object-cover opacity-35 saturate-125"
                />
                {/* Multi-layered Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/40" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B1120]/60 to-[#0B1120]" />
              </motion.div>
            </AnimatePresence>

            {/* Stage Foreground Details */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
                  {isAr ? 'نظام مُعتمد · جاهز للتشغيل' : 'HELYRO VERIFIED DISCIPLINE'}
                </span>
              </div>
              <span className="text-xs font-mono font-black text-slate-400">
                DISCIPLINE_{activeService.num}
              </span>
            </div>

            <div className="relative z-10 my-8" dir={isAr ? 'rtl' : 'ltr'}>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-cyan-400 mb-2 block">
                {isAr ? activeService.subAr : activeService.subEn}
              </span>
              <h3 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {isAr ? activeService.titleAr : activeService.titleEn}
              </h3>
              <p className="text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
                {isAr ? activeService.descAr : activeService.descEn}
              </p>

              {/* Technical Precision Chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {activeService.metrics.map((m, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs md:text-sm font-bold text-slate-200 backdrop-blur-md shadow-lg flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={activeService.link}
                className="w-full sm:w-auto cyber-glow-btn px-8 py-4 rounded-xl text-white font-black text-xs md:text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all"
              >
                <span>{isAr ? 'مشاهدة النموذج الحي' : 'View Live Demo'}</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>

              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                {isAr ? 'تنفيذ واقعي قبل الإطلاق التجاري' : 'Interactive Prototype Preview Available'}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
