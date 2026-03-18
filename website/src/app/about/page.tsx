"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { timeline } from "@/lib/site-data";

const achievements = [
  { icon: "🏆", title: "World's Best Club Nominations", detail: "O Beach Ibiza nominated 2 years in a row." },
  { icon: "🌍", title: "Global Operations", detail: "Venues across Ibiza, Dubai, and the UK." },
  { icon: "👥", title: "1,400+ Staff Managed", detail: "Building teams that deliver premium experiences at scale." },
  { icon: "🚀", title: "20+ Businesses Built", detail: "From beach clubs to hotels, concierge and tech ventures." },
  { icon: "🤝", title: "Major Brand Partnerships", detail: "Collaborations with SHEIN, Veuve Clicquot, and more." },
  { icon: "📈", title: "41 Years in the Industry", detail: "From his first party at 15 to the UMusic Hotels joint venture." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        category="About Tony"
        title="From One Party to a Hospitality Legacy"
        subtitle="A 41-year journey shaped by resilience, risk, and relentless execution."
        image="/images/1746690639672.jpg"
      />

      {/* Tony Photo + Bio */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/1772700307466.jpg"
              alt="Tony Truman — O Beach Ibiza"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                Tony Truman — IMI Group Founder
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              The Man Behind the Brand
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight mb-8">
              Built on Entrepreneurship and Persistence
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                At the tender age of 15, Tony Truman hosted his very first party. Then, a family holiday to Ibiza that same year changed everything — the island, the people, the experience never left his mind.
              </p>
              <p>
                41 years later, Tony is Founding Partner of the IMI Group — a portfolio of 20+ businesses including O Beach Ibiza, Wi-Ki-Woo Hotel, Bam Bu Ku, O Beach Dubai, and the newly announced UMusic Hotels joint venture.
              </p>
              <p>
                The journey wasn't linear. Tony has been £1,000,000 in debt. He&apos;s built, failed, rebuilt, and scaled — and through every chapter, the focus stayed the same: back yourself, build great teams, and make people feel something.
              </p>
            </div>

            <blockquote className="border-l-4 border-brand-orange pl-5 mt-8 italic text-xl font-serif text-foreground">
              &quot;If you don&apos;t back yourself, why would anyone else bother.&quot;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">Key Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-border p-8 hover:border-brand-orange hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-black mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              The Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">41 Years in the Making</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-md md:-translate-x-2 z-10" />

                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-white rounded-2xl border border-border shadow-sm hover:border-brand-orange transition-colors ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <p className="text-2xl font-serif font-black text-brand-orange mb-2">{item.year}</p>
                    <p className="text-base leading-relaxed text-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Beach Dubai team photo */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/1759995980586.jpg"
              alt="IMI Group — O Beach Dubai full team"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">The Team</p>
                <h3 className="text-3xl md:text-5xl font-serif font-black">1,400+ People Worldwide</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">
            &quot;If you don&apos;t back yourself, why would anyone else?&quot;
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Leadership starts with conviction, discipline, and staying focused through uncertainty.
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
