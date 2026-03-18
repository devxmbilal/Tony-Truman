export type Venture = {
  name: string;
  description: string;
  image: string;
  href: string;
  tag?: string;
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

export type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
  tag: string;
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Real photo: O Beach Ibiza aerial pool party with aerial acrobats, packed crowd
export const heroMedia = "/images/1746690639672.jpg";

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "41+", label: "Years Experience" },
  { value: "20+", label: "Businesses" },
  { value: "1400+", label: "Staff Worldwide" },
  { value: "Millions", label: "Guests Hosted" },
];

// ─── About (from LinkedIn bio) ────────────────────────────────────────────────
export const aboutText = [
  "At the tender age of 15, I hosted my very first party.",
  "41 years later, I am now a Partner & Operator in IMI Group, creating some of the best events worldwide.",
  "It was a family holiday to Ibiza in 1983, at age 15, that changed everything. The island. The people. The experience.",
  "Since that day, Ibiza has never left my mind. So I made it my mission to build the best clubs & experiences on this island.",
  "Of course, there have been many ups and downs in my journey — but I've learnt from all the successes & failures.",
];

// Tony portrait — real photo next to O Beach Ibiza branded sign
export const tonyPortrait = "/images/1755675910186.jpg";

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const timeline = [
  { year: "Age 15 (1983)", event: "First party hosted & first Ibiza family holiday — the island changed everything." },
  { year: "1990s", event: "Years of building events across Europe — the trial & tribulation era." },
  { year: "2011", event: "Launched O Beach Ibiza — Nominated for World's Best Club two consecutive years." },
  { year: "2015", event: "Opened Wi-Ki-Woo Hotel Ibiza — cited as Ibiza's most Instagrammable hotel." },
  { year: "2019", event: "Launched Bam Bu Ku Ibiza — tropical family-friendly beach club." },
  { year: "2020", event: "Co-founded Book Your Hotels." },
  { year: "2024", event: "Opened O Beach Dubai — expansion into the Middle East." },
  { year: "2026", event: "Announced UMusic Hotels × O Beach joint venture — the next era of music-led hospitality." },
];

// ─── Featured Ventures (Home page cards) ─────────────────────────────────────
export const featuredVentures: Venture[] = [
  {
    name: "O Beach Ibiza",
    // Real: Aerial performers + packed pool party crowd — iconic O Beach show
    description:
      "Dedicated to creating a unique and lavish lifestyle experience. Nominated for World's Best Club for two consecutive years.",
    image: "/images/1746690639672.jpg",
    href: "https://www.obeachibiza.com/",
    tag: "Beach Club",
  },
  {
    name: "Wi-Ki-Woo Hotel Ibiza",
    // Real: Tony on pink scooter in front of pink/mint Wi-Ki-Woo hotel
    description:
      "Ibiza's most Instagrammable hotel — a pastel-hued jewel on the sunset coastline with a sassy twist on luxury hospitality.",
    image: "/images/1750923907037.jpg",
    href: "https://www.wikiwoohotelibiza.com/",
    tag: "Boutique Hotel",
  },
  {
    name: "O Beach Dubai",
    // Real: Tony + team at O Beach Dubai with city skyline
    description:
      "Bringing the O Beach energy to the Middle East — international expansion of the most iconic beach club in Ibiza.",
    image: "/images/1772700307557.jpg",
    href: "https://www.obeachdubai.com/",
    tag: "International",
  },
  {
    name: "UMusic Hotels × O Beach",
    // Real: Luxury hotel pool concept with yellow sunbeds and palm trees
    description:
      "NEWLY ANNOUNCED: Joint venture between UMusic Hospitality & The IMI Group. 5-star hotels with O Beach music-led clubs.",
    image: "/images/1749541516683.jpg",
    href: "/contact",
    tag: "New — 2026",
  },
];

// ─── All Ventures (Ventures page full grid) ────────────────────────────────────
export const allVentures: Venture[] = [
  {
    name: "O Beach Ibiza",
    description:
      "Dedicated to creating a unique and lavish lifestyle experience. Nominated for World's Best Club for two consecutive years.",
    image: "/images/1746690639672.jpg",
    href: "https://www.obeachibiza.com/",
    tag: "Beach Club",
  },
  {
    name: "Wi-Ki-Woo Hotel Ibiza",
    description:
      "Ibiza's most Instagrammable hotel — a pastel-hued jewel on the sunset coastline with a sassy twist on luxury hospitality.",
    image: "/images/1750923907037.jpg",
    href: "https://www.wikiwoohotelibiza.com/",
    tag: "Boutique Hotel",
  },
  {
    name: "O Beach Dubai",
    description:
      "Bringing O Beach energy to the Middle East — officially launched at the Dubai World Cup. International expansion.",
    image: "/images/1772700307557.jpg",
    href: "https://www.obeachdubai.com/",
    tag: "International",
  },
  {
    name: "UMusic Hotels × O Beach",
    description:
      "NEWLY ANNOUNCED: Joint venture between UMusic Hospitality & The IMI Group. 5-star hotels with music-led O Beach clubs.",
    image: "/images/1749541516683.jpg",
    href: "/contact",
    tag: "New Venture — 2026",
  },
  {
    name: "Bam Bu Ku Ibiza",
    // Real: O Beach team group shot used here as vibrant venue lifestyle
    description:
      "Tropical paradise for families and free spirits alike — lazy Mediterranean days without compromising on vibrancy.",
    image: "/images/1759995980586.jpg",
    href: "https://www.bambukuibiza.com/",
    tag: "Beach Club",
  },
  {
    name: "Faith Concierge",
    // Real: Tony + big team Veuve Clicquot branded O Beach shot
    description:
      "Exclusive VIP lifestyle management — villas, yachts, restaurants, and high-demand Ibiza experiences for elite travellers.",
    image: "/images/1772700308027.jpg",
    href: "/contact",
    tag: "Concierge",
  },
  {
    name: "Chi Kee Wun",
    // Real: Flaming cocktail preparation — perfect for an exotic bar/restaurant
    description:
      "An exotic secret oriental garden restaurant in San Antonio. 4 years of extraordinary dining — celebrating 2026, Year of the Fire Horse.",
    image: "/images/1759995980312.jpg",
    href: "https://chikeewun.com/",
    tag: "Dining",
  },
  {
    name: "Skinny Kitchen",
    description:
      "Award-winning healthy dining concept focused on fresh, vibrant cuisine with a sociable atmosphere.",
    image: "/images/wikiwoo-hotel.png",
    href: "https://theskinnykitchen.co.uk/",
    tag: "Dining",
  },
  {
    name: "Book Your Hotels",
    description:
      "Premium travel and hotel booking platform for luxury clientele. Founded Jan 2020, headquartered in Surrey, UK.",
    image: "/images/umusic-hotels-obeach.png",
    href: "https://bookyourhotels.com/",
    tag: "Travel Tech",
  },
  {
    name: "Bonito Hotel",
    description:
      "A sophisticated boutique hotel experience, combining chic aesthetics with unparalleled guest service.",
    image: "/images/bambuku-beach.png",
    href: "#",
    tag: "Hotel",
  },
  {
    name: "Itaca Ibiza",
    description:
      "Legendary San Antonio beachfront venue offering world-class music and an electric atmosphere every season.",
    image: "/images/grand-national-obeach.png",
    href: "https://itacaibiza.com/",
    tag: "Venue",
  },
  {
    name: "Apolo Ibiza",
    description:
      "Premium late-night destination blending sophisticated cocktails with a high-energy dance floor.",
    image: "/images/obeach-ibiza-hero.png",
    href: "#",
    tag: "Nightlife",
  },
];

// ─── News / Latest Events ──────────────────────────────────────────────────────
export const latestNews: NewsItem[] = [
  {
    title: "UMusic Hotels × O Beach — Joint Venture Officially Announced",
    date: "March 2026",
    excerpt:
      "The biggest news yet: A joint venture between UMusic Hospitality & The IMI Group bringing 5-star hotels with O Beach music-led clubs globally.",
    // Real: Entire O Beach Dubai team photo — showing the scale
    image: "/images/1759995980586.jpg",
    link: "https://www.linkedin.com/in/tony-truman-59188a206/",
    tag: "Breaking News",
  },
  {
    title: "O Beach at The Grand National, Aintree — April 9–11",
    date: "March 2026",
    excerpt:
      "Pure O Beach madness hits the Festival Zone at Aintree Racecourse. Performers, energy, and champagne — Ibiza off the sand.",
    // Real: Tony + team SHEIN photo at O Beach (brand collab event)
    image: "/images/1743065405135.jpg",
    link: "https://www.linkedin.com/in/tony-truman-59188a206/",
    tag: "Live Event",
  },
  {
    title: "From £1M in Debt to Building a Global Hospitality Empire",
    date: "Insights",
    excerpt:
      "From getting kicked out of school to hosting Conor McGregor at O Beach. Tony's story is built on one principle — back yourself.",
    // Real: Tony leaning against O Beach Ibiza branded sign
    image: "/images/1755675910186.jpg",
    link: "https://www.linkedin.com/in/tony-truman-59188a206/",
    tag: "Story",
  },
];

// ─── Media Stories (existing section) ────────────────────────────────────────
export const mediaStories = [
  {
    title: "How O Beach Became Ibiza's Iconic Day Club",
    excerpt:
      "Brand positioning, music-led programming, and operational consistency. How a beach club became a world-recognised lifestyle brand.",
  },
  {
    title: "From £1M Debt to Global Hospitality Brand",
    excerpt:
      "Resilience, calculated risk, and building stronger under pressure. Tony's 41-year journey from first party to O Beach Dubai.",
  },
  {
    title: "Chi Kee Wun: 4 Years in Ibiza's Secret Garden",
    excerpt:
      "Celebrating 4 years of the secret oriental garden restaurant in San Antonio. 2026, the Year of the Fire Horse, brings new energy.",
  },
];

// ─── Work Services ─────────────────────────────────────────────────────────────
export const workServices = [
  "Hospitality Consulting",
  "Business Partnerships",
  "Event Collaborations",
  "Brand Licensing",
  "Venue Development",
  "Team Culture & Operations",
];

// ─── Event Pillars ─────────────────────────────────────────────────────────────
export const eventPillars = [
  "Luxury beach clubs",
  "Music-led hospitality",
  "Global events",
  "Celebrity appearances",
  "VIP experiences",
  "International festivals",
];

// ─── Event Projects ────────────────────────────────────────────────────────────
export const eventProjects: EventProject[] = [
  {
    name: "KISSTORY at O Beach",
    brand: "O Beach Ibiza",
    summary:
      "Weekly old skool and anthem-focused day event with large-scale production. One of Europe's biggest pool party concepts.",
    // Real: Packed O Beach pool party with aerial acrobat performers
    image: "/images/1746690639672.jpg",
    eventUrl: "https://obeachibiza.com/kisstory/",
    videoUrl: "https://obeachibiza.com/kisstory/",
  },
  {
    name: "Grand National Festival Zone",
    brand: "O Beach × Aintree",
    summary:
      "O Beach officially takes over the Aintree Racecourse Festival Zone for the Grand National, April 2026. Ibiza energy off the sand.",
    // Real: Tony + SHEIN team at branded O Beach collab event
    image: "/images/1743065405135.jpg",
    eventUrl: "https://www.aintree.co.uk/",
    videoUrl: "https://www.linkedin.com/in/tony-truman-59188a206/",
  },
  {
    name: "House In Paradise",
    brand: "O Beach Ibiza",
    summary:
      "Signature house music concept blending day-to-night energy, themed shows, and resident DJs.",
    // Real: DJ booth at O Beach event — intimate crowd
    image: "/images/1755675909660.jpg",
    eventUrl: "https://obeachibiza.com/house-in-paradise/",
    videoUrl: "https://obeachibiza.com/house-in-paradise/",
  },
  {
    name: "Tony's Portrait — Founder & Leader",
    brand: "IMI Group",
    summary:
      "The iconic portrait taken at O Beach Ibiza's Veuve Clicquot event — Tony with the full O Beach team.",
    // Real: Tony portrait smiling at O Beach Ibiza — Veuve Clicquot branded
    image: "/images/1772700307466.jpg",
    eventUrl: "https://www.linkedin.com/in/tony-truman-59188a206/",
    videoUrl: "https://www.linkedin.com/in/tony-truman-59188a206/",
  },
  {
    name: "Chi Kee Wun — Fire Horse Season",
    brand: "Chi Kee Wun",
    summary:
      "Celebrating 2026, Year of the Fire Horse. Exotic cocktails, sizzling Yangtze Beef, and crispy duck in Ibiza's secret garden.",
    // Real: Flaming cocktail preparation shot
    image: "/images/1759995980312.jpg",
    eventUrl: "https://chikeewun.com/",
    videoUrl: "https://chikeewun.com/",
  },
  {
    name: "O Beach Dubai — Opening Season",
    brand: "O Beach Dubai",
    summary:
      "O Beach Dubai opened its doors bringing the iconic Ibiza energy to the Middle East at the Dubai World Cup.",
    // Real: Tony + team at O Beach Dubai with iconic skyline backdrop
    image: "/images/1772700307557.jpg",
    eventUrl: "https://www.obeachdubai.com/",
    videoUrl: "https://www.linkedin.com/in/tony-truman-59188a206/",
  },
];

// ─── Social Profiles ───────────────────────────────────────────────────────────
export const socialProfiles = {
  linkedin: "https://www.linkedin.com/in/tony-truman-59188a206/",
  imiLinkedin: "https://www.linkedin.com/company/the-imi-group",
  tonyInstagram: "https://www.instagram.com/tonytrumanibiza/",
  oBeachInstagram: "https://www.instagram.com/obeachibiza/",
  bamBukuInstagram: "https://www.instagram.com/bambukuibiza/",
};

// ─── LinkedIn Embeds ───────────────────────────────────────────────────────────
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
