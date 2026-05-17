import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-modern",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-luxury",
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helyro.com"),
  title: "HELYRO | Live Digital Experience Studio",
  description: "Live website, restaurant, app, ecommerce, automation, and SEO demos for businesses ready to launch with confidence.",
  openGraph: {
    title: "HELYRO | Live Digital Experience Studio",
    description: "Open live demos for company websites, restaurant menus, stores, dashboards, automation, and SEO-ready pages.",
    images: [
      {
        url: "/horo-mobile.webp",
        width: 900,
        height: 507,
        alt: "HELYRO live digital experience studio",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
  },
};

import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${notoArabic.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="antialiased luxury-gradient min-h-screen relative">

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
