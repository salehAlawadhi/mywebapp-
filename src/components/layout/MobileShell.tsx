"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileShellProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenMenu: () => void;
}

export default function MobileShell({ children, activeTab, onTabChange, onOpenMenu }: MobileShellProps) {
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  const navItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'demos', icon: 'deployed_code', label: 'Demos' },
    { id: 'services', icon: 'design_services', label: 'Services' },
    { id: 'work', icon: 'work', label: 'Work' },
    { id: 'contact', icon: 'mail', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-helyro-navy text-white ${lang === 'AR' ? 'font-arabic' : ''}`} dir={lang === 'AR' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="fixed top-0 w-full h-[64px] z-[100] glass-nav flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-helyro-blue flex items-center justify-center text-white font-black text-xs shadow-lg shadow-helyro-blue/20">
            H
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-black tracking-tight leading-none uppercase">HELYRO</span>
            <span className="text-[8px] font-bold text-helyro-steel uppercase tracking-[0.1em]">Intelligent Execution</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
            className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-helyro-steel"
          >
            {lang === 'EN' ? 'AR' : 'EN'}
          </button>
          <button 
            onClick={onOpenMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-[80px]">
        {children}
      </main>

      {/* Floating WhatsApp */}
      <motion.button 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-[96px] right-4 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 z-40"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 brightness-0 invert" alt="WA" />
      </motion.button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full h-[72px] z-[100] glass-nav px-2 flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className="flex flex-col items-center justify-center flex-1 gap-1 transition-all"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${activeTab === item.id ? 'bg-helyro-blue/10 text-helyro-blue' : 'text-white/40'}`}>
              <span className={`material-symbols-outlined text-[24px] ${activeTab === item.id ? 'fill-[1]' : ''}`}>{item.icon}</span>
            </div>
            <span className={`text-[9px] font-black uppercase tracking-tighter ${activeTab === item.id ? 'text-helyro-blue' : 'text-white/20'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
