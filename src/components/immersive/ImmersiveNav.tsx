"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { WorldMode } from "./ExperienceOrchestrator";

interface Props {
  activeMode: WorldMode;
  onBack: () => void;
}

export default function ImmersiveNav({ activeMode, onBack }: Props) {

  const getModeLabel = () => {
    switch(activeMode) {
      case "restaurant": return "مسار المطاعم والكافيهات";
      case "company": return "مسار الشركات والأعمال";
      case "app": return "مسار التطبيقات والأنظمة";
      case "ecommerce": return "مسار المتاجر الإلكترونية";
      default: return "";
    }
  };

  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent(`مرحباً، أنا مهتم بـ ${getModeLabel()} وأريد البدء في مشروعي.`)}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 h-20 z-50 flex items-center justify-between px-6 md:px-10 bg-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
      >
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest text-white/40 font-semibold">العودة</span>
          <span className="text-sm font-medium">للواجهة الرئيسية</span>
        </div>
      </button>

      <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse shadow-[0_0_10px_#06B6D4]"></span>
        <span className="text-sm font-medium text-white/80">أنت الآن في: <strong className="text-white">{getModeLabel()}</strong></span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">تواصل عبر واتساب</span>
        <span className="sm:hidden">واتساب</span>
      </a>
    </motion.nav>
  );
}
