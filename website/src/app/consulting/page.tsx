"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { CheckCircle2, Building2, Users2, Rocket, Globe } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Hospitality Consulting",
    description: "Deep-dive analysis and strategic planning for restaurants, beach clubs, and hotels looking to scale concepts from vision to global market leaders."
  },
  {
    icon: Users2,
    title: "Brand Partnerships",
    description: "Collaborating with elite global brands to create high-impact activations and long-term brand equity within the luxury lifestyle sector."
  },
  {
    icon: Rocket,
    title: "Venue Development",
    description: "End-to-end guidance on conceptualization, interior design, marketing strategies, and operational excellence for new hospitality ventures."
  },
  {
    icon: Globe,
    title: "International Licensing",
    description: "Scaling established hospitality brands across borders through strategic licensing and franchise management with a focus on quality control."
  }
];

export default function ConsultingPage() {
  return (
    <main>
      <PageHero 
        category="PARTNERSHIPS & STRATEGY"
        title="Scale Your Vision"
        subtitle="Leverage 40 years of hospitality expertise to build iconic brands and world-class experiences."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" alt="Consulting Session" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply" />
                </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-10"
            >
                <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight">Mastering the Art of <span className="text-brand-orange italic">Global Hospitality</span></h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    With a proven track record of building multiple multimillion-dollar brands, Tony Truman provides the strategic insight required to navigate the complex world of luxury lifestyle businesses.
                </p>
                <ul className="space-y-6">
                    {[
                        "Market positioning and brand identity",
                        "Operational efficiency and team building",
                        "High-impact marketing and event strategies",
                        "Financial modeling for scaling ventures"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-xl font-medium text-foreground">
                            <CheckCircle2 className="text-brand-orange shrink-0" size={28} />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </section>

      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24">
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-6 text-center">Services Offered</h2>
                <h3 className="text-4xl md:text-6xl font-serif font-black">Professional Expertise</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-3xl shadow-sm border border-border hover:border-brand-orange hover:shadow-xl transition-all duration-500 group"
                    >
                        <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all">
                            <service.icon size={32} />
                        </div>
                        <h4 className="text-3xl font-serif font-bold mb-6">{service.title}</h4>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
          <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-5xl font-serif font-bold mb-8">Ready to Build Your Brand?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                  Tony takes on a limited number of high-impact consulting projects and brand partnerships each year. Apply now to discuss your vision.
              </p>
              <Link 
                href="/contact"
                className="bg-brand-orange text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-foreground transition-all shadow-2xl shadow-brand-orange/30"
              >
                  Start a Conversation
              </Link>
          </div>
      </section>
    </main>
  );
}
