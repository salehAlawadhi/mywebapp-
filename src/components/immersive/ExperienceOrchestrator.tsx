"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Gateway from "./Gateway";
import RestaurantWorld from "./worlds/RestaurantWorld";
import CompanyWorld from "./worlds/CompanyWorld";
import AppWorld from "./worlds/AppWorld";
import EcommerceWorld from "./worlds/EcommerceWorld";
import ImmersiveNav from "./ImmersiveNav";

export type WorldMode = "gateway" | "restaurant" | "company" | "app" | "ecommerce";

export default function ExperienceOrchestrator() {
  const [activeMode, setActiveMode] = useState<WorldMode>("gateway");

  // Lock body scroll when in an immersive world to prevent background scrolling
  useEffect(() => {
    if (activeMode !== "gateway") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeMode]);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-primary/30">

      {/* Global Background Elements (Calm Luxury) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1A365D]/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#06B6D4]/5 blur-[120px]" />
        {/* Very subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Immersive Navigation Bar (Only shows when inside a world) */}
      <AnimatePresence>
        {activeMode !== "gateway" && (
          <ImmersiveNav
            activeMode={activeMode}
            onBack={() => setActiveMode("gateway")}
          />
        )}
      </AnimatePresence>

      {/* The Worlds */}
      <AnimatePresence mode="wait">
        {activeMode === "gateway" && (
          <motion.div
            key="gateway"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full min-h-screen overflow-y-auto"
          >
            <Gateway onSelectWorld={setActiveMode} />
          </motion.div>
        )}

        {activeMode === "restaurant" && (
          <motion.div
            key="restaurant"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-screen pt-20" // pt-20 to account for ImmersiveNav
          >
            <RestaurantWorld />
          </motion.div>
        )}

        {activeMode === "company" && (
          <motion.div
            key="company"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-screen pt-20"
          >
            <CompanyWorld />
          </motion.div>
        )}

        {activeMode === "app" && (
          <motion.div
            key="app"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-screen pt-20"
          >
            <AppWorld />
          </motion.div>
        )}

        {activeMode === "ecommerce" && (
          <motion.div
            key="ecommerce"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full h-screen pt-20"
          >
            <EcommerceWorld />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
