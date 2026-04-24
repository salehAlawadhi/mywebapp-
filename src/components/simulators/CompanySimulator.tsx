"use client";
import Image from "next/image";
import { MessageCircle, Monitor, Layers } from "lucide-react";
import { useState } from "react";

export default function CompanySimulator() {
  const [isMultiPage, setIsMultiPage] = useState(false);
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود إنشاء موقع إلكتروني لشركتي.")}`;

  return (
    <div className="w-full bg-muted/20 border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">محاكاة مواقع الشركات</h3>
          <p className="text-muted-foreground">تصفح كيف سيبدو موقع شركتك بهوية احترافية</p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-3 rounded-xl font-bold transition-all hover-lift glow-shadow-accent flex items-center gap-2 whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          تواصل لبناء موقعك
        </a>
      </div>

      {/* Simulator Control Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white border border-border/80 p-1 rounded-full flex shadow-sm">
          <button
            onClick={() => setIsMultiPage(false)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isMultiPage ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
          >
            صفحة واحدة (هبوط)
          </button>
          <button
            onClick={() => setIsMultiPage(true)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isMultiPage ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
          >
            متعدد الصفحات <Layers className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        {/* Browser Mockup */}
        <div className="w-full max-w-[900px] relative">
          <div className="bg-slate-800 text-white px-4 py-2 rounded-t-2xl text-sm font-medium w-full flex items-center gap-3">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="mx-auto flex-1 max-w-sm h-6 bg-slate-700 rounded-md border border-slate-600 flex items-center px-3 text-xs text-slate-400">
               <Monitor className="w-3 h-3 mr-2" />
               your-company.com
            </div>
          </div>

          <div className="relative w-full h-[500px] bg-white rounded-b-2xl shadow-2xl border-x border-b border-slate-800 overflow-hidden group">

             {/* Nav Bar Mock */}
             <div className="absolute top-0 w-full h-14 bg-white/80 backdrop-blur-md border-b border-slate-100 z-30 flex items-center justify-between px-6">
                <div className="font-black text-xl tracking-tighter">LOGO.</div>
                <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                   <div className="hover:text-black cursor-pointer">الرئيسية</div>
                   {isMultiPage && (
                     <>
                      <div className="hover:text-black cursor-pointer text-primary">خدماتنا</div>
                      <div className="hover:text-black cursor-pointer">من نحن</div>
                     </>
                   )}
                   <div className="hover:text-black cursor-pointer">اتصل بنا</div>
                </div>
                <div className="px-4 py-1.5 bg-black text-white text-xs rounded-full">استشارة مجانية</div>
             </div>

             <div className="relative w-full h-full bg-slate-50 pt-14">
               <Image
                 src="/portfolio/quip.png"
                 alt="واجهة موقع شركة"
                 fill
                 className="object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover:-translate-y-[30%]"
               />

               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm z-20">
                  <span className="text-white font-bold text-lg border border-white/50 px-4 py-2 rounded-full mb-2">
                    {isMultiPage ? 'موقع متكامل للشركات الكبيرة' : 'موقع سريع للتحويل المباشر'}
                  </span>
                  <span className="text-white/80 text-sm text-center px-6 max-w-sm">
                    {isMultiPage
                      ? 'يشمل صفحات تفصيلية للخدمات، مدونة، وملف تعريفي كامل يقوي من ثقة عملائك ويحسن ظهورك في جوجل.'
                      : 'يركز على إيصال رسالتك بسرعة ودفع الزائر لاتخاذ قرار فوري (مثل التواصل عبر الواتساب).'}
                  </span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
