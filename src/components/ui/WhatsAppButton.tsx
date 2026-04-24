"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const phoneNumber = "+966500000000"; // Replace with actual number
  const message = encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
          aria-label="تواصل معنا عبر واتساب"
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping" />
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
