"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = ["Ibiza", "Dubai", "UK"];

export default function GlobalExpansionSection() {
  return (
    <section className="py-28 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
            Global Expansion
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            Building Hospitality Experiences Across the World
          </h2>
          <p className="text-white/70 text-lg">
            Core operations and partnerships continue to grow with Ibiza as the
            brand heartland.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/15 bg-white/5 p-10"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location}
                className="rounded-2xl border border-white/15 bg-black/20 px-6 py-8 text-center"
              >
                <MapPin className="mx-auto text-brand-orange mb-3" />
                <p className="font-serif text-3xl font-bold">{location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
