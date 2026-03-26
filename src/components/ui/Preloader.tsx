"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = "hidden";

    // Extended deep arrival duration (4.8s total)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scroll
      document.body.style.overflow = "";
    }, 4800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010101]"
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full">

            {/* Extremely Deep Majestic Background Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 4.5, ease: "easeOut" }}
              className="absolute w-[600px] h-[600px] bg-indigo-500/5 rounded-[100%] blur-[150px] pointer-events-none mix-blend-screen"
            />

            {/* The Brand Name: Forming from the depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(30px)", y: 15 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 3.5,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1] // Extremely slow, confident entry
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(15px)",
                transition: { duration: 1.2, ease: "easeInOut" }
              }}
              className="relative z-10 flex items-center gap-3 md:gap-5 select-none"
            >
              <span className="text-3xl md:text-5xl font-bold tracking-[0.4em] text-zinc-100 font-[family-name:var(--font-space-grotesk)] ml-[0.4em]">
                HELYRO
              </span>
              <span className="text-3xl md:text-5xl font-light tracking-[0.1em] text-zinc-600 font-[family-name:var(--font-inter)]">
                OS
              </span>
            </motion.div>

            {/* Subtle Progress / System Boot Line */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 2.5, duration: 2, ease: [0.16, 1, 0.3, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              style={{ transformOrigin: "top" }}
              className="absolute top-[60%] w-[1px] h-[120px] bg-gradient-to-b from-white/20 via-white/5 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
