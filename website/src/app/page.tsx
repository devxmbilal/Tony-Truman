import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import StorySection from "@/components/StorySection";
import Ventures from "@/components/Ventures";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GlobalExpansionSection from "@/components/GlobalExpansionSection";
import Philosophy from "@/components/Philosophy";
import MediaStoriesSection from "@/components/MediaStoriesSection";
import WorkWithTonySection from "@/components/WorkWithTonySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <StorySection />
      <Ventures />
      <ProjectsSection />
      <ExperienceSection />
      <GlobalExpansionSection />
      <Philosophy />
      <MediaStoriesSection />
      <WorkWithTonySection />
    </main>
  );
}
