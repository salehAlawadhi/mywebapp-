import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";
import NeuralBackground from "@/components/ui/NeuralBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/lib/LanguageContext";

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
  title: "HELYRO OS | Software Engineering Excellence",
  description: "Luxury frontend engineering, living system design, and physical motion architectures.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable} antialiased bg-[#010101] text-zinc-100 min-h-screen selection:bg-white/10 font-sans`}
      >
        <LanguageProvider>
          <NeuralBackground />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
