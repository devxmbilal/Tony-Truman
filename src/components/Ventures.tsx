"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { featuredVentures } from "@/lib/site-data";

export default function Ventures() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Ventures
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">
              The Brands Behind the IMI Group Story
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Luxury venues and hospitality concepts built for unforgettable guest
            experiences in Ibiza and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredVentures.map((venture, index) => {
            const external = venture.href.startsWith("http");

            return (
              <motion.article
                key={venture.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={venture.image}
                    alt={venture.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-3">
                    {venture.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {venture.description}
                  </p>
                  <Link
                    href={venture.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                  >
                    Explore Brand
                    {external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
          >
            View All Ventures
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
