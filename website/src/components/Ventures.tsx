"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ventures = [
  {
    title: "O Beach Ibiza & Dubai",
    description: "The world's most iconic luxury day club, pioneer of music-led hospitality.",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.obeachibiza.com/"
  },
  {
    title: "Wi-Ki-Woo Hotel",
    description: "Ibiza's most vibrant luxury hotel, where pastel design meets class-leading service.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
    link: "https://www.wikiwoohotelibiza.com/"
  },
  {
    title: "Bam Bu Ku",
    description: "A tropical family-friendly oasis in San Antonio, offering luxury day club experiences.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2698&auto=format&fit=crop",
    link: "https://www.bambukuibiza.com/"
  },
  {
    title: "Itaca Ibiza",
    description: "The legendary beachfront venue, offering world-class music and electric atmospheres.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
    link: "https://itacaibiza.com/"
  },
  {
    title: "Skinny Kitchen",
    description: "Redefining healthy dining with fresh ingredients and a lively social atmosphere.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2670&auto=format&fit=crop",
    link: "https://theskinnykitchen.co.uk/"
  },
  {
    title: "Chi Kee Wun",
    description: "An exotic oriental garden restaurant offering immersive high-end Chinese cuisine.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop",
    link: "https://chikeewun.com/"
  }
];

export default function Ventures() {
  return (
    <section id="ventures" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              ICONIC PORTFOLIO
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Building Global <br />
              <span className="italic underline decoration-brand-gold/30 underline-offset-8">Lifestyle Brands</span>
            </h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm mb-2">
            Each venture under the IMI Group umbrella represents the pinnacle of luxury, events, and world-class hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-3xl font-serif font-bold mb-2">{venture.title}</h4>
                      <p className="text-white/80 font-medium max-w-md line-clamp-2">
                        {venture.description}
                      </p>
                    </div>
                    <Link 
                      href={venture.link} 
                      target="_blank"
                      className="w-14 h-14 bg-white text-foreground rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform scale-0 group-hover:scale-100 shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Link 
                href="/ventures" 
                className="inline-flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-sm border-b-2 border-brand-orange pb-2 hover:text-brand-orange transition-colors"
            >
                View Full Portfolio
                <ArrowRight size={16} />
            </Link>
        </div>
      </div>
    </section>
  );
}
