"use client";
import Image from "next/image";
import { MessageCircle, Smartphone, Workflow, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppWorld() {
  const [activeTab, setActiveTab] = useState<"app" | "automation">("app");
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود تطوير تطبيق أو نظام أتمتة لعملي.")}`;

  return (
    <div className="w-full h-full min-h-screen bg-[#050505] flex flex-col pt-10 px-6 pb-24 overflow-y-auto">

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">تطبيقات ذكية وأنظمة أتمتة</h2>
          <p className="text-white/60 text-lg max-w-xl">
             واجهات مصممة للاستخدام الحقيقي، وأنظمة خلفية (n8n) تجعل العمليات الروتينية تعمل تلقائياً.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-black px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          ناقش فكرتك برمجياً
        </a>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-4 mb-16 justify-center">
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-full flex shadow-lg backdrop-blur-md">
          <button
            onClick={() => setActiveTab("app")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === "app" ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
            <Smartphone className="w-4 h-4" /> واجهة التطبيق (Mobile App)
          </button>
          <button
            onClick={() => setActiveTab("automation")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === "automation" ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}
          >
            <Workflow className="w-4 h-4" /> نظام الأتمتة (n8n Workflow)
          </button>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center items-start">
        <AnimatePresence mode="wait">
          {activeTab === "app" && (
            <motion.div
              key="app"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full max-w-5xl"
            >
              {/* App Phone Mockup */}
              <div className="relative w-[340px] h-[700px] bg-black rounded-[3rem] shadow-2xl border-[12px] border-[#111] overflow-hidden group">
                {/* Dynamic Island Mock */}
                <div className="absolute top-3 inset-x-0 flex justify-center z-30">
                  <div className="w-[120px] h-[30px] bg-black rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative w-full h-full bg-[#f8f9fa]">
                  <Image
                    src="/portfolio/app andrid.png"
                    alt="تطبيق أندرويد"
                    fill
                    sizes="340px"
                    className="object-cover object-top transition-transform duration-[6000ms] group-hover:-translate-y-[15%] ease-out"
                    priority
                  />

                  {/* Marketing Overlay inside Mockup */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-md">
                     <div className="w-16 h-16 rounded-full bg-[#06B6D4]/20 flex items-center justify-center mb-6">
                        <Smartphone className="w-8 h-8 text-[#06B6D4]" />
                     </div>
                     <h4 className="text-white text-2xl font-bold mb-4">تصميم يحفز الاستخدام</h4>
                     <p className="text-white/80 text-sm leading-relaxed border-t border-white/10 pt-4">
                        الجمال وحده لا يكفي. نحن نصمم واجهات التطبيقات بحيث تكون بديهية للمستخدم، تسرّع من عملية الشراء أو أداء المهام بدون تعقيد.
                     </p>
                  </div>
                </div>
              </div>

              <div className="max-w-md text-right space-y-8">
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-2">ليس مجرد شكل، بل تجربة متكاملة</h3>
                    <p className="text-white/60">نبرمج تطبيقات الـ Android و iOS بأحدث التقنيات لضمان أداء سلس وسرعة تحميل فائقة.</p>
                 </div>

                 <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-4">
                       <div className="p-2 bg-white/10 rounded-lg text-white"><Zap className="w-5 h-5" /></div>
                       <div>
                          <h4 className="font-bold text-white mb-1">أداء فائق (60FPS)</h4>
                          <p className="text-sm text-white/50">تفاعلات ناعمة وانتقالات شاشات لحظية تمنح العميل إحساساً بالفخامة.</p>
                       </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-start gap-4">
                       <div className="p-2 bg-[#06B6D4]/10 rounded-lg text-[#06B6D4]"><Workflow className="w-5 h-5" /></div>
                       <div>
                          <h4 className="font-bold text-white mb-1">ربط بالأنظمة الخلفية</h4>
                          <p className="text-sm text-white/50">التطبيق متصل بأساس قوي من قواعد البيانات وواجهات برمجة التطبيقات (APIs).</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}

          {activeTab === "automation" && (
             <motion.div
               key="auto"
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
               className="w-full max-w-5xl relative"
             >
               <div className="relative w-full h-[500px] bg-[#1e293b] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-700/50 flex flex-col group">

                  {/* Mock n8n Header */}
                  <div className="w-full h-14 bg-[#0f172a] border-b border-slate-700/50 flex items-center px-6 justify-between">
                     <div className="flex gap-2 items-center">
                         <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-[10px] font-black text-white">n8n</div>
                         <span className="text-slate-300 text-sm font-semibold ml-2">New Customer Onboarding Workflow</span>
                     </div>
                     <div className="flex items-center gap-3">
                         <span className="flex items-center gap-2 text-xs text-green-400 font-bold bg-green-400/10 px-3 py-1.5 rounded-full"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Active</span>
                         <button className="px-4 py-1.5 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded-md">Execute</button>
                     </div>
                  </div>

                  <div className="relative flex-1 bg-[#0f172a] overflow-hidden p-8">
                     <Image
                       src="/portfolio/n8n.jpeg"
                       alt="n8n workflow"
                       fill
                       className="object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-[4000ms] mix-blend-screen"
                     />

                     {/* Data flow animations */}
                     <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-[#06B6D4] rounded-full shadow-[0_0_20px_#06B6D4] animate-[ping_2s_infinite]"></div>
                     <div className="absolute top-[50%] left-[45%] w-4 h-4 bg-orange-400 rounded-full shadow-[0_0_20px_#fb923c] animate-[ping_3s_infinite] delay-500"></div>
                     <div className="absolute top-[40%] left-[70%] w-4 h-4 bg-green-400 rounded-full shadow-[0_0_20px_#4ade80] animate-[ping_2.5s_infinite] delay-1000"></div>

                     {/* Overlay Marketing Card */}
                     <div className="absolute bottom-8 right-8 bg-slate-800/90 backdrop-blur-md border border-slate-600 p-6 rounded-2xl max-w-sm shadow-2xl z-20">
                         <div className="flex items-center gap-3 mb-3">
                             <RefreshCw className="w-5 h-5 text-[#06B6D4] animate-spin-slow" />
                             <h4 className="text-white font-bold text-lg">أتمتة توفر مئات الساعات</h4>
                         </div>
                         <p className="text-slate-300 text-sm leading-relaxed">
                            تخيل أن بمجرد دفع العميل، يتم إنشاء الفاتورة تلقائياً، وإرسال رسالة شكر على الواتساب، وتحديث جداول المبيعات الخاصة بك، دون أي تدخل بشري. هذا ما نفعله باستخدام n8n.
                         </p>
                     </div>
                  </div>
               </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
