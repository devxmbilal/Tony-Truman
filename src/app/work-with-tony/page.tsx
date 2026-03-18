"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Handshake,
  Calendar,
  Award,
  Globe,
  Megaphone,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Building2,
    title: "Hospitality Consulting",
    description:
      "Strategic advisory for venue operators, hoteliers, and hospitality groups looking to improve concept, positioning, and commercial performance.",
    outcomes: ["Brand repositioning", "Revenue model review", "Operational frameworks"],
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    description:
      "Joint ventures, brand partnerships, and commercial collaborations with the IMI Group — including co-branded activations with O Beach and Wi-Ki-Woo.",
    outcomes: ["Co-branded events", "JV structuring", "IMI Group collaboration"],
  },
  {
    icon: Calendar,
    title: "Event Collaborations",
    description:
      "Partnering with festivals, venues, and brands to bring the O Beach event concept to new stages — from the Grand National Festival Zone to Dubai.",
    outcomes: ["Event activation", "Talent programming", "Production oversight"],
  },
  {
    icon: Award,
    title: "Brand Licensing",
    description:
      "Licensing the O Beach, Wi-Ki-Woo, or IMI Group brand frameworks to qualifying hospitality operators internationally.",
    outcomes: ["Brand licensing deals", "White-label concepts", "IP frameworks"],
  },
  {
    icon: Globe,
    title: "Venue Development",
    description:
      "End-to-end concept development for new venues — from site assessment and design direction through to pre-launch strategy and staffing.",
    outcomes: ["Concept development", "Pre-opening strategy", "Design direction"],
  },
  {
    icon: Megaphone,
    title: "Team Culture & Operations",
    description:
      "Building teams and cultures that deliver premium guest experiences at scale. Lessons drawn from managing 1,400+ staff across 20+ businesses.",
    outcomes: ["Talent frameworks", "Culture design", "GM coaching"],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Enquiry",
    description: "Send a brief message through the contact page. Outline your project, business, and what you're hoping to achieve.",
  },
  {
    step: "02",
    title: "Discovery Call",
    description: "Tony or the IMI Group team will arrange a discovery call to assess strategic fit and understand the full opportunity.",
  },
  {
    step: "03",
    title: "Proposal & Alignment",
    description: "A clear commercial and brand alignment proposal with measurable outcomes, timelines, and defined scope of work.",
  },
  {
    step: "04",
    title: "Execution",
    description: "Hands-on delivery with Tony and the IMI Group team. Regular reviews ensure performance stays on track.",
  },
];

const proof = [
  { stat: "41+", label: "Years of Industry Experience" },
  { stat: "20+", label: "Businesses Built & Operated" },
  { stat: "1,400+", label: "Staff Managed Globally" },
  { stat: "2", label: "World's Best Club Nominations" },
];

export default function WorkWithTonyPage() {
  return (
    <main>
      <PageHero
        category="Work With Tony"
        title="Advisory, Partnerships & Growth Projects"
        subtitle="Built for operators, investors, and brands that want to create category-leading hospitality experiences."
        image="/images/1749541516683.jpg"
      />

      {/* Social Proof Strip */}
      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proof.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-black text-brand-orange mb-2">
                  {item.stat}
                </p>
                <p className="text-white/70 text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black max-w-2xl leading-tight">
              How Tony Can Work With You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-border bg-white p-8 hover:border-brand-orange hover:shadow-xl transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <Icon size={20} className="text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-black mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-foreground font-medium">
                        <CheckCircle size={14} className="text-brand-orange flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof Section — Real photo + quote */}
      <section className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/1755675909660.jpg"
              alt="Tony Truman — O Beach Dubai"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                O Beach Dubai Launch
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Why Work With Tony
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight mb-8">
              Proven at Scale. Tested in the Field.
            </h2>

            <blockquote className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed border-l-4 border-brand-orange pl-6 mb-8">
              &quot;From £1,000,000 in debt to opening the first O Beach in Ibiza. If I had to pick one thing that got me from one side to the other — it was backing myself.&quot;
            </blockquote>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tony brings four decades of real-world hospitality experience — not theory. Every framework, process, and partnership model has been stress-tested across 20+ businesses with 1,400+ staff in competitive, high-stakes environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground transition-colors"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/tony-truman-59188a206/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                View LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-border" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center mx-auto mb-5">
                    <span className="text-white font-black text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-serif font-black mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 text-center">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Ready?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
              Let&apos;s Build Something Exceptional
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Send a brief message and Tony&apos;s team will respond to scope the opportunity. Whether it&apos;s a consulting project, partnership, or event collaboration — every great outcome starts with one conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
