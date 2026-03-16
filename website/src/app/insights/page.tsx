"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const articles = [
  {
    title: "Business Lessons from Building 20+ Hospitality Brands",
    category: "Business",
    summary:
      "Frameworks for market fit, concept scaling, and protecting brand positioning in competitive destinations.",
  },
  {
    title: "How to Build Teams That Deliver Premium Guest Experiences",
    category: "Leadership",
    summary:
      "Hiring, training, and culture practices that turn venues into repeat-visit destinations.",
  },
  {
    title: "What Makes Music-Led Hospitality Commercially Strong",
    category: "Strategy",
    summary:
      "Why entertainment architecture can increase dwell time, spend, and brand loyalty.",
  },
  {
    title: "From Setbacks to Momentum: Operating Through Market Pressure",
    category: "Mindset",
    summary:
      "A practical approach to risk, cash discipline, and decision-making under pressure.",
  },
  {
    title: "Designing Hospitality Brands for Social Visibility",
    category: "Marketing",
    summary:
      "How aesthetics, programming, and creator behavior shape organic growth.",
  },
  {
    title: "International Expansion: Readiness Checklist for Operators",
    category: "Growth",
    summary:
      "A checklist for taking a proven concept to new cities without diluting the core brand.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        category="Insights"
        title="Hospitality, Leadership, and Growth"
        subtitle="Thoughts and lessons from four decades of building brands, teams, and high-performance venues."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-muted p-8"
            >
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-4">
                {article.category}
              </p>
              <h2 className="text-2xl font-serif font-bold mb-4 leading-tight">
                {article.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{article.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
