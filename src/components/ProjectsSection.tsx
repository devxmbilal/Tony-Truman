"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { eventProjects } from "@/lib/site-data";

export default function ProjectsSection() {
  return (
    <section className="py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-12">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Projects & Events
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">
              Notable Event Concepts
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
          >
            View Events Page
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventProjects.slice(0, 6).map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image src={project.image} alt={project.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-3">
                  {project.brand}
                </p>
                <h3 className="text-2xl font-serif font-bold mb-3">{project.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={project.eventUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                  >
                    Event Link
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
                  >
                    Video
                    <PlayCircle size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
