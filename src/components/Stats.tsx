"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users, Trophy, Star } from "lucide-react";
import { stats } from "@/lib/site-data";

const icons = [Trophy, BriefcaseBusiness, Users, Star];

export default function Stats() {
  return (
    <section className="bg-foreground py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Star;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6"
              >
                <Icon className="mx-auto text-brand-orange mb-3" size={22} />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-orange mb-2">
                  {stat.value}
                </h2>
                <p className="text-white/65 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
