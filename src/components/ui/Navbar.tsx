import { navItems } from "@/data/navItems";

export const Navbar = () => {
  return (
    <section className="w-full h-16 bg-black fixed top-0 left-0 z-50">
      <nav className="px-4 flex h-16 items-center justify-between">
        <h1 className=" text-white text-xl font-bold">YDH</h1>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <button className="text-white" key={item.id}>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
};
