import { features } from "../data";

const About = () => {
  return (
    <section id="about" className="py-16 scroll-m-16 bg-gray-200 select-none">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            As a Full Stack Web Developer, I bridge the gap between frontend and
            backend technologies to create comprehensive web solutions.
          </p>
        </div>
        <dl className="mt-16 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="gradient-bar-vertical">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-justify text-gray-500 leading-relaxed">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default About;
