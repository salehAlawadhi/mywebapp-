"use client";
import Image from "next/image";
import { MessageCircle, Monitor, Smartphone, Layers, ArrowDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompanyWorld() {
  const [isMultiPage, setIsMultiPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود إنشاء موقع إلكتروني لشركتي.")}`;

  return (
    <div className="w-full h-full min-h-screen bg-[#050505] flex flex-col pt-10 px-6 pb-24 overflow-y-auto">

      {/* Header Area */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">هوية رقمية قوية لشركتك</h2>
          <p className="text-white/60 text-lg max-w-xl">
             استكشف كيف نبني مواقع الشركات. غيّر طريقة العرض لتفهم الفرق بين الصفحات، وكيف يبدو موقعك للزائر.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-black px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          ابدأ بناء موقعك
        </a>
      </div>

      {/* Simulator Controls */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-4 mb-12 justify-center lg:justify-start relative z-20">
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex shadow-lg backdrop-blur-md">
          <button
            onClick={() => setIsMultiPage(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!isMultiPage ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
            صفحة هبوط (Landing Page)
          </button>
          <button
            onClick={() => setIsMultiPage(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isMultiPage ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
            موقع متكامل <Layers className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex shadow-lg backdrop-blur-md">
          <button
            onClick={() => setIsMobile(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${!isMobile ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
             <Monitor className="w-4 h-4" /> شاشة كمبيوتر
          </button>
          <button
            onClick={() => setIsMobile(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isMobile ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
             <Smartphone className="w-4 h-4" /> شاشة جوال
          </button>
        </div>
      </div>

      {/* Interactive Mockup Container */}
      <div className="flex-1 w-full flex justify-center items-start perspective-1000">

        <motion.div
            layout
            initial={false}
            animate={{
                width: isMobile ? 380 : '100%',
                maxWidth: isMobile ? 380 : 1200,
            }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.8 }}
            className={`relative rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden bg-black flex flex-col group ${isMobile ? 'border-8 border-[#222]' : ''}`}
        >
          {/* Mockup Header */}
          <div className={`w-full bg-[#111] flex items-center px-4 gap-3 border-b border-white/5 z-30 ${isMobile ? 'h-14 pt-4 rounded-t-3xl justify-center relative' : 'h-12'}`}>
            {!isMobile ? (
                <>
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="mx-auto flex-1 max-w-md h-7 bg-white/5 rounded-md border border-white/10 flex items-center justify-center text-[11px] text-white/40 tracking-wider">
                        your-business.com
                    </div>
                </>
            ) : (
                <div className="w-1/3 h-5 bg-black rounded-b-xl absolute top-0"></div>
            )}
          </div>

          {/* Internal Web Mockup Viewport */}
          <div className="relative w-full h-[600px] bg-[#FAFAFA] overflow-hidden">

             {/* Mock Navbar */}
             <div className="absolute top-0 inset-x-0 h-16 bg-white/90 backdrop-blur-md border-b border-black/5 z-20 flex items-center justify-between px-6 md:px-10">
                <div className="font-black text-2xl tracking-tighter text-black">LOGO.</div>

                {!isMobile && (
                    <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
                        <div className="text-black cursor-pointer">الرئيسية</div>
                        <AnimatePresence>
                        {isMultiPage && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 'auto' }} exit={{ opacity: 0, width: 0 }}
                                className="flex gap-8 overflow-hidden"
                            >
                                <div className="hover:text-black cursor-pointer text-[#06B6D4]">عن الشركة</div>
                                <div className="hover:text-black cursor-pointer">خدماتنا</div>
                                <div className="hover:text-black cursor-pointer">المشاريع</div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                        <div className="hover:text-black cursor-pointer">اتصل بنا</div>
                    </div>
                )}

                {isMobile ? (
                     <div className="w-6 h-4 flex flex-col justify-between">
                         <div className="w-full h-0.5 bg-black rounded-full"></div>
                         <div className="w-full h-0.5 bg-black rounded-full"></div>
                         <div className="w-3/4 h-0.5 bg-black rounded-full ml-auto"></div>
                     </div>
                ) : (
                    <div className="px-6 py-2 bg-black text-white text-sm font-bold rounded-full">استشارة مجانية</div>
                )}
             </div>

             {/* Marketing Logic Overlay (Appears on Hover) */}
             <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 min-w-[320px] text-center pointer-events-none">
                  <h4 className="text-white text-lg font-bold mb-2">
                      {isMultiPage ? 'موقع متكامل يبني الثقة' : 'صفحة هبوط تركز على التحويل'}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                      {isMultiPage
                        ? 'يشمل صفحات تفصيلية، مدونة، ملف تعريفي، مما يعكس حجم شركتك بقوة ويزيد من فرصتك في نتائج جوجل.'
                        : 'تصميم سريع ومباشر يجمع كل مميزاتك في شاشة واحدة ليوجه العميل فوراً لزر الاتصال أو الواتساب.'}
                  </p>
             </div>

             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 z-20">
                 <span className="text-black/50 text-xs font-bold uppercase tracking-widest mb-2">تصفح للأسفل</span>
                 <ArrowDown className="w-4 h-4 text-black animate-bounce" />
             </div>

             {/* Scrollable Content Image */}
             <div className="relative w-full h-[2000px] pt-16">
               <Image
                 src="/portfolio/quip.png"
                 alt="واجهة موقع شركة"
                 fill
                 sizes="(max-width: 1200px) 100vw, 1200px"
                 className="object-cover object-top transition-transform duration-[12000ms] ease-linear group-hover:-translate-y-[1500px]"
                 priority
               />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
