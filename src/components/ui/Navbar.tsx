import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navItems";

interface NavbarProps {
  activeSection: string;
  scrollY: number;
  isMenuOpen: boolean;
  onNavClick: (section: string) => void;
  onMenuToggle: () => void;
}

export const Navbar = ({
  activeSection,
  scrollY,
  isMenuOpen,
  onNavClick,
  onMenuToggle,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        onMenuToggle(); // Close menu when resizing to desktop
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [onMenuToggle]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavClick(section);
    if (isMobile) {
      onMenuToggle(); // Close menu after clicking a nav item on mobile
    }
  };

  return (
    <section
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-main/95 backdrop-blur-sm shadow-md" : "bg-main"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-white text-xl font-bold">YDH</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-text font-semibold"
                    : "text-white hover:text-gray-300"
                }`}
                key={item.id}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-main-light focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              onClick={() => handleNavClick(item.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                activeSection === item.id
                  ? "bg-main-light text-white"
                  : "text-gray-300 hover:bg-main-light hover:text-white"
              }`}
              key={item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
