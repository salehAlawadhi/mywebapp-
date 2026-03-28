"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface PhysicalRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
}

export default function PhysicalReveal({
  children,
  delay = 0,
  className,
  direction = "up",
  amount = 50
}: PhysicalRevealProps) {

  const getInitialY = () => {
    if (direction === "up") return amount;
    if (direction === "down") return -amount;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return amount;
    if (direction === "right") return -amount;
    return 0;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
        scale: 0.95,
        filter: "blur(20px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      viewport={{ once: true, margin: "-100px" }}
      // Elite Monumental curve: Even slower, heavier settling for a more premium "living system" feel
      transition={{
        duration: 3.2,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out for softer deceleration
      }}
      className={cn("will-change-[transform,opacity,filter]", className)}
    >
      {children}
    </motion.div>
  );
}