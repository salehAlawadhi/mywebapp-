"use client";
import Image from "next/image";
import { MessageCircle, Smartphone, MonitorPlay } from "lucide-react";

export default function RestaurantSimulator() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود الحصول على نظام منيو إلكتروني أو تطبيق لمطعمي.")}`;

  return (
    <div className="w-full bg-muted/20 border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">محاكاة نظام المطاعم والكافيهات</h3>
          <p className="text-muted-foreground">شاهد كيف يرى العميل المنيو، وكيف تستقبل أنت الطلبات</p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-3 rounded-xl font-bold transition-all hover-lift glow-shadow-accent flex items-center gap-2 whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          اطلب نظام مطعمك
        </a>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">

        {/* Customer View (Mobile App / QR Menu) */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="bg-black text-white px-4 py-2 rounded-t-2xl text-sm font-medium w-[280px] text-center shadow-lg z-10 flex items-center justify-center gap-2 border-b border-white/20">
            <Smartphone className="w-4 h-4" />
            شاشة العميل (المنيو)
          </div>
          <div className="relative w-[280px] h-[550px] bg-white rounded-b-3xl rounded-t-sm shadow-2xl border-4 border-black overflow-hidden group">
             {/* Simulating phone status bar */}
             <div className="w-full h-6 bg-black/90 flex justify-center items-end pb-1 absolute top-0 z-30">
                <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
             </div>

             <div className="relative w-full h-full bg-muted/30 pt-6">
               <Image
                 src="/portfolio/روح.png"
                 alt="واجهة المنيو للعميل"
                 fill
                 className="object-cover object-top transition-transform duration-[5000ms] ease-linear group-hover:-translate-y-[20%]"
               />

               {/* Interactive Overlay Hint */}
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm z-20">
                  <span className="text-white font-bold text-lg border border-white/50 px-4 py-2 rounded-full mb-2">تجربة سريعة وسلسة</span>
                  <span className="text-white/80 text-sm text-center px-6">يستعرض العميل الأطباق ويطلب مباشرة من طاولته</span>
               </div>
             </div>
          </div>
        </div>

        {/* Arrow/Connection Indicator */}
        <div className="hidden lg:flex flex-col items-center text-primary/40 px-4">
           <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
           <span className="text-xs font-bold mt-2">الطلب يصل فوراً</span>
        </div>

        {/* Manager/Cashier View (Dashboard) */}
        <div className="w-full lg:w-2/3 flex flex-col items-center">
           <div className="bg-primary text-white px-4 py-2 rounded-t-2xl text-sm font-medium w-full max-w-[600px] text-center shadow-lg z-10 flex items-center justify-center gap-2 border-b border-primary-foreground/20">
            <MonitorPlay className="w-4 h-4" />
            شاشة الإدارة (استقبال الطلبات)
          </div>
          <div className="relative w-full max-w-[600px] h-[400px] bg-white rounded-b-3xl rounded-t-sm shadow-xl border border-border/80 overflow-hidden flex flex-col">

            {/* Mock Browser Header */}
            <div className="w-full h-8 bg-muted flex items-center px-4 gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="mx-auto h-4 w-1/2 bg-white rounded-md border border-border/50"></div>
            </div>

            {/* Mock Dashboard Body */}
            <div className="flex-1 p-6 bg-slate-50 flex flex-col gap-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-slate-800">الطلبات الحالية</h4>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse">النظام متصل</div>
                </div>

                {/* Animated Mock Orders */}
                <div className="w-full p-4 bg-white border border-border rounded-xl shadow-sm hover-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-yellow-400"></div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">طاولة #4</span>
                    <span className="text-xs text-muted-foreground">منذ دقيقة</span>
                  </div>
                  <p className="text-sm text-slate-600">2x برجر كلاسيك، 1x بطاطس، 2x كولا</p>
                  <div className="mt-3 flex justify-end gap-2">
                     <div className="w-20 h-6 bg-green-500/10 rounded-md"></div>
                     <div className="w-16 h-6 bg-slate-100 rounded-md"></div>
                  </div>
                </div>

                <div className="w-full p-4 bg-white border border-border rounded-xl shadow-sm relative overflow-hidden opacity-70">
                  <div className="absolute top-0 right-0 w-1 h-full bg-green-500"></div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">طلب سفري #102</span>
                    <span className="text-xs text-muted-foreground">جاهز للتسليم</span>
                  </div>
                  <p className="text-sm text-slate-600">1x بيتزا مارجريتا، 1x عصير برتقال</p>
                </div>

                {/* Dashboard blurred background overlay to indicate it's a wireframe/mock */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
