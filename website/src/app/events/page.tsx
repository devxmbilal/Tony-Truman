"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { eventPillars, eventProjects, socialProfiles } from "@/lib/site-data";

const eventImage = "/images/1746690639672.jpg";

export default function EventsPage() {
  return (
    <main>
      <PageHero
        category="Events & Experiences"
        title="Live Events, Branded Shows & Activations"
        subtitle="From KISSTORY at O Beach to the Grand National Festival Zone — event formats that define a season."
        image={eventImage}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {eventPillars.map((pillar) => (
              <div
                key={pillar}
                className="px-5 py-4 rounded-2xl border border-border bg-muted font-semibold capitalize"
              >
                {pillar}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventProjects.map((project, index) => (
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
                  <h2 className="text-2xl font-serif font-bold mb-3">{project.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={project.eventUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                    >
                      Event Page
                      <ExternalLink size={14} />
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

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Stay Updated
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
              Follow Event Highlights
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              For the latest event videos, live updates, and season announcements — follow the official social and LinkedIn channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={socialProfiles.oBeachInstagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
              >
                O Beach Instagram
                <ArrowRight size={14} />
              </Link>
              <Link
                href={socialProfiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                Tony LinkedIn
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
