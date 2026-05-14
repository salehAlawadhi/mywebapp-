"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AdminDemo({ onBack }: { onBack: () => void }) {
  const metrics = [
    { label: 'Revenue', val: 'SAR 1.2M', growth: '+14%', color: 'text-helyro-blue' },
    { label: 'Orders', val: '4,520', growth: '+8.2%', color: 'text-primary' },
    { label: 'Customers', val: '12,840', growth: '+22%', color: 'text-white' },
  ];

  const recentOrders = [
    { id: '#8801', name: 'Noura S.', status: 'Delivered', time: '2m ago' },
    { id: '#8800', name: 'Khalid M.', status: 'Processing', time: '15m ago' },
    { id: '#8799', name: 'Fahad A.', status: 'Shipped', time: '1h ago' },
  ];

  return (
    <div className="min-h-screen bg-helyro-navy animate-in fade-in slide-in-from-right-4 duration-700 pb-32">
      {/* Demo Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-helyro-navy/50 backdrop-blur-md sticky top-16 z-50">
        <button onClick={onBack} className="flex items-center gap-1 text-helyro-blue active:opacity-60 transition-opacity">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Demos</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#10b981]"></div>
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">System Live</span>
        </div>
      </div>

      <div className="p-4">
        {/* Dashboard Title */}
        <div className="mb-8 flex items-end justify-between px-2">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Global Admin</p>
            <h2 className="text-2xl font-black tracking-tighter text-white">System Control</h2>
          </div>
          <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
        </div>

        {/* Top Metrics Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide mb-10">
          {metrics.map(m => (
            <div key={m.label} className="min-w-[160px] glass-card p-6 flex flex-col gap-4">
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">{m.label}</span>
              <div>
                <p className={`text-xl font-black tracking-tighter mb-1 ${m.color}`}>{m.val}</p>
                <p className="text-[9px] font-bold text-primary tracking-tight">{m.growth} vs prev month</p>
              </div>
            </div>
          ))}
        </div>

        {/* Live Feed */}
        <section className="mb-10">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-6 px-2">Live Orders</h3>
          <div className="space-y-3">
            {recentOrders.map(order => (
              <div key={order.id} className="p-4 glass-card flex items-center justify-between border-l-2 border-l-helyro-blue bg-gradient-to-r from-helyro-blue/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/20 text-[10px] font-black">
                    {order.id.replace('#', '')}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white tracking-tight">{order.name}</h4>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20">{order.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-[7px] font-black uppercase tracking-widest ${order.status === 'Delivered' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-white/30'}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inventory Status */}
        <section className="mb-10">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-6 px-2">Inventory Status</h3>
          <div className="glass-card p-6 space-y-6">
            {[
              { label: 'iPhone 15 Pro', val: 82, color: 'bg-helyro-blue' },
              { label: 'MacBook Air M3', val: 45, color: 'bg-primary' },
              { label: 'Apple Watch Ultra', val: 12, color: 'bg-red-500' }
            ].map(item => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold tracking-tight">
                  <span className="text-white/60">{item.label}</span>
                  <span className="text-white">{item.val}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.val}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Health */}
        <section>
          <div className="p-6 glass-card bg-gradient-to-br from-primary/5 to-transparent flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">dns</span>
            </div>
            <div>
              <h4 className="text-[12px] font-black text-white tracking-tight mb-1">Infrastructure Health</h4>
              <p className="text-[9px] text-white/30 font-medium leading-relaxed">
                All regions functional. Latency within optimal range (24ms).
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Control Sidebar Mimic (Bottom Nav) */}
      <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-[#020617]/90 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around z-[60]">
        {[
          { icon: 'grid_view', label: 'Dashboard' },
          { icon: 'shopping_cart', label: 'Orders' },
          { icon: 'inventory_2', label: 'Stock' },
          { icon: 'group', label: 'Users' },
          { icon: 'settings', label: 'Config' }
        ].map((btn, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${idx === 0 ? 'text-helyro-blue' : 'text-white/20'}`}>
            <span className="material-symbols-outlined text-[20px]">{btn.icon}</span>
            <span className="text-[7px] font-black uppercase tracking-widest">{idx === 0 ? btn.label : ''}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
