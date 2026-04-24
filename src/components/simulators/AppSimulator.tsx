"use client";
import Image from "next/image";
import { MessageCircle, Smartphone, Workflow } from "lucide-react";
import { useState } from "react";

export default function AppSimulator() {
  const [activeTab, setActiveTab] = useState<"app" | "automation">("app");
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود تطوير تطبيق أو نظام أتمتة لعملي.")}`;

  return (
    <div className="w-full bg-muted/20 border border-border/50 rounded-3xl p-6 md:p-10 shadow-sm">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">محاكاة التطبيقات والأنظمة</h3>
          <p className="text-muted-foreground">شاهد قوة تطبيقات الجوال وأنظمة الأتمتة المخصصة</p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-3 rounded-xl font-bold transition-all hover-lift glow-shadow-accent flex items-center gap-2 whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          تحدث معنا حول فكرتك
        </a>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-white border border-border/80 p-1 rounded-full flex shadow-sm">
          <button
            onClick={() => setActiveTab("app")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === "app" ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Smartphone className="w-4 h-4" /> واجهات التطبيقات
          </button>
          <button
            onClick={() => setActiveTab("automation")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === "automation" ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Workflow className="w-4 h-4" /> أنظمة الأتمتة (n8n)
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        {activeTab === "app" && (
           <div className="flex gap-8 items-center flex-wrap justify-center">
             <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] shadow-2xl border-8 border-black overflow-hidden group">
               <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center rounded-b-3xl"></div>
               <Image src="/portfolio/app andrid.png" alt="تطبيق أندرويد" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-[6000ms] group-hover:-translate-y-[20%]" />
             </div>

             <div className="max-w-xs text-right space-y-4">
                <h4 className="text-xl font-bold text-primary">تطبيقات عصرية وسريعة</h4>
                <p className="text-muted-foreground leading-relaxed">
                  نصمم ونبرمج تطبيقات جوال توفر تجربة مستخدم خالية من التعقيد. تفاعل سلس، وسرعة استجابة فائقة تضمن بقاء عملائك.
                </p>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                   <ul className="space-y-2 text-sm font-medium">
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> تصميم واجهات احترافي UI/UX</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> برمجة متوافقة مع Android و iOS</li>
                     <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> ربط بقواعد بيانات آمنة وسريعة</li>
                   </ul>
                </div>
             </div>
           </div>
        )}

        {activeTab === "automation" && (
           <div className="w-full max-w-4xl relative">
             <div className="relative w-full h-[400px] bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700 flex flex-col group">
                <div className="w-full h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                   <span className="text-slate-400 text-xs ml-4 font-mono">n8n - Automation Workflow Builder</span>
                </div>
                <div className="relative flex-1 bg-[#1e293b]">
                   <Image src="/portfolio/n8n.jpeg" alt="n8n workflow" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[4000ms]" />

                   {/* Data flow simulation dots */}
                   <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-[ping_2s_infinite]"></div>
                   <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-[ping_3s_infinite]"></div>
                </div>
             </div>

             <div className="mt-8 text-center max-w-2xl mx-auto space-y-4">
                <h4 className="text-xl font-bold text-primary">دع النظام يعمل بدلاً عنك</h4>
                <p className="text-muted-foreground leading-relaxed">
                  نربط جميع أدواتك (واتساب، إيميل، جداول بيانات، برامج المحاسبة) في مسار واحد مؤتمت. يقلل من الأخطاء البشرية ويوفر مئات الساعات شهرياً.
                </p>
             </div>
           </div>
        )}
      </div>
    </div>
  );
}
