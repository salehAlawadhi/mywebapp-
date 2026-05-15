import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
}

const MenuDrawer = ({ isOpen, onClose, lang }: MenuDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070D18]/80 backdrop-blur-3xl z-[210]"
          />
          <motion.div
            initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-y-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-full md:w-[480px] bg-[#0A0F1A] border-x border-white/5 z-[220] shadow-2xl flex flex-col p-12`}
          >
            <div className="flex justify-between items-center mb-24">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">HELYRO</span>
                <span className="text-[8px] font-bold text-sky-400 uppercase tracking-[0.4em]">Drawer Panel</span>
              </div>
              <button 
                onClick={onClose}
                className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.6em] mb-4 block">
                  {lang === 'ar' ? 'الهوية التنفيذية' : 'Executive Identity'}
                </span>
                <h3 className="text-4xl font-black text-white leading-tight">
                  {lang === 'ar' ? 'السيادة الرقمية\nللعلامات التجارية العالمية.' : 'Digital Sovereignty\nfor Global Brands.'}
                </h3>
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-white/5">
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  {lang === 'ar' ? 'التواصل المباشر' : 'Direct Communication'}
                </p>
                <a href="mailto:hello@helyro.com" className="text-xl font-medium text-white hover:text-sky-400 transition-colors">hello@helyro.com</a>
                <div className="flex gap-6 mt-4">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer border border-white/10">LN</div>
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer border border-white/10">TW</div>
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer border border-white/10">IG</div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;
