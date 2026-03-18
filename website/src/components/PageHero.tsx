"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
  image?: string;
}

export default function PageHero({
  title,
  subtitle,
  category,
  image,
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 origin-top-right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {category && (
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-6 block">
              {category}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-7">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-16 px-6 max-w-7xl mx-auto"
        >
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
