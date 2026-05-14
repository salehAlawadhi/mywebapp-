"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CompanyDemo({ onBack }: { onBack: () => void }) {
  const trustLogos = ['PIF', 'Aramco', 'SDAIA', 'STC', 'NEOM'];
  
  const services = [
    { title: 'Corporate Websites', desc: 'Elite presence for leaders.', icon: 'domain' },
    { title: 'Digital Portals', desc: 'Seamless ecosystems.', icon: 'gate' },
    { title: 'Enterprise Apps', desc: 'Internal power tools.', icon: 'dashboard_customize' },
    { title: 'AI Solutions', desc: 'Data-driven execution.', icon: 'psychology' },
  ];

  const stats = [
    { val: '120+', label: 'Projects' },
    { val: '98%', label: 'Success' },
    { val: '25+', label: 'Enterprise' }
  ];

  return (
    <div className="min-h-screen bg-helyro-navy animate-in fade-in slide-in-from-right-4 duration-700 pb-32">
      {/* Demo Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-helyro-navy/50 backdrop-blur-md sticky top-16 z-50">
        <button onClick={onBack} className="flex items-center gap-1 text-helyro-blue active:opacity-60 transition-opacity">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Demos</span>
        </button>
        <button className="px-3 py-1 bg-helyro-blue/10 border border-helyro-blue/20 rounded-md text-[8px] font-black uppercase text-helyro-blue tracking-widest">
          Book Session
        </button>
      </div>

      {/* Hero Section */}
      <section className="p-4 mb-8">
        <div className="glass-card aspect-[4/5] relative overflow-hidden flex flex-col justify-end p-8">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" 
            alt="Corporate" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-helyro-navy via-helyro-navy/40 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex gap-2 mb-4">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[7px] font-black uppercase tracking-widest text-white/40">Professional</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[7px] font-black uppercase tracking-widest text-white/40">Secure</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white mb-4 leading-none">
              BUILD TRUST.<br/>
              PRESENT CLEARLY.
            </h2>
            <p className="text-[11px] text-white/40 font-medium leading-relaxed max-w-[240px]">
              Premium company websites for serious organizations, services, and large-scale lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Scroll */}
      <section className="mb-16">
        <p className="px-6 text-[8px] font-black uppercase tracking-[0.4em] text-white/20 mb-6">Trusted by industry leaders</p>
        <div className="flex gap-8 overflow-x-auto px-6 scrollbar-hide">
          {trustLogos.map(logo => (
            <span key={logo} className="text-xl font-black text-white/10 tracking-tighter whitespace-nowrap uppercase italic">{logo}</span>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 mb-20">
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-8 px-2">Core Solutions</h3>
        <div className="grid grid-cols-2 gap-4">
          {services.map(svc => (
            <div key={svc.title} className="glass-card p-6 flex flex-col gap-4 active:scale-95 transition-all">
              <div className="w-10 h-10 rounded-xl bg-helyro-blue/10 flex items-center justify-center text-helyro-blue">
                <span className="material-symbols-outlined text-[20px]">{svc.icon}</span>
              </div>
              <div>
                <h4 className="text-[12px] font-black text-white tracking-tight mb-1">{svc.title}</h4>
                <p className="text-[9px] text-white/30 font-medium leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 mb-20">
        <div className="glass-card grid grid-cols-3 divide-x divide-white/5 py-8">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-lg font-black text-white tracking-tighter mb-1">{stat.val}</span>
              <span className="text-[7px] font-black uppercase tracking-widest text-white/30">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-4 mb-16">
        <div className="glass-card p-8 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-helyro-blue/5 blur-[30px]"></div>
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-helyro-blue mb-4 block">Case Study</span>
          <h4 className="text-xl font-black text-white tracking-tight mb-2">National Investment Portal</h4>
          <p className="text-[10px] text-white/30 font-medium leading-relaxed mb-8">
            A secure digital gateway with real-time services for international investors.
          </p>
          <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-[9px] tracking-widest uppercase active:scale-95 transition-all">
            View Project
          </button>
        </div>
      </section>

      {/* CTA Card */}
      <section className="px-4">
        <div className="p-10 glass-card bg-helyro-blue border-none text-center">
          <h3 className="text-3xl font-black text-black tracking-tighter mb-4 leading-none">LET'S BUILD WHAT'S NEXT.</h3>
          <p className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-10">Start your transformation</p>
          <div className="space-y-3">
            <button className="w-full py-5 bg-black text-white rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase shadow-xl active:scale-95 transition-all">
              Book Consultation
            </button>
            <button className="w-full py-5 bg-black/10 border border-black/10 text-black rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase active:scale-95 transition-all">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
