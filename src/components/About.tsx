import { features } from "../data";

const About = () => {
  return (
    <section id="about" className="scroll-m-16 bg-gray-200 py-16 select-none">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            As a Full Stack Web Developer, I bridge the gap between frontend and
            backend technologies to create comprehensive web solutions.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="hover-card group">
              <div className="gradient-bar-horizontal"></div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
