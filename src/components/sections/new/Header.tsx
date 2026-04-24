"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex items-center justify-between px-6 py-4 md:px-12 md:py-6 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50"
    >
      <div className="font-bold text-xl md:text-2xl text-primary tracking-tight">
        HELYRO<span className="text-accent">OS</span>
      </div>

      <nav className="hidden md:flex gap-8">
        <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">الخدمات</a>
        <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">الأعمال</a>
        <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">عن الشركة</a>
      </nav>

      <button className="glass-button px-5 py-2.5 rounded-lg text-sm font-medium">
        تواصل معنا
      </button>
    </motion.header>
  );
}
