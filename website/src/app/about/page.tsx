"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Trophy, Globe, Users, Rocket, Handshake, TrendingUp, MapPin, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { timeline } from "@/lib/site-data";
import StorySection from "@/components/StorySection";

const achievements = [
  { icon: Trophy, title: "World's Best Club Nominations", detail: "O Beach Ibiza nominated 2 consecutive years." },
  { icon: Globe, title: "Global Operations", detail: "Venues across Ibiza, Dubai, and the UK." },
  { icon: Users, title: "1,400+ Staff Managed", detail: "Building teams that deliver premium experiences at scale." },
  { icon: Rocket, title: "20+ Businesses Built", detail: "From beach clubs to hotels, concierge and tech ventures." },
  { icon: Handshake, title: "Major Brand Partnerships", detail: "Collaborations with SHEIN, Veuve Clicquot, and more." },
  { icon: TrendingUp, title: "41 Years in the Industry", detail: "From his first party at 15 to the UMusic Hotels joint venture." },
];

const stats = [
  { value: "41+", label: "Years in Hospitality" },
  { value: "20+", label: "Businesses Built" },
  { value: "1,400+", label: "Staff Worldwide" },
  { value: "2×", label: "World's Best Club" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        category="About Tony"
        title="From One Party to a Hospitality Legacy"
        subtitle="A 41-year journey shaped by resilience, risk, and relentless execution."

      />

      {/* Bio — Profile Card left, LinkedIn Bio right */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

          {/* Professional Profile Card with real photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border shadow-xl"
          >
            {/* Photo */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/1755675910186.jpg"
                alt="Tony Truman — O Beach Ibiza"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Name overlay on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-3xl md:text-4xl font-serif font-black text-white leading-tight">
                  Tony Truman
                </h2>
                <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mt-1">
                  Founding Partner — IMI Group
                </p>
              </div>
            </div>

            {/* Icon detail strip */}
            <div className="bg-muted p-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <MapPin size={15} className="text-brand-orange flex-shrink-0" />
                Based in Ibiza, Spain
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <Rocket size={15} className="text-brand-orange flex-shrink-0" />
                Founding Partner · O Beach Ibiza · O Beach Dubai · Wi-Ki-Woo Hotel · Bam Bu Ku
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <Users size={15} className="text-brand-orange flex-shrink-0" />
                1,400+ staff managed globally
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <Trophy size={15} className="text-brand-orange flex-shrink-0" />
                World&apos;s Best Club Nominated 2× (O Beach Ibiza)
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                <TrendingUp size={15} className="text-brand-orange flex-shrink-0" />
                41 years · First party hosted age 15 (1983)
              </div>
              <div className="pt-3 border-t border-border flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/tony-truman-59188a206/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-brand-orange hover:text-foreground transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://www.instagram.com/tonytrumanibiza/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-foreground hover:text-brand-orange transition-colors"
                >
                  @tonytrumanibiza →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Real LinkedIn Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-4">
              In Tony&apos;s Own Words
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight mb-10">
              My Story
            </h2>

            <div className="space-y-5 text-lg text-foreground leading-relaxed">
              <p>
                Hi, I&apos;m Tony and I am a Founding Partner of <strong>O Beach Ibiza</strong>, <strong>O Beach Dubai</strong>, <strong>Wi-Ki-Woo Hotel Ibiza</strong> and <strong>Bam Bu Ku Ibiza</strong>, along with multiple other businesses.
              </p>
              <p>
                At the tender age of 15, I hosted my very first party.
              </p>
              <p>
                41 years later, I am now a Partner &amp; Operator in IMI Group, creating some of the best events worldwide.
              </p>
              <p>
                It was a family holiday to Ibiza in 1983, at age 15, that changed everything.
              </p>
              <p className="text-xl font-serif italic text-muted-foreground pl-4 border-l-4 border-brand-orange space-y-1">
                The island.<br />
                The people.<br />
                The experience.
              </p>
              <p>
                Since that day, Ibiza has never left my mind. So I made it my mission to build the best clubs &amp; experiences on this island — as I truly believe it is the best place to be.
              </p>
              <p>
                Of course, there have been many ups and downs in my journey. I&apos;ve experienced all the trials &amp; tribulations.
              </p>
              <p>
                But I can proudly say that I&apos;ve learnt from all the successes &amp; failures.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-foreground text-white">
              <p className="text-lg leading-relaxed mb-4">
                If you are interested in how I, or the IMI Group, can support your business — send me a message and let&apos;s discuss!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
              >
                Send Tony a Message
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Strip */}
      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-black text-brand-orange mb-2">{s.value}</p>
                <p className="text-white/70 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Achievements — icon grid */}
      <section className="py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">Track Record</p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">Key Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-border p-8 hover:border-brand-orange hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors">
                    <Icon size={20} className="text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-black mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">The Journey</p>
            <h2 className="text-4xl md:text-5xl font-serif font-black">41 Years in the Making</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-[18px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-md md:-translate-x-2 z-10" />
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] p-6 bg-muted rounded-2xl border border-border hover:border-brand-orange transition-colors ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <p className="text-2xl font-serif font-black text-brand-orange mb-2">{item.year}</p>
                    <p className="text-base leading-relaxed text-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Beach Dubai team photo */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/1759995980586.jpg"
              alt="IMI Group — O Beach Dubai full team"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-brand-orange mb-3">The Team</p>
                <h3 className="text-3xl md:text-5xl font-serif font-black">1,400+ People Worldwide</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-foreground text-white p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">
              &quot;If you don&apos;t back yourself, why would anyone else?&quot;
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Leadership starts with conviction, discipline, and staying focused through uncertainty.
            </p>
            <Link
              href="/work-with-tony"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-foreground transition-colors"
            >
              Work With Tony
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
