"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Store, ShoppingCart, Smartphone, MessageCircle } from "lucide-react";
import Image from "next/image";

const phoneNumber = "+966500000000"; // Replace with actual number

const segments = [
  {
    id: "company",
    label: "الشركات",
    icon: Building2,
    image: "/portfolio/quip.png",
    title: "مواقع شركات احترافية",
    desc: "عزز تواجدك الرقمي بموقع يعكس هوية شركتك ويجذب المزيد من العملاء.",
    message: "مرحباً، أريد إنشاء موقع إلكتروني لشركتي."
  },
  {
    id: "restaurant",
    label: "المطاعم",
    icon: Store,
    image: "/portfolio/روح.png", // Using this as placeholder, change if needed
    title: "أنظمة منيو QR وتطبيقات المطاعم",
    desc: "سهل على عملائك الطلب واستعرض المنيو الخاص بك بطريقة عصرية وسلسة.",
    message: "مرحباً، أرغب في نظام طلبات أو منيو إلكتروني لمطعمي."
  },
  {
    id: "app",
    label: "تطبيقات الجوال",
    icon: Smartphone,
    image: "/portfolio/app andrid.png",
    title: "تطبيقات أندرويد و iOS",
    desc: "حول فكرتك إلى تطبيق جوال سريع وسهل الاستخدام يوفر تجربة استثنائية.",
    message: "مرحباً، لدي فكرة لتطبيق جوال وأريد تنفيذها."
  },
  {
    id: "digital",
    label: "الأتمتة والأنظمة",
    icon: ShoppingCart,
    image: "/portfolio/n8n.jpeg",
    title: "أتمتة العمليات (n8n) والأنظمة الخاصة",
    desc: "قلل التكاليف وسرع العمليات الداخلية من خلال أنظمة الأتمتة المتقدمة.",
    message: "مرحباً، أريد أتمتة عمليات عملي وتطوير نظام مخصص."
  },
];

export default function Showcase() {
  const [activeSegment, setActiveSegment] = useState(segments[0]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(activeSegment.message)}`;

  return (
    <section className="w-full py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا تحتاج لعملك؟</h2>
          <p className="text-muted-foreground text-lg">اختر مجالك وشاهد كيف يمكننا مساعدتك فوراً</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-1.5 bg-muted/50 border border-border/60 rounded-2xl md:rounded-full shadow-sm w-full md:w-auto mb-12">
          {segments.map((segment) => {
            const Icon = segment.icon;
            const isActive = activeSegment.id === segment.id;

            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegment(segment)}
                className={`relative flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3.5 rounded-xl md:rounded-full text-sm md:text-base font-bold transition-all duration-300 z-10 min-w-[140px] md:min-w-0 ${
                  isActive
                    ? "text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="showcase-bubble"
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

        {/* Content Area */}
        <div className="w-full bg-card border border-border rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-center gap-8 p-6 md:p-10">

          {/* Text & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-right space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeSegment.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {activeSegment.desc}
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg hover-lift w-full sm:w-auto group"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  اطلب هذا الآن عبر واتساب
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image/Proof */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-muted/30 border border-border/50 group flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full p-4"
              >
                <Image
                  src={activeSegment.image}
                  alt={activeSegment.title}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
