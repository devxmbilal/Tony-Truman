"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { eventPillars } from "@/lib/site-data";

const eventImage =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2670&auto=format&fit=crop";

const featuredEvents = [
  {
    title: "Luxury Beach Club Programming",
    text: "High-energy daytime concepts combining music, performance, and premium service.",
  },
  {
    title: "Global Brand Activations",
    text: "Partnership-led campaigns that merge entertainment with commercial outcomes.",
  },
  {
    title: "VIP Guest Experiences",
    text: "Private tables, concierge workflows, and elevated end-to-end guest journeys.",
  },
];

export default function EventsPage() {
  return (
    <main>
      <PageHero
        category="Events & Experiences"
        title="Music-Led Hospitality in Motion"
        subtitle="From Ibiza beach clubs to international activations, experiences are built to leave a lasting impression."
        image={eventImage}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
            <Image src={eventImage} alt="Crowd at an event" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
              What IMI Group Delivers
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {eventPillars.map((pillar) => (
                <li
                  key={pillar}
                  className="px-5 py-4 rounded-2xl border border-border bg-muted font-semibold capitalize"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-border p-8"
            >
              <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{event.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
