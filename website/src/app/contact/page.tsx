"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { Mail, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <PageHero 
        category="GET IN TOUCH"
        title="Start a Conversation"
        subtitle="For hospitality consulting, business partnerships, or media inquiries, please reach out via the form below."
      />

      <div className="bg-white">
          <Contact />
      </div>

      <section className="py-24 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                  <div className="p-10 bg-white rounded-3xl border border-border">
                      <h4 className="text-xl font-serif font-bold mb-4">Press & Media</h4>
                      <p className="text-muted-foreground mb-6">For interview requests or high-res imagery for publication.</p>
                      <a href="mailto:media@tonytruman.com" className="font-bold text-brand-orange hover:underline uppercase tracking-widest text-sm">media@tonytruman.com</a>
                  </div>
                  <div className="p-10 bg-white rounded-3xl border border-border">
                      <h4 className="text-xl font-serif font-bold mb-4">Speaking Inquiries</h4>
                      <p className="text-muted-foreground mb-6">For speaking engagements, events, or hospitality seminars.</p>
                      <a href="mailto:speaking@tonytruman.com" className="font-bold text-brand-orange hover:underline uppercase tracking-widest text-sm">speaking@tonytruman.com</a>
                  </div>
                  <div className="p-10 bg-white rounded-3xl border border-border">
                      <h4 className="text-xl font-serif font-bold mb-4">Social Ecosystem</h4>
                      <p className="text-muted-foreground mb-6">Follow Tony&apos;s journey across the digital landscape.</p>
                      <div className="flex gap-4">
                          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                              <a key={i} href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                                  <Icon size={20} />
                              </a>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
