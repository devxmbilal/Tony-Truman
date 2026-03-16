"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { timeline } from "@/lib/site-data";

const aboutImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop";

const achievements = [
  "Built a 20+ business hospitality portfolio",
  "Scaled operations to 1400+ staff worldwide",
  "Launched internationally recognized lifestyle destinations",
  "Created music-led event ecosystems in Ibiza and beyond",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        category="About Tony"
        title="From One Party to a Hospitality Legacy"
        subtitle="A 40-year journey shaped by resilience, risk, and relentless execution."
        image={aboutImage}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src={aboutImage} alt="Tony Truman" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-7">
              Built on Entrepreneurship and Persistence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Tony Truman entered events early, discovered Ibiza in 1983, and
              developed a long-term strategy around experiential hospitality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The focus has stayed consistent: create standout venues, build
              high-performing teams, and deliver unforgettable customer
              experiences at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-12 text-center">
            Timeline
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[180px_1fr] gap-6 bg-white border border-border rounded-2xl p-6"
              >
                <p className="text-3xl font-serif font-black text-brand-orange">
                  {item.year}
                </p>
                <p className="text-lg leading-relaxed">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-10 text-center">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((item) => (
              <div key={item} className="p-6 rounded-2xl border border-border bg-muted">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            &quot;If you don&apos;t back yourself, why would anyone else?&quot;
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Leadership starts with conviction, discipline, and staying focused
            through uncertainty.
          </p>
          <Link
            href="/work-with-tony"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
          >
            Work With Tony
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
