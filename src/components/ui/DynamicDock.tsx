"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useSystemCapabilities } from "@/hooks/useSystemCapabilities";
import { useLanguage } from "@/lib/LanguageContext";

const navItemKeys = ["about", "services", "work", "contact"] as const;

export default function DynamicIslandDock() {
  const { scrollY } = useScroll();
  const { mode } = useSystemCapabilities();
  const { lang, setLang, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("about");

  const isExpanded = !isScrolled || isHovered || mode === "desktop";
  const shouldExpandLabels = isExpanded && mode === "desktop";

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const dockSpring = { damping: 20, stiffness: 100, mass: 1.2 };
  const dockWidth = useSpring(shouldExpandLabels ? 600 : 350, dockSpring);

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between"
      style={{ width: dockWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      layout
    >
      <motion.div
        className="w-full flex items-center justify-between glass-panel px-4 py-3 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.05)] border border-white/5 bg-[#05070A]/80 backdrop-blur-3xl"
        layout
      >
        <button
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-1 text-color-text-sub hover:text-color-text-main transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer"
        >
          <span className={lang === 'en' ? "text-color-text-main" : ""}>EN</span>
          <span className="opacity-30">|</span>
          <span className={lang === 'ar' ? "text-color-text-main" : ""}>AR</span>
        </button>

        <div className="w-px h-4 bg-color-glass-border mx-2" />

        <div className="flex items-center gap-1 font-bold text-sm tracking-widest font-[family-name:var(--font-syne)] uppercase cursor-default">
          HEL<span className="text-color-cyan-razor">Y</span>RO
        </div>

        <div className="w-px h-4 bg-color-glass-border mx-2" />

        <nav className="flex items-center gap-2 relative">
          {navItemKeys.map((itemKey) => {
            const label = t.dock[lang][itemKey];
            const icon = itemKey === 'work' ? 'W' : label.charAt(0).toUpperCase();

            return (
              <button
                key={itemKey}
                onClick={() => {
                  setActiveItem(itemKey);
                  const el = document.getElementById(itemKey);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-3 py-1 text-xs font-medium tracking-wider text-color-text-sub hover:text-color-text-main transition-colors uppercase group cursor-pointer"
              >
                <motion.span
                  animate={{ opacity: shouldExpandLabels ? 1 : 0, display: shouldExpandLabels ? "block" : "none" }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {label}
                </motion.span>

                <motion.span
                  animate={{ opacity: !shouldExpandLabels ? 1 : 0, display: !shouldExpandLabels ? "block" : "none" }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-color-text-main"
                >
                  {lang === 'ar' ? label.charAt(0) : icon}
                </motion.span>

                {activeItem === itemKey && (
                  <motion.div
                    layoutId="activeDockIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-color-cyan-razor"
                    transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="w-px h-4 bg-color-glass-border mx-2 hidden md:block" />

        <button
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden md:flex items-center justify-center bg-color-cyan-razor text-[#010101] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-95 transition-transform duration-200 cursor-pointer"
        >
          {t.dock[lang].book}
        </button>

      </motion.div>
    </motion.div>
  );
}