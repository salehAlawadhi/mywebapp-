import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NeuralBackground from "@/components/ui/NeuralBackground";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HELYRO OS | Elite Software Engineering & Digital Systems",
  description: "Luxury frontend engineering, scalable architecture, and physical motion architectures. We design digital systems that scale, convert, and endure.",
  keywords: ["Software Engineering", "Frontend Development", "UX/UI Design", "Scalable Systems", "Motion Design", "Next.js", "HELYRO"],
  authors: [{ name: "HELYRO Team" }],
  openGraph: {
    title: "HELYRO OS | Elite Software Engineering",
    description: "Engineering digital systems that scale, convert, and endure.",
    url: "https://helyro.com",
    siteName: "HELYRO OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HELYRO OS | Elite Software Engineering",
    description: "Luxury digital systems for modern enterprises.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#010101",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#010101] text-zinc-100 min-h-screen selection:bg-white/10`}
      >
        <NeuralBackground />
        <CustomCursor />

        {/* Global Cinematic Overlay Layer (Grain + Vignette) */}
        <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
          {/* Grain Texture - Inline Data URI for absolute reliability */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

          {/* Deep Cinematic Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] mix-blend-multiply" />
        </div>

        {children}
      </body>
    </html>
  );
}
