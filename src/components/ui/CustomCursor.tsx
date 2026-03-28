"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Calmer, heavier, more premium physical response (inertia, delayed catch-up, soft return)
  const springConfig = { damping: 30, stiffness: 80, mass: 2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Velocity-based squash/stretch for physical organic feel
  const scaleX = useSpring(1, { damping: 40, stiffness: 100 });
  const scaleY = useSpring(1, { damping: 40, stiffness: 100 });
  const rotate = useSpring(0, { damping: 40, stiffness: 100 });

  const lastElementRef = useRef<HTMLElement | null>(null);
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate velocity for squash/stretch
      const vx = Math.abs(e.clientX - lastX);
      const vy = Math.abs(e.clientY - lastY);

      const stretch = Math.min(vx / 100, 0.4);
      scaleX.set(1 + stretch);
      scaleY.set(1 - stretch / 2);

      // Rotate based on movement direction
      const angle = Math.atan2(e.clientY - lastY, e.clientX - lastX) * (180 / Math.PI);

      // Update last positions after calculation
      lastX = e.clientX;
      lastY = e.clientY;
      if (vx > 1 || vy > 1) {
        rotate.set(angle);
      }

      // Find magnetic elements
      const target = e.target as HTMLElement;
      const magneticElement = target.closest("a, button, input, [data-magnetic]") as HTMLElement | null;

      if (magneticElement) {
        setIsHovering(true);
        // Magnetic Pull Logic
        if (magneticElement !== lastElementRef.current) {
          lastElementRef.current = magneticElement;
          rectRef.current = magneticElement.getBoundingClientRect();
        }
        const rect = rectRef.current!;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Stronger gravitational pull (30%) but heavily damped by the spring mass
        const pullX = (centerX - e.clientX) * 0.3;
        const pullY = (centerY - e.clientY) * 0.3;

        // Offset by 24px because the new cursor is 48x48
        cursorX.set(e.clientX + pullX - 24);
        cursorY.set(e.clientY + pullY - 24);
      } else {
        setIsHovering(false);
        // Standard offset for 48x48
        cursorX.set(e.clientX - 24);
        cursorY.set(e.clientY - 24);
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center border border-white/10 bg-white/[0.02] backdrop-blur-[2px]"
      animate={{
        width: isHovering ? 64 : 48,
        height: isHovering ? 64 : 48,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scaleX,
        scaleY,
        rotate,
      }}
    >
      <motion.div
        className="w-1.5 h-1.5 bg-white/50 rounded-full"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}
