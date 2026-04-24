"use client";

import { motion } from "framer-motion";
import { Monitor, UtensilsCrossed, ShoppingBag, Rocket, LineChart, Code2 } from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "مواقع الشركات",
    description: "موقع سريع وواضح يعرض شركتك بشكل احترافي، ويبني جسر الثقة مع عملائك من اللحظة الأولى.",
    features: ["صفحة تعريفية واحدة", "موقع متعدد الصفحات", "تصميم مخصص للشركات"]
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
    title: "حلول المطاعم",
    description: "منيو رقمي ذكي وسريع، مع إمكانية إضافة طلبات مباشرة وربط بخرائط الفروع.",
    features: ["منيو QR متفاعل", "صفحة عروض المطعم", "ربط سريع للواتساب"]
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    title: "المتاجر الإلكترونية",
    description: "تخصيص وتهيئة متاجرك على منصات (سلة/زد) أو بناء متجر خاص لزيادة معدل التحويل والمبيعات.",
    features: ["متجر قابل للنمو", "تحسين تجربة الشراء", "ربط بوابات الدفع"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "صفحات الهبوط",
    description: "صفحات بيع مركزة لمنتج أو خدمة واحدة، مصممة خصيصاً لتحويل الزوار إلى عملاء فعليين.",
    features: ["تصميم موجه للبيع", "سرعة تحميل فائقة", "ربط مع أدوات التحليل"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "واجهات التطبيقات",
    description: "تصميم واجهات (UI/UX) للتطبيقات ولوحات التحكم بمنهجية تسهل الاستخدام وتبرز جودة المنصة.",
    features: ["تصميم تجربة المستخدم", "لوحات تحكم Dashboard", "نماذج تفاعلية Prototype"]
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "الظهور الرقمي والأداء",
    description: "تحسين محركات البحث (SEO) وتسريع أداء موقعك الحالي ليتصدر النتائج في السوق السعودي.",
    features: ["SEO تقني وهيكلي", "تحسين الظهور المحلي", "تسريع أداء الموقع"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">الخدمات الأساسية</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            حلول رقمية مدروسة بعناية، لا تركز فقط على الشكل الجمالي، بل على <strong>سرعة الأداء وزيادة المبيعات</strong> وتلبية احتياجات السوق بشكل مباشر.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8 flex flex-col h-full bg-white group">
              <div className="p-4 bg-muted rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
