"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-28 bg-brand-orange text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="text-[16rem] md:text-[20rem] font-serif font-black select-none whitespace-nowrap -mt-32 -ml-16">
          TONY TRUMAN
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-bold tracking-[0.35em] uppercase opacity-80 mb-8 block">
            Tony&apos;s Philosophy
          </span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold italic leading-tight mb-10">
            &quot;If you don&apos;t back yourself, why would anyone else?&quot;
          </h2>
          <p className="text-xl font-medium opacity-90 max-w-3xl mx-auto">
            Entrepreneurship is built on persistence, learning from setbacks,
            and building teams that execute with discipline and ambition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
