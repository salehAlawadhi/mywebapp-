import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { Search, Zap, Map, FileCode2 } from "lucide-react";

export const metadata = {
  title: "الظهور الرقمي والـ SEO | HELYRO OS",
  description: "تحسين محركات البحث، تسريع المواقع، والظهور المحلي للشركات والمتاجر."
};

const packages = [
  {
    title: "SEO Setup",
    price: "تهيئة أساسية",
    desc: "تجهيز الموقع لمحركات البحث لضمان ظهوره بشكل صحيح للعملاء المحتملين.",
    features: ["تهيئة العناوين (Meta tags)", "ربط Google Search Console", "إنشاء خريطة الموقع (Sitemap)", "تحسين هيكلة الروابط"]
  },
  {
    title: "Performance Boost",
    price: "تسريع الأداء",
    desc: "حل مشاكل البطء في الموقع لرفع معدل بقاء الزوار وتحسين تصنيف جوجل.",
    features: ["تحسين سرعة تحميل الصور", "تقليل حجم ملفات الكود", "تطبيق تقنيات Caching", "تحسين مقاييس Core Web Vitals"]
  },
  {
    title: "Local Presence",
    price: "الظهور المحلي",
    desc: "تهيئة النشاط التجاري للظهور للعملاء القريبين عند البحث في خرائط جوجل.",
    features: ["إعداد حساب Google Business", "تحسين معلومات الفرع", "ربط موقعك الجغرافي", "استراتيجية تقييمات العملاء"]
  }
];

export default function DigitalPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="التطوير والظهور الرقمي"
          description="لا يكفي أن تمتلك موقعاً أو متجراً، بل يجب أن يصل إليه عملاؤك بسرعة وسهولة. نساعدك في تصدر نتائج البحث وتحقيق أداء استثنائي."
        />

        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Search, title: "تحسين SEO", text: "تهيئة الكلمات المفتاحية ليظهر نشاطك في الصفحة الأولى لجوجل." },
                { icon: Map, title: "الظهور المحلي", text: "ضمان سهولة عثور العملاء على فروعك عبر خرائط جوجل." },
                { icon: Zap, title: "أداء صاروخي", text: "تسريع الموقع لضمان عدم مغادرة الزوار بسبب بطء التحميل." },
                { icon: FileCode2, title: "كود نظيف", text: "هيكلة برمجية تسهل على محركات البحث فهم وتقييم موقعك." }
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

            <h2 className="text-3xl font-bold mb-10 text-center">باقات تحسين الأداء</h2>
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
                  <button className="glass-button w-full py-3 rounded-lg font-medium">اطلب التحسين</button>
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
