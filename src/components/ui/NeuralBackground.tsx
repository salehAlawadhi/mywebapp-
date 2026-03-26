"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize by telling browser no transparency on the canvas base
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // The physical cursor location
    let mouse = { x: width / 2, y: height / 2 };
    // The "smoothed" cursor location with inertia
    let smoothMouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Listen globally so background reacts anywhere
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Ultra subtle particles (80-120)
    const particleCount = Math.min(Math.max(window.innerWidth / 15, 80), 120);
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      vx: number;
      vy: number;
      // Spring variables
      tension: number;
      damping: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        // Extremely tiny dots for that premium, non-intrusive feel
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = 0;
        this.vy = 0;
        this.tension = Math.random() * 0.015 + 0.005; // Return to base force
        this.damping = Math.random() * 0.1 + 0.85; // Friction
      }

      draw() {
        if (!ctx) return;
        // Extremely faint, subtle white/cyan mixture
        ctx.fillStyle = `rgba(200, 240, 255, ${this.size * 0.02})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        // Distance to smooth mouse
        const dx = smoothMouse.x - this.x;
        const dy = smoothMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Magnetic Attraction Zone (large radius, weak force)
        const magnetRadius = 400;
        if (dist < magnetRadius) {
          // Force is stronger closer to mouse, but capped
          const force = (magnetRadius - dist) / magnetRadius;
          const forceMultiplier = 0.5; // very subtle attraction

          this.vx += (dx / dist) * force * forceMultiplier;
          this.vy += (dy / dist) * force * forceMultiplier;
        }

        // Spring force returning to base position
        const returnDx = this.baseX - this.x;
        const returnDy = this.baseY - this.y;
        this.vx += returnDx * this.tension;
        this.vy += returnDy * this.tension;

        // Apply damping (friction)
        this.vx *= this.damping;
        this.vy *= this.damping;

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Add ultra-slow floating drift to base
        this.baseX += Math.sin(Date.now() * 0.0005 + this.baseY) * 0.1;
        this.baseY += Math.cos(Date.now() * 0.0005 + this.baseX) * 0.1;

        // Wrap around base positions if they drift too far off screen
        if (this.baseX < -100) this.baseX = width + 100;
        if (this.baseX > width + 100) this.baseX = -100;
        if (this.baseY < -100) this.baseY = height + 100;
        if (this.baseY > height + 100) this.baseY = -100;

        this.draw();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const animate = () => {
      // Pure obsidian background
      ctx.fillStyle = "#010101";
      ctx.fillRect(0, 0, width, height);

      // Interpolate smooth mouse towards physical mouse (Inertia physics)
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.04;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.04;

      // Draw extremely subtle glow at smooth cursor
      const gradient = ctx.createRadialGradient(
        smoothMouse.x, smoothMouse.y, 0,
        smoothMouse.x, smoothMouse.y, 600
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.008)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        particles[i].update();
      }

      // Draw even fainter connection lines for clustering feeling
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.strokeStyle = `rgba(200, 240, 255, ${0.015 * (1 - dist / 80)})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
      aria-hidden="true"
    />
  );
}
