import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Tony", href: "/about" },
  { name: "Ventures", href: "/ventures" },
  { name: "Events", href: "/events" },
  { name: "Media", href: "/media" },
  { name: "Insights", href: "/insights" },
  { name: "Work With Tony", href: "/work-with-tony" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-20 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="text-3xl font-serif font-bold tracking-tighter mb-5">
              TONY <span className="text-brand-orange">TRUMAN</span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Personal brand platform for global music-led hospitality, strategic
              partnerships, and iconic lifestyle ventures.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:inquiries@tonytruman.com"
                  className="text-white/80 hover:text-brand-orange transition-colors"
                >
                  inquiries@tonytruman.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-brand-orange transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-brand-orange transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row gap-4 justify-between">
          <p>© {new Date().getFullYear()} Tony Truman. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
