"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eventPillars } from "@/lib/site-data";

const visual =
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2574&auto=format&fit=crop";

const highlights = [
  "Luxury Day Clubs",
  "Global Music Events",
  "VIP Hospitality",
  "Luxury Concierge",
];

export default function ExperienceSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-[5/4] rounded-3xl overflow-hidden"
        >
          <Image src={visual} alt="Luxury hospitality events" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
            Events & Experiences
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8">
            Creating World-Class Experiences
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {highlights.map((item) => (
              <li
                key={item}
                className="px-5 py-4 rounded-2xl border border-border bg-muted font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The IMI ecosystem spans {eventPillars.join(", ")}. Every brand is
            built around premium service, strong identity, and high-repeat
            customer experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
