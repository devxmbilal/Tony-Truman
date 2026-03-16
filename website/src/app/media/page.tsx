"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import { mediaStories } from "@/lib/site-data";

export default function MediaPage() {
  return (
    <main>
      <PageHero
        category="Media"
        title="Press, Stories, and Brand Narrative"
        subtitle="Highlights from Tony Truman's ventures, hospitality insights, and industry stories."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {mediaStories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border p-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-4">{story.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {story.excerpt}
              </p>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
              >
                Read More
                <ExternalLink size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
            Press & Media Kit
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Journalists and partners can request bio, approved imagery, and
            venture brand information from the team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:media@tonytruman.com?subject=Media%20Kit%20Request"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground transition-colors"
            >
              Request Media Kit
              <Download size={16} />
            </a>
            <a
              href="mailto:media@tonytruman.com"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              Media Contact
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
