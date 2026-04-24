import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { TrendingUp, Cpu, Workflow, Database } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "التطوير والأتمتة | HELYRO OS",
  description: "حلول تقنية متقدمة، أتمتة العمليات (n8n)، وأنظمة مخصصة ترفع من كفاءة عملك."
};

export default function DigitalPage() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود الاستفسار عن الأتمتة وتطوير الأنظمة.")}`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="الأتمتة والحلول الرقمية الخاصة"
          description="تخلص من العمل اليدوي المتكرر. نصمم أنظمة وأتمتة ذكية لتقليل التكاليف وزيادة الإنتاجية."
        />

        {/* Visual Proof Section */}
        <section className="w-full py-16 px-4 bg-muted/30 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 text-right">
                <h2 className="text-3xl font-bold mb-6">أتمتة العمليات باستخدام n8n والأنظمة المخصصة</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  نحن نربط جميع تطبيقاتك ببعضها البعض لنبني مسارات عمل تعمل تلقائياً. وفر وقت موظفيك ودع النظام يقوم بالمهام الروتينية لتركز أنت على نمو أعمالك.
                </p>
                <a href={whatsappUrl} className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover-lift glow-shadow-accent">
                  ناقش فكرتك عبر واتساب
                </a>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-black/5">
                <Image
                  src="/portfolio/n8n.jpeg"
                  alt="أتمتة العمليات n8n"
                  fill priority loading="eager"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Proof Section */}
        <section className="w-full py-16 px-4 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-right">
                <h2 className="text-3xl font-bold mb-6">تطبيقات جوال سريعة وعصرية</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  نحول أفكارك إلى تطبيقات واقعية لأجهزة Android و iOS بتصاميم جذابة وتجربة مستخدم سلسة تضمن بقاء عملائك.
                </p>
                <a href={whatsappUrl} className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover-lift glow-shadow-accent">
                  اطلب تطبيقك الآن
                </a>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white flex justify-center items-center">
                <Image
                  src="/portfolio/app andrid.png"
                  alt="تطبيق جوال"
                  fill priority loading="eager"
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Workflow, title: "أتمتة (n8n & Zapier)", text: "ربط الأنظمة وتلقائية المهام وتقليل الأخطاء البشرية." },
                { icon: Database, title: "بناء قواعد البيانات", text: "هيكلة بيانات قوية آمنة ومستعدة للتوسع مع نمو عملك." },
                { icon: Cpu, title: "أنظمة إدارة مخصصة", text: "تطوير لوحات تحكم (Dashboards) تناسب احتياج شركتك بدقة." },
                { icon: TrendingUp, title: "تحسين الأداء", text: "تحليل وتطوير الأنظمة القديمة لتصبح أسرع وأكثر أماناً." }
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
