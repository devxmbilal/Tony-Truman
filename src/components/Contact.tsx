"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "Hospitality Consulting",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? "Unable to send message right now.");
      }

      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              Contact
            </p>
            <h3 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-8 leading-tight">
              Send a Message to Discuss Opportunities
            </h3>
            <p className="text-muted-foreground text-lg max-w-lg mb-10">
              For partnerships, consulting, media, and collaboration requests,
              use the form and the team will respond shortly.
            </p>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-orange">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="text-lg font-medium">inquiries@tonytruman.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-orange">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Locations
                  </p>
                  <p className="text-lg font-medium">Ibiza, Dubai, UK</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-widest ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-widest ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, subject: event.target.value }))
                  }
                  className="w-full px-5 py-3.5 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option>Hospitality Consulting</option>
                  <option>Brand Partnership</option>
                  <option>Media Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-widest ml-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 bg-white border border-border rounded-xl focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {status === "success" && (
                <p className="text-green-700 text-sm font-semibold">
                  Thank you. Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm font-semibold">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
