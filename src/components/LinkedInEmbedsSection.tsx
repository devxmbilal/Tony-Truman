"use client";

import { motion } from "framer-motion";
import { linkedInEmbeds } from "@/lib/site-data";

type LinkedInEmbedsSectionProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function LinkedInEmbedsSection({
  title = "LinkedIn Event Highlights",
  subtitle = "Recent posts and event updates from LinkedIn.",
  className = "py-24 bg-white",
}: LinkedInEmbedsSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {linkedInEmbeds.map((embed, index) => (
            <motion.div
              key={embed.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border overflow-hidden bg-white shadow-sm"
            >
              <iframe
                src={embed.src}
                title={embed.title}
                width="100%"
                height={embed.height}
                frameBorder="0"
                allowFullScreen
                className="w-full"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
