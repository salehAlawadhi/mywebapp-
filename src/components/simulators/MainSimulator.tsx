"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store, Building2, Smartphone, MonitorPlay } from "lucide-react";
import RestaurantSimulator from "./RestaurantSimulator";
import CompanySimulator from "./CompanySimulator";
import AppSimulator from "./AppSimulator";

type Mode = "idle" | "restaurant" | "company" | "app";

export default function MainSimulator() {
  const [activeMode, setActiveMode] = useState<Mode>("idle");
  const simulatorRef = useRef<HTMLDivElement>(null);

  const handleModeSelect = (mode: Mode) => {
    setActiveMode(mode);
    // Smooth scroll to the simulator area to focus the user's attention
    if (simulatorRef.current) {
        setTimeout(() => {
            simulatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 bg-background flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center gap-10">

        {/* Selector Panel */}
        <div className="text-center w-full max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            اختر مجالك لنبدأ التجربة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl mb-10"
          >
            شاهد كيف سيبدو منتجك الرقمي ويتفاعل على أرض الواقع قبل أن نبدأ برمجته.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <button
              onClick={() => handleModeSelect("restaurant")}
              className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all hover-lift ${activeMode === "restaurant" ? "border-primary bg-primary/5 text-primary" : "border-border/50 bg-white hover:border-primary/30"}`}
            >
              <Store className="w-10 h-10" />
              <span className="font-bold text-lg">المطاعم والكافيهات</span>
            </button>

            <button
              onClick={() => handleModeSelect("company")}
              className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all hover-lift ${activeMode === "company" ? "border-primary bg-primary/5 text-primary" : "border-border/50 bg-white hover:border-primary/30"}`}
            >
              <Building2 className="w-10 h-10" />
              <span className="font-bold text-lg">مواقع الشركات</span>
            </button>

            <button
              onClick={() => handleModeSelect("app")}
              className={`col-span-2 md:col-span-1 p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all hover-lift ${activeMode === "app" ? "border-primary bg-primary/5 text-primary" : "border-border/50 bg-white hover:border-primary/30"}`}
            >
              <Smartphone className="w-10 h-10" />
              <span className="font-bold text-lg">تطبيقات الجوال والأنظمة</span>
            </button>
          </div>
        </div>

        {/* Simulator Viewport */}
        <div ref={simulatorRef} className="w-full mt-8 scroll-mt-24">
          <AnimatePresence mode="wait">
            {activeMode === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                className="w-full h-[300px] rounded-3xl border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground/50 bg-muted/10"
              >
                <MonitorPlay className="w-16 h-16 mb-4 opacity-50" />
                <p className="font-medium text-lg">في انتظار اختيارك لبدء المحاكاة الحية...</p>
              </motion.div>
            )}

            {activeMode === "restaurant" && (
              <motion.div key="restaurant" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <RestaurantSimulator />
              </motion.div>
            )}

            {activeMode === "company" && (
              <motion.div key="company" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <CompanySimulator />
              </motion.div>
            )}

            {activeMode === "app" && (
              <motion.div key="app" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <AppSimulator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
