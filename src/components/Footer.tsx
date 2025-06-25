import { navItems, socialLinks } from "../data";
import { scrollToSection } from "../utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white select-none">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <section className="text-center md:text-left flex flex-col justify-start md:w-1/5">
            <h3 className="text-lg font-bold mb-3">Robin Bigus</h3>
            <p className="text-gray-400 text-sm">Full Stack Web Developer</p>
          </section>
          <nav className="text-center flex flex-col justify-center md:w-3/5">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {navItems.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="nav-link link-hover-dark"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <section className="text-center md:text-right flex flex-col justify-start md:w-1/5">
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="link-hover-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="text-xl" />
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
