"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-32 bg-brand-orange text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="text-[20rem] font-serif font-black select-none whitespace-nowrap -mt-40 -ml-20">
            TONY TRUMAN
          </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold tracking-[0.4em] uppercase opacity-70 mb-8 block">
            CORE PHILOSOPHY
          </span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold italic leading-tight mb-12">
            “If you don&apos;t back yourself, why would anyone else?”
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8" />
          <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
            Tony&apos;s journey is built on audacity, persistence, and the unwavering belief that greatness is created by those who dare to dream big.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
