"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Lightbulb, TrendingUp, Users, Megaphone, Globe, Brain } from "lucide-react";
import PageHero from "@/components/PageHero";

const articles = [
  {
    category: "Business",
    icon: TrendingUp,
    title: "Business Lessons from Building 20+ Hospitality Brands",
    summary:
      "Frameworks for market fit, concept scaling, and protecting brand positioning in competitive destinations like Ibiza and Dubai.",
    readTime: "5 min",
    image: "/images/1737621934888.jpg",
    linkedinQuote:
      '"From £1,000,000 in debt to opening the first O Beach in Ibiza. The journey has been one hell of a ride."',
  },
  {
    category: "Leadership",
    icon: Users,
    title: "How to Build Teams That Deliver Premium Guest Experiences",
    summary:
      "Hiring, training, and culture practices that turn venues into repeat-visit destinations. Lessons from managing 1,400+ staff across 20 brands.",
    readTime: "6 min",
    image: "/images/1759995980586.jpg",
    linkedinQuote:
      '"On LinkedIn: I\'m running 20 businesses. In reality: 1,400+ people actually running those 20 businesses."',
  },
  {
    category: "Strategy",
    icon: Lightbulb,
    title: "What Makes Music-Led Hospitality Commercially Strong",
    summary:
      "Why entertainment architecture can increase dwell time, spend, and brand loyalty — and how O Beach and UMusic Hotels prove this model.",
    readTime: "7 min",
    image: "/images/1746690639672.jpg",
    linkedinQuote:
      '"Music doesn\'t just play in the background — it shapes the entire experience."',
  },
  {
    category: "Mindset",
    icon: Brain,
    title: "From Setbacks to Momentum: Operating Through Market Pressure",
    summary:
      "A practical approach to risk, cash discipline, and decision-making under pressure. Real lessons from business failures and turnarounds.",
    readTime: "5 min",
    image: "/images/1755675910186.jpg",
    linkedinQuote:
      '"If you don\'t back yourself, why would anyone else bother."',
  },
  {
    category: "Marketing",
    icon: Megaphone,
    title: "Designing Hospitality Brands for Social Visibility",
    summary:
      "How aesthetics, programming, and creator behavior shape organic growth. The story of Wi-Ki-Woo becoming Ibiza's most Instagrammable hotel.",
    readTime: "4 min",
    image: "/images/1750923907037.jpg",
    linkedinQuote:
      '"Cited as Ibiza\'s most Instagrammable hotel — the unmistakable exterior sits as a pastel-hued jewel."',
  },
  {
    category: "Growth",
    icon: Globe,
    title: "International Expansion: Readiness Checklist for Operators",
    summary:
      "A checklist for taking a proven concept to new cities without diluting the core brand. Lessons from the O Beach Dubai launch.",
    readTime: "6 min",
    image: "/images/1772700307557.jpg",
    linkedinQuote:
      '"O Beach Dubai — a city that attracts people from every corner of the world."',
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        category="Insights"
        title="Hospitality, Leadership & Growth"
        subtitle="Thoughts and lessons from four decades of building brands, teams, and high-performance venues."
        image="/images/1772700307466.jpg"
      />

      {/* Articles Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Tony&apos;s Playbook
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black max-w-2xl">
              Lessons from 41 Years in Hospitality
            </h2>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className={`group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 ${isEven ? "" : "md:[direction:rtl]"}`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] md:aspect-auto overflow-hidden ${isEven ? "" : "md:[direction:ltr]"}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`bg-white p-8 md:p-10 flex flex-col justify-between ${isEven ? "" : "md:[direction:ltr]"}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                          <Icon size={16} className="text-brand-orange" />
                        </div>
                        <div className="flex gap-3 items-center">
                          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-serif font-black leading-tight mb-4 group-hover:text-brand-orange transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {article.summary}
                      </p>

                      {/* LinkedIn Quote */}
                      <blockquote className="border-l-2 border-brand-orange pl-4 italic text-sm text-muted-foreground mb-6">
                        {article.linkedinQuote}
                      </blockquote>
                    </div>

                    <a
                      href="https://www.linkedin.com/in/tony-truman-59188a206/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors group/btn"
                    >
                      Read Full Post on LinkedIn
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-24 bg-foreground text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
            Stay Connected
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
            Get Tony&apos;s Insights Direct
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Tony regularly shares lessons, behind-the-scenes stories, and real business insights on LinkedIn. Follow to stay updated on the IMI Group and future projects.
          </p>
          <a
            href="https://www.linkedin.com/in/tony-truman-59188a206/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
          >
            Follow Tony on LinkedIn
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
