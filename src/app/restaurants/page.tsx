import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import CallToAction from "@/components/sections/new/CallToAction";
import { Utensils, QrCode, Smartphone, BarChart3 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "حلول المطاعم والكافيهات | HELYRO OS",
  description: "أنظمة منيو إلكتروني (QR Code)، مواقع للمطاعم، وأنظمة طلبات تزيد من مبيعاتك وتسهل تجربة عملائك."
};

export default function RestaurantsPage() {
  const whatsappUrl = `https://wa.me/+966500000000?text=${encodeURIComponent("مرحباً، أود الحصول على نظام لمطعمي/الكافيه.")}`;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <SubpageHeader
          title="حلول المطاعم والكافيهات"
          description="ارتقِ بتجربة عملائك مع منيو إلكتروني تفاعلي (QR) وأنظمة طلبات سريعة وسهلة الاستخدام."
        />

        {/* Visual Proof Section */}
        <section className="w-full py-16 px-4 bg-muted/30 border-b border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-right">
                <h2 className="text-3xl font-bold mb-6">منيو ذكي، طلبات أسرع، مبيعات أكثر</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  المنيو الورقي أصبح من الماضي. نوفر لك نظام منيو QR تفاعلي يسمح للعميل بتصفح الأطباق بصور جذابة، وإرسال الطلب مباشرة إلى المطبخ (أو الواتساب)، مما يقلل من وقت الانتظار ويزيد من رضا العملاء.
                </p>
                <a href={whatsappUrl} className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all hover-lift glow-shadow-accent">
                  احصل على نظام مطعمك الآن
                </a>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-black">
                <Image
                  src="/portfolio/روح.png"
                  alt="منيو مطعم إلكتروني"
                  fill priority loading="eager"
                  className="object-contain"
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
                { icon: QrCode, title: "منيو QR ذكي", text: "سهولة التحديث وإضافة وحذف الأطباق في ثوانٍ بدون تكاليف طباعة." },
                { icon: Smartphone, title: "طلب من الطاولة", text: "السماح للعملاء بالطلب ودفع الحساب مباشرة من هواتفهم (حسب الباقة)." },
                { icon: Utensils, title: "هوية بصرية فاتحة للشهية", text: "تصميم يركز على إبراز صور وجودة أطباقك لزيادة الرغبة بالطلب." },
                { icon: BarChart3, title: "تحليلات الأداء", text: "معرفة الأطباق الأكثر مبيعاً لفهم سلوك عملائك وتحسين العروض." }
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
