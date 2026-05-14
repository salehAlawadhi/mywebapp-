"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RestaurantDemo({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState('Starters');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['Starters', 'Mains', 'Grill', 'Seafood', 'Desserts', 'Drinks'];
  
  const menuItems = [
    { id: 1, name: 'Truffle Hummus', desc: 'Silky smooth hummus with black truffle oil', price: 42, img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Beef Carpaccio', desc: 'Thinly sliced tenderloin, arugula, parmesan', price: 58, img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Spicy Garlic Prawns', desc: 'Tiger prawns in a fiery garlic butter', price: 62, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Grilled Ribeye', desc: 'Prime cut with herb butter and asparagus', price: 98, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-helyro-obsidian animate-in fade-in slide-in-from-right-4 duration-700 pb-32 selection:bg-helyro-accent selection:text-white">
      {/* RADIANT BACKGROUND EFFECTS */}
      <div className="fixed inset-0 dark-radiance pointer-events-none z-0" />
      <div className="living-aura opacity-20" />

      {/* Demo Header */}
      <div className="px-6 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-white/5 bg-helyro-obsidian/90 backdrop-blur-3xl sticky top-0 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-helyro-accent active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px] md:text-[24px] font-black">arrow_back</span>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">STUDIO</span>
        </button>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-helyro-accent animate-pulse"></span>
          <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40">RESTAURANT EXECUTION</span>
        </div>
      </div>

      {/* Restaurant Content */}
      <div className="max-w-4xl mx-auto p-8 relative z-10">
        <div className="aspect-[16/9] md:aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden mb-8 md:mb-12 relative border border-white/10 crystal-panel">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-30 hover:opacity-50 hover:scale-105 transition-all duration-[2s]" 
            alt="Bayan Dining" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">Bayan Dining</h2>
            <p className="text-[10px] md:text-sm font-black text-helyro-accent tracking-[0.4em] uppercase">TASTE. ORDER. EXCEL.</p>
          </div>
        </div>

        {/* Status Chips */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          <div className="px-5 md:px-6 py-2 md:py-3 rounded-full bg-helyro-accent/10 border border-helyro-accent/10 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-helyro-accent animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] font-black uppercase text-helyro-accent tracking-widest whitespace-nowrap">LIVE KITCHEN</span>
          </div>
          <div className="px-5 md:px-6 py-2 md:py-3 rounded-full bg-white/5 border border-white/5 flex items-center gap-3">
            <span className="material-symbols-outlined text-[16px] md:text-[18px] text-white/40">timer</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-widest whitespace-nowrap">2–4 MIN PREP</span>
          </div>
          <div className="px-5 md:px-6 py-2 md:py-3 rounded-full bg-white/5 border border-white/5 flex items-center gap-3">
            <span className="material-symbols-outlined text-[16px] md:text-[18px] text-white/40">restaurant</span>
            <span className="text-[9px] md:text-[10px] font-black uppercase text-white/40 tracking-widest whitespace-nowrap">PREMIUM CUTS</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {[
            { icon: 'calendar_month', label: 'BOOKING' },
            { icon: 'chat', label: 'WA ORDER' },
            { icon: 'menu_book', label: 'DIGITAL MENU' }
          ].map(action => (
            <button key={action.label} className="flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 p-6 md:p-8 crystal-panel rounded-[24px] md:rounded-[32px] group">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-helyro-accent text-2xl md:text-3xl group-hover:scale-110 group-active:scale-90 transition-all">{action.icon}</span>
                <span className="text-[10px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">{action.label}</span>
              </div>
              <span className="material-symbols-outlined text-white/20 md:hidden">chevron_right</span>
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-8 md:gap-10 overflow-x-auto pb-4 md:pb-6 mb-8 md:mb-10 sticky top-[70px] md:top-[100px] bg-helyro-obsidian/80 backdrop-blur-3xl z-30 -mx-8 px-8 scrollbar-hide border-b border-white/5">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] pb-3 md:pb-4 transition-all whitespace-nowrap border-b-4 md:border-b-8 ${activeCategory === cat ? 'border-helyro-accent text-white' : 'border-transparent text-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {menuItems.map(item => (
            <div key={item.id} className="p-4 md:p-6 crystal-panel rounded-[24px] md:rounded-[40px] flex items-center gap-4 md:gap-6 hover:scale-[1.02] active:scale-[0.98] transition-all group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[16px] md:rounded-[24px] overflow-hidden border border-white/5">
                <img src={item.img} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={item.name} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg md:text-xl font-black text-white tracking-tight mb-1">{item.name}</h4>
                <p className="text-[10px] md:text-xs text-white/30 font-bold line-clamp-1 mb-2 md:mb-3">{item.desc}</p>
                <p className="text-base md:text-lg font-black text-helyro-accent">SAR {item.price}</p>
              </div>
              <button 
                onClick={() => setCartCount(c => c + 1)}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-helyro-accent hover:border-helyro-accent transition-all"
              >
                <span className="material-symbols-outlined text-[20px] md:text-[28px] font-black">add</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Cart */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-6 md:px-8"
          >
            <div className="p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex items-center justify-between text-black">
              <div className="flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">SELECTED ITEMS</span>
                <span className="text-lg md:text-xl font-black">{cartCount} ITEMS · SAR {cartCount * 45}</span>
              </div>
              <button className="px-6 md:px-10 py-3 md:py-4 bg-helyro-accent text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-all">
                PROCEED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Kitchen Status */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-16 md:mt-24 pb-48 relative z-10">
        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/20 mb-6 md:mb-8 text-center md:text-left">REAL-TIME EXECUTION STATUS</h3>
        <div className="flex justify-between items-center px-6 md:px-10 py-8 md:py-12 crystal-panel rounded-[32px] md:rounded-[40px]">
          {['CONFIRMED', 'PREPARING', 'COOKING', 'READY'].map((step, idx) => (
            <div key={step} className="flex flex-col items-center gap-3 md:gap-4">
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${idx === 0 ? 'bg-helyro-accent animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-white/10'}`}></div>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] ${idx === 0 ? 'text-white' : 'text-white/10'}`}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
