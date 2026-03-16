import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ventures from "@/components/Ventures";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Ventures />
      <Philosophy />
      <Contact />
    </main>
  );
}
