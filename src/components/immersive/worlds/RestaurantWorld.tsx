"use client";
import Image from "next/image";
import { MessageCircle, Smartphone, MonitorPlay, ShoppingBag, BellRing, Settings2 } from "lucide-react";

export default function RestaurantWorld() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود الحصول على نظام منيو إلكتروني أو تطبيق لمطعمي.")}`;

  return (
    <div className="w-full h-full min-h-screen bg-[#050505] flex flex-col pt-10 px-6 pb-24 overflow-y-auto">

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">منيو إلكتروني ونظام إدارة متكامل</h2>
          <p className="text-white/60 text-lg max-w-xl">
             هذه ليست مجرد صور. هكذا سيرى عميلك المنيو من هاتفه، وهكذا ستصلك الطلبات مباشرة إلى شاشة الكاشير في مطعمك.
          </p>
        </div>
        <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                طلب عرض سعر
            </button>
            <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-black px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            >
            <MessageCircle className="w-5 h-5" />
            اطلب نظامك الآن
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col xl:flex-row gap-12 items-center justify-center">

        {/* Customer View (Mobile App / QR Menu) */}
        <div className="w-full xl:w-1/3 flex flex-col items-center">
          <div className="bg-white/10 text-white px-6 py-3 rounded-t-3xl text-sm font-bold w-[320px] text-center shadow-lg border border-white/10 border-b-0 flex items-center justify-center gap-3">
            <Smartphone className="w-4 h-4 text-[#06B6D4]" />
            شاشة العميل (المنيو)
          </div>
          <div className="relative w-[320px] h-[650px] bg-black rounded-b-[2.5rem] rounded-t-none shadow-2xl border-8 border-white/10 overflow-hidden group">

             {/* Simulating phone status bar */}
             <div className="absolute top-0 inset-x-0 h-7 bg-gradient-to-b from-black/80 to-transparent z-30 flex justify-center items-start pt-1">
                <div className="w-1/3 h-4 bg-black rounded-full border border-white/10"></div>
             </div>

             <div className="relative w-full h-full bg-[#FAFAFA]">
               {/* Marketing Overlay inside the experience */}
               <div className="absolute top-12 inset-x-4 bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl p-4 shadow-lg z-40 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-black text-sm font-bold text-center">تجربة طلب سريعة وواضحة تزيد من مبيعاتك وتلغي قوائم الانتظار.</p>
               </div>

               <Image
                 src="/portfolio/روح.png"
                 alt="واجهة المنيو للعميل"
                 fill
                 sizes="(max-width: 768px) 100vw, 320px"
                 className="object-cover object-top transition-transform duration-[8000ms] ease-linear group-hover:-translate-y-[25%]"
                 priority
               />

               {/* Simulated Cart Badge */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl flex items-center gap-3 z-30 animate-bounce cursor-pointer hover:scale-105 transition-transform">
                  <ShoppingBag className="w-4 h-4" />
                  عربة الطلب (2) - 145 ر.س
               </div>
             </div>
          </div>
        </div>

        {/* Data Flow Indicator */}
        <div className="hidden xl:flex flex-col items-center justify-center gap-4 text-white/30 px-4">
           <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">Real-time Sync</span>
           <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-10 bg-white blur-sm animate-[translateX_2s_infinite]"></div>
           </div>
        </div>

        {/* Manager/Cashier View (Dashboard) */}
        <div className="w-full xl:w-[60%] flex flex-col items-center">
           <div className="bg-white/10 text-white px-6 py-3 rounded-t-3xl text-sm font-bold w-full max-w-[800px] text-center shadow-lg border border-white/10 border-b-0 flex items-center justify-center gap-3">
            <MonitorPlay className="w-4 h-4 text-[#06B6D4]" />
            شاشة الكاشير / المطبخ
          </div>
          <div className="relative w-full max-w-[800px] h-[550px] bg-[#0A0A0A] rounded-b-[2.5rem] rounded-t-none shadow-2xl border border-white/10 overflow-hidden flex flex-col group">

            {/* Mock Browser Header */}
            <div className="w-full h-10 bg-white/5 flex items-center px-6 gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="mx-auto h-5 w-1/2 bg-white/5 rounded-md border border-white/10 flex items-center justify-center text-[10px] text-white/30 font-mono tracking-widest">
                 DASHBOARD.HELYRO.OS
              </div>
            </div>

            {/* Mock Dashboard Body */}
            <div className="flex-1 p-8 flex flex-col gap-6 relative overflow-hidden">

                {/* Marketing Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 min-w-[300px] text-center">
                  <Settings2 className="w-8 h-8 text-[#06B6D4] mx-auto mb-4 animate-spin-slow" />
                  <p className="text-white text-lg font-bold">إدارة ذكية للمطعم</p>
                  <p className="text-white/60 text-sm mt-2">استقبل الطلبات، حدّث حالة التحضير، وراقب المبيعات في الوقت الفعلي.</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-2xl text-white">الطلبات الواردة</h4>
                  <div className="flex gap-4">
                      <div className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-xs font-bold rounded-full flex items-center gap-2">
                        <BellRing className="w-3 h-3" /> 2 طلبات جديدة
                      </div>
                      <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded-full animate-pulse">النظام متصل</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Active Order Card */}
                    <div className="w-full p-5 bg-white/5 border border-[#06B6D4]/30 rounded-2xl shadow-lg relative overflow-hidden transition-transform hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-1 h-full bg-[#06B6D4]"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="font-bold text-lg block">طاولة #4</span>
                            <span className="text-xs text-[#06B6D4]">قيد التحضير</span>
                        </div>
                        <span className="text-xs text-white/40 font-mono">10:42 AM</span>
                    </div>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm text-white/80 border-b border-white/5 pb-2">2x برجر كلاسيك (بدون بصل)</p>
                        <p className="text-sm text-white/80 border-b border-white/5 pb-2">1x بطاطس بالجبنة</p>
                        <p className="text-sm text-white/80 pb-2">2x كولا</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                        <span className="font-bold">145 ر.س</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-[#06B6D4] text-black text-xs font-bold rounded-lg hover:bg-cyan-400">جاهز</button>
                        </div>
                    </div>
                    </div>

                    {/* Waiting Order Card */}
                    <div className="w-full p-5 bg-white/5 border border-yellow-500/30 rounded-2xl shadow-lg relative overflow-hidden transition-transform hover:-translate-y-1 opacity-70">
                    <div className="absolute top-0 right-0 w-1 h-full bg-yellow-500"></div>
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="font-bold text-lg block">طلب سفري #102</span>
                            <span className="text-xs text-yellow-500">جديد</span>
                        </div>
                        <span className="text-xs text-white/40 font-mono">10:45 AM</span>
                    </div>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm text-white/80 border-b border-white/5 pb-2">1x بيتزا مارجريتا كبير</p>
                        <p className="text-sm text-white/80 pb-2">1x عصير برتقال</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
                        <span className="font-bold">85 ر.س</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-lg hover:bg-yellow-500/30">قبول الطلب</button>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Dashboard grid bg decoration */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-[-1]"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
