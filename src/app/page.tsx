import Header from "@/components/sections/new/Header";
import HeroSection from "@/components/sections/new/Hero";
import SegmentSelector from "@/components/sections/new/SegmentSelector";
import ServicesGrid from "@/components/sections/new/ServicesGrid";
import CallToAction from "@/components/sections/new/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full selection:bg-primary/10 selection:text-primary-foreground relative">
      <Header />
      <main className="w-full flex flex-col items-center flex-1">
        <HeroSection />
        <SegmentSelector />
        <ServicesGrid />
        <CallToAction />
      </main>

      <footer className="w-full py-8 text-center text-muted-foreground border-t border-border/50 text-sm">
        <p>HELYRO OS &copy; {new Date().getFullYear()}. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
