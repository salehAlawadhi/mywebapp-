"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { Logo } from '@/components/layout/Logo';

/**
 * HELYRO ABSOLUTE AUTHORITY
 * 1. NO SMALL LINES: No grids, no noise, no thin borders.
 * 2. NO SMALL FONTS: 14px minimum, bold headings 80px+.
 * 3. CRYSTAL AESTHETIC: Thick glass, deep shadows.
 * 4. BILINGUAL SUPREMACY: AR/EN toggle with English brand.
 */

export default function HelyroHome() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const t = React.useMemo(() => ({
    en: {
      tag: "HELYRO STUDIO",
      title: "Websites that win trust",
      desc: "We build the first page your client sees before they decide to contact you.",
      loop: [
        "Portfolio sites for serious businesses",
        "Online stores that make buying clear",
        "Restaurant menus that feel premium",
        "Business systems your team can actually use"
      ],
      explore: "EXPLORE SOLUTIONS",
      start: "START PROJECT",
      servicesTitle: "What We Build",
      servicesDesc: "Explore realistic digital solutions designed for businesses that need clarity, performance, and premium execution",
      view: "VIEW DEMO",
      nav: { solutions: "Solutions", work: "Work", services: "Services", about: "About", contact: "Contact", policy: "Privacy Policy", terms: "Terms of Service", inquiry: "Business Inquiry" },
      services: [
        { title: "RESTAURANT SYSTEMS", sub: "DIGITAL DINING", desc: "Premium QR menus and ordering systems for elite establishments.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "COMPANY WEBSITES", sub: "EXECUTIVE WEB", desc: "High-end corporate platforms for global leadership", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "APP DASHBOARDS", sub: "INTUITIVE TECH", desc: "Powerful interfaces and functional software solutions", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "ECOMMERCE STORES", sub: "PREMIUM RETAIL", desc: "High-performance online stores designed for growth.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "CUSTOM SYSTEMS", sub: "INTERNAL POWER", desc: "Bespoke digital systems for modern business workflows.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-3" }
      ]
    },
    ar: {
      tag: "استوديو هيـليرو",
      title: "مواقع تكسب الثقة",
      desc: "نبني أول صفحة يراها عميلك قبل أن يقرر التواصل معك.",
      loop: [
        "مواقع أعمال ترفع الثقة من أول زيارة",
        "متاجر واضحة تقرّب قرار الشراء",
        "قوائم مطاعم فاخرة وسهلة الطلب",
        "أنظمة تشغيل يفهمها فريقك بسرعة"
      ],
      explore: "استكشف الحلول الرقمية",
      start: "ابدأ تنفيذ مشروعك",
      servicesTitle: "ما نقوم بتنفيذه",
      servicesDesc: "استكشف الحلول الرقمية الواقعية المصممة للشركات التي تبحث عن الوضوح والأداء والتنفيذ الفاخر",
      view: "مشاهدة النموذج",
      nav: { solutions: "الحلول", work: "أعمالنا", services: "الخدمات", about: "عن هيـليرو", contact: "تواصل معنا", policy: "سياسة الخصوصية", terms: "الشروط والأحكام", inquiry: "طلب تجاري" },
      services: [
        { title: "أنظمة المطاعم الذكية", sub: "تجربة طعام رقمية", desc: "قوائم QR وأنظمة طلب متكاملة مصممة لأرقى المنشآت والوجهات", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "مواقع الشركات الكبرى", sub: "الويب التنفيذي", desc: "منصات مؤسسية رفيعة المستوى تعكس ريادة الأعمال العالمية", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "لوحات التحكم والبيانات", sub: "تقنية بديهية", desc: "واجهات قوية وحلول برمجية وظيفية تدعم اتخاذ القرار بذكاء", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "المتاجر الإلكترونية العالمية", sub: "تجارة رقمية فاخرة", desc: "متاجر إلكترونية عالية الأداء مصممة للنمو والتوسع السريع", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "الأنظمة الرقمية المخصصة", sub: "قوة التشغيل", desc: "أنظمة رقمية مفصلة لسير عمل الأعمال الحديثة والتحول الرقمي الكامل", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-3" }
      ]
    }
  }), []);

  const c = t[lang];
  const [typedText, setTypedText] = useState(c.loop[0]);
  const serviceLinks = [
    "/services/restaurant-menu",
    "/services/company-website",
    "/services/app-dashboard",
    "/services/ecommerce-store",
    "/services/custom-system",
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const phrases = t[lang].loop;

    if (reduceMotion) {
      const timeoutId = setTimeout(() => setTypedText(phrases[0]), 0);
      return () => clearTimeout(timeoutId);
    }

    let phraseIndex = 0;
    let letterIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[phraseIndex];
      setTypedText(phrase.slice(0, letterIndex));

      if (!deleting && letterIndex < phrase.length) {
        letterIndex += 1;
        timeoutId = setTimeout(tick, 500); // Slower typing
        return;
      }

      if (!deleting && letterIndex === phrase.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 10000); // Longer pause
        return;
      }

      if (deleting && letterIndex > 0) {
        letterIndex -= 1;
        timeoutId = setTimeout(tick, 300); // Slower deleting
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeoutId = setTimeout(tick, 3000); // Longer pause before next
    };

    timeoutId = setTimeout(tick, 2000);

    return () => clearTimeout(timeoutId);
  }, [lang, t]);

  return (
    <div className={`min-h-screen bg-helyro-navy selection:bg-helyro-accent selection:text-white overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* INTELLIGENT NAVY BACKGROUND */}
      <div className="fixed inset-0 navy-radiance z-0 pointer-events-none" />
      <div className="soft-glow" />

      <GlobalHeader lang={lang} setLang={setLang} />

      {/* HERO - RADIANT IMPACT */}
      <section className="relative min-h-[100dvh] flex items-center px-6 py-20 md:px-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#070D18]">
          <img 
            src="/horo.png" 
            className="w-full h-full object-cover opacity-90 saturate-125 contrast-110" 
            alt="Helyro Hero" 
            onError={(e) => { 
              e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className={`absolute inset-0 ${lang === 'ar' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-helyro-navy via-helyro-navy/48 to-helyro-navy/0`} />
          <div className="absolute inset-0 hero-daylight" />
          <div className="absolute inset-0 bg-helyro-navy/0 backdrop-blur-[0.35px]" />
          <div className="hero-orbit hidden md:block" />
          <div className="hero-scan hidden md:block" />
        </div>

        <div className="max-w-screen-2xl mx-auto w-full z-10 relative">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-6xl ${lang === 'ar' ? 'text-right mr-auto' : 'text-left ml-0'}`}
          >
            <div>
              <div className="mb-10 flex flex-col md:flex-row items-center md:items-end gap-6" dir="ltr">
                <Logo scrolled={false} className="h-24 w-24 md:h-32 md:w-32" />
                <div className="flex flex-col gap-1">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">HELYRO</span>
                  <span className="text-sm md:text-base font-black uppercase tracking-[0.36em] text-helyro-accent">Digital Studio</span>
                </div>
              </div>
              <span className="inline-block rounded-full bg-white/8 px-8 py-4 text-helyro-white text-base md:text-xl font-black shadow-xl ring-1 ring-white/10 mb-6">
                {c.tag}
              </span>
              <h1 className="text-[clamp(3.6rem,7.8vw,8.2rem)] font-black tracking-tighter text-white mb-7 leading-[0.88] text-balance">
                {c.title}
              </h1>
              <p className="text-2xl md:text-3xl text-helyro-white max-w-4xl font-bold leading-[1.28] mb-8 opacity-90 text-pretty">
                {c.desc}
              </p>
              <div className="mb-8 min-h-[4rem] max-w-3xl">
                <span className="block text-sm md:text-base font-black uppercase tracking-[0.22em] text-helyro-accent mb-3">
                  {lang === 'ar' ? 'نجهز لك' : 'Now building'}
                </span>
                <span className="typewriter-line text-3xl md:text-5xl font-black text-helyro-accent leading-[1.05] tracking-tighter">
                  {typedText}
                  <span className="typewriter-caret bg-helyro-accent" aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 md:gap-8">
                <a href="#services" className="px-10 py-6 md:px-14 md:py-7 bg-white text-helyro-navy rounded-full font-black text-base md:text-lg tracking-[0.12em] uppercase hover:scale-[1.03] active:scale-95 transition-all shadow-2xl shadow-helyro-accent/30 text-center">
                  {c.explore}
                </a>
                <button className="px-10 py-6 md:px-14 md:py-7 bg-white/10 ring-1 ring-white/15 text-white rounded-full font-black text-base md:text-lg tracking-[0.12em] uppercase hover:bg-white/15 active:scale-95 transition-all">
                  {c.start}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* DECORATIVE ELEMENT */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-helyro-accent/5 rounded-full blur-[120px] z-0" />
      </section>

      {/* PARTNERS - EXECUTIVE GRID (Refined Background) */}
      <section id="partners" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs md:text-sm font-black tracking-[0.4em] text-helyro-navy uppercase mb-4 block">
              {lang === 'ar' ? 'التحالفات الاستراتيجية' : 'Strategic Alliances'}
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none">
              {lang === 'ar' ? 'شركاء النجاح' : 'Our Partners'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 items-center">
            {[
              { name: "Through History", logo: "/logos/throughhistory.png", url: "https://throughhistory.org" },
              { name: "New Ways", logo: "/logos/newways.jpeg", url: "https://newways.sa/" },
              { name: "Raha Villa", logo: "/logos/raha.png", url: "https://rahavilla.com/" },
              { name: "Rukn Al Saffa", logo: "/logos/ruknalsaffa.png", url: "http://ruknalsaffacars.sa/" },
              { name: "Globde", logo: "/logos/ise.jpg", url: "https://globde.com/" }
            ].map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="flex items-center justify-center transition-all duration-700"
              >
                <div className="w-full h-24 md:h-28 flex items-center justify-center p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 md:py-44 px-6 md:px-12 bg-helyro-deep/50 relative overflow-hidden scroll-mt-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                {c.servicesTitle}
              </h2>
              <p className="text-xl md:text-3xl text-helyro-silver leading-relaxed font-bold max-w-3xl">
                {c.servicesDesc}
              </p>
            </div>
            <div className="h-[1px] flex-1 bg-white/10 hidden md:block mx-12 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {c.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`crystal-panel rounded-[24px] md:rounded-[32px] overflow-hidden relative min-h-[440px] md:min-h-[540px] flex flex-col ${s.span}`}
              >
                {/* STATIC MIRROR BACKGROUND */}
                <div className="absolute inset-0 z-0 group">
                  <img 
                    src={s.image} 
                    className="w-full h-full object-cover opacity-60 grayscale-[0.2] transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0" 
                    alt={s.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-helyro-navy via-helyro-navy/70 to-transparent" />
                </div>
                
                {/* PERMANENTLY VISIBLE CONTENT */}
                <div className="relative z-10 p-8 md:p-12 mt-auto group-hover:translate-y-[-8px] transition-transform duration-500">
                  <span className="text-sm md:text-lg font-black text-helyro-accent uppercase tracking-[0.28em] mb-5 block">{s.sub}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[0.95] group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-lg md:text-2xl text-helyro-silver leading-relaxed mb-8 md:mb-12 max-w-2xl font-bold">
                    {s.desc}
                  </p>
                  <a href={serviceLinks[i]} className="flex items-center gap-4 text-white text-base md:text-lg font-black uppercase tracking-widest group/btn border-b-2 border-white/20 pb-3 w-fit group-hover:border-helyro-accent transition-all">
                    <span>{c.view}</span>
                    <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - CORPORATE CLEAN */}
      <footer className="py-24 px-8 md:px-12 border-t border-white/5 bg-helyro-deep relative z-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start" dir="ltr">
            <span className="text-3xl font-bold tracking-tighter text-white">HELYRO</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-helyro-accent mt-2">Intelligent Execution</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-bold text-helyro-silver uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">{c.nav.policy}</a>
            <a href="#" className="hover:text-white transition-colors">{c.nav.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{c.nav.inquiry}</a>
          </div>
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 HELYRO. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'ALL RIGHTS RESERVED.'}
          </p>
        </div>
      </footer>

    </div>
  );
}
