"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="w-full py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative subtle background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          جاهز لنقل أعمالك للخطوة القادمة؟
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl"
        >
          نحن هنا لبناء حلول تقنية تعزز من مبيعاتك وتختصر المسافة بينك وبين عملائك. ابدأ معنا اليوم.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full sm:w-auto flex items-center justify-center gap-2 group">
            <MessageCircle className="w-5 h-5" />
            تواصل عبر الواتساب
          </a>
          <Link href="/start-project" className="bg-transparent text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg transition-colors w-full sm:w-auto text-center">
            ابدأ مشروعك
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
