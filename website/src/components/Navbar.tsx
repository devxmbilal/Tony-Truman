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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 px-6",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-2xl font-serif font-black tracking-tighter text-foreground group whitespace-nowrap"
        >
          TONY{" "}
          <span className="text-brand-orange group-hover:text-foreground transition-colors">
            TRUMAN
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.18em] transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "text-brand-orange"
                  : "text-foreground hover:text-brand-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="/work-with-tony"
          className="hidden md:inline-flex bg-brand-orange text-white px-6 py-3 rounded-full text-[12px] font-black uppercase tracking-widest shadow-lg shadow-brand-orange/25 hover:bg-foreground transition-colors whitespace-nowrap"
        >
          Discuss Opportunities
        </Link>

        <button
          type="button"
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
