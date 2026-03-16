"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import { allVentures } from "@/lib/site-data";

export default function VenturesPage() {
  return (
    <main>
      <PageHero
        category="Ventures"
        title="Iconic Brands, Global Footprint"
        subtitle="From day clubs to boutique hospitality and concierge, these ventures shape the IMI Group ecosystem."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVentures.map((venture, index) => {
            const external = venture.href.startsWith("http");

            return (
              <motion.article
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden border border-border bg-white hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={venture.image}
                    alt={venture.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-serif font-bold mb-3">{venture.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {venture.description}
                  </p>
                  <Link
                    href={venture.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                  >
                    Visit Venture
                    {external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
            Looking to Partner With an IMI Brand?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            We collaborate with aligned partners on high-impact hospitality and
            lifestyle opportunities.
          </p>
          <Link
            href="/work-with-tony"
            className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors"
          >
            Discuss Partnerships
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
