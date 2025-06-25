import { scrollToSection } from "../utils/navigation";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 select-none">
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Robin</span>
            <span className="block text-indigo-600">
              Full Stack Web Developer
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Crafting modern web experiences with cutting-edge technologies.
            Passionate about creating efficient, scalable, and user-friendly
            applications.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#about"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
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
