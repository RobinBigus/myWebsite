import { useState } from "react";
import logoTransparent from "../assets/logo-transparent.webp";
import { navItems } from "../data";
import { MenuCloseIcon, MenuOpenIcon } from "../utils/icons";
import { scrollToSection as scrollToSectionUtil } from "../utils/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    scrollToSectionUtil(e, href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="flex justify-between items-center pr-6 py-2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logoTransparent}
            alt="Robins Logo"
            className="md:w-64 w-48 h-16 object-cover"
          />
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-500 hover:text-gray-900 transition-colors text-lg"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open main menu</span>
          <MenuOpenIcon
            className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
          />
          <MenuCloseIcon
            className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
          />
        </button>
      </div>
      <nav className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
