export type Venture = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export const heroMedia =
  "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop";

export const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "20+", label: "Businesses" },
  { value: "1400+", label: "Staff Worldwide" },
  { value: "Millions", label: "Guests Hosted" },
];

export const featuredVentures: Venture[] = [
  {
    name: "O Beach Ibiza",
    description:
      "Luxury day club known for world-class pool parties and music-led hospitality.",
    image:
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2670&auto=format&fit=crop",
    href: "https://www.obeachibiza.com/",
  },
  {
    name: "Wi-Ki-Woo Hotel Ibiza",
    description:
      "An iconic boutique hotel in San Antonio blending design, lifestyle, and service.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
    href: "https://www.wikiwoohotelibiza.com/",
  },
  {
    name: "Bam Bu Ku Ibiza",
    description:
      "Tropical beach club delivering family-friendly experiences under the Mediterranean sun.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2698&auto=format&fit=crop",
    href: "https://www.bambukuibiza.com/",
  },
  {
    name: "Faith Concierge",
    description:
      "Luxury concierge services for villas, yachts, restaurants, and VIP experiences.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    href: "/contact",
  },
];

export const allVentures: Venture[] = [
  ...featuredVentures,
  {
    name: "O Beach Dubai",
    description:
      "International expansion of the O Beach concept, bringing Ibiza energy to Dubai.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    href: "/contact",
  },
];

export const timeline = [
  {
    year: "Age 15",
    event: "Hosted his first party and began his journey in events and nightlife.",
  },
  { year: "1983", event: "Discovered Ibiza during a family holiday." },
  { year: "2011", event: "Launched O Beach Ibiza." },
  { year: "2015", event: "Launched Wi-Ki-Woo Hotel Ibiza." },
  { year: "2019", event: "Launched Bam Bu Ku Ibiza." },
  { year: "2020", event: "Founded Book Your Hotels." },
  {
    year: "Present",
    event: "Operating 20+ hospitality businesses with 1400+ staff worldwide.",
  },
];

export const mediaStories = [
  {
    title: "How O Beach Became Ibiza's Iconic Day Club",
    excerpt:
      "A look at brand positioning, entertainment programming, and operational consistency.",
  },
  {
    title: "From Debt Pressure to Global Hospitality Growth",
    excerpt:
      "Lessons in resilience, calculated risk, and rebuilding stronger under pressure.",
  },
  {
    title: "The Story Behind Wi-Ki-Woo Hotel Ibiza",
    excerpt:
      "How design-led hospitality and clear audience focus created a destination brand.",
  },
];

export const workServices = [
  "Hospitality Consulting",
  "Business Partnerships",
  "Event Collaborations",
  "Brand Licensing",
  "Venue Development",
];

export const eventPillars = [
  "Luxury beach clubs",
  "Music-led hospitality",
  "Global events",
  "Celebrity appearances",
  "VIP experiences",
  "International festivals",
];
