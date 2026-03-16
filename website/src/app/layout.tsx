import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Tony Truman | Hospitality Entrepreneur",
  description:
    "Entrepreneur behind some of Ibiza's most iconic hospitality brands including O Beach Ibiza, Wi-Ki-Woo Hotel, Bam Bu Ku, and Faith Concierge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${playfair.variable} antialiased bg-white text-foreground selection:bg-brand-orange/20 selection:text-brand-orange`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
