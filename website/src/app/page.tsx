import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import StorySection from "@/components/StorySection";
import Ventures from "@/components/Ventures";
import ProjectsSection from "@/components/ProjectsSection";
import LinkedInEmbedsSection from "@/components/LinkedInEmbedsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GlobalExpansionSection from "@/components/GlobalExpansionSection";
import Philosophy from "@/components/Philosophy";
import MediaStoriesSection from "@/components/MediaStoriesSection";
import WorkWithTonySection from "@/components/WorkWithTonySection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <StorySection />
      <Ventures />
      <ProjectsSection />
      <LinkedInEmbedsSection
        className="py-24 bg-white"
        title="Live LinkedIn Event Posts"
        subtitle="Real event moments from LinkedIn embeds."
      />
      <ExperienceSection />
      <GlobalExpansionSection />
      <Philosophy />
      <MediaStoriesSection />
      <WorkWithTonySection />
      <Contact />
    </main>
  );
}
