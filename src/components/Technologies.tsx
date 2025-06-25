import { technologies } from "../data";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="scroll-m-16 bg-white py-16 select-none"
    >
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Technologies & Skills</h2>
          <p className="section-subtitle">
            Here are the key technologies I work with to build modern web
            applications.
          </p>
        </div>
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies
              .filter((tech) => tech.row === 1)
              .map((tech) => (
                <article key={tech.name} className="hover-card group">
                  <div className="gradient-bar-horizontal"></div>
                  <div className="mb-2 flex items-center gap-2">
                    {tech.icon && (
                      <tech.icon className={`text-xl ${tech.iconColor}`} />
                    )}
                    <h3 className="text-base font-medium text-gray-900 transition-colors group-hover:text-indigo-600">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="mb-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                    {tech.category}
                  </span>

                  <p className="text-xs text-gray-500">{tech.description}</p>
                </article>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies
              .filter((tech) => tech.row === 2)
              .map((tech) => (
                <article key={tech.name} className="hover-card group">
                  <div className="gradient-bar-horizontal"></div>

                  <header className="mb-2 flex items-center gap-2">
                    {tech.icon && (
                      <tech.icon className={`text-xl ${tech.iconColor}`} />
                    )}
                    <h3 className="text-base font-medium text-gray-900 transition-colors group-hover:text-indigo-600">
                      {tech.name}
                    </h3>
                  </header>
                  <span className="mb-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                    {tech.category}
                  </span>
                  <p className="text-xs text-gray-500">{tech.description}</p>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
