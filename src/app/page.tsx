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
      title: "Live demos for digital businesses",
      desc: "One HELYRO site shows clients how their company website, restaurant menu, app dashboard, store, or automation system can feel before they start.",
      proofLabel: "Explore live experiences",
      proofItems: ["Companies", "Restaurants", "Apps", "Stores", "Automation", "SEO"],
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
      trustTitle: "Why clients keep scrolling",
      trustDesc: "HELYRO does not sell a vague promise. It shows the client a working direction before the first call",
      trustItems: [
        { title: "Real demos", desc: "Clients can open sample websites, menus, dashboards, stores, and portals instead of imagining the result" },
        { title: "Fast decisions", desc: "Every section explains what the business gets, how it looks, and where the client should click next" },
        { title: "Built for launch", desc: "The experience is designed for mobile sharing, WhatsApp inquiries, and a clear first impression" }
      ],
      processTitle: "How your project moves",
      process: ["Idea review", "Visual direction", "Live demo", "Launch and improve"],
      ctaTitle: "Send your idea. We turn it into a visible experience",
      ctaDesc: "Company website, restaurant menu, online store, dashboard, automation, or SEO-ready landing page",
      nav: { solutions: "Solutions", work: "Work", services: "Services", about: "About", contact: "Contact", policy: "Privacy Policy", terms: "Terms of Service", inquiry: "Business Inquiry" },
      services: [
        { title: "RESTAURANT SYSTEMS", sub: "DIGITAL DINING", desc: "Premium QR menus and ordering systems for elite establishments", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "COMPANY WEBSITES", sub: "EXECUTIVE WEB", desc: "High-end corporate platforms for global leadership", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "APP DASHBOARDS", sub: "INTUITIVE TECH", desc: "Powerful interfaces and functional software solutions", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-1" },
        { title: "ECOMMERCE STORES", sub: "PREMIUM RETAIL", desc: "High-performance online stores designed for growth", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-2" },
        { title: "CUSTOM SYSTEMS", sub: "INTERNAL POWER", desc: "Bespoke digital systems for modern business workflows", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", span: "md:col-span-3" }
      ]
    },
    ar: {
      tag: "استوديو هيـليرو",
      title: "تجارب حية للأعمال الرقمية",
      desc: "موقع HELYRO واحد يوضح للعميل كيف يمكن أن يظهر موقع الشركة، منيو المطعم، لوحة التطبيق، المتجر، أو نظام الأتمتة قبل بدء التنفيذ.",
      proofLabel: "استكشف التجارب الحية",
      proofItems: ["شركات", "مطاعم", "تطبيقات", "متاجر", "أتمتة", "ظهور"],
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
      trustTitle: "لماذا العميل يقتنع بسرعة",
      trustDesc: "HELYRO لا يبيع وعدًا مبهمًا. الموقع يعرض اتجاهًا عمليًا يستطيع العميل رؤيته قبل أول مكالمة",
      trustItems: [
        { title: "نماذج حية", desc: "العميل يفتح مواقع، منيوهات، لوحات، متاجر، وبوابات بدل أن يتخيل النتيجة" },
        { title: "قرار أسرع", desc: "كل قسم يوضح ماذا سيحصل عليه النشاط، كيف سيظهر، وأين يضغط للتواصل" },
        { title: "جاهز للإطلاق", desc: "التجربة مبنية للمشاركة على الجوال، استقبال واتساب، وترك انطباع أول واضح" }
      ],
      processTitle: "كيف يتحرك مشروعك",
      process: ["فهم الفكرة", "اتجاه بصري", "نموذج حي", "إطلاق وتحسين"],
      ctaTitle: "أرسل فكرتك. نحولها إلى تجربة يراها العميل",
      ctaDesc: "موقع شركة، منيو مطعم، متجر إلكتروني، لوحة تحكم، أتمتة، أو صفحة جاهزة لتحسين الظهور",
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
  const inquiryUrl = `https://wa.me/966532133581?text=${encodeURIComponent(
    lang === 'ar'
      ? 'مرحباً HELYRO، أريد مناقشة مشروع موقع أو تجربة رقمية.'
      : 'Hello HELYRO, I want to discuss a website or digital experience project.'
  )}`;

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
        timeoutId = setTimeout(tick, 70); // Natural typing speed
        return;
      }

      if (!deleting && letterIndex === phrase.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 2000); // Pause to read the full sentence
        return;
      }

      if (deleting && letterIndex > 0) {
        letterIndex -= 1;
        timeoutId = setTimeout(tick, 30); // Fast deleting
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeoutId = setTimeout(tick, 500); // Short pause before typing next
    };

    timeoutId = setTimeout(tick, 1000);

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
          <picture>
            <source srcSet="/horo-mobile.webp" media="(max-width: 768px)" type="image/webp" />
            <img 
              src="/horo.png" 
              className="w-full h-full object-cover opacity-90 saturate-125 contrast-110" 
              alt="Helyro Hero" 
              fetchPriority="high"
              decoding="async"
              onError={(e) => { 
                e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </picture>
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
                <Logo scrolled={false} className="hidden md:flex md:h-32 md:w-32" />
                <div className="flex flex-col gap-1">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">HELYRO</span>
                  <span className="text-sm md:text-base font-black uppercase tracking-[0.36em] text-helyro-accent">Premium Services</span>
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
              <div className="mb-8">
                <span className="block text-xs md:text-sm font-black uppercase tracking-[0.28em] text-white/45 mb-4">
                  {c.proofLabel}
                </span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {c.proofItems.map((item) => (
                    <span key={item} className="rounded-full bg-white/9 px-4 py-2 text-xs md:text-sm font-black text-white ring-1 ring-white/10 backdrop-blur-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
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
                <a href={inquiryUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-6 md:px-14 md:py-7 bg-white/10 ring-1 ring-white/15 text-white rounded-full font-black text-base md:text-lg tracking-[0.12em] uppercase hover:bg-white/15 active:scale-95 transition-all text-center">
                  {c.start}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* DECORATIVE ELEMENT */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-helyro-accent/5 rounded-full blur-[120px] z-0" />
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
                    loading="lazy"
                    decoding="async"
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

      <section className="py-24 md:py-36 px-6 md:px-12 bg-helyro-navy relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end mb-14 md:mb-20">
            <div>
              <span className="text-xs md:text-sm font-black tracking-[0.4em] text-helyro-accent uppercase mb-5 block">
                {lang === 'ar' ? 'الثقة قبل التواصل' : 'Trust before contact'}
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                {c.trustTitle}
              </h2>
            </div>
            <p className="text-xl md:text-3xl text-helyro-silver leading-relaxed font-bold max-w-3xl">
              {c.trustDesc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {c.trustItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="crystal-panel rounded-[28px] p-7 md:p-9 min-h-[260px] flex flex-col relative overflow-hidden group"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-helyro-accent/10 blur-3xl opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.16, 0.28, 0.16] }}
                  transition={{ duration: 4.5 + i, repeat: Infinity, ease: "easeInOut" }}
                />
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-4">{item.title}</h3>
                <p className="text-base md:text-lg text-helyro-silver leading-relaxed font-bold mt-auto">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12 bg-helyro-deep relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-none">
            {c.processTitle}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.985 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[22px] bg-white/7 ring-1 ring-white/10 px-6 py-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                <p className="text-xl font-black text-white tracking-tighter">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS - EXECUTIVE GRID (Refined Background) */}
      <section id="partners" className="py-24 md:py-32 bg-helyro-navy relative overflow-hidden border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs md:text-sm font-black tracking-[0.4em] text-helyro-accent uppercase mb-4 block">
              {lang === 'ar' ? 'التحالفات الاستراتيجية' : 'Strategic Alliances'}
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-none">
              {lang === 'ar' ? 'شركاء النجاح' : 'Our Partners'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 items-center">
            {[
              { name: "Through History", logo: "/logos/throughhistory.png", url: "https://throughhistory.org" },
              { name: "New Ways", logo: "/logos/newways.jpeg", url: "https://newways.sa/" },
              { name: "Raha Villa", logo: "/logos/raha.png", url: "https://rahavilla.com/", isCircleR: true },
              { name: "Rukn Al Saffa", logo: "/logos/ruknalsaffa.png", url: "http://ruknalsaffacars.sa/" },
              { name: "Globde", logo: "/logos/ise.jpg", url: "https://globde.com/" }
            ].map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center transition-all duration-700 hover:scale-105"
              >
                <div className="aspect-square w-full max-w-[120px] md:max-w-[140px] mx-auto flex items-center justify-center p-4 md:p-5 bg-white rounded-[2rem] shadow-xl shadow-black/20 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all">
                  {partner.isCircleR ? (
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-black flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-luxury text-black leading-none font-bold ml-1">R</span>
                    </div>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20 md:py-28 bg-helyro-deep relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-screen-2xl mx-auto rounded-[32px] md:rounded-[48px] crystal-panel px-8 py-12 md:p-16 shadow-2xl shadow-black/30 grid gap-10 md:grid-cols-[1.2fr_auto] md:items-center relative overflow-hidden group"
        >
          <motion.div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/8 blur-3xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div>
            <span className="block text-xs font-black uppercase tracking-[0.32em] text-helyro-accent mb-5">
              {lang === 'ar' ? 'جاهز نبدأ؟' : 'Ready to start?'}
            </span>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.92] mb-6 text-white">
              {c.ctaTitle}
            </h2>
            <p className="text-lg md:text-2xl font-bold leading-relaxed text-helyro-silver max-w-3xl">
              {c.ctaDesc}
            </p>
          </div>
          <a href={inquiryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-6 text-helyro-navy font-black uppercase tracking-[0.18em] shadow-xl active:scale-95 transition-all hover:scale-[1.02]">
            {c.start}
          </a>
        </motion.div>
      </section>

      {/* FOOTER - CORPORATE CLEAN */}
      <footer className="py-24 px-8 md:px-12 border-t border-white/5 bg-helyro-deep relative z-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4" dir="ltr">
            <Logo scrolled={false} className="h-12 w-12" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold tracking-tighter text-white">HELYRO</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-helyro-accent mt-2">Intelligent Execution</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-bold text-helyro-silver uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-white transition-colors">{c.nav.services}</a>
            <a href="#partners" className="hover:text-white transition-colors">{c.nav.work}</a>
            <a href={inquiryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{c.nav.inquiry}</a>
          </div>
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 HELYRO {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'ALL RIGHTS RESERVED'}
          </p>
        </div>
      </footer>

    </div>
  );
}
