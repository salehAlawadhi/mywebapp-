"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HomeView({ onSelectDemo }: { onSelectDemo: (demo: string) => void }) {
  const demos = [
    { id: 'restaurant', title: 'Restaurant Menu', sub: 'QR menu, ordering, reservations', icon: 'restaurant_menu' },
    { id: 'ecommerce', title: 'Ecommerce Store', sub: 'Products, cart, checkout', icon: 'shopping_bag' },
    { id: 'company', title: 'Company Website', sub: 'Corporate site, services, projects', icon: 'corporate_fare' },
    { id: 'app', title: 'App Dashboard', sub: 'Data, actions, reports', icon: 'dashboard_customize' },
    { id: 'system', title: 'Custom System', sub: 'Portals, admin panels, automation', icon: 'settings_suggest' },
  ];

  return (
    <div className="px-6 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-helyro-blue/10 border border-helyro-blue/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-helyro-blue animate-pulse"></span>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-helyro-blue">Helyro · Intelligent Execution</span>
        </div>
        
        <h1 className="text-4xl font-black leading-[1.1] tracking-tighter mb-4 text-white">
          Intelligent Execution <br/>
          <span className="text-white/40">for Digital Experiences.</span>
        </h1>
        
        <p className="text-[13px] text-white/40 leading-relaxed max-w-[280px] mb-8 font-medium">
          We build websites, stores, menus, platforms, and app interfaces through realistic live demos before launch.
        </p>

        <div className="flex gap-3">
          <button 
            onClick={() => onSelectDemo('demos')}
            className="px-6 py-4 bg-helyro-blue text-white rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg shadow-helyro-blue/20 active:scale-95 transition-all"
          >
            Start Live Demo
          </button>
          <button className="px-6 py-4 bg-white/5 border border-white/10 text-white/60 rounded-2xl font-black text-[10px] tracking-widest uppercase active:scale-95 transition-all">
            Start Project
          </button>
        </div>
      </section>

      {/* Demo Selector Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Choose what to build</h2>
          <span className="material-symbols-outlined text-white/10">south</span>
        </div>

        <div className="space-y-3">
          {demos.map((demo) => (
            <motion.button
              key={demo.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectDemo(demo.id)}
              className="w-full h-[84px] p-4 glass-card flex items-center gap-4 text-left group active:border-helyro-blue/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-helyro-blue group-active:bg-helyro-blue group-active:text-white transition-all">
                <span className="material-symbols-outlined text-[24px]">{demo.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-black tracking-tight text-white mb-0.5">{demo.title}</h3>
                <p className="text-[10px] text-white/30 font-medium truncate">{demo.sub}</p>
              </div>
              <span className="material-symbols-outlined text-white/10 group-active:text-helyro-blue transition-colors">chevron_right</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Small Value Strip */}
      <section className="grid grid-cols-2 gap-3 mb-10">
        {[
          { icon: 'speed', label: 'Faster Decisions' },
          { icon: 'rocket_launch', label: 'Built for Launch' },
          { icon: 'verified', label: 'Premium Execution' },
          { icon: 'visibility', label: 'Realistic Preview' }
        ].map((item) => (
          <div key={item.label} className="p-4 glass-card flex flex-col items-start gap-2">
            <span className="material-symbols-outlined text-helyro-blue text-[18px] opacity-40">{item.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-wider text-white/30 leading-tight">{item.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
