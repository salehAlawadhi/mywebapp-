import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HELYRO OS | حلول رقمية سريعة ومبتكرة",
  description: "نصمم حلولاً رقمية سريعة، واضحة، وعملية: مواقع شركات، متاجر إلكترونية، منيو QR للمطاعم، وصفحات هبوط.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set dir="rtl" and lang="ar" as default for the Saudi market strategy.
  // Removed LanguageProvider as we are focusing firmly on Arabic first now.
  return (
    <html lang="ar" dir="rtl" style={{ colorScheme: 'light' }}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable} antialiased bg-background text-foreground min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
