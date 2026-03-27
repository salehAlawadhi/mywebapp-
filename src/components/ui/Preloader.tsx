"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

// A lightweight pure CSS/GSAP alternative to SplitText since we don't have the paid club plugin
function SplitTextChars({ text, className }: { text: string, className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block char opacity-0 translate-y-4">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !progressBarRef.current) return;

    // We use a GSAP timeline for precise cinematic timing
    // Total duration ~ 2.4s
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // 1. Text reveals char by char (power3.out for soft but definite arrival)
    tl.to(containerRef.current.querySelectorAll(".char"), {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
    });

    // 2. Progress bar fills up alongside text completion
    tl.to(progressBarRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: "expo.inOut",
    }, "-=0.4"); // Overlap slightly with text reveal

    // 3. Fade out everything gracefully
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      delay: 0.2, // Hold at 100% for a tiny fraction of a second
    });

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-color-void flex flex-col items-center justify-center gap-6"
    >
      <div className="font-bold text-3xl md:text-5xl tracking-[0.4em] uppercase font-[family-name:var(--font-syne)] text-color-text-main flex items-center justify-center">
        <SplitTextChars text="HEL" />
        {/* Strict Rule: Y must always be Cyan */}
        <SplitTextChars text="Y" className="text-color-cyan-razor ml-[0.1em]" />
        <SplitTextChars text="RO" />
      </div>

      {/* Subtle Progress Bar */}
      <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
        <div
          ref={progressBarRef}
          className="absolute inset-y-0 left-0 bg-color-cyan-razor origin-left w-full scale-x-0 shadow-[0_0_10px_rgba(0,229,255,0.5)]"
        />
      </div>
    </div>
  );
}