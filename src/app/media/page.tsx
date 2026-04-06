"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Instagram, Linkedin } from "lucide-react";
import PageHero from "@/components/PageHero";

const featuredStories = [
  {
    tag: "Brand Story",
    title: "How O Beach Became Ibiza's Most Iconic Day Club",
    excerpt:
      "From a rented beach club in 2011 to winning World's Best Club nominations two years running — how Tony Truman built a brand that every visitor to Ibiza wants to experience.",
    image: "/images/1755675910186.jpg",
    readTime: "5 min read",
  },
  {
    tag: "Founder's Story",
    title: "From £1,000,000 in Debt to Global Hospitality Empire",
    excerpt:
      "The real story behind Tony Truman's rise. How he went from getting kicked out of school and accumulating a million pounds in debt, to hosting Conor McGregor and launching O Beach Dubai.",
    image: "/images/1772700307466.jpg",
    readTime: "7 min read",
  },
  {
    tag: "Expansion",
    title: "O Beach Ibiza & Dubai: The 2012 vs 2024 Story",
    excerpt:
      "A chronicle of the most ambitious expansion in European beach club history — from a San Antonio pool to a full-scale Dubai launch with global recognition.",
    image: "/images/1737621934888.jpg",
    readTime: "4 min read",
  },
];

const pressFeatures = [
  {
    publication: "Grazia",
    headline: "The Most Instagrammable Way to Do Ibiza",
    link: "https://graziadaily.co.uk",
  },
  {
    publication: "Ibiza Spotlight",
    headline: "O Beach — Nominated for World's Best Club",
    link: "https://spotlight.ibiza.com",
  },
  {
    publication: "The Times",
    headline: "Wi-Ki-Woo: Ibiza's Most Instagrammable Hotel",
    link: "https://thetimes.co.uk",
  },
  {
    publication: "Evening Standard",
    headline: "5 Hottest New Beach Clubs for Summer 2021",
    link: "https://standard.co.uk",
  },
];

const mediaHighlights = [
  {
    image: "/images/1746690639672.jpg",
    caption: "O Beach Ibiza — aerial performers & packed pool crowd",
  },
  {
    image: "/images/1750923907037.jpg",
    caption: "Tony Truman at Wi-Ki-Woo Hotel, San Antonio",
  },
  {
    image: "/images/1772700307557.jpg",
    caption: "O Beach Dubai launch with the full team",
  },
  {
    image: "/images/1759995980586.jpg",
    caption: "IMI Group full team — 150+ staff at end of season",
  },
  {
    image: "/images/1772700308027.jpg",
    caption: "Tony with the team at Veuve Clicquot O Beach event",
  },
  {
    image: "/images/1743065405135.jpg",
    caption: "O Beach brand partnership — SHEIN collaboration shoot",
  },
];

export default function MediaPage() {
  return (
    <main>
      <PageHero
        category="Media"
        title="Press, Stories & Brand Narrative"
        subtitle="Four decades of stories. Highlights from O Beach, Wi-Ki-Woo, Bam Bu Ku and the IMI Group ecosystem."
        image="/images/1759995980586.jpg"
      />

      {/* Featured Stories */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Featured Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">
              The Tony Truman Story
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {story.tag}
                    </span>
                    <span className="text-white/80 text-xs">{story.readTime}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-serif font-bold mb-3 leading-tight group-hover:text-brand-orange transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/tony-truman-59188a206/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                  >
                    Follow on LinkedIn <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Photo Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">
              Behind the Brand
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-4">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/tonytrumanibiza/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-brand-orange transition-colors"
            >
              <Instagram size={14} />
              @tonytrumanibiza
            </a>
            <a
              href="https://www.instagram.com/obeachibiza/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              <Instagram size={14} />
              @obeachibiza
            </a>
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Press Features
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">
              As Seen In
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
            {pressFeatures.map((feature, index) => (
              <motion.a
                key={feature.headline}
                href={feature.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-brand-orange hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <ExternalLink size={18} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-brand-orange mb-1">
                    {feature.publication}
                  </p>
                  <p className="font-serif font-bold leading-tight group-hover:text-brand-orange transition-colors">
                    {feature.headline}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Press Kit CTA */}
          <div className="rounded-3xl bg-foreground text-white p-10 md:p-14 text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Press & Media
            </p>
            <h3 className="text-3xl md:text-4xl font-serif font-black mb-4">
              Request a Media Kit
            </h3>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Journalists and partners can request Tony&apos;s bio, approved imagery, brand
              information, and venture overviews from the team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:tony@obeachibiza.com?subject=Media%20Kit%20Request"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
              >
                Request Media Kit
                <Download size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/tony-truman-59188a206/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                Connect on LinkedIn
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
