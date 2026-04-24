"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

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
          Mobile-first • Fast • Clear • Built for conversion
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.2] md:leading-tight"
        >
          مواقع وحلول رقمية واضحة وسريعة للمطاعم والشركات والمتاجر
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mt-2"
        >
          نصمم ونبني مواقع وتجارب رقمية تركّز على الوضوح، السرعة، وتجربة الجوال — لتخدم البيع وتظهر عملك بشكل احترافي في السعودية والخليج.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="glass-button px-8 py-4 rounded-xl font-medium text-lg w-full sm:w-auto flex items-center justify-center gap-2 group">
            <MessageCircle className="w-5 h-5" />
            تواصل واتساب
          </a>
          <Link href="/start-project" className="glass-button-outline px-8 py-4 rounded-xl font-medium text-lg w-full sm:w-auto text-center">
            ابدأ مشروعك
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
