"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Plus,
  Minus,
  Clock3,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const dict = {
  en: {
    back: "BACK",
    title: "DIGITAL QR MENU",
    menu: "Menu",
    search: "Search kabsa, grill, mezze, drinks",
    all: "All",
    mezze: "Mezze",
    mains: "Mains",
    grill: "Grill",
    seafood: "Seafood",
    desserts: "Desserts",
    drinks: "Drinks",
    readyIn: "Ready in 15 mins",
    add: "+ Add Order",
    yourOrder: "YOUR ORDER",
    items: "items",
    checkout: "CHECKOUT",
  },
  ar: {
    back: "رجوع",
    title: "منيو باركود رقمي",
    menu: "قائمة الطعام",
    search: "ابحث عن كبسة، مشاوي، مقبلات",
    all: "الكل",
    mezze: "مقبلات",
    mains: "أطباق رئيسية",
    grill: "مشاوي",
    seafood: "بحريات",
    desserts: "حلويات",
    drinks: "مشروبات",
    readyIn: "جاهز خلال 15 دقيقة",
    add: "+ إضافة للطلب",
    yourOrder: "طلبك الحالي",
    items: "أصناف",
    checkout: "إتمام الطلب",
  },
};

const categories = ["All", "Mezze", "Mains", "Grill", "Seafood", "Desserts", "Drinks"];

const menuItems = [
  { id: "mandi-lamb", category: "Mains", name: "مندي لحم", nameEn: "Lamb Mandi", desc: "لحم غنم طازج مطهو ببطء في حفرة التنور التقليدية، يقدم مع أرز المندي المدخن والمرق", price: 88, badge: "SIGNATURE", image: "/menu/lamb_mandi.webp" },
  { id: "mandi-chicken", category: "Mains", name: "مندي دجاج", nameEn: "Chicken Mandi", desc: "دجاج متبل بخلطة المندي السرية ومحمر بعناية، يقدم على طبقة من أرز البسمتي المعطر بالدخان", price: 42, badge: "CLASSIC", image: "/menu/chicken_mandi.webp" },
  { id: "kabsa-lamb-najdi", category: "Mains", name: "كبسة لحم نجدية", nameEn: "Najdi Lamb Kabsa", desc: "أرز بسمتي أحمر مطهو بمرق اللحم والبهارات النجدية القوية، مزين بالبيض المسلوق والزبيب واللوز المقرمش", price: 75, badge: "TRADITION", image: "/menu/kabsa_with_egg.webp" },
  { id: "grills-platter", category: "Grill", name: "مشاوي مشكلة", nameEn: "Grills Platter", desc: "أسياخ كباب لحم، كباب دجاج، شيش طاووق، وريش غنم، تقدم مع خبز التنور والثومية", price: 95, badge: "PREMIUM", image: "/menu/grills.webp" },
  { id: "hummus-pine-nuts", category: "Mezze", name: "حمص ناعم بالصنوبر", nameEn: "Smooth Hummus", desc: "حمص بالطحينة محضر يومياً، مغطى بزيت الزيتون البكر وحبات الصنوبر المحمص", price: 24, badge: "STARTER", image: "/menu/hummus.webp" },
  { id: "saudi-coffee", category: "Drinks", name: "قهوة سعودية", nameEn: "Saudi Coffee", desc: "قهوة شقراء بالهيل والزعفران، تقدم مع تمر خلاص فاخر وطحينة", price: 32, badge: "HOSPITALITY", image: "/menu/coffee.webp" },
];

type Cart = Record<string, number>;

export default function RestaurantMenuServicePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Cart>({});
  
  const t = dict[lang];

  const visibleItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery = query
        ? `${item.name} ${item.nameEn} ${item.desc} ${item.category}`.toLowerCase().includes(query)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const { totalItems, totalPrice } = useMemo(() => {
    return Object.entries(cart).reduce(
      (acc, [id, qty]) => {
        const item = menuItems.find((m) => m.id === id);
        if (item) {
          acc.totalItems += qty;
          acc.totalPrice += qty * item.price;
        }
        return acc;
      },
      { totalItems: 0, totalPrice: 0 }
    );
  }, [cart]);

  const addItem = (id: string) => setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  const removeItem = (id: string) => setCart((current) => {
    const nextQty = Math.max((current[id] ?? 0) - 1, 0);
    const next = { ...current };
    if (nextQty === 0) delete next[id];
    else next[id] = nextQty;
    return next;
  });

  return (
    <main className={`min-h-screen bg-[#fcfcfc] text-[#0f172a] ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Branded Header */}
      <div className="flex items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="group flex items-center gap-4 transition-all hover:-translate-x-2">
          <div className="h-12 w-12 rounded-2xl bg-[#0b1120] flex items-center justify-center text-white shadow-xl">
            <ArrowLeft className={`h-5 w-5 ${lang === "ar" ? "rotate-180" : ""}`} />
          </div>
          <span className="text-sm font-black tracking-widest text-[#0b1120] uppercase">{t.back}</span>
        </Link>
        <div className="flex items-center gap-6">
          <Logo scrolled={true} className="h-10 w-10" />
          <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="h-12 w-12 rounded-2xl bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all">
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 pb-24 pt-20 md:px-12">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/10 backdrop-blur-md px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-white">
              {t.title}
            </span>
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-9xl leading-none">HELYRO<br/>Gastronomy</h1>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2000" 
            alt="Saudi Traditional Feast" 
            className="h-full w-full object-cover brightness-[0.5]" 
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-transparent to-[#0f172a]/20" />
        </div>
      </div>

      {/* Menu Content */}
      <div className="rounded-t-[40px] bg-white px-6 pb-32 pt-10 shadow-[0_-12px_40px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-[#0b1120]">{t.menu}</h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-12 group max-w-3xl mx-auto">
            <Search className={`absolute ${lang === "ar" ? "right-6" : "left-6"} top-1/2 h-6 w-6 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-[#0b1120]`} />
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder={t.search} 
              className={`w-full rounded-full border-none bg-[#f1f5f9] py-6 ${lang === "ar" ? "pr-16 pl-8" : "pl-16 pr-8"} text-base font-bold text-[#0b1120] transition-all focus:bg-white focus:ring-4 focus:ring-[#0b1120]/5 shadow-sm`} 
            />
          </div>

          {/* Categories */}
          <div className="no-scrollbar mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-[#0b1120] text-white shadow-2xl shadow-black/30 scale-105" 
                    : "bg-[#f1f5f9] text-[#5d6c86] hover:bg-[#e2e8f0] hover:scale-105"
                }`}
              >
                {t[cat.toLowerCase() as keyof typeof t]}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.length > 0 ? (
              visibleItems.map((item) => {
                const qty = cart[item.id] ?? 0;
                return (
                  <article key={item.id} className="flex flex-col gap-5 rounded-[32px] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#eef2f8] transition-all hover:shadow-[0_20px_60px_rgba(11,17,32,0.08)] hover:-translate-y-2 group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-gray-100">
                      <img src={item.image} alt={lang === "ar" ? item.name : item.nameEn} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black/40 backdrop-blur-md px-4 py-2 text-[10px] font-black text-white uppercase tracking-widest">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl md:text-2xl font-black text-[#0b1120]">
                            {lang === "ar" ? item.name : item.nameEn}
                          </h3>
                          <p className="text-lg md:text-xl font-black text-[#0b1120]">
                            SAR {item.price}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-[#5d6c86] leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#94a3b8] uppercase tracking-wider">
                          <Clock3 className="h-4 w-4" />
                          <span>{t.readyIn}</span>
                        </div>
                        
                        {qty > 0 ? (
                          <div className="flex items-center rounded-2xl bg-[#0b1120] p-1.5 text-white shadow-xl">
                            <button onClick={() => removeItem(item.id)} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center text-sm font-black">{qty}</span>
                            <button onClick={() => addItem(item.id)} className="grid h-10 w-10 place-items-center rounded-xl bg-white text-[#0b1120] hover:bg-gray-100 transition-colors">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => addItem(item.id)} className="rounded-2xl bg-[#0b1120] px-8 py-4 text-[10px] font-black text-white uppercase hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/10">
                            {t.add}
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#94a3b8] font-bold">No items found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Floating Cart Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-6">
          <div className="mx-auto flex max-w-2xl items-center justify-between rounded-[32px] bg-[#0b1120] p-4 text-white shadow-[0_24px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl ring-1 ring-white/10">
            <div className="flex items-center gap-4 px-2">
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0b1120]">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-helyro-accent text-[10px] font-black text-helyro-navy">
                  {totalItems}
                </div>
              </div>
              <div className="text-start">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{t.yourOrder}</p>
                <p className="text-lg font-black tracking-tight">{totalItems} {t.items} • SAR {totalPrice}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-xs font-black uppercase tracking-widest text-[#0b1120] transition-all hover:bg-gray-100 active:scale-95">
              {t.checkout}
              <ChevronRight className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
