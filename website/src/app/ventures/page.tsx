"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const ventures = [
  {
    title: "O Beach Ibiza & Dubai",
    description: "The world's most iconic luxury day club, pioneer of music-led hospitality. From the shores of Ibiza to the skyline of Dubai, O Beach sets the global standard for daytime entertainment.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.obeachibiza.com/",
    tags: ["Beach Club", "Global", "Luxury"]
  },
  {
    title: "Wi-Ki-Woo Hotel",
    description: "Ibiza's most vibrant luxury hotel, where pastel pinks and Art Deco design meet class-leading service in San Antonio.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.wikiwoohotelibiza.com/",
    tags: ["Hospitality", "Hotel", "Boutique"]
  },
  {
    title: "Bam Bu Ku",
    description: "A tropical family-friendly oasis featuring a wave pool, premium dining, and a relaxed beach club vibe for all ages.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2698&auto=format&fit=crop",
    link: "https://www.bambukuibiza.com/",
    tags: ["Family", "Dining", "Tropical"]
  },
  {
    title: "Bonito Hotel",
    description: "A sophisticated addition to the Ibiza hotel scene, focusing on chic aesthetics and unparalleled guest experiences.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["Hotel", "Luxury", "Boutique"]
  },
  {
    title: "Itaca Ibiza",
    description: "The legendary San Antonio beachfront venue, offering world-class music and an electric atmosphere since its inception.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
    link: "https://itacaibiza.com/",
    tags: ["Beach Club", "Nightlife", "Iconic"]
  },
  {
    title: "Skinny Kitchen",
    description: "Redefining healthy dining with a focus on fresh ingredients, vibrant plates, and a lively social atmosphere.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop",
    link: "https://theskinnykitchen.co.uk/",
    tags: ["Dining", "Healthy", "Lifestyle"]
  },
  {
    title: "Faith Concierge",
    description: "Exclusive lifestyle management providing elite access to Ibiza's finest villas, yachts, and private events.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["Concierge", "VIP", "Elite"]
  },
  {
    title: "Tru's Do's",
    description: "Tony Truman's signature events agency, curating the island's most talked-about parties and corporate gatherings.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["Events", "Curated", "Nightlife"]
  },
  {
    title: "Chi Kee Wun",
    description: "An exotic oriental garden restaurant in San Antonio, offering an immersive escape with high-end Chinese cuisine.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop",
    link: "https://chikeewun.com/",
    tags: ["Dining", "Oriental", "Experience"]
  },
  {
    title: "Apolo Ibiza",
    description: "A premium late-night destination blending sophisticated cocktails with a high-energy dance floor.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    tags: ["Lounge", "Nightlife", "Luxury"]
  }
];

export default function VenturesPage() {
  return (
    <main>
      <PageHero 
        category="IMI GROUP PORTFOLIO"
        title="Iconic Brands, Global Impact"
        subtitle="From award-winning beach clubs to boutique hotels, our portfolio sets the standard for music-led hospitality."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ventures.map((venture, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col h-full border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                    <div className="aspect-[4/3] relative overflow-hidden">
                        <img 
                            src={venture.image} 
                            alt={venture.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                            {venture.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-serif font-bold mb-4">{venture.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                            {venture.description}
                        </p>
                        <Link 
                            href={venture.link} 
                            target="_blank"
                            className="inline-flex items-center gap-2 font-bold text-brand-orange group-hover:gap-4 transition-all"
                        >
                            Explore Brand <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      <section className="py-32 bg-foreground text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">
                  Interested in <span className="text-brand-orange italic">Partnering</span> with an IMI Brand?
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                  We are always looking for globally-aligned partners who share our vision for world-class hospitality and entertainment.
              </p>
              <Link 
                href="/consulting"
                className="inline-flex items-center justify-center bg-white text-foreground px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-2xl shadow-white/10"
              >
                  Discuss Partnerships
              </Link>
          </div>
      </section>
    </main>
  );
}
