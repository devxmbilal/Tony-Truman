"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { latestNews } from "@/lib/site-data";

export default function MediaStoriesSection() {
  return (
    <section className="py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Latest News & Stories
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-black">
              Inside the Tony Truman Playbook
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/tony-truman-59188a206/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
          >
            Follow on LinkedIn
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <motion.article
              key={news.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-border overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {news.tag}
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  {news.date}
                </p>
                <h3 className="text-xl font-serif font-bold mb-3 leading-tight">
                  {news.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm line-clamp-3">
                  {news.excerpt}
                </p>
                <a
                  href={news.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
