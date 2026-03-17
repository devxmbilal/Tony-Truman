import { Instagram, Linkedin } from "lucide-react";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import { socialProfiles } from "@/lib/site-data";

const socialLinks = [
  { label: "Instagram", href: socialProfiles.oBeachInstagram, icon: Instagram },
  { label: "LinkedIn", href: socialProfiles.linkedin, icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        category="Contact"
        title="Start a Conversation"
        subtitle="For consulting, partnerships, and media requests, reach out directly through the form below."
      />

      <Contact />

      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-border">
            <h2 className="text-xl font-serif font-bold mb-3">Press & Media</h2>
            <p className="text-muted-foreground mb-5">
              For interview requests and high-resolution brand assets.
            </p>
            <a
              href="mailto:media@tonytruman.com"
              className="font-bold text-brand-orange hover:underline uppercase tracking-widest text-xs"
            >
              media@tonytruman.com
            </a>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-border">
            <h2 className="text-xl font-serif font-bold mb-3">Speaking Inquiries</h2>
            <p className="text-muted-foreground mb-5">
              For events, panels, and hospitality leadership sessions.
            </p>
            <a
              href="mailto:speaking@tonytruman.com"
              className="font-bold text-brand-orange hover:underline uppercase tracking-widest text-xs"
            >
              speaking@tonytruman.com
            </a>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-border">
            <h2 className="text-xl font-serif font-bold mb-3">Social</h2>
            <p className="text-muted-foreground mb-5">
              Follow updates across hospitality, ventures, and media moments.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
