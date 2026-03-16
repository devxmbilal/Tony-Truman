"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "The Story", href: "/story" },
  { name: "Ventures", href: "/ventures" },
  { name: "Consulting", href: "/consulting" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-serif font-black tracking-tighter text-foreground group"
        >
          TONY <span className="text-brand-orange group-hover:text-foreground transition-colors">TRUMAN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-orange",
                pathname === link.href ? "text-brand-orange" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-orange text-white px-7 py-3 rounded-full text-[13px] font-black uppercase tracking-widest shadow-xl shadow-brand-orange/20 hover:bg-foreground hover:shadow-none transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-[60] p-10 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          <button
            className="absolute top-6 right-6 text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-3xl font-serif font-bold",
                pathname === link.href ? "text-brand-orange" : "text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-orange text-white px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
