import { navItems, socialLinks } from "../data";
import { scrollToSection } from "../utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white select-none">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <section className="text-center md:text-left">
            <h3 className="mb-3 text-lg font-bold">Robin Bigus</h3>
            <p className="text-gray-400">Full Stack Web Developer</p>
          </section>

          <nav className="text-center">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {navItems.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="nav-link text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="text-center md:text-right">
            <h3 className="mb-4 text-lg font-bold">Connect</h3>
            <div className="flex justify-center space-x-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
