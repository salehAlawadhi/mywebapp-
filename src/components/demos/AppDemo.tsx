"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AppDemo({ onBack }: { onBack: () => void }) {
  const transactions = [
    { name: 'Salary Deposit', date: 'Oct 25', amount: '+12,000.00', type: 'in' },
    { name: 'Carrefour', date: 'Oct 24', amount: '-256.75', type: 'out' },
    { name: 'Kudu', date: 'Oct 24', amount: '-45.50', type: 'out' },
    { name: 'Transfer to Omar', date: 'Oct 23', amount: '-1,500.00', type: 'out' },
  ];

  return (
    <div className="min-h-screen bg-helyro-navy animate-in fade-in slide-in-from-right-4 duration-700 pb-32">
      {/* Demo Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-helyro-navy/50 backdrop-blur-md sticky top-16 z-50">
        <button onClick={onBack} className="flex items-center gap-1 text-helyro-blue active:opacity-60 transition-opacity">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Demos</span>
        </button>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">Fintech Dashboard</span>
      </div>

      <div className="p-4">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-xl font-black tracking-tighter text-white">Good evening, Alex</h2>
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Here's your overview</p>
        </div>

        {/* Balance Card */}
        <section className="mb-8">
          <div className="glass-card p-8 bg-gradient-to-br from-helyro-blue/20 via-transparent to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-helyro-blue/10 blur-[40px] group-hover:bg-helyro-blue/20 transition-all duration-1000"></div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-4 block">Total Balance</span>
              <h3 className="text-3xl font-black tracking-tighter text-white mb-8">SAR 28,450.50</h3>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-helyro-blue">
                  <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                </div>
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest text-white/20">Available</p>
                  <p className="text-sm font-bold text-white tracking-tight">SAR 18,230.75</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-4 gap-4 mb-10">
          {[
            { icon: 'send', label: 'Send' },
            { icon: 'receipt_long', label: 'Bills' },
            { icon: 'add_circle', label: 'Add' },
            { icon: 'query_stats', label: 'Activity' }
          ].map(action => (
            <button key={action.label} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-helyro-blue active:scale-90 transition-all group-hover:bg-helyro-blue/5 group-hover:border-helyro-blue/40">
                <span className="material-symbols-outlined text-2xl">{action.icon}</span>
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-white/20">{action.label}</span>
            </button>
          ))}
        </section>

        {/* Spending Insights */}
        <section className="mb-10">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-6 px-2">Spending Insights</h3>
          <div className="glass-card p-6 flex items-center gap-8">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-helyro-blue" cx="50" cy="50" fill="transparent" r="42" stroke="currentColor" strokeDasharray="263.89" strokeDashoffset="120" strokeWidth="8" strokeLinecap="round"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[12px] font-black text-white tracking-tighter">4.2k</span>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-helyro-blue shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                  <span className="text-[10px] font-bold text-white/40">Groceries</span>
                </div>
                <span className="text-[10px] font-black text-white">42%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                  <span className="text-[10px] font-bold text-white/40">Lifestyle</span>
                </div>
                <span className="text-[10px] font-black text-white">28%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Activity List */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-6 px-2">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Recent Activity</h3>
            <span className="text-[8px] font-black text-helyro-blue tracking-widest uppercase">View All</span>
          </div>
          <div className="space-y-3">
            {transactions.map((tx, idx) => (
              <div key={idx} className="p-4 glass-card flex items-center gap-4 active:scale-[0.98] transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${tx.type === 'in' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                  <span className="material-symbols-outlined">{tx.type === 'in' ? 'payments' : 'shopping_bag'}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[12px] font-bold text-white tracking-tight">{tx.name}</h4>
                  <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mt-0.5">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className={`text-[12px] font-black tracking-tighter ${tx.type === 'in' ? 'text-primary' : 'text-white'}`}>
                    {tx.type === 'in' ? '+' : ''}SAR {tx.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Score */}
        <section>
          <div className="p-6 glass-card border-none bg-gradient-to-r from-white/5 to-transparent flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">security</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-white tracking-tight">Security Score</p>
                <p className="text-[8px] font-black uppercase tracking-widest text-primary">Excellent · 98%</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-white/20">chevron_right</span>
          </div>
        </section>
      </div>

      {/* Internal Demo Nav */}
      <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-[#020617]/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-around z-[60]">
        {['home', 'account_balance', 'swap_horiz', 'credit_card', 'person'].map((icon, idx) => (
          <div key={idx} className={`flex flex-col items-center gap-1 ${idx === 0 ? 'text-helyro-blue' : 'text-white/20'}`}>
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
            <div className={`w-1 h-1 rounded-full ${idx === 0 ? 'bg-helyro-blue' : 'bg-transparent'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
