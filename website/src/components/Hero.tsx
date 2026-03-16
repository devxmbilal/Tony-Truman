"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroMedia } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28">
      <Image
        src={heroMedia}
        alt="Ibiza beach club energy"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,139,13,0.25),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-brand-orange/15 text-brand-orange text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-8">
            Music-Led Hospitality
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.95] tracking-tight mb-7">
            Tony Truman
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-medium max-w-3xl leading-relaxed mb-10">
            Entrepreneur behind some of Ibiza&apos;s most iconic hospitality
            brands.
          </p>
          <p className="text-base md:text-lg text-white/75 max-w-2xl mb-12">
            Founder of O Beach Ibiza, Wi-Ki-Woo Hotel, Bam Bu Ku, and Faith
            Concierge.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/ventures"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-foreground transition-colors"
            >
              Explore Ventures
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/work-with-tony"
              className="inline-flex items-center justify-center border border-white/40 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-foreground transition-colors"
            >
              Work With Tony
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
