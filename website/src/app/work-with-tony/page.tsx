"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { workServices } from "@/lib/site-data";

const process = [
  "Discovery call and strategic fit",
  "Commercial and brand objective alignment",
  "Execution roadmap with measurable outcomes",
];

export default function WorkWithTonyPage() {
  return (
    <main>
      <PageHero
        category="Work With Tony"
        title="Advisory, Partnerships, and Growth Projects"
        subtitle="Built for operators, investors, and brands that want to create category-leading hospitality experiences."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {workServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-border bg-muted p-8"
              >
                <h2 className="text-2xl font-serif font-bold">{service}</h2>
              </motion.div>
            ))}
          </div>

          <div className="rounded-3xl border border-border p-8 md:p-10 bg-foreground text-white">
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-brand-orange mb-4">
              Process
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {process.map((item) => (
                <div key={item} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
            Ready to Discuss a Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Submit a brief outline and the team will follow up to scope the
            opportunity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-foreground transition-colors"
          >
            Contact Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
