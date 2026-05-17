"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectFormData = {
  type: string;
  brandName: string;
  tagline: string;
  scale: string;
  email: string;
};

export default function ProjectWizard({ onComplete, onBack }: { onComplete: (data: ProjectFormData) => void, onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    brandName: '',
    tagline: '',
    scale: 'Medium',
    email: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const types = [
    { id: 'restaurant', label: 'Restaurant', icon: 'restaurant' },
    { id: 'store', label: 'Ecommerce', icon: 'shopping_bag' },
    { id: 'company', label: 'Company', icon: 'corporate_fare' },
    { id: 'app', label: 'Mobile App', icon: 'smartphone' },
  ];

  return (
    <div className="min-h-screen bg-helyro-navy p-6 pt-20 animate-in fade-in duration-700">
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 right-0 px-6 z-50">
        <div className="flex justify-between mb-2">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">Execution Plan</span>
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-helyro-blue">Step {step} of 4</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 4) * 100}%` }}
            className="h-full bg-helyro-blue shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-black tracking-tighter text-white mb-4">What are we building?</h2>
            <p className="text-[11px] text-white/40 font-medium mb-10">Select the primary experience for your brand.</p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {types.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setFormData({...formData, type: t.id}); nextStep(); }}
                  className={`p-6 glass-card flex flex-col items-center gap-4 text-center active:scale-95 transition-all ${formData.type === t.id ? 'border-helyro-blue bg-helyro-blue/5' : ''}`}
                >
                  <span className="material-symbols-outlined text-3xl text-helyro-blue">{t.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/60">{t.label}</span>
                </button>
              ))}
            </div>
            <button onClick={onBack} className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">close</span> Cancel
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-black tracking-tighter text-white mb-4">Brand Identity</h2>
            <p className="text-[11px] text-white/40 font-medium mb-10">How should the world know you?</p>
            <div className="space-y-6 mb-12">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Brand Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Helyro"
                  className="w-full p-5 glass-card bg-white/5 border-white/10 text-white font-bold tracking-tight outline-none focus:border-helyro-blue transition-colors"
                  value={formData.brandName}
                  onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Tagline (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Intelligent Execution"
                  className="w-full p-5 glass-card bg-white/5 border-white/10 text-white font-bold tracking-tight outline-none focus:border-helyro-blue transition-colors"
                  value={formData.tagline}
                  onChange={(e) => setFormData({...formData, tagline: e.target.value})}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-5 glass-card text-white/40 font-black text-[9px] tracking-widest uppercase">Back</button>
              <button 
                onClick={nextStep} 
                disabled={!formData.brandName}
                className="flex-[2] py-5 bg-helyro-blue text-white rounded-2xl font-black text-[9px] tracking-widest uppercase shadow-lg disabled:opacity-30"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-black tracking-tighter text-white mb-4">Project Scale</h2>
            <p className="text-[11px] text-white/40 font-medium mb-10">Choose the depth of your digital ecosystem.</p>
            <div className="space-y-4 mb-12">
              {['Launch', 'Growth', 'Enterprise'].map(s => (
                <button
                  key={s}
                  onClick={() => setFormData({...formData, scale: s})}
                  className={`w-full p-6 glass-card flex items-center justify-between active:scale-[0.98] transition-all ${formData.scale === s ? 'border-helyro-blue bg-helyro-blue/5' : ''}`}
                >
                  <div className="text-left">
                    <h3 className="text-[12px] font-black text-white tracking-tight">{s}</h3>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">
                      {s === 'Launch' ? 'Single experience, ready to ship.' : s === 'Growth' ? 'Multi-module platform.' : 'Complex global infrastructure.'}
                    </p>
                  </div>
                  {formData.scale === s && <span className="material-symbols-outlined text-helyro-blue">check_circle</span>}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 py-5 glass-card text-white/40 font-black text-[9px] tracking-widest uppercase">Back</button>
              <button onClick={nextStep} className="flex-[2] py-5 bg-helyro-blue text-white rounded-2xl font-black text-[9px] tracking-widest uppercase shadow-lg">Continue</button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pt-12"
          >
            <div className="w-20 h-20 rounded-[30px] bg-helyro-blue/10 flex items-center justify-center text-helyro-blue mb-8">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white mb-4 leading-none">READY FOR EXECUTION.</h2>
            <p className="text-[12px] text-white/40 font-medium leading-relaxed mb-10">
              Your strategy is locked in. Our team will prepare your live simulation environment and reach out.
            </p>
            <div className="space-y-2 mb-12">
              <label className="text-[9px] font-black uppercase tracking-widest text-white/20 ml-2">Email Address</label>
              <input 
                type="email" 
                placeholder="you@company.com"
                className="w-full p-6 glass-card bg-white/5 border-white/10 text-white font-bold tracking-tight outline-none focus:border-helyro-blue transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <button 
              onClick={() => onComplete(formData)}
              disabled={!formData.email}
              className="w-full py-6 bg-white text-black rounded-[24px] font-black text-[11px] tracking-[0.3em] uppercase shadow-2xl active:scale-95 transition-all disabled:opacity-30"
            >
              FINALIZE EXECUTION
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
