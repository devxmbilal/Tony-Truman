"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  category?: string;
  image?: string;
}

export default function PageHero({ title, subtitle, category, image }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {category && (
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-6 block">
              {category}
            </span>
          )}
          <h1 className="text-6xl md:text-8xl font-serif font-black leading-tight mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {image && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="mt-20 px-6 max-w-7xl mx-auto"
          >
              <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
          </motion.div>
      )}
    </section>
  );
}
