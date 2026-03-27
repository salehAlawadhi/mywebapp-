"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import Preloader from "@/components/ui/Preloader";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import DnaChamber from "@/components/sections/DnaChamber";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize Lenis for premium smooth scroll (disabled on reduced motion)
    if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

      {/* The Hero Section is mounted immediately so its particles can form behind the preloader */}
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <DnaChamber />
      <Portfolio />
      <Contact />

    </div>
  );
}