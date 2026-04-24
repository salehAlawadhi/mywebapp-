"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl w-full flex flex-col items-center gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/10 mb-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
          متاح لاستقبال مشاريع جديدة
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] md:leading-tight"
        >
          نصمم حلولاً رقمية سريعة، <br className="hidden md:block"/> واضحة، وعملية.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-2"
        >
          مواقع شركات، متاجر إلكترونية، منيو QR للمطاعم. جودة عالية، تجربة جوال ممتازة، وحلول عملية قابلة للنمو لدعم نشاطك التجاري.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        >
          <button className="glass-button px-8 py-4 rounded-xl font-medium text-lg w-full sm:w-auto flex items-center justify-center gap-2 group">
            اطلب مشروعك الآن
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <button className="glass-button-outline px-8 py-4 rounded-xl font-medium text-lg w-full sm:w-auto">
            استعرض الخدمات
          </button>
        </motion.div>
      </div>
    </section>
  );
}
