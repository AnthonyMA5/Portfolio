import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full min-h-screen color-transition bg-app">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
