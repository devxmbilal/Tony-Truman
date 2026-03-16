"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              GET IN TOUCH
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Let&apos;s Build <br />
              Something <span className="text-brand-orange italic">Iconic</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-lg mb-12">
              For hospitality consulting, business partnerships, or media inquiries, reach out directly to the IMI Group team.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-lg font-medium">inquiries@tonytruman.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Office</p>
                  <p className="text-lg font-medium">Ibiza • Dubai • London</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-muted p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                  <option>Hospitality Consulting</option>
                  <option>Brand Partnership</option>
                  <option>Media Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-brand-orange text-white font-bold text-lg rounded-xl shadow-xl shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
