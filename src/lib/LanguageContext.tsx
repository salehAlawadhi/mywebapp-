"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, dict } from "./dictionary";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof dict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // On mount, check if there's a preferred language in localStorage, or detect from navigator if needed
  useEffect(() => {
    const storedLang = localStorage.getItem("helyro_lang") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "ar")) {
      setLang(storedLang);
      document.documentElement.lang = storedLang;
      document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("helyro_lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
