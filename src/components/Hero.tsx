import { scrollToSection } from "../utils/navigation";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Robin</span>
            <span className="block text-indigo-600">
              Full Stack Web Developer
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-md mx-auto">
            Crafting modern web experiences with cutting-edge technologies.
            Passionate about creating efficient, scalable, and user-friendly
            applications.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                onClick={(e) => scrollToSection(e, "#about")}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
