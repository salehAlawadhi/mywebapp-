"use client";
import { motion } from "framer-motion";
import { Store, Building2, Smartphone, ShoppingBag, Globe2, MapPin, Zap } from "lucide-react";
import type { WorldMode } from "./ExperienceOrchestrator";

interface Props {
  onSelectWorld: (mode: WorldMode) => void;
}

export default function Gateway({ onSelectWorld }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-12 pb-32 flex flex-col items-center">

      {/* Brand & Language Toggle Area */}
      <div className="w-full flex justify-between items-center mb-24">
        <div className="font-black text-2xl tracking-tighter">HELYRO.</div>
        <div className="flex gap-4 items-center">
           <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">English</button>
           <span className="text-white/20">|</span>
           <button className="text-sm font-bold text-white">العربية</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mb-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8">
           <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
           استوديو رقمي فاخر للشركات في السعودية والخليج
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
        >
          اختر نوع مشروعك،<br/>وادخل <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">التجربة المناسبة</span> مباشرة
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto"
        >
          لا نعرض خدماتنا فقط، بل نحوّل الموقع إلى تجربة حيّة قريبة من المشروع الذي تريد بناءه، حتى ترى الفكرة بشكل أوضح قبل أن تبدأ.
        </motion.p>
      </div>

      {/* Category Selector (The Portals) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-32"
      >
        <WorldCard
          icon={<Store />}
          title="المطاعم والكافيهات"
          desc="أنظمة منيو QR، وإدارة الطلبات الحية"
          onClick={() => onSelectWorld("restaurant")}
        />
        <WorldCard
          icon={<Building2 />}
          title="مواقع الشركات"
          desc="واجهات رقمية تبني الثقة وتجلب العملاء"
          onClick={() => onSelectWorld("company")}
        />
        <WorldCard
          icon={<Smartphone />}
          title="تطبيقات الجوال"
          desc="تجربة مستخدم حقيقية وأنظمة أتمتة"
          onClick={() => onSelectWorld("app")}
        />
        <WorldCard
          icon={<ShoppingBag />}
          title="المتاجر الإلكترونية"
          desc="تصميم يركز على زيادة معدلات التحويل"
          onClick={() => onSelectWorld("ecommerce")}
        />
      </motion.div>

      {/* Supporting Services Layer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl border-t border-white/5 pt-20 flex flex-col items-center text-center"
      >
        <h3 className="text-2xl font-bold mb-4">خدمات النمو الرقمي المساندة</h3>
        <p className="text-white/50 mb-12 max-w-xl">
          ندعم مشروعك الأساسي بخدمات تقنية تزيد من وصولك وتسرع من أدائك في السوق المحلي.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-right">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 mb-4"><Globe2 className="w-5 h-5" /></div>
             <h4 className="font-bold mb-2">تحسين محركات البحث (SEO)</h4>
             <p className="text-sm text-white/50">ظهور أقوى في نتائج بحث جوجل للكلمات المفتاحية في مجالك.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 mb-4"><MapPin className="w-5 h-5" /></div>
             <h4 className="font-bold mb-2">حضور محلي (Google Maps)</h4>
             <p className="text-sm text-white/50">تحسين وتوثيق نشاطك التجاري ليظهر للعملاء القريبين منك بوضوح.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
             <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/70 mb-4"><Zap className="w-5 h-5" /></div>
             <h4 className="font-bold mb-2">تحسين الأداء والسرعة</h4>
             <p className="text-sm text-white/50">تدقيق تقني شامل لجعل موقعك أو متجرك أسرع بمرتين على الأقل.</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

function WorldCard({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void }) {
  return (
    <motion.button
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      onClick={onClick}
      className="group relative h-[320px] rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col items-start text-right p-8 hover:bg-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      {/* Hover Gradient Injection */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />

      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-auto group-hover:scale-110 transition-transform duration-500 ease-out">
        {icon}
      </div>

      <div className="relative z-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>

      {/* Interaction indicator */}
      <div className="absolute bottom-8 left-8 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <span className="block w-1.5 h-1.5 rounded-full bg-white"></span>
      </div>
    </motion.button>
  );
}
