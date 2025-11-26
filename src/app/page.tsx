"use client";
import { Navbar } from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <About />
      </main>
    </div>
  );
}
