"use client";

import { useState, useEffect } from "react";

export type DeviceMode = "desktop" | "tablet" | "mobile";
export type CanvasMode = "full" | "reduced" | "fallback";

export interface SystemCapabilities {
  mode: DeviceMode;
  reducedMotion: boolean;
  pageHidden: boolean;
  allowHeavy3D: boolean;
  canvasMode: CanvasMode;
  allowCustomCursor: boolean;
  allowInteractiveLens: boolean;
}

const DEFAULT_CAPABILITIES: SystemCapabilities = {
  mode: "desktop",
  reducedMotion: false,
  pageHidden: false,
  allowHeavy3D: true,
  canvasMode: "full",
  allowCustomCursor: true,
  allowInteractiveLens: true,
};

export function useSystemCapabilities(): SystemCapabilities {
  const [capabilities, setCapabilities] = useState<SystemCapabilities>(DEFAULT_CAPABILITIES);

  useEffect(() => {
    const getDeviceMode = (): DeviceMode => {
      if (typeof window === "undefined") return "desktop";
      if (window.innerWidth < 768) return "mobile";
      if (window.innerWidth <= 1024) return "tablet";
      return "desktop";
    };

    const getReducedMotion = (): boolean => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    const updateCapabilities = () => {
      const mode = getDeviceMode();
      const reducedMotion = getReducedMotion();
      const pageHidden = document.hidden;

      const allowHeavy3D = mode === "desktop" && !reducedMotion;

      let canvasMode: CanvasMode = "full";
      if (reducedMotion || mode === "mobile") canvasMode = "fallback";
      else if (mode === "tablet") canvasMode = "reduced";

      const allowCustomCursor = mode === "desktop" && !reducedMotion;
      const allowInteractiveLens = mode === "desktop" && !reducedMotion;

      setCapabilities(prev => {
        // Only update state if values actually changed to prevent constant re-renders
        // since objects are evaluated by reference in React
        if (
          prev.mode === mode &&
          prev.reducedMotion === reducedMotion &&
          prev.pageHidden === pageHidden &&
          prev.allowHeavy3D === allowHeavy3D &&
          prev.canvasMode === canvasMode &&
          prev.allowCustomCursor === allowCustomCursor &&
          prev.allowInteractiveLens === allowInteractiveLens
        ) {
          return prev;
        }

        return {
          mode,
          reducedMotion,
          pageHidden,
          allowHeavy3D,
          canvasMode,
          allowCustomCursor,
          allowInteractiveLens,
        };
      });
    };

    updateCapabilities();

    // Use a simple debounce for resize events to further save performance
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateCapabilities, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", updateCapabilities);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", updateCapabilities);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", updateCapabilities);
      motionQuery.removeEventListener("change", updateCapabilities);
    };
  }, []);

  return capabilities;
}
