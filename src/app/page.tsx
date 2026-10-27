"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GlobalHeader } from '@/components/layout/GlobalHeader';
import { Logo } from '@/components/layout/Logo';
import { CinematicHero } from '@/components/home/CinematicHero';
import { ServicesTotem } from '@/components/home/ServicesTotem';
import { TransformationConsole } from '@/components/home/TransformationConsole';

export default function HelyroHome() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar'); // Default to Arabic

  const t = useMemo(() => ({
    en: {
      loop: [
        "Executive websites for serious organizations",
        "High-ticket ecommerce stores engineered for growth",
        "Fine-dining QR menus & commission-free ordering",
        "Intuitive dashboards your leadership team can actually use"
      ],
      trustTitle: "Why Enterprise Clients Choose HELYRO",
      trustDesc: "We do not sell vague promises or generic templates. We architect a bespoke, working digital presence before the first call.",
      trustItems: [
        { 
          title: "Realistic Live Demos", 
          desc: "Clients interact with functional prototypes, testing speed, aesthetics, and user flows before committing budgets." 
        },
        { 
          title: "Sovereign Visual DNA", 
          desc: "Every layout is custom-authored to command authority, justify high-ticket pricing, and outshine competitors." 
        },
        { 
          title: "Sub-Second Performance", 
          desc: "60 FPS animations with zero layout shift. Optimized for executive mobile browsing and instant WhatsApp conversions." 
        }
      ],
      processTitle: "Our Precision Delivery Pipeline",
      process: [
        { step: "01", title: "Strategic Brief", desc: "Understanding your high-value audience & goals" },
        { step: "02", title: "Visual Direction", desc: "Crafting the sovereign aesthetic & 3D atmosphere" },
        { step: "03", title: "Live Prototype", desc: "Interactive demo review on real devices" },
        { step: "04", title: "Launch & Scale", desc: "Full production deployment with audit-grade security" }
      ],
      ctaTitle: "Ready to elevate your business into a digital masterpiece?",
      ctaDesc: "Share your vision with our execution team. We build the platform that commands respect and wins deals.",
      ctaButton: "START YOUR PROJECT NOW",
      nav: { solutions: "Solutions", work: "Partners", services: "Services", inquiry: "Business Inquiry" }
    },
    ar: {
      loop: [
        "مواقع أعمال ومنصات مؤسسية تفرض الهيبة من أول زيارة",
        "متاجر إلكترونية واضحة تقرّب قرار الشراء وترفع المبيعات",
        "قوائم مطاعم فاخرة وسريعة الطلب بدون عمولات تطبيقات",
        "لوحات تحكم وأنظمة تشغيل يفهمها فريقك ويتخذ عبرها القرارات"
      ],
      trustTitle: "لماذا تختار كبرى المنشآت استوديو هيـليرو؟",
      trustDesc: "نحن لا نبيع قوالب مكررة أو وعوداً مبهمة؛ بل نهندس حضوراً رقمياً سيادياً مخصصاً يراه العميل ويتفاعل معه قبل توقيع العقد.",
      trustItems: [
        { 
          title: "معاينة حية واقعية قبل التنفيذ", 
          desc: "يرى العميل نموذجاً حياً للمنصة، ويختبر التجربة بنفسه على الجوال قبل اعتماد المشروع." 
        },
        { 
          title: "معمارية بصرية تفرض الهيبة", 
          desc: "تصميم مخصص بالكامل يعكس قوة الكيان التجاري ويبرر الأسعار المرتفعة أمام أصحاب القرار." 
        },
        { 
          title: "سرعة استثنائية وأداء 60FPS", 
          desc: "واجهات سينمائية خفيفة جداً تفتح في أجزاء من الثانية وتدعم التحويل المباشر عبر الواتساب." 
        }
      ],
      processTitle: "مراحل هندسة وتنفيذ مشروعك معنا",
      process: [
        { step: "01", title: "التشخيص الاستراتيجي", desc: "تحديد هوية العميل والهدف المالي من المنصة" },
        { step: "02", title: "الاتجاه البصري السيادي", desc: "صياغة الأجواء السينمائية والواجهات الكريستالية" },
        { step: "03", title: "النموذج التفاعلي الحي", desc: "مراجعة عملية وتجربة حقيقية على الهاتف والكمبيوتر" },
        { step: "04", title: "الإطلاق والتمكين", desc: "تسليم المنصة جاهزة مع حماية وأمان مؤسسي كامل" }
      ],
      ctaTitle: "جاهز لنقل موقعك إلى مصاف التحف الرقمية العالمية؟",
      ctaDesc: "تواصل مع فريق التطوير في هيـليرو الآن. سنبني المنصة التي تليق بطموحك وتكسب ثقة عملائك فوراً.",
      ctaButton: "ابدأ تنفيذ مشروعك الآن",
      nav: { solutions: "الحلول", work: "الشركاء", services: "الخدمات", inquiry: "طلب تجاري" }
    }
  }), []);

  const c = t[lang];
  const [typedText, setTypedText] = useState(c.loop[0]);

  // Fast & Natural Typewriter Effect
  useEffect(() => {
    const phrases = t[lang].loop;
    let phraseIndex = 0;
    let letterIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[phraseIndex];
      setTypedText(phrase.slice(0, letterIndex));

      if (!deleting && letterIndex < phrase.length) {
        letterIndex += 1;
        timeoutId = setTimeout(tick, 55);
        return;
      }

      if (!deleting && letterIndex === phrase.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 2200);
        return;
      }

      if (deleting && letterIndex > 0) {
        letterIndex -= 1;
        timeoutId = setTimeout(tick, 22);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeoutId = setTimeout(tick, 350);
    };

    timeoutId = setTimeout(tick, 800);
    return () => clearTimeout(timeoutId);
  }, [lang, t]);

  const whatsappInquiryUrl = "https://wa.me/966532133581?text=" + encodeURIComponent(
    lang === 'ar' 
      ? "مرحباً هيـليرو، أود استشارة حول هندسة موقع / نظام رقمي متقدم لمنشأتنا."
      : "Hello HELYRO, I would like to inquire about developing a high-end digital platform for our business."
  );

  return (
    <div 
      className={`min-h-screen bg-[#060A14] selection:bg-cyan-500 selection:text-white overflow-x-hidden ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} 
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* BACKGROUND RADIANCE */}
      <div className="fixed inset-0 navy-radiance z-0 pointer-events-none" />
      <div className="soft-glow" />

      {/* GLOBAL HEADER */}
      <GlobalHeader lang={lang} setLang={setLang} />

      {/* 1. CINEMATIC HERO SECTION (Riyadh 3D Skyline with Kingdom & Faisaliah Towers) */}
      <CinematicHero lang={lang} typedText={typedText} />

      {/* 2. STRATEGIC ALLIANCES & PARTNERS (Refined Dark Obsidian Capsules - No Cheap White Boxes) */}
      <section id="partners" className="py-20 md:py-28 bg-[#080D1A] relative overflow-hidden border-y border-white/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-14 md:mb-18">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">
              {lang === 'ar' ? 'التحالفات الاستراتيجية' : 'STRATEGIC ALLIANCES'}
            </span>
            <h2 className="text-2xl md:text-5xl font-black tracking-tighter text-white leading-none">
              {lang === 'ar' ? 'شركاء المسيرة والنجاح' : 'Trusted by Leading Entities'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-center">
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-full h-20 md:h-24 px-5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-slate-900/80 transition-all shadow-lg shadow-black/40">
                  {partner.isCircleR ? (
                    <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] flex items-center justify-center shadow-lg shadow-[#C5A059]/20">
                      <span className="text-2xl font-luxury text-[#C5A059] leading-none font-bold ml-0.5">R</span>
                    </div>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-10 md:max-h-12 max-w-[120px] object-contain filter brightness-110 contrast-110 group-hover:brightness-125 transition-all"
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRANSFORMATION ENGINE (Interactive Before & After Console) */}
      <TransformationConsole lang={lang} />

      {/* 4. SERVICES SHOWCASE (Sovereign Digital Disciplines) */}
      <ServicesTotem lang={lang} />

      {/* 5. TRUST & VALUE CONVICTION */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#060A14] relative overflow-hidden border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">
              {lang === 'ar' ? 'لماذا هيـليرو؟' : 'THE HELYRO ADVANTAGE'}
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-tight mb-6">
              {c.trustTitle}
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed">
              {c.trustDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {c.trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/40 transition-colors flex flex-col justify-between"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRECISION PROCESS */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#070D18] relative overflow-hidden border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-cyan-400 mb-3 block">
              {lang === 'ar' ? 'منهجية الإنجاز' : 'PRECISION WORKFLOW'}
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              {c.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <span className="text-xl font-bold text-cyan-400 block mb-3 font-mono">
                  {p.step}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-2">
                  {p.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERSION CTA */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-[#060A14] relative overflow-hidden border-t border-white/5">
        <div className="max-w-screen-2xl mx-auto rounded-3xl md:rounded-[40px] bg-slate-900/70 border border-cyan-500/30 p-8 md:p-16 relative overflow-hidden text-center max-w-4xl shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-6 text-white">
              {c.ctaTitle}
            </h2>
            <p className="text-base md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              {c.ctaDesc}
            </p>
            <a 
              href={whatsappInquiryUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-glow-btn inline-flex items-center justify-center rounded-2xl px-10 py-5 md:px-14 md:py-6 text-white font-black text-sm md:text-base tracking-[0.15em] uppercase shadow-2xl transition-all"
            >
              <span>{c.ctaButton}</span>
              <span className="material-symbols-outlined text-lg mr-2 ml-2">chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CORPORATE SOVEREIGN FOOTER */}
      <footer className="py-20 px-8 md:px-12 border-t border-white/5 bg-[#050811] relative z-10">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3" dir="ltr">
            <div className="flex items-center gap-3">
              <Logo scrolled={false} className="h-10 w-10" />
              <span className="text-2xl font-black tracking-tighter text-white">HELYRO</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">
              Sovereign Digital Architecture
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-mono text-slate-400 uppercase tracking-widest">
            <a href="#services-totem" className="hover:text-cyan-400 transition-colors">{c.nav.services}</a>
            <a href="#transformation" className="hover:text-cyan-400 transition-colors">{c.nav.solutions}</a>
            <a href="#partners" className="hover:text-cyan-400 transition-colors">{c.nav.work}</a>
            <a href={whatsappInquiryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">{c.nav.inquiry}</a>
          </div>

          <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            © 2026 HELYRO. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'ALL RIGHTS RESERVED'}
          </p>
        </div>
      </footer>

    </div>
  );
}
