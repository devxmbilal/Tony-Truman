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
        subtitle="O Beach · Wi-Ki-Woo Hotel · Bam Bu Ku · O Beach Dubai · UMusic Hotels · Chi Kee Wun · Faith Concierge · Book Your Hotels — the IMI Group ecosystem."
        image="/images/1759995980586.jpg"
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
                className="group rounded-3xl overflow-hidden border border-border bg-white hover:shadow-xl hover:border-brand-orange transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={venture.image}
                    alt={venture.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {venture.tag && (
                    <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {venture.tag}
                    </span>
                  )}
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

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Partnerships
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 leading-tight">
              Looking to Partner With an IMI Brand?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              We collaborate with aligned partners on high-impact hospitality and lifestyle opportunities.
            </p>
            <Link
              href="/work-with-tony"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
            >
              Discuss Partnerships
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
