"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workServices } from "@/lib/site-data";

export default function WorkWithTonySection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
            Work With Tony
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            Strategic Partnerships and Advisory
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for operators, investors, and brands looking to scale premium
            hospitality experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {workServices.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-muted px-6 py-5 font-semibold"
            >
              {service}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/work-with-tony"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-widest hover:bg-foreground transition-colors"
          >
            Discuss Opportunities
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
