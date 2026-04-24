import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { ShoppingBag, TrendingUp, Paintbrush, Rocket } from "lucide-react";

export const metadata = {
  title: "المتاجر الإلكترونية | HELYRO OS",
  description: "تخصيص المتاجر على منصات مثل سلة وزد، أو بناء متاجر خاصة لزيادة معدل التحويل."
};

const packages = [
  {
    title: "Store Launch",
    price: "إطلاق سريع (سلة/زد)",
    desc: "تأسيس المتجر، اختيار القالب المناسب، وتجهيز الإعدادات الأساسية للبدء الفوري بالبيع.",
    features: ["تجهيز الإعدادات وضبط الشحن", "اختيار وتنسيق القالب", "إضافة المنتجات الأساسية", "ربط الدفع الإلكتروني"]
  },
  {
    title: "Store Growth",
    price: "تحسين التحويل",
    desc: "للمتاجر القائمة: تحسين تجربة المستخدم، تسريع التصفح، وزيادة معدل التحويل (Conversion).",
    features: ["تخصيص واجهات CSS للقالب", "تحسين عرض المنتجات", "تسريع أداء المتجر", "هيكلة الصفحات للـ SEO"]
  },
  {
    title: "Custom Commerce",
    price: "متاجر خاصة",
    desc: "بناء متجر إلكتروني مستقل بالكامل (Custom Build) لتجربة تسوق فريدة وميزات لا توفرها المنصات الجاهزة.",
    features: ["واجهة مستخدم (UI) حصرية", "تجربة تسوق سلسة وسريعة جداً", "تحكم كامل بالبيانات والهيكل", "أداء لا يضاهى على الجوال"]
  }
];

export default function EcommercePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="المتاجر الإلكترونية"
          description="نساعدك على إطلاق متجرك بسرعة على المنصات المحلية (سلة / زد)، أو نخصص مظهر متجرك الحالي، أو نبني لك متجراً خاصاً لزيادة مبيعاتك وتسهيل رحلة العميل."
        />

        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: ShoppingBag, title: "رحلة شراء واضحة", text: "تقليل خطوات الدفع وتسهيل عملية الشراء لزيادة المبيعات." },
                { icon: Paintbrush, title: "تخصيص الهوية", text: "تعديل قوالب سلة وزد لتعكس هويتك، بدلاً من المظهر التقليدي المكرر." },
                { icon: Rocket, title: "سرعة الأداء", text: "تحسين سرعة تحميل صور المنتجات والصفحات." },
                { icon: TrendingUp, title: "نمو مستمر", text: "حلول قابلة للتوسع مع نمو حجم متجرك وزيادة الطلبات." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/5 rounded-xl text-primary mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-10 text-center">حلول التجارة الإلكترونية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, i) => (
                <div key={i} className="glass-card p-8 flex flex-col border-t-4 border-t-primary">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4 w-fit">{pkg.price}</span>
                  <p className="text-muted-foreground mb-6 flex-grow">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="glass-button w-full py-3 rounded-lg font-medium">اطلب الخدمة</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>

      <footer className="w-full py-8 text-center text-muted-foreground border-t border-border/50 text-sm">
        <p>HELYRO OS &copy; {new Date().getFullYear()}. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
