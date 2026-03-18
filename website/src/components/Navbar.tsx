"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Tony", href: "/about" },
  { name: "Ventures", href: "/ventures" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Insights", href: "/insights" },
  { name: "Work With Tony", href: "/work-with-tony" },
  { name: "Contact", href: "/contact" },
];

// Only pages with a FULL-SCREEN dark image hero at the very top (not PageHero which is white)
const darkHeroPages = ["/", "/events"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When transparent (top of page) AND on a dark-hero page → use white text
  const isTransparentDark = !isScrolled && darkHeroPages.includes(pathname);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 px-6",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-serif font-black tracking-tighter group whitespace-nowrap transition-colors duration-300",
            isTransparentDark ? "text-white" : "text-foreground"
          )}
        >
          TONY{" "}
          <span className="text-brand-orange group-hover:text-white transition-colors">
            TRUMAN
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.18em] transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "text-brand-orange"
                  : isTransparentDark
                  ? "text-white/90 hover:text-brand-orange"
                  : "text-foreground hover:text-brand-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/work-with-tony"
          className={cn(
            "hidden md:inline-flex px-6 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-colors whitespace-nowrap",
            isTransparentDark
              ? "bg-white text-foreground hover:bg-brand-orange hover:text-white shadow-lg"
              : "bg-brand-orange text-white shadow-lg shadow-brand-orange/25 hover:bg-foreground"
          )}
        >
          Discuss Opportunities
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "lg:hidden p-2 transition-colors",
            isTransparentDark ? "text-white" : "text-foreground"
          )}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-bold uppercase tracking-[0.2em] py-2",
                  pathname === link.href ? "text-brand-orange" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/work-with-tony"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-brand-orange text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest text-center"
            >
              Discuss Opportunities
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
