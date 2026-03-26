"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Activity, Layers, Disc } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Lazy Load Three.js Heavy Core Component
const RefractiveCore = dynamic(() => import("@/components/ui/RefractiveCore"), {
  ssr: false,
});

type Mode = "precision" | "luxe" | "velocity";

export default function DnaChamberSection() {
  const [uplink, setUplink] = useState("");
  const [activeMode, setActiveMode] = useState<Mode>("precision");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simText, setSimText] = useState("");

  const handleUplinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUplink(e.target.value);

    // Trigger subtle signal movement on type (Simulation logic)
    if (!isSimulating && e.target.value.length > 0) {
      setIsSimulating(true);
      setSimText("Analyzing visual structure...");

      setTimeout(() => {
        setSimText("Building layout parameters...");
      }, 1500);

      setTimeout(() => {
        setSimText("Applying motion identity...");
      }, 3000);

      setTimeout(() => {
        setIsSimulating(false);
        setSimText("");
      }, 4500);
    }
  };

  const handleModeChange = (mode: Mode) => {
    setActiveMode(mode);
    setIsSimulating(true);
    setSimText(`Calibrating ${mode.toUpperCase()} variables...`);

    setTimeout(() => {
      setIsSimulating(false);
      setSimText("");
    }, 2000);
  };

  // Maps modes to the CSS variables scoped in globals.css
  const modeClass = `dna-mode-${activeMode}`;

  return (
    <section className="relative min-h-[150vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 bg-transparent border-t border-white/[0.02]">

      {/* Title Header - Outside Chamber Scope */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
        <h2 className="text-[10px] font-bold tracking-[0.4em] text-cyan-500/50 uppercase drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]">
          System Core
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)] text-center leading-[1.05]">
          Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800 font-light italic">DNA Chamber.</span>
        </h3>
      </div>

      {/*
        THE CHAMBER
        This container restricts the DNA variable mutations.
        It uses standard CSS variables defined in globals.css based on the activeMode class.
      */}
      {/*
        THE CHAMBER
        Now designed to feel less like a "widget box" and more like an immersive deep void section.
        Borders are extremely thin, and the inset shadow is much deeper to blend into the site background.
      */}
      <motion.div
        className={cn(
          "dna-chamber relative w-full max-w-[100vw] min-h-[100vh] mt-32 border-y border-white/[0.02] bg-[#010101] shadow-[inset_0_0_300px_rgba(0,0,0,1)] overflow-hidden flex flex-col items-center justify-center transition-all duration-[2000ms] ease-[0.19,1,0.22,1]",
          modeClass
        )}
      >

        {/* Elite Signature Layer: 3D Refractive Core */}
        <RefractiveCore />

        {/* Dynamic Inner Glow tied to Mode */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-[2000ms] ease-[0.22,1,0.36,1]"
          style={{
            boxShadow: `inset 0 0 80px var(--dna-glow)`, // Reduced glow size
            backgroundColor: `var(--dna-glow)`
          }}
        />

        {/* Chamber Interface Layer */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center gap-20 px-6 mt-16">

          {/* Uplink Input Field */}
          <div className="relative w-full max-w-lg group">
            <input
              type="text"
              value={uplink}
              onChange={handleUplinkChange}
              required
              placeholder=" "
              spellCheck="false"
              className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 focus:outline-none focus:border-cyan-500/50 transition-colors duration-1000 peer font-[family-name:var(--font-space-grotesk)]"
              style={{
                transition: "var(--dna-transition)",
              }}
            />
            <label className="absolute left-1/2 -translate-x-1/2 top-4 text-zinc-600 font-light tracking-[0.3em] uppercase text-sm transition-all duration-[1000ms] ease-out peer-focus:-top-10 peer-focus:text-xs peer-focus:text-cyan-500/70 peer-valid:-top-10 peer-valid:text-xs peer-valid:text-zinc-500 cursor-text pointer-events-none whitespace-nowrap">
              Initialize Uplink (Type Name)
            </label>

            {/* Input Energy Feedback Glow - appears gradually, less intense */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-[1500ms] ease-[0.22,1,0.36,1] peer-focus:w-full peer-valid:w-full opacity-0 peer-focus:opacity-100 peer-valid:opacity-50 delay-100" />
          </div>

          {/* System Feedback Simulation Terminal */}
          <div className="h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isSimulating ? (
                <motion.div
                  key="simulating"
                  initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4 px-6 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.02]"
                >
                  <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
                  <span className="text-xs tracking-[0.2em] font-medium text-cyan-400/80 uppercase">
                    {simText}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  className="flex items-center gap-3 text-zinc-600"
                >
                  <Disc className="w-4 h-4" />
                  <span className="text-xs tracking-[0.2em] uppercase">Awaiting Input</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Style Mode Switcher (Affects only Chamber CSS Variables) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 bg-[#010101]/80 backdrop-blur-md p-3 rounded-full border border-white/[0.05] z-20">
            <ModeButton
              active={activeMode === "precision"}
              onClick={() => handleModeChange("precision")}
              icon={<Sparkles className="w-4 h-4" />}
              label="Precision"
            />
            <ModeButton
              active={activeMode === "luxe"}
              onClick={() => handleModeChange("luxe")}
              icon={<Layers className="w-4 h-4" />}
              label="Luxe"
            />
            <ModeButton
              active={activeMode === "velocity"}
              onClick={() => handleModeChange("velocity")}
              icon={<Activity className="w-4 h-4" />}
              label="Velocity"
            />
          </div>

        </div>

        {/* Dynamic Structural Elements inside chamber reflecting CSS Variables */}
        {/* Adjusted Z-Index and Positioning to prevent them from overlapping the central UI */}
        <div
          className="absolute -left-[5%] -top-[10%] w-64 h-64 border hidden lg:block pointer-events-none z-0 opacity-40"
          style={{
            borderColor: "var(--dna-border)",
            backgroundColor: "var(--dna-bg)",
            borderRadius: "var(--dna-radius)",
            transition: "var(--dna-transition)"
          }}
        />
        <div
          className="absolute -right-[5%] -bottom-[10%] w-64 h-64 border hidden lg:block pointer-events-none z-0 opacity-40"
          style={{
            borderColor: "var(--dna-border)",
            backgroundColor: "var(--dna-bg)",
            borderRadius: "var(--dna-radius)",
            transition: "var(--dna-transition)"
          }}
        />

      </motion.div>
    </section>
  );
}

function ModeButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-[1200ms] ease-[0.22,1,0.36,1]",
        active
          ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.15)]" // Reduced highlight
          : "text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
