"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CallToAction() {
  const phoneNumber = "+966500000000"; // Replace with actual number
  const message = encodeURIComponent("مرحباً، أريد البدء بمشروع جديد.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

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
          تواصل معنا مباشرة عبر واتساب للبدء في تحويل أفكارك إلى واقع رقمي يحقق لك أرباحاً.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-10 py-5 rounded-2xl font-bold text-xl transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 hover-lift glow-shadow-accent group">
            <MessageCircle className="w-7 h-7" />
            تواصل عبر الواتساب الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
}
