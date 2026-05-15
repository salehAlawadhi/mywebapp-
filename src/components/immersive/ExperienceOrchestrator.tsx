"use client";

import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileShell from "../layout/MobileShell";
import MenuDrawer from "../layout/MenuDrawer";
import HomeView from "../home/HomeView";

// Lazy load demos
const RestaurantDemo = React.lazy(() => import("../demos/RestaurantDemo"));
const EcommerceDemo = React.lazy(() => import("../demos/EcommerceDemo"));
const CompanyDemo = React.lazy(() => import("../demos/CompanyDemo"));
import AppDemo from "../demos/AppDemo";
const CustomDemo = React.lazy(() => import("../demos/CustomDemo"));
import ProjectWizard from "../wizard/ProjectWizard";

export type ViewId = 'home' | 'demos' | 'services' | 'work' | 'contact' | 'start' | 'restaurant' | 'ecommerce' | 'company' | 'app' | 'system' | 'wizard';

export default function ExperienceOrchestrator() {
  const [activeView, setActiveView] = useState<ViewId>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
      case 'demos':
        return <HomeView onSelectDemo={(id) => setActiveView(id as ViewId)} />;
      case 'start':
      case 'wizard':
        return <ProjectWizard onBack={() => setActiveView('home')} onComplete={() => setActiveView('home')} />;
      case 'restaurant':
        return (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">Loading Simulation...</div>}>
            <RestaurantDemo onBack={() => setActiveView('home')} />
          </Suspense>
        );
      case 'ecommerce':
        return (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">Loading Simulation...</div>}>
            <EcommerceDemo onBack={() => setActiveView('home')} />
          </Suspense>
        );
      case 'company':
        return (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">Loading Simulation...</div>}>
            <CompanyDemo onBack={() => setActiveView('home')} />
          </Suspense>
        );
      case 'app':
        return (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">Loading Simulation...</div>}>
            <AppDemo onBack={() => setActiveView('home')} />
          </Suspense>
        );
      case 'system':
        return (
          <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white/20">Loading Simulation...</div>}>
            <CustomDemo onBack={() => setActiveView('home')} />
          </Suspense>
        );
      default:
        return (
          <div className="h-[60vh] flex flex-col items-center justify-center p-10 text-center">
            <span className="material-symbols-outlined text-4xl text-white/10 mb-4">construction</span>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-2 text-white/40">{activeView} Module</h2>
            <p className="text-[11px] text-white/20 uppercase font-bold tracking-widest">This experience is being executed.</p>
            <button onClick={() => setActiveView('home')} className="mt-8 text-[10px] font-black text-helyro-blue underline underline-offset-8">BACK TO HOME</button>
          </div>
        );
    }
  };

  return (
    <MobileShell 
      activeTab={activeView === 'home' || activeView === 'demos' ? activeView : 'home'} 
      onTabChange={(tab) => setActiveView(tab as ViewId)}
      onOpenMenu={() => setIsMenuOpen(true)}
    >
      <MenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        lang="en"
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </MobileShell>
  );
}
