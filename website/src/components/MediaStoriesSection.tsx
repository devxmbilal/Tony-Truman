"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mediaStories } from "@/lib/site-data";

export default function MediaStoriesSection() {
  return (
    <section className="py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Media & Stories
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-black">
              Inside the Tony Truman Playbook
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mediaStories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-border p-8"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">
                {story.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {story.excerpt}
              </p>
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
              >
                Read Story
                <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
