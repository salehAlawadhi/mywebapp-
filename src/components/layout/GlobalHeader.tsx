import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, ShoppingBag, Shield } from "lucide-react";

interface GlobalHeaderProps {
  lang: 'en' | 'ar';
  setLang: (l: 'en' | 'ar') => void;
  slug?: string;
  themeColor?: string;
}

export const GlobalHeader = ({ lang, setLang, slug, themeColor = "bg-slate-950" }: GlobalHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = !slug;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[200] px-4 py-4 md:px-12 transition-all duration-700 pointer-events-none ${scrolled ? 'md:py-4 bg-white/80 backdrop-blur-3xl shadow-2xl shadow-slate-200/20 border-b border-slate-100' : 'md:py-8'}`}>
      <div className="mx-auto max-w-screen-2xl grid grid-cols-3 items-center pointer-events-auto">
        
        {/* LEFT: SPACER */}
        <div className="hidden lg:flex justify-start items-center">
          {/* Nav links removed as requested */}
        </div>

        {/* CENTER: IDENTITY */}
        <div className="flex flex-col items-center group cursor-pointer relative py-2">
          <Link href="/" className="flex items-center gap-4 md:gap-6 relative">
            <div className="h-10 w-10 md:h-14 md:w-14 relative z-10">
              <img 
                src="/logo.png" 
                alt="HELYRO Logo" 
                className={`w-full h-full object-contain transition-all duration-700 group-hover:scale-110 ${scrolled ? '' : 'brightness-0 invert'}`}
              />
            </div>
            <div className="flex flex-col relative z-10 items-center md:items-start">
              <h1 className={`text-xs md:text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                {lang === 'ar' ? 'هيـليرو' : 'HELYRO'}
              </h1>
              <span className={`text-[8px] md:text-[10px] font-bold tracking-[0.45em] uppercase transition-colors duration-500 ${scrolled ? 'text-slate-400' : 'text-white/30'}`}>
                {lang === 'ar' ? 'استوديو رقمي' : 'Digital Studio'}
              </span>
            </div>
          </Link>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex justify-end items-center gap-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} 
              className={`h-12 w-12 rounded-2xl transition-all duration-500 text-[10px] font-black shadow-xl backdrop-blur-xl border hover:scale-110 active:scale-95 ${scrolled ? 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white' : 'bg-white/10 border-white/10 text-white hover:bg-white hover:text-slate-900'}`}
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
