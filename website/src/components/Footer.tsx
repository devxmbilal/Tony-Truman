import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-6">
              TONY <span className="text-brand-orange">TRUMAN</span>
            </div>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed">
              Global hospitality leader, entrepreneur, and visionary behind Ibiza&apos;s most iconic lifestyle destinations.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-6 text-white/40">Navigation</h4>
            <ul className="space-y-4 font-medium opacity-80">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/story" className="hover:text-brand-orange transition-colors">The Story</Link></li>
              <li><Link href="/ventures" className="hover:text-brand-orange transition-colors">Ventures</Link></li>
              <li><Link href="/consulting" className="hover:text-brand-orange transition-colors">Consulting</Link></li>
              <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-6 text-white/40">Connect</h4>
            <ul className="space-y-4 font-medium opacity-80">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2024 Tony Truman Portfolio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
