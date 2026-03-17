export type Venture = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export type EventProject = {
  name: string;
  brand: string;
  summary: string;
  image: string;
  eventUrl: string;
  videoUrl: string;
};

export type LinkedInEmbed = {
  src: string;
  title: string;
  height: number;
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

export const eventProjects: EventProject[] = [
  {
    name: "KISSTORY",
    brand: "O Beach Ibiza",
    summary:
      "Weekly old skool and anthem-focused day event with large-scale production and entertainment.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
    eventUrl: "https://obeachibiza.com/kisstory/",
    videoUrl: "https://obeachibiza.com/kisstory/",
  },
  {
    name: "House In Paradise",
    brand: "O Beach Ibiza",
    summary:
      "Signature house concept blending day-to-night energy, themed shows, and resident DJs.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2670&auto=format&fit=crop",
    eventUrl: "https://obeachibiza.com/house-in-paradise/",
    videoUrl: "https://obeachibiza.com/house-in-paradise/",
  },
  {
    name: "Sin Sundays",
    brand: "O Beach Ibiza",
    summary:
      "Long-running Sunday residency known for Ibiza anthems and high-impact live shows.",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c9f2d4c6?q=80&w=2670&auto=format&fit=crop",
    eventUrl: "https://obeachibiza.com/sin-sundays/",
    videoUrl: "https://obeachibiza.com/sin-sundays/",
  },
  {
    name: "El Kiddo",
    brand: "Bam Bu Ku",
    summary:
      "Family-focused entertainment event with live DJs, performers, and all-day activities.",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop",
    eventUrl: "https://bambukuibiza.com/el-kiddo/",
    videoUrl: "https://www.instagram.com/bambukuibiza/",
  },
  {
    name: "Musicana",
    brand: "Bam Bu Ku",
    summary:
      "Live soul, funk, disco, and house supper-club format with immersive evening atmosphere.",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2670&auto=format&fit=crop",
    eventUrl: "https://bambukuibiza.com/musicana/",
    videoUrl: "https://bambukuibiza.com/musicana/",
  },
  {
    name: "Ibiza Cinema",
    brand: "Bam Bu Ku",
    summary:
      "Open-air cinema nights with sunset-to-screen experiences in a tropical venue setting.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2669&auto=format&fit=crop",
    eventUrl: "https://bambukuibiza.com/cinema/",
    videoUrl: "https://bambukuibiza.com/cinema/",
  },
];

export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/tony-truman-59188a206/",
  imiLinkedin: "https://www.linkedin.com/company/the-imi-group",
  oBeachInstagram: "https://www.instagram.com/obeachibiza/",
  bamBukuInstagram: "https://www.instagram.com/bambukuibiza/",
};

export const linkedInEmbeds: LinkedInEmbed[] = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7438509431580962816?collapsed=1",
    title: "LinkedIn post 1",
    height: 1387,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7437849512154415104",
    title: "LinkedIn post 2",
    height: 1321,
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7437780974068723715",
    title: "LinkedIn post 3",
    height: 1195,
  },
];
