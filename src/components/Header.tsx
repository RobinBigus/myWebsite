import { useState } from "react";
import logoTransparent from "../assets/logo-transparent.webp";
import { navItems } from "../data";
import { MenuCloseIcon, MenuOpenIcon } from "../utils/icons";
import { scrollToSection as scrollToSectionUtil } from "../utils/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    scrollToSectionUtil(e, href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-white/95 shadow-md backdrop-blur-sm">
      <div className="section-container">
        <div className="flex items-center justify-between py-2">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-shrink-0"
          >
            <img
              src={logoTransparent}
              alt="Robins Logo"
              className="h-16 w-48 object-cover md:w-64"
            />
          </a>
          <nav className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="nav-link text-lg text-gray-500 transition-colors hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset md:hidden"
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
          <ul className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
