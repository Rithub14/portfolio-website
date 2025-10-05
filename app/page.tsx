import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollButton } from "@/components/scroll-button";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col gap-8">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollButton />
    </>
  );
}
