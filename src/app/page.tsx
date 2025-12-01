"use client";
import { Navbar } from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import { useEffect, useState } from "react";
import { CareerSection } from "@/components/sections/CareerSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // 스크롤 위치에 따라 활성 섹션 업데이트
      const sections = ["home", "skills", "projects", "career", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    scrollToSection("about");
  };

  if (!isClient) {
    return null; // 로딩 스피너 또는 null 반환
  }

  return (
    <div>
      <Navbar
        activeSection={activeSection}
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        onNavClick={scrollToSection}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      <main>
        <About onScrollDown={handleScrollDown} />
        <CareerSection />
        <SkillsSection />
        <ProjectSection />
      </main>
    </div>
  );
}
