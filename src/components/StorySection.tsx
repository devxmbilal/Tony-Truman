"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const imageSrc = "/images/1762505105811.jpg";

export default function StorySection() {
  return (
    <section className="py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt="Tony Truman portrait"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
            Tony&apos;s Story
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight mb-8">
            From His First Party at 15 to Building Global Hospitality Brands
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At the tender age of 15, Tony hosted his very first party. Then, a family holiday to Ibiza in 1983 changed everything — the island, the people, the experience never left his mind.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            41 years later, Tony is Founding Partner of the IMI Group — a portfolio of 20+ world-class hospitality venues including O Beach Ibiza, Wi-Ki-Woo Hotel and Bam Bu Ku, with 1,400+ staff worldwide.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
          >
            Read Full Story
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
