"use client";

import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import DnaChamberSection from "@/components/sections/DnaChamber";
import PortfolioSection from "@/components/sections/Portfolio";
import ContactSection from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";
import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function Home() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  useEffect(() => {
    // Only initialize Lenis after deeper preloader finishes
    const timer = setTimeout(() => {
      setIsPreloaderFinished(true);

      const lenis = new Lenis({
        duration: 2.5, // Even slower, highly deliberate scroll physics
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.6, // Heavy wheel
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
    }, 4800); // 4.8s animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DnaChamberSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
