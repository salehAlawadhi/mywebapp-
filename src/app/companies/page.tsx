import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { Monitor, Briefcase, Users, LayoutTemplate } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "مواقع الشركات | HELYRO OS",
  description: "مواقع سريعة وواضحة تعرض شركتك بشكل احترافي وتبني جسر الثقة مع عملائك."
};

const packages = [
  {
    title: "One-page Business",
    price: "حضور سريع",
    desc: "صفحة واحدة احترافية تلخص كل خدماتك، مميزاتك، وطرق التواصل بشكل سريع ومباشر.",
    features: ["تصميم عصري ونظيف", "سرعة تحميل ممتازة", "نموذج تواصل مباشر", "سهولة التصفح على الجوال"]
  },
  {
    title: "Multi-page Company",
    price: "الخيار الأفضل للنمو",
    desc: "موقع متعدد الصفحات يعطي مساحة لكل خدمة ويحسن من فرص ظهورك في محركات البحث.",
    features: ["صفحات مستقلة للخدمات", "مساحة لآراء العملاء والأعمال", "تهيئة أساسية لـ SEO", "لوحة تحكم للمحتوى (عند الحاجة)"]
  },
  {
    title: "Premium Corporate",
    price: "للعلامات الكبرى",
    desc: "تصميم مخصص بالكامل وبناء هيكلي متقدم يعكس حجم وثقل الشركة في السوق.",
    features: ["تصميم واجهات (UI/UX) خاص", "تأثيرات حركية (Motion) مدروسة", "دعم متعدد اللغات", "أداء فائق واستضافة متقدمة"]
  }
];

export default function CompaniesPage() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أريد البدء بمشروع موقع للشركة.")}`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="مواقع الشركات والأعمال"
          description="موقع شركة واضح واحترافي يشرح خدماتك بسرعة ويقوي حضورك الرقمي."
        />

        {/* Visual Proof Section */}
        <section className="w-full py-16 px-4 bg-muted/30 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-right">
                <h2 className="text-3xl font-bold mb-6">واجهة احترافية تعكس ثقة عملائك</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  نحن نصمم مواقع للشركات تركز على شيء واحد: تحويل الزائر إلى عميل حقيقي. من خلال تصميم نظيف، وسرعة تحميل فائقة، وأزرار تواصل واضحة ومباشرة.
                </p>
                <a href={whatsappUrl} className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover-lift glow-shadow-accent">
                  اطلب موقعك الآن عبر واتساب
                </a>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white">
                <Image
                  src="/portfolio/quip.png"
                  alt="نموذج موقع شركة"
                  fill priority loading="eager"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Monitor, title: "تصميم احترافي", text: "واجهة تعكس جدية واحترافية نشاطك التجاري." },
                { icon: LayoutTemplate, title: "وضوح العرض", text: "هيكلة تبرز أهم خدماتك للزائر دون تشتيت." },
                { icon: Users, title: "بناء الثقة", text: "أقسام مخصصة لآراء العملاء وشركاء النجاح." },
                { icon: Briefcase, title: "جاهز للعمل", text: "نماذج اتصال مباشرة لزيادة معدل التحويل." }
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

            <h2 className="text-3xl font-bold mb-10 text-center">خطط مصممة لنمو شركتك</h2>
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
                  <a href={whatsappUrl} className="glass-button w-full py-3 rounded-lg font-medium text-center block">تواصل للبدء</a>
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
