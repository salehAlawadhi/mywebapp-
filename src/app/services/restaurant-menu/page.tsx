"use client";

import React, { useState, useMemo } from "react";
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
  { id: "mandi-lamb-royal", category: "Mains", name: "مندي لحم بلدي", nameEn: "Royal Lamb Mandi", desc: "لحم غنم طازج مطهو ببطء في حفرة التنور التقليدية، يقدم مع أرز المندي المدخن والمرق", price: 95, badge: "الأكثر مبيعاً", image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?q=80&w=800" },
  { id: "mandi-chicken-traditional", category: "Mains", name: "مندي دجاج فاخر", nameEn: "Premium Chicken Mandi", desc: "دجاج متبل بخلطة المندي السرية ومحمر بعناية، يقدم على طبقة من أرز البسمتي المعطر بالدخان", price: 65, badge: "تقليدي", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800" },
  { id: "kabsa-lamb-najdi", category: "Mains", name: "كبسة لحم نجدية", nameEn: "Najdi Lamb Kabsa", desc: "أرز بسمتي أحمر مطهو بمرق اللحم والبهارات النجدية القوية، مزين بالزبيب واللوز المقرمش", price: 88, badge: "طبق نجد", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800" },
  { id: "saleeg-lamb-premium", category: "Mains", name: "سليق لحم ملكي", nameEn: "Royal Lamb Saleeg", desc: "أرز أبيض كريمي مطهو بالحليب والسمن البري، يقدم مع قطع اللحم الكبيرة والمسمنة", price: 90, badge: "حجازي", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800" },
  { id: "grills-platter", category: "Grill", name: "مشاوي مشكلة ملكية", nameEn: "Royal Grills Platter", desc: "أسياخ كباب لحم، كباب دجاج، شيش طاووق، وريش غنم، تقدم مع خبز التنور والثومية", price: 125, badge: "للمشاركة", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800" },
  { id: "jareesh-traditional", category: "Mezze", name: "جريش أبيض شعبي", nameEn: "Traditional Jareesh", desc: "جريش قمح مطهو باللبن على نار هادئة لساعات، مزين بكشنة البصل والليمون الأسود", price: 40, badge: "شعبي", image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?q=80&w=800" },
  { id: "hummus-pine-nuts", category: "Mezze", name: "حمص ناعم بالصنوبر", nameEn: "Smooth Hummus", desc: "حمص بالطحينة محضر يومياً، مغطى بزيت الزيتون البكر وحبات الصنوبر المحمص", price: 32, badge: "مقبلات", image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800" },
  { id: "saudi-coffee-hospitality", category: "Drinks", name: "قهوة سعودية أصيلة", nameEn: "Saudi Hospitality Coffee", desc: "قهوة شقراء بالهيل والزعفران، تقدم مع تمر خلاص فاخر وطحينة", price: 35, badge: "ضيافة", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800" },
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
    <main className={`min-h-screen bg-[#f8fafc] text-[#0b1120] ${lang === "ar" ? "rtl" : "ltr"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header with Back & Language Toggle */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 rounded-full bg-[#0b1120]/5 px-5 py-2.5 text-xs font-black tracking-widest text-[#0b1120] transition-all hover:bg-[#0b1120]/10 active:scale-95">
          <ArrowLeft className={`h-4 w-4 ${lang === "ar" ? "rotate-180" : ""}`} />
          {t.back}
        </Link>
        <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="rounded-full bg-white border px-4 py-2 text-[10px] font-black uppercase tracking-tighter shadow-sm hover:bg-gray-50 transition-colors">
          {lang === "en" ? "العربية" : "ENGLISH"}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 pb-20 pt-16">
        <div className="relative z-10">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{t.title}</p>
          <h1 className="text-5xl font-black tracking-tighter text-white md:text-8xl">Bayan Dining</h1>
        </div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200" 
            alt="Restaurant Interior" 
            className="h-full w-full object-cover brightness-[0.45]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-transparent to-[#0b1120]/40" />
        </div>
      </div>

      {/* Menu Content */}
      <div className="rounded-t-[40px] bg-white px-6 pb-32 pt-10 shadow-[0_-12px_40px_rgba(0,0,0,0.03)]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <h2 className="text-3xl font-black tracking-tighter text-[#0b1120]">{t.menu}</h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8 group">
            <Search className={`absolute ${lang === "ar" ? "right-4" : "left-4"} top-1/2 h-5 w-5 -translate-y-1/2 text-[#94a3b8] transition-colors group-focus-within:text-[#0b1120]`} />
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder={t.search} 
              className={`w-full rounded-2xl border-none bg-[#f1f5f9] py-4 ${lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"} text-sm font-bold text-[#0b1120] transition-all focus:bg-white focus:ring-2 focus:ring-[#0b1120]`} 
            />
          </div>

          {/* Categories */}
          <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-[#0b1120] text-white shadow-xl shadow-black/20" 
                    : "bg-[#f1f5f9] text-[#5d6c86] hover:bg-[#e2e8f0]"
                }`}
              >
                {t[cat.toLowerCase() as keyof typeof t]}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid gap-4">
            {visibleItems.length > 0 ? (
              visibleItems.map((item) => {
                const qty = cart[item.id] ?? 0;
                return (
                  <article key={item.id} className="flex gap-4 rounded-[24px] bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] ring-1 ring-[#eef2f8] transition-all hover:shadow-[0_12px_40px_rgba(11,17,32,0.05)] group">
                    <div className="relative h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-[20px] bg-gray-100">
                      <img src={item.image} alt={lang === "ar" ? item.name : item.nameEn} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-between py-1">
                      <div className="flex items-start justify-between gap-3 text-start">
                        <div className="min-w-0">
                          <div className="mb-1 flex flex-wrap items-center gap-2">
                            <h3 className={`text-base md:text-xl font-bold leading-tight text-[#0b1120]`}>
                              {lang === "ar" ? item.name : item.nameEn}
                            </h3>
                            <span className="rounded-full bg-[#0b1120]/5 px-2 py-0.5 text-[9px] font-bold text-[#0b1120] uppercase">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] md:text-sm font-medium text-[#5d6c86] leading-snug line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm md:text-lg font-black text-[#0b1120] whitespace-nowrap">SAR {item.price}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">
                          <Clock3 className="h-3.5 w-3.5" />
                          <span>{t.readyIn}</span>
                        </div>
                        {qty > 0 ? (
                          <div className="flex items-center rounded-full bg-[#0b1120] p-1 text-white shadow-lg">
                            <button onClick={() => removeItem(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-black">{qty}</span>
                            <button onClick={() => addItem(item.id)} className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0b1120] hover:bg-gray-100 transition-colors">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => addItem(item.id)} className="rounded-full bg-[#0b1120] px-5 py-2.5 text-[10px] md:text-[11px] font-bold text-white uppercase hover:bg-black transition-all active:scale-95">
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
