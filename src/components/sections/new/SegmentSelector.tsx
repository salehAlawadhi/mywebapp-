"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Store, Building2, ShoppingCart, TrendingUp } from "lucide-react";

const segments = [
  { id: "restaurant", label: "أنا مطعم", icon: Store, path: "/restaurants" },
  { id: "company", label: "أنا شركة", icon: Building2, path: "/companies" },
  { id: "ecommerce", label: "متجر إلكتروني", icon: ShoppingCart, path: "/ecommerce" },
  { id: "digital", label: "تطوير رقمي", icon: TrendingUp, path: "/digital" },
];

export default function SegmentSelector() {
  const router = useRouter();
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const handleSegmentClick = (id: string, path: string) => {
    setActiveSegment(id);
    router.push(path);
  };

  return (
    <section className="w-full py-8 md:py-12 px-4 flex flex-col items-center border-b border-border/50 bg-background/50">
      <div className="w-full max-w-4xl flex flex-col items-center gap-6">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          اختر مسارك للبدء
        </h3>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 bg-muted/50 border border-border/60 rounded-2xl md:rounded-full shadow-sm w-full md:w-auto">
          {segments.map((segment) => {
            const Icon = segment.icon;
            const isActive = activeSegment === segment.id;

            return (
              <button
                key={segment.id}
                onClick={() => handleSegmentClick(segment.id, segment.path)}
                className={`relative flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3.5 rounded-xl md:rounded-full text-sm md:text-base font-bold transition-all duration-300 z-10 min-w-[140px] md:min-w-0 ${
                  isActive
                    ? "text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="segment-bubble-active"
                    className="absolute inset-0 bg-primary rounded-xl md:rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-accent" : ""}`} />
                {segment.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
