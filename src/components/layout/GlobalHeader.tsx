import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

interface GlobalHeaderProps {
  lang: 'en' | 'ar';
  setLang: (l: 'en' | 'ar') => void;
  slug?: string;
}

export const GlobalHeader = ({ lang, setLang }: GlobalHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[200] px-4 md:px-12 transition-all duration-200 ease-out pointer-events-none ${scrolled ? 'py-4 bg-[#0B1120]/85 backdrop-blur-md' : 'py-6 md:py-8 bg-transparent border-transparent'}`}>
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between pointer-events-auto">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center group cursor-pointer relative py-2">
          <Link href="/" className="flex items-center relative">
            <Logo scrolled={scrolled} className="h-10 w-10 md:h-14 md:w-14" />
          </Link>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} 
              className={`h-12 w-12 rounded-2xl transition-all duration-500 text-[10px] font-black shadow-xl backdrop-blur-xl border hover:scale-110 active:scale-95 ${scrolled ? 'bg-white/5 border-white/10 text-white hover:bg-white hover:text-slate-900' : 'bg-white/10 border-white/10 text-white hover:bg-white hover:text-slate-900'}`}
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
