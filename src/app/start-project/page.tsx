import Header from "@/components/sections/new/Header";
import SubpageHeader from "@/components/sections/new/SubpageHeader";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "ابدأ مشروعك | HELYRO OS",
  description: "تواصل معنا لبدء مشروعك الرقمي، عملية طلب بسيطة ومباشرة."
};

export default function StartProjectPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground bg-muted/20">
      <Header />
      <main className="w-full flex flex-col items-center flex-1 pb-24">
        <SubpageHeader
          title="ابدأ مشروعك معنا"
          description="أخبرنا بما تحتاجه بشكل مختصر، وسنتواصل معك لاقتراح الحل الأنسب وتقديم عرض السعر."
        />

        <section className="w-full max-w-3xl px-4 -mt-8 relative z-10">
          <div className="glass-card p-8 md:p-12 bg-white shadow-lg border-border">
            {/* Low Friction WhatsApp CTA first as per strategy */}
            <div className="mb-12 text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="text-xl font-bold mb-2">الطريقة الأسرع للتواصل؟</h3>
              <p className="text-muted-foreground mb-6 text-sm">رد مباشر وفوري عبر الواتساب لتحديد احتياجك بدقة.</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="glass-button w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-lg inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                تواصل واتساب الآن
              </a>
            </div>

            <div className="flex items-center gap-4 mb-8 opacity-50">
              <div className="h-px bg-border flex-1"></div>
              <span className="text-sm font-medium">أو استخدم النموذج السريع</span>
              <div className="h-px bg-border flex-1"></div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground">الاسم / اسم الجهة</label>
                  <input type="text" id="name" className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="مثال: مطعم الأرزاق" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-bold text-foreground">رقم الجوال أو الإيميل</label>
                  <input type="text" id="contact" className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="05XXXXXXXX" required maxLength={100} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">نوع الخدمة المطلوبة</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["موقع شركة", "منيو مطعم", "متجر إلكتروني", "غير ذلك"].map((type, i) => (
                    <label key={i} className="flex items-center gap-2 p-3 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                      <input type="radio" name="projectType" value={type} className="accent-primary" />
                      <span className="text-sm font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-bold text-foreground">تفاصيل بسيطة (اختياري)</label>
                <textarea id="details" rows={3} className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="أي تفاصيل إضافية تريد مشاركتها معنا..." maxLength={500}></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-xl font-bold text-lg transition-colors">
                إرسال الطلب
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 text-center text-muted-foreground border-t border-border/50 text-sm mt-auto">
        <p>HELYRO OS &copy; {new Date().getFullYear()}. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
