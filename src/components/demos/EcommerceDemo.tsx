"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EcommerceDemo({ onBack }: { onBack: () => void }) {
  const [activeCategory, setActiveCategory] = useState('New Arrivals');
  const [cartTotal, setCartTotal] = useState(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const categories = ['Watches', 'Bags', 'Fragrances', 'Accessories', 'New Arrivals'];
  
  const products = [
    { id: 1, brand: 'Rolex', name: 'Datejust 41', price: 36900, rating: 4.9, img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format&fit=crop' },
    { id: 2, brand: 'Saint Laurent', name: 'Loulou Bag', price: 9950, rating: 4.8, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop' },
    { id: 3, brand: 'Chanel', name: 'Bleu de Chanel', price: 565, rating: 5.0, img: 'https://images.unsplash.com/photo-1544441893-675973e31d85?q=80&w=400&auto=format&fit=crop' },
    { id: 4, brand: 'Gucci', name: 'Leather Cardholder', price: 650, rating: 4.7, img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-helyro-obsidian animate-in fade-in slide-in-from-right-4 duration-700 pb-40 selection:bg-helyro-accent selection:text-white">
      {/* RADIANT BACKGROUND EFFECTS */}
      <div className="fixed inset-0 dark-radiance pointer-events-none z-0" />
      <div className="living-aura opacity-20" />

      {/* Demo Header */}
      <div className="px-6 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-white/5 bg-helyro-obsidian/90 backdrop-blur-3xl sticky top-0 z-50">
        <button onClick={onBack} className="flex items-center gap-2 text-white hover:text-helyro-accent active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px] md:text-[24px] font-black">arrow_back</span>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">COLLECTION</span>
        </button>
        <div className="flex items-center gap-6 md:gap-8 text-white/40">
          <span className="material-symbols-outlined text-[20px] md:text-[24px] hover:text-white cursor-pointer transition-colors">search</span>
          <div className="relative group cursor-pointer" onClick={() => setIsCheckoutOpen(true)}>
            <span className="material-symbols-outlined text-[20px] md:text-[24px] group-hover:text-helyro-accent transition-colors">shopping_bag</span>
            {cartTotal > 0 && <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-helyro-accent rounded-full border-2 border-black"></span>}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 relative z-10">
        {/* Store Hero */}
        <section className="mb-12 md:mb-16">
          <div className="crystal-panel p-8 md:p-16 rounded-[32px] md:rounded-[60px] bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-helyro-accent/10 blur-[80px] md:blur-[100px] group-hover:bg-helyro-accent/20 transition-all duration-1000"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] md:leading-[0.8] text-shine-bold">
                Elite Execution.<br/>
                Absolute Retail.
              </h2>
              <p className="text-[10px] md:text-sm text-helyro-accent font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-10 md:mb-12">THE GOLD STANDARD OF COMMERCE</p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-helyro-accent hover:text-white hover:scale-105 transition-all">SHOP NOW</button>
                <button className="px-10 md:px-12 py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all">EXPLORE</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Chips */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 mb-12 md:mb-16 scrollbar-hide">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-full border font-black text-[10px] md:text-xs uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-helyro-accent border-helyro-accent/20 text-white shadow-2xl shadow-helyro-accent/30' : 'bg-white/5 border-white/5 text-white/40 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map(product => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="crystal-panel p-4 md:p-6 rounded-[32px] md:rounded-[50px] flex flex-col group relative overflow-hidden"
            >
              <div className="aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 relative border border-white/5 bg-helyro-zinc">
                <img src={product.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] opacity-30 group-hover:opacity-100 group-hover:scale-110" alt={product.name} />
                <button className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black/40 backdrop-blur-3xl flex items-center justify-center border border-white/10 hover:text-helyro-accent transition-all shadow-xl">
                  <span className="material-symbols-outlined text-[20px] md:text-[24px] font-black">favorite</span>
                </button>
              </div>
              <div className="px-2 md:px-4">
                <p className="text-[10px] md:text-xs font-black uppercase text-helyro-accent tracking-[0.3em] md:tracking-[0.4em] mb-2">{product.brand}</p>
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-tight">{product.name}</h4>
                <div className="flex flex-row items-center justify-between border-t border-white/5 pt-6 md:pt-8 gap-4">
                  <span className="text-xl md:text-2xl font-black text-white">SAR {product.price.toLocaleString()}</span>
                  <button 
                    onClick={() => setCartTotal(prev => prev + product.price)}
                    className="flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-helyro-accent hover:border-helyro-accent transition-all font-black text-[10px] md:text-xs tracking-widest whitespace-nowrap"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: 'verified', label: 'AUTHENTICITY GUARANTEED' },
            { icon: 'lock', label: 'SECURE EXECUTION' },
            { icon: 'support_agent', label: 'GLOBAL ASSISTANCE' }
          ].map(item => (
            <div key={item.label} className="p-8 md:p-10 crystal-panel rounded-[32px] md:rounded-[40px] flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-6">
              <span className="material-symbols-outlined text-helyro-accent text-3xl md:text-4xl">{item.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/40">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Cart */}
      <AnimatePresence>
        {cartTotal > 0 && !isCheckoutOpen && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-8"
          >
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full p-4 md:p-6 rounded-[24px] md:rounded-[32px] bg-white border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex items-center justify-between active:scale-95 transition-all text-black group"
            >
              <div className="flex flex-col text-left">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">TOTAL VALUATION</span>
                <span className="text-lg md:text-xl font-black">SAR {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-3 bg-helyro-accent px-6 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl group-hover:scale-105 transition-transform">
                <span className="text-[10px] md:text-xs font-black text-white tracking-widest uppercase">CHECKOUT</span>
                <span className="material-symbols-outlined text-white text-[18px] md:text-[20px] font-black">arrow_forward</span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Bottom Sheet */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
              className="fixed inset-0 bg-helyro-obsidian/60 backdrop-blur-3xl z-[100]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-helyro-zinc rounded-t-[40px] md:rounded-t-[80px] border-t border-white/10 p-8 md:p-12 z-[110] shadow-[0_-40px_100px_rgba(0,0,0,0.8)]"
            >
              <div className="w-12 md:w-20 h-1.5 md:h-2 bg-white/10 rounded-full mx-auto mb-8 md:mb-12" />
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 md:mb-12 text-center text-white">CHECKOUT</h3>
              <div className="max-w-xl mx-auto space-y-4 md:space-y-6 mb-12 md:mb-16">
                <div className="flex justify-between text-xs md:text-base font-black text-white/40 uppercase tracking-widest">
                  <span>VALUATION</span>
                  <span className="text-white">SAR {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs md:text-base font-black text-white/40 uppercase tracking-widest">
                  <span>LOGISTICS</span>
                  <span className="text-white">SAR 25</span>
                </div>
                <div className="flex justify-between text-xs md:text-base font-black text-white/40 uppercase tracking-widest">
                  <span>VAT (15%)</span>
                  <span className="text-white">SAR {(cartTotal * 0.15).toLocaleString()}</span>
                </div>
                <div className="pt-6 md:pt-8 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-black tracking-tighter text-white">TOTAL EXECUTION</span>
                  <span className="text-2xl md:text-4xl font-black text-helyro-accent">SAR {(cartTotal * 1.15 + 25).toLocaleString()}</span>
                </div>
              </div>
              <div className="max-w-xl mx-auto">
                <button className="w-full py-5 md:py-8 bg-white text-black rounded-[24px] md:rounded-[32px] font-black text-base md:text-lg tracking-[0.3em] uppercase shadow-2xl hover:bg-helyro-accent hover:text-white hover:scale-[1.02] active:scale-95 transition-all">
                  AUTHORIZE PAYMENT
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
