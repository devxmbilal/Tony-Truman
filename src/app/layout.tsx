import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
        className="antialiased bg-white text-foreground selection:bg-brand-orange/20 selection:text-brand-orange"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
