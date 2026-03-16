"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const timelineHighlights = [
  { year: "1983", event: "Discovered Ibiza during a family holiday - the moment that changed everything." },
  { year: "Age 15", event: "Hosted his first party, sparking a life-long passion for events and hospitality." },
  { year: "2011", event: "Launched O Beach Ibiza, redefining the global day club experience." },
  { year: "2015", event: "Opened Wi-Ki-Woo Hotel, bringing vibrant luxury to San Antonio." },
  { year: "2019", event: "Founded Bam Bu Ku, a tropical family-friendly oasis." },
  { year: "Present", event: "Operating 20+ successful businesses with a global team of over 1400 staff." },
];

export default function StoryPage() {
  return (
    <main>
      <PageHero 
        category="THE NARRATIVE"
        title="From a Spark to a Legacy"
        subtitle="Tony Truman's journey is a 40-year odyssey of vision, risk, and the pursuit of world-class hospitality."
        image="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop"
      />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" alt="Tony Truman Early Days" className="w-full h-full object-cover" />
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">The Ibiza Awakening</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    It began in 1983. A family holiday to Ibiza sparked a fire that would define Tony’s entire career. While others saw just an island, Tony saw a canvas for world-class entertainment and luxury lifestyle experiences.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    By age 15, he was already hosting his first parties, learning the ropes of promotion and hospitality from the ground up. This hands-on experience laid the foundation for what would eventually become the IMI Group.
                </p>
                <blockquote className="border-l-4 border-brand-orange pl-8 py-2 italic text-2xl font-serif text-foreground">
                    &quot;Survival is the key, and if you can survive the bad times, the good times will always come.&quot;
                </blockquote>
            </motion.div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-16 text-center">40-Year Evolution</h2>
            <div className="space-y-12">
                {timelineHighlights.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-8 items-start pb-12 border-b border-border last:border-0"
                    >
                        <span className="text-4xl md:text-5xl font-serif font-black text-brand-orange min-w-[150px]">
                            {item.year}
                        </span>
                        <p className="text-2xl md:text-3xl font-medium text-foreground max-w-4xl">
                            {item.event}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 italic">“If you don&apos;t back yourself, why would anyone else?”</h2>
              <p className="text-xl text-muted-foreground font-medium">
                  This core philosophy has guided Tony through every business launched, every challenge overcome, and every world-class event hosted.
              </p>
          </div>
      </section>
    </main>
  );
}
