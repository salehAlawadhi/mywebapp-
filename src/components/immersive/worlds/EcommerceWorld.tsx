"use client";
import Image from "next/image";
import { MessageCircle, ShoppingCart, CreditCard, TrendingUp, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

export default function EcommerceWorld() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود تحسين أو بناء متجر إلكتروني يركز على المبيعات.")}`;

  return (
    <div className="w-full h-full min-h-screen bg-[#050505] flex flex-col pt-10 px-6 pb-24 overflow-y-auto">

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">متاجر إلكترونية مصممة للبيع</h2>
          <p className="text-white/60 text-lg max-w-xl">
             سواء كنا نبني متجرك من الصفر أو نخصص متجرك على (سلة)، تركيزنا الأول هو تقليل خطوات العميل نحو الدفع.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-black px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          ابدأ متجرك الآن
        </a>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center justify-center">

        {/* Left Side: Mock Product Flow */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

            {/* Mock Storefront Area */}
            <div className="w-full h-[400px] bg-[#111] rounded-[2rem] border border-white/10 overflow-hidden relative group">
                <div className="absolute top-0 inset-x-0 h-16 bg-white/5 border-b border-white/10 flex items-center justify-between px-6 z-20 backdrop-blur-md">
                    <div className="font-bold tracking-widest uppercase text-white">BRAND.</div>
                    <div className="flex gap-4">
                        <PackageSearch className="w-5 h-5 text-white/50" />
                        <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                </div>

                {/* Simulated product grid */}
                <div className="pt-20 px-6 pb-6 h-full overflow-hidden">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-2xl font-bold text-white">المنتجات المميزة</h3>
                        <span className="text-sm text-white/50 border-b border-white/20 pb-1">عرض الكل</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Product Card 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col group/card cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-full aspect-square bg-white/5 rounded-xl mb-3 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">اسم المنتج</h4>
                            <span className="text-xs text-[#06B6D4] font-bold">299 ر.س</span>
                            <button className="w-full mt-3 py-2 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity transform translate-y-2 group-hover/card:translate-y-0">
                                أضف للسلة
                            </button>
                        </div>
                        {/* Product Card 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col group/card cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-full aspect-square bg-white/5 rounded-xl mb-3"></div>
                            <h4 className="text-sm font-bold text-white mb-1">منتج آخر</h4>
                            <span className="text-xs text-[#06B6D4] font-bold">150 ر.س</span>
                        </div>
                    </div>
                </div>

                {/* Persuasion Layer */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm z-30">
                     <ShoppingCart className="w-10 h-10 text-white mb-4" />
                     <h4 className="text-white text-2xl font-bold mb-3">تصميم يقود للتحويل</h4>
                     <p className="text-white/70 text-sm leading-relaxed">
                        صفحات المنتجات وعملية الشراء مصممة خصيصاً لإزالة أي عقبات تمنع الزائر من إتمام الدفع. نركز على الثقة، السرعة، ووضوح العرض.
                     </p>
                </div>
            </div>

            {/* Quick Stats Mock */}
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                    <span className="text-3xl font-black text-white mb-1">+40%</span>
                    <span className="text-xs text-white/50">زيادة في معدل التحويل</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center">
                    <CreditCard className="w-8 h-8 text-[#06B6D4] mb-3" />
                    <span className="text-3xl font-black text-white mb-1">&lt; 3</span>
                    <span className="text-xs text-white/50">نقرات لإتمام الدفع</span>
                </div>
            </div>
        </div>

        {/* Right Side: Copy & Strategy */}
        <div className="w-full lg:w-1/2 text-right space-y-8">
            <div>
                <h3 className="text-3xl font-bold text-white mb-4">متجرك هو واجهتك التجارية الأهم</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                    العميل يقرر الشراء خلال أول 5 ثوانٍ. إذا كان المتجر بطيئاً أو تصميمه معقداً، ستفقد المبيعات مهما كانت جودة منتجك.
                </p>
            </div>

            <div className="space-y-4">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <h4 className="font-bold text-lg text-white mb-2">تخصيص متاجر "سلة" و "زد"</h4>
                    <p className="text-sm text-white/50">نخرج متجرك من القوالب الجاهزة المكررة، ونصمم له هوية بصرية مخصصة عبر تعديل الأكواد لتبرز علامتك التجارية بقوة.</p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <h4 className="font-bold text-lg text-white mb-2">متاجر مبرمجة بالكامل (Custom)</h4>
                    <p className="text-sm text-white/50">للاحتياجات المعقدة والمبيعات العالية جداً، نبني متاجر بأحدث التقنيات لضمان أداء لا يمكن للمنصات الجاهزة تقديمه.</p>
                </div>
            </div>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold hover:text-[#06B6D4] transition-colors border-b border-transparent hover:border-[#06B6D4] pb-1"
            >
                استشرنا حول أفضل منصة لك <MessageCircle className="w-4 h-4" />
            </a>
        </div>

      </div>
    </div>
  );
}
