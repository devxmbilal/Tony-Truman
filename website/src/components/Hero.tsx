"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 transform origin-top-right transition-all" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wider mb-6">
            HOSPITALITY ENTREPRENEUR
          </div>
          <h1 className="text-6xl lg:text-9xl font-serif font-black tracking-tighter leading-[0.9] mb-8">
            TONY <br />
            <span className="text-brand-orange">TRUMAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-12 leading-relaxed font-sans font-medium">
            Building the world&apos;s most iconic hospitality brands through 40 years of visionary leadership and audacity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/ventures"
              className="flex items-center justify-center gap-3 bg-foreground text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-orange transition-all group shadow-2xl shadow-foreground/20"
            >
              Explore Ventures
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-white text-foreground border-2 border-border px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:border-brand-orange hover:text-brand-orange transition-all"
            >
              Work With Tony
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Using a placeholder for now, will suggest user to add actual images */}
            <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
            <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
               alt="Tony Truman"
               className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-20" />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-white p-8 rounded-2xl shadow-2xl z-30 hidden lg:block">
              <p className="text-4xl font-serif font-bold">40+</p>
              <p className="text-xs font-bold tracking-widest uppercase opacity-80">Years in Ibiza</p>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 border-4 border-brand-orange/20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
