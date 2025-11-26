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
  return (
    <section className="w-full h-16 bg-main fixed top-0 left-0 z-50">
      <nav className="px-4 flex h-16 items-center justify-between">
        <h1 className=" text-white text-xl font-bold">YDH</h1>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <button
              onClick={() => onNavClick(item.id)}
              className={
                activeSection === item.id
                  ? "text-text"
                  : "text-white hover:text-gray-300 transition-colors"
              }
              key={item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
};
