"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while preloading
    document.body.style.overflow = "hidden";

    // Total sequence duration before fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scroll
      document.body.style.overflow = "";
    }, 3800);

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
            filter: "blur(10px)",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010101]"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Deep Background Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Materializing Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)", y: 10 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] // Custom extremely smooth ease
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
                filter: "blur(10px)",
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              className="relative z-10 flex items-center gap-3 md:gap-4 select-none"
            >
              <span className="text-2xl md:text-4xl font-bold tracking-[0.4em] text-zinc-100 font-[family-name:var(--font-space-grotesk)] ml-[0.4em]">
                HELYRO
              </span>
              <span className="text-2xl md:text-4xl font-light tracking-[0.1em] text-zinc-500 font-[family-name:var(--font-inter)]">
                OS
              </span>
            </motion.div>

            {/* Subtle Loading Indicator / Line */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 40 }}
              transition={{ delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="absolute -bottom-20 w-[1px] bg-gradient-to-b from-white/20 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
