"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import PortfolioSection from "@/components/sections/Portfolio";
import ContactSection from "@/components/sections/Contact";
import Preloader from "@/components/ui/Preloader";

export default function Home() {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  useEffect(() => {
    // Only initialize Lenis after preloader finishes
    const timer = setTimeout(() => {
      setIsPreloaderFinished(true);

      const lenis = new Lenis({
        duration: 1.6, // Slower, more elegant scroll duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slightly softer wheel
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
    }, 4000); // 3.8s animation + 0.2 buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      <Preloader />
      {/* We keep components rendered, but their internal Framer Motion `initial`
          animations will be delayed or will execute while obscured by the preloader,
          which creates a beautiful reveal when the preloader blurs out. */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
