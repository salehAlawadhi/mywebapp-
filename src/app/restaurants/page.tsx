import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { UtensilsCrossed, Smartphone, MapPin, Zap } from "lucide-react";

export const metadata = {
  title: "حلول المطاعم والمقاهي | HELYRO OS",
  description: "منيو رقمي سريع التصفح على الجوال، صفحات فروع، وربط الواتساب للطلبات."
};

const packages = [
  {
    title: "منيو QR Starter",
    price: "حل سريع",
    desc: "منيو رقمي بسيط وأنيق لعملائك بمجرد مسح الكود.",
    features: ["تصميم جذاب ومناسب للجوال", "تحديث سهل وسريع للأصناف", "سرعة تحميل عالية"]
  },
  {
    title: "منيو QR Plus",
    price: "حل متكامل",
    desc: "منيو مع أزرار طلب مباشرة وتفاصيل أدق لكل صنف.",
    features: ["كل مميزات Starter", "زر للطلب المباشر (واتساب)", "صور عالية الجودة للأصناف", "إبراز العروض الخاصة"]
  },
  {
    title: "موقع مطعم كامل",
    price: "حضور رقمي",
    desc: "موقع متكامل يبرز هوية المطعم، الفروع، وطرق التواصل.",
    features: ["صفحة رئيسية بهوية المطعم", "خريطة تفاعلية للفروع", "روابط تطبيقات التوصيل", "استعراض المنيو"]
  }
];

export default function RestaurantsPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="حلول المطاعم والمقاهي"
          description="نصمم منيو رقمي ذكي وسريع يفتح الشهية، مع إمكانية إضافة طلبات مباشرة وربط بخرائط الفروع لتعزيز تجربة عملائك."
        />

        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">لماذا تحتاج حلاً رقمياً لمطعمك؟</h2>
              <p className="text-muted-foreground">تجربة العميل تبدأ من لحظة تصفح المنيو أو البحث عن الفرع.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Smartphone, title: "موبايل أولاً", text: "تصميم مخصص بالكامل ليناسب شاشات الجوال لسهولة التصفح." },
                { icon: Zap, title: "سرعة فائقة", text: "بدون أوقات تحميل طويلة، المنيو يظهر فور مسح الكود." },
                { icon: MapPin, title: "ربط الفروع", text: "سهولة الوصول لأقرب فرع عبر خرائط تفاعلية واضحة." },
                { icon: UtensilsCrossed, title: "هوية بصرية", text: "تصميم يعكس هوية مطعمك ويرفع من قيمة علامتك التجارية." }
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

            <h2 className="text-3xl font-bold mb-10 text-center">باقات مطاعم مخصصة</h2>
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
                  <button className="glass-button w-full py-3 rounded-lg font-medium">اطلب الباقة</button>
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
