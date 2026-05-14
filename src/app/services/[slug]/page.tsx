"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  Bell,
  Building2,
  Check,
  Clock3,
  Filter,
  MessageCircle,
  PackageCheck,
  Plus,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
  Users,
  WalletCards,
  LayoutGrid,
  Activity,
  Shield,
  User,
  ChevronRight,
  Terminal,
  Play,
  Heart,
  Zap,
} from "lucide-react";
import { GlobalHeader } from "@/components/layout/GlobalHeader";

type ServiceKey = "company-website" | "app-dashboard" | "ecommerce-store" | "custom-system";

const serviceKeys: ServiceKey[] = ["company-website", "app-dashboard", "ecommerce-store", "custom-system"];

const products = [
  { id: "protocol-set", name: "Sovereign Hospitality Set", nameAr: "طقم الضيافة السيادية", category: "Hospitality", categoryAr: "الضيافة", price: 1250, tag: "REGION-01 REPOSITORY", image: "/platform/hospitality_item.png" },
  { id: "integrity-diffuser", name: "Clean Air Filtration System", nameAr: "نظام تنقية الهواء الذكي", category: "Facilities", categoryAr: "المرافق", price: 4500, tag: "PRIORITY LOGISTICS", image: "/platform/air_item.png" },
  { id: "secure-terminal", name: "Sovereign Access Terminal", nameAr: "بوابة الدخول السيادية", category: "Security", categoryAr: "الأمن", price: 8900, tag: "CERTIFIED", image: "/platform/secure_item.png" },
  { id: "textile-vault", name: "Maintenance Control Drone", nameAr: "طائرة التحكم بالصيانة", category: "Robotics", categoryAr: "الروبوتات", price: 12000, tag: "STRATEGIC ASSET", image: "/platform/drone_item.png" },
];

const opsTasks = [
  ["HVAC System Integrity Audit", "In Progress", "Critical"],
  ["Regional HQ Sanitation Protocol", "09:00 AM", "Standard"],
  ["Vendor Lifecycle Verification", "Pending Approval", "High"],
  ["Facility Perimeter Scan", "Completed", "Standard"],
];


export default function ServiceExperiencePage() {
  const params = useParams<{ slug: string }>();
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const slug = serviceKeys.includes(params.slug as ServiceKey) ? (params.slug as ServiceKey) : "company-website";

  const t = useMemo(() => ({
    en: {
      back: "BACK",
      company: {
        tag: "THE STANDARD OF EXCELLENCE",
        hero: "Sovereign Excellence in Facility Management",
        about: "Riyadh Facilities Group (RFG) is the kingdom's premier strategic partner for integrated facility management delivering elite reliability for the projects that define Saudi Arabia's vision",
        stats: [
          { label: "CITY COVERAGE", value: "18 CITIES" },
          { label: "ELITE TEAM", value: "1,200+" },
          { label: "RESPONSE TIME", value: "ELITE" }
        ],
        solutionsTitle: "Integrated Ecosystem",
        solutions: [
          { name: "Sovereign Command", slug: "app-dashboard", desc: "Real-time intelligence and operational control for strategic assets", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" },
          { name: "Strategic Procurement", slug: "ecommerce-store", desc: "Global supply chain and specialized requisition interface", icon: ShoppingBag, color: "text-emerald-600", bg: "bg-emerald-50" },
          { name: "Asset Protection", slug: "custom-system", desc: "Critical infrastructure security and maintenance management", icon: Shield, color: "text-rose-600", bg: "bg-rose-50" }
        ],
        servicesTitle: "Strategic Pillars",
        services: [
          { name: "Sovereign Maintenance", desc: "Predictive engineering for high-stakes governmental and corporate environments", image: "/platform/maintenance_tech.png" },
          { name: "Clinical Hospitality", desc: "Hospital-grade sanitation and protocol-driven hospitality for executive spaces", image: "/platform/hospitality_tech.png" },
          { name: "Defensive Operations", desc: "Advanced security architecture integrating human intelligence with AI surveillance", image: "/platform/defensive_tech.png" }
        ],
        projectsTitle: "Strategic Portfolio",
        alliancesTitle: "Strategic Alliances",
        alliances: [
          { name: "Through History", url: "https://throughhistory.org", logo: "/logos/throughhistory.png" },
          { name: "New Ways", url: "https://newways.sa", logo: "/logos/newways.jpg" },
          { name: "Raha Villa", url: "https://rahavilla.com", logo: "/logos/raha.png" },
          { name: "Rukn Al Saffa", url: "http://ruknalsaffacars.sa", logo: "/logos/ruknalsaffa.png" },
          { name: "Globde", url: "https://globde.com", logo: "/logos/ise.jpg" }
        ],
        inquiry: {
          tag: "ELITE PARTNERSHIP",
          title: "Initiate Strategic Consultation",
          btn: "REQUEST PROPOSAL",
          sent: "CONSULTATION INITIATED"
        }
      },
      ecommerce: {
        tag: "GLOBAL SUPPLY CHAIN",
        title: "Strategic Procurement",
        search: "Search inventory and asset specifications",
        add: "RESERVE",
        cart: "Requisition Total",
        checkout: "GENERATE ORDER"
      },
      ops: {
        tag: "DIAGNOSTIC INTELLIGENCE",
        title: "Operations Center Alpha",
        stats: ["Revenue Telemetry", "Operational Load", "System Integrity"],
        tasks: "Mission Control Stream"
      },
      portal: {
        tag: "ASSET INTERFACE",
        title: "Infrastructure Portal",
        id: "TELEMETRY",
        status: ["LOGGED", "DISPATCHED", "IN-FIELD", "STABILIZED"]
      }
    },
    ar: {
      back: "العودة",
      company: {
        tag: "معايير التميز العالمية",
        hero: "التميز السيادي في إدارة المرافق",
        about: "مجموعة الرياض للمرافق (RFG) هي الشريك الاستراتيجي الرائد في المملكة للإدارة المتكاملة للمرافق لتقديم موثوقية النخبة للمشاريع التي ترسم ملامح رؤية السعودية",
        stats: [
          { label: "تغطية المدن", value: "١٨ مدينة" },
          { label: "فريق النخبة", value: "١٢٠٠+" },
          { label: "الاستجابة", value: "فورية" }
        ],
        solutionsTitle: "المنظومة المتكاملة",
        solutions: [
          { name: "القيادة السيادية", slug: "app-dashboard", desc: "الذكاء الفوري والتحكم العملياتي للأصول الاستراتيجية", icon: Activity, color: "text-indigo-600", bg: "bg-indigo-50" },
          { name: "المشتريات الاستراتيجية", slug: "ecommerce-store", desc: "سلسلة التوريد العالمية وواجهة طلب الأصول المتخصصة", icon: ShoppingBag, color: "text-emerald-600", bg: "bg-emerald-50" },
          { name: "حماية الأصول", slug: "custom-system", desc: "أمن البنية التحتية الحيوية وإدارة الصيانة الشاملة", icon: Shield, color: "text-rose-600", bg: "bg-rose-50" }
        ],
        servicesTitle: "الركائز الاستراتيجية",
        services: [
          { name: "الصيانة السيادية", desc: "هندسة تنبؤية للبيئات الحكومية والشركات عالية الأهمية", image: "/platform/maintenance.png" },
          { name: "الضيافة المعيارية", desc: "تعقيم طبي وضيافة بروتوكولية مصممة للمساحات التنفيذية", image: "/platform/hospitality.png" },
          { name: "العمليات الدفاعية", desc: "بنية أمنية متقدمة تدمج الذكاء البشري مع المراقبة الذكية", image: "/platform/defensive.png" }
        ],
        projectsTitle: "المشاريع الاستراتيجية",
        alliancesTitle: "التحالفات الاستراتيجية",
        alliances: [
          { name: "عبر التاريخ", url: "https://throughhistory.org", logo: "/logos/throughhistory.png" },
          { name: "نيو ويز", url: "https://newways.sa", logo: "/logos/newways.jpg" },
          { name: "راحة فيلا", url: "https://rahavilla.com", logo: "/logos/raha.png" },
          { name: "ركن الصفا", url: "http://ruknalsaffacars.sa", logo: "/logos/ruknalsaffa.png" },
          { name: "جلوبدي", url: "https://globde.com", logo: "/logos/ise.jpg" }
        ],
        inquiry: {
          tag: "شراكة النخبة",
          title: "بدء استشارة استراتيجية",
          btn: "طلب عرض متكامل",
          sent: "تم بدء طلب الاستشارة"
        }
      },
      ecommerce: {
        tag: "سلسلة التوريد العالمية",
        title: "المشتريات الاستراتيجية",
        search: "البحث في المخزون ومواصفات الأصول",
        add: "حجز الأصل",
        cart: "إجمالي الطلب",
        checkout: "إصدار الطلب"
      },
      ops: {
        tag: "الذكاء التشخيصي",
        title: "مركز العمليات ألفا",
        stats: ["بيانات الإيرادات", "حمل التشغيل", "سلامة النظام"],
        tasks: "بث التحكم بالمهمة"
      },
      portal: {
        tag: "واجهة الأصول",
        title: "بوابة البنية التحتية",
        id: "بيانات القياس",
        status: ["تم التسجيل", "تم الإرسال", "في الموقع", "تم الاستقرار"]
      }
    }
  }), []);

  const c = t[lang];

  return (
    <main className={`relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 selection:bg-blue-600/10 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <GlobalHeader lang={lang} setLang={setLang} slug={slug} />
      
      <div className="flex-1 transition-all duration-700 ease-in-out pb-20 md:pb-0">
        {slug === "company-website" && <CompanyWebsite lang={lang} content={c.company} />}
        {slug === "ecommerce-store" && <EcommerceStore lang={lang} content={c.ecommerce} />}
        {slug === "app-dashboard" && <OperationsDashboard lang={lang} content={c.ops} />}
        {slug === "custom-system" && <FacilityPortal lang={lang} content={c.portal} />}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white/95 backdrop-blur-3xl border-t border-slate-100 px-8 pt-4 pb-8 flex items-center justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
        <Link href={slug === "company-website" ? "/" : "/services/company-website"} className={`flex flex-col items-center gap-2 transition-all active:scale-90 ${slug === "company-website" ? 'text-blue-600' : 'text-slate-400'}`}>
          {slug === "company-website" ? <LayoutGrid size={24} strokeWidth={2.5} /> : <ArrowLeft size={24} className={lang === 'ar' ? 'rotate-180' : ''} strokeWidth={2.5} />}
          <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'ar' ? (slug === "company-website" ? 'الرئيسية' : 'العودة') : (slug === "company-website" ? 'PORTAL' : 'BACK')}</span>
        </Link>
        <Link href="/services/app-dashboard" className={`flex flex-col items-center gap-2 transition-all active:scale-90 ${slug === "app-dashboard" ? 'text-indigo-600' : 'text-slate-400'}`}>
          <Activity size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'ar' ? 'التشغيل' : 'Ops'}</span>
        </Link>
        <div className="relative -top-8">
          <button className={`h-16 w-16 rounded-full flex items-center justify-center text-white shadow-2xl border-[6px] border-white active:scale-90 transition-all ${slug === 'ecommerce-store' ? 'bg-emerald-600 shadow-emerald-600/40' : slug === 'app-dashboard' ? 'bg-indigo-600 shadow-indigo-600/40' : slug === 'custom-system' ? 'bg-rose-600 shadow-rose-600/40' : 'bg-blue-600 shadow-blue-600/40'}`}>
             <Plus size={32} />
          </button>
        </div>
        <Link href="/services/ecommerce-store" className={`flex flex-col items-center gap-2 transition-all active:scale-90 ${slug === "ecommerce-store" ? 'text-emerald-600' : 'text-slate-400'}`}>
          <ShoppingBag size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'ar' ? 'المتجر' : 'Store'}</span>
        </Link>
        <Link href="/services/custom-system" className={`flex flex-col items-center gap-2 transition-all active:scale-90 ${slug === 'custom-system' ? 'text-rose-600' : 'text-slate-400'}`}>
          <Shield size={24} strokeWidth={2.5} />
          <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'ar' ? 'الأمن' : 'Admin'}</span>
        </Link>
      </nav>

      <style jsx>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          width: 200%;
        }
      `}</style>
    </main>
  );
}

function CompanyWebsite({ lang, content }: { lang: 'en' | 'ar', content: any }) {
  return (
    <div className="relative z-10 min-h-screen text-slate-900 bg-white">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-screen-2xl px-6 pt-12 pb-16 md:px-12 md:pt-32 md:pb-24 overflow-hidden text-left">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">{content.tag}</p>
          </div>
          <h2 className="max-w-[1300px] text-[clamp(2.5rem,12vw,140px)] font-black leading-[0.9] tracking-[-0.04em] text-slate-900 mb-12">
            {content.hero}
          </h2>
          <div className="grid gap-12 md:gap-24 md:grid-cols-[1.2fr_1fr] items-start mt-16 md:mt-24">
            <div className="space-y-10">
              <p className="text-xl md:text-4xl font-medium leading-[1.3] text-slate-400 max-w-2xl border-l-2 border-blue-600/30 pl-8 italic">
                {content.about}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {content.stats.map((stat: any, idx: number) => (
                <div key={idx} className={`p-8 rounded-[32px] bg-slate-50 border border-slate-100 shadow-sm group hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500 relative overflow-hidden ${idx === 1 ? 'md:translate-x-12' : ''}`}>
                  <p className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - The "App Gateway" */}
      <section className="bg-slate-50 py-24 md:py-48">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
            <div className="max-w-2xl">
              <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">OUR CAPABILITIES</p>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">
                {content.solutionsTitle}
              </h3>
            </div>
            <p className="text-slate-400 text-sm md:text-xl max-w-md font-medium">
              {lang === 'ar' ? 'حلول رقمية متكاملة لربط الأصول والعمليات والبيانات في منصة واحدة سيادية' : 'Integrated digital solutions connecting assets, operations, and data in one sovereign platform'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {content.solutions.map((sol: any) => (
              <Link href={`/services/${sol.slug}`} key={sol.slug} className="group relative rounded-[48px] bg-white p-10 md:p-14 border border-slate-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-blue-600/20 transition-all duration-700 overflow-hidden">
                <div className={`h-20 w-20 rounded-[32px] ${sol.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700`}>
                  <sol.icon className={`h-8 w-8 ${sol.color}`} />
                </div>
                <h4 className="text-3xl font-black tracking-tighter text-slate-900 mb-6 uppercase">{sol.name}</h4>
                <p className="text-slate-400 text-sm md:text-lg font-medium leading-relaxed mb-10">
                  {sol.desc}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:translate-x-4 transition-transform duration-500">
                  <span>{lang === 'ar' ? 'دخول المنصة' : 'ENTER PLATFORM'}</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-screen-2xl px-6 py-24 md:px-12 md:py-48">
        <div className="mb-20 md:mb-32">
          <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">OPERATIONAL PILLARS</p>
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">{content.servicesTitle}</h3>
        </div>
        <div className="grid gap-12 lg:grid-cols-3">
          {content.services.map((service: any, idx: number) => (
            <article key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-[48px] mb-8 bg-slate-100 shadow-2xl relative">
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 mb-4 uppercase">{service.name}</h4>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>
      
      {/* Strategic Alliances */}
      <section className="mx-auto max-w-screen-2xl px-6 py-24 md:px-12 border-y border-slate-100 bg-slate-50/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xs">
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">ECOSYSTEM</p>
            <h3 className="text-3xl font-black tracking-tighter text-slate-900 leading-none uppercase">{content.alliancesTitle}</h3>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
            {content.alliances.map((alliance: any, idx: number) => (
              <a 
                key={idx} 
                href={alliance.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-all duration-500 grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
              >
                <div className="h-16 w-32 relative flex items-center justify-center">
                   <Image 
                     src={alliance.logo} 
                     alt={alliance.name} 
                     fill
                     sizes="128px"
                     className="object-contain group-hover:scale-110 transition-transform duration-500" 
                   />
                </div>
                <span className="text-[10px] font-black tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors uppercase">{alliance.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-slate-900 py-24 md:py-48 text-white overflow-hidden">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 md:mb-32">
            <div>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">PORTFOLIO</p>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">{content.projectsTitle}</h3>
            </div>
            <div className="flex gap-4">
               {[1, 2, 3].map(i => <div key={i} className="h-1 w-12 bg-white/20 rounded-full" />)}
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "Riyadh Executive HQ", location: "KAFD, Riyadh", type: "Full FM Protocol", image: "/platform/hq_tech.png" },
              { title: "Sovereign Logistics Hub", location: "Jeddah Port", type: "Asset Security", image: "/platform/logistics_tech.png" }
            ].map((proj, i) => (
              <div key={i} className="group relative aspect-[16/9] rounded-[48px] overflow-hidden bg-slate-800 border border-white/5">
                <Image 
                  src={proj.image} 
                  alt={proj.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">{proj.location}</p>
                  <h4 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic">{proj.title}</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{proj.type}</p>
                </div>
                <div className="absolute top-10 right-10 z-20 h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                  <ChevronRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-screen-2xl px-6 py-24 md:px-12 md:py-48">
        <div className="rounded-[80px] bg-indigo-600 p-12 md:p-32 text-center text-white relative overflow-hidden group shadow-[0_40px_100px_rgba(79,70,229,0.3)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -mr-96 -mt-96 group-hover:bg-white/20 transition-all duration-1000" />
          <div className="relative z-10">
            <span className="text-[10px] md:text-sm font-black tracking-[0.5em] uppercase opacity-60 mb-8 block">ESTABLISH PARTNERSHIP</span>
            <h3 className="text-5xl md:text-9xl font-black tracking-tighter leading-none mb-16 italic">
              {lang === 'ar' ? 'تواصل مع القيادة' : 'Sovereignty Begins Here'}
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto px-16 py-8 bg-white text-indigo-900 rounded-[40px] text-[11px] md:text-sm font-black uppercase tracking-[0.3em] hover:bg-slate-50 transition-all active:scale-95 shadow-2xl">
                {lang === 'ar' ? 'طلب عرض شراكة' : 'Request Proposal'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-10 py-12 border-t border-slate-100 flex justify-between items-center opacity-30 text-[10px] font-black tracking-widest uppercase">
        <p>© 2026 RIYADH FACILITIES GROUP   ARCTIC WHITE PROTOCOL</p>
        <p>SAUDI VISION 2030 ALIGNED</p>
      </footer>
    </div>
  );
}

function EcommerceStore({ lang, content }: { lang: 'en' | 'ar', content: any }) {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const total = useMemo(() => products.reduce((sum, item) => sum + (cart[item.id] ?? 0) * item.price, 0), [cart]);
  const visible = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative z-10 min-h-screen text-slate-900 bg-slate-50">
      <section className="mx-auto max-w-screen-2xl px-6 pt-12 md:px-12 md:pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4">{content.tag}</p>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">{content.title}</h2>
          </div>
          <div className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/40">
             <div className="text-right">
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Requisition Value</p>
               <p className="text-2xl font-black tracking-tighter text-slate-900 italic">SAR {total}</p>
             </div>
             <div className="h-12 w-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white">
                <ShoppingBag className="h-5 w-5" />
             </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12">
         <div className="grid gap-12 lg:grid-cols-2">
           {visible.map(product => (
             <article key={product.id} className="group relative rounded-[56px] bg-white p-12 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl hover:border-emerald-600/20 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600/10 blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite] z-20" />
               <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="aspect-square w-full md:w-48 rounded-[40px] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden relative">
                   {product.image ? (
                     <Image 
                       src={product.image} 
                       alt={product.name} 
                       fill
                       sizes="(max-width: 768px) 100vw, 200px"
                       className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                     />
                   ) : (
                     <span className="text-slate-200 font-black text-6xl italic">{product.name[0]}</span>
                   )}
                 </div>
                 <div className="flex-1 text-left">
                   <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-2">{lang === 'ar' ? product.categoryAr : product.category}</p>
                   <h3 className="text-4xl font-black tracking-tighter text-slate-900 mb-6">{lang === 'ar' ? product.nameAr : product.name}</h3>
                   <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-auto">
                     <p className="text-2xl font-black tracking-tighter text-slate-900">SAR {product.price}</p>
                     <button 
                       onClick={() => setCart(c => ({...c, [product.id]: (c[product.id] ?? 0) + 1}))}
                       className="px-8 py-4 bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
                     >
                       RESERVE ASSET
                     </button>
                   </div>
                 </div>
               </div>
             </article>
           ))}
         </div>
      </section>

      {total > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-4xl">
          <div className="rounded-[40px] bg-white/95 p-8 md:p-10 text-slate-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50 backdrop-blur-3xl border border-white/50 flex flex-col md:flex-row items-center gap-8 md:gap-16 group/bar overflow-hidden">
            <div className="flex items-center gap-8 relative z-10">
              <div className="relative h-14 w-14 rounded-2xl bg-emerald-600/5 border border-emerald-600/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-emerald-600" />
                <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-black text-white border-4 border-white">
                  {Object.values(cart).reduce((a, b) => a + b, 0)}
                </div>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">{content.cart}</p>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-black tracking-tighter text-slate-900 italic">SAR {total}</p>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest animate-pulse border border-emerald-600/20 px-2 py-0.5 rounded-full">SECURE ENCRYPTED</span>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full md:w-[1px] md:h-12 bg-slate-100 relative z-10" />
            <button 
              onClick={() => alert('Order confirmed. System Po generated.')}
              className="w-full md:w-auto relative z-10 px-12 py-6 bg-emerald-600 text-white rounded-[24px] text-[11px] font-black uppercase tracking-[0.3em] hover:bg-emerald-700 transition-all active:scale-95 shadow-xl shadow-emerald-600/30"
            >
              SECURE CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function OperationsDashboard({ lang, content }: { lang: 'en' | 'ar', content: any }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [chartData, setChartData] = useState<{height: string}[]>([]);

  React.useEffect(() => {
    setChartData([...Array(30)].map(() => ({ height: `${Math.random() * 60 + 20}%` })));
  }, []);

  return (
    <div className="relative z-10 flex min-h-[calc(100vh-80px)] text-slate-900 bg-white">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-24 flex-col items-center py-10 gap-8 border-r border-slate-100 bg-white relative z-40">
        {[LayoutGrid, Activity, ShieldCheck, Users, SlidersHorizontal].map((Icon, i) => (
          <button key={i} className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-all ${i === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-300 hover:text-indigo-600'}`}>
            <Icon className="h-5 w-5" />
          </button>
        ))}
        <div className="mt-auto h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
           <Terminal className="h-4 w-4" />
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-white/70 backdrop-blur-3xl sticky top-0 z-30">
          <div className="flex items-center gap-6">
            <div className="h-4 w-4 rounded-full bg-indigo-600 animate-ping opacity-20" />
            <h2 className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
              {content.title}
              <span className="ml-4 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black tracking-widest not-italic border border-indigo-100">LIVE ALPHA-7</span>
            </h2>
          </div>
          <div className="flex gap-4 items-center">
             <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Integrity: 100%</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <section className="lg:col-span-2 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.stats.map((stat: string, i: number) => (
                  <div key={i} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">{stat}</p>
                    <div className="flex items-baseline gap-2">
                       <p className="text-3xl font-black tracking-tighter text-slate-900 italic">94.2%</p>
                       <span className="text-[10px] font-black text-emerald-500 uppercase">+2.4%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[56px] bg-white border border-slate-100 p-12 shadow-xl shadow-slate-200/30 relative overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                   <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 italic">Operational Load Telemetry</h4>
                   <div className="flex gap-2">
                      <div className="h-2 w-8 bg-indigo-600 rounded-full" />
                      <div className="h-2 w-8 bg-slate-100 rounded-full" />
                   </div>
                </div>
                <div className="h-64 flex items-end gap-2 relative">
                  {chartData.map((d, i) => (
                    <div key={i} className="flex-1 bg-indigo-600/10 rounded-t-sm group relative overflow-hidden transition-all hover:bg-indigo-600/40" style={{ height: d.height }}>
                       <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-10">
              <div className="rounded-[40px] bg-slate-900 p-8 text-white/50 font-medium text-[11px] space-y-4 border border-slate-800 shadow-2xl">
                 <p className="flex gap-4">CORE SYSTEM AUTHORITY ESTABLISHED</p>
                 <p className="flex gap-4">SECURITY PROTOCOLS VERIFIED</p>
                 <p className="flex gap-4">ASSET INTELLIGENCE STREAM ACTIVE</p>
              </div>

              <div className="rounded-[40px] bg-white border border-slate-100 p-10 shadow-xl shadow-slate-200/30">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-8">Active Mission Queue</h4>
                 <div className="space-y-4">
                   {opsTasks.map((t, i) => (
                     <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-600/20 transition-all cursor-pointer group">
                        <div className="text-left">
                           <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">{t[0]}</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">{t[1]}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-200 group-hover:text-indigo-600 transition-colors" />
                     </div>
                   ))}
                 </div>
              </div>
            </section>
          </div>
        </div>
        <footer className="px-10 py-6 border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] flex justify-between bg-white/50 backdrop-blur-md">
           <p>SYSTEM AUTHORITY <span className="text-indigo-600">REGION SECTOR KSA</span></p>
           <p>INTEGRITY <span className="text-emerald-500">OPTIMIZED</span></p>
        </footer>
      </main>
    </div>
  );
}

function FacilityPortal({ lang, content }: { lang: 'en' | 'ar', content: any }) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="relative z-10 min-h-screen text-slate-900 bg-white">
      <section className="mx-auto max-w-screen-2xl px-6 pt-12 md:px-12 md:pt-32 pb-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose-600/5 border border-rose-600/10 mb-8 shadow-sm">
           <div className="h-2 w-2 rounded-full bg-rose-600 animate-pulse shadow-[0_0_12px_rgba(225,29,72,0.4)]" />
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-600">{content.id} REGION 01</p>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-12">
           {lang === 'ar' ? 'سلامة الأصول السيادية' : 'Sovereign Asset Integrity'}
        </h2>
      </section>

      <main className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
           <section className="rounded-[64px] bg-slate-50 border border-slate-200 p-12 md:p-20 shadow-xl shadow-slate-200/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-20 opacity-5">
                <ShieldCheck className="h-64 w-64 text-rose-600" />
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-slate-200 pb-20">
                {[
                  { label: "Health", value: "84%", color: "text-rose-600" },
                  { label: "Efficiency", value: "94.2%", color: "text-emerald-600" },
                  { label: "Priority", value: "Critical", color: "text-red-500" },
                  { label: "Uptime", value: "99.98%", color: "text-slate-900" }
                ].map((s, i) => (
                  <div key={i} className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{s.label}</p>
                    <p className={`text-3xl font-black tracking-tighter italic ${s.color}`}>{s.value}</p>
                  </div>
                ))}
             </div>

             <div className="space-y-12">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">PROGRESSION TIMELINE</p>
                <div className="relative pl-12 space-y-16">
                   <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200" />
                   {content.status.map((step: string, i: number) => (
                     <div key={i} className="relative group cursor-pointer" onClick={() => setActiveStep(i)}>
                        <div className={`absolute -left-12 h-6 w-6 rounded-full border-4 transition-all duration-500 z-10 ${i <= activeStep ? 'bg-rose-600 border-white shadow-xl shadow-rose-600/30' : 'bg-white border-slate-100'}`} />
                        <div className="flex items-center justify-between">
                           <p className={`text-xl font-black uppercase tracking-tighter transition-colors ${i <= activeStep ? 'text-slate-900' : 'text-slate-300'}`}>{step}</p>
                           <p className="text-[10px] font-black text-slate-400 opacity-60">{i <= activeStep ? `14:2${i}` : 'PENDING'}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           </section>

           <section className="space-y-10">
              <div className="rounded-[40px] bg-white border border-slate-200 p-12 shadow-xl shadow-slate-200/30">
                 <h4 className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-8">Technical Diagnostics</h4>
                 <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                       <p className="text-rose-600 text-[10px] font-black uppercase tracking-widest mb-3">AUTO-SENSOR 08:00</p>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed italic">"Vibration levels detected above threshold (4.2mm/s) at Compressor Unit-4 Protocol alpha-9 initiated"</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                       <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-3">SYSTEM UPDATE 12:45</p>
                       <p className="text-sm text-slate-500 font-medium leading-relaxed">"Coolant levels verified Spare parts identified in inventory RFG-551 Dispatch approved"</p>
                    </div>
                 </div>
              </div>

              <div className="rounded-[40px] bg-rose-600 p-12 text-white shadow-[0_40px_80px_rgba(225,29,72,0.25)] border border-rose-500 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-1000" />
                 <h4 className="text-xl font-black uppercase tracking-tighter mb-12 relative z-10 italic">Commander Controls</h4>
                 <div className="grid gap-4 relative z-10">
                    <button className="w-full py-6 bg-white text-rose-900 rounded-[28px] text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl">APPROVE MISSION</button>
                    <button className="w-full py-6 bg-rose-500/20 text-white rounded-[28px] text-[10px] font-black uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all backdrop-blur-md">REQUEST MODIFICATION</button>
                 </div>
              </div>
           </section>
        </div>
      </main>

      <footer className="px-10 py-12 border-t border-slate-100 flex justify-between items-center opacity-30 text-[10px] font-black tracking-widest uppercase">
        <p>© 2026 RIYADH FACILITIES GROUP   ASSET COMMAND PORTAL</p>
        <p>SECURE AUTHORITY</p>
      </footer>
    </div>
  );
}
