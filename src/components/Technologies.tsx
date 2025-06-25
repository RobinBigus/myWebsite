import { technologies } from "../data";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-16 scroll-m-16 bg-white select-none"
    >
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Technologies & Skills</h2>
          <p className="section-subtitle">
            Here are the key technologies I work with to build modern web
            applications.
          </p>
        </div>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies
              .filter((tech) => tech.row === 1)
              .map((tech) => (
                <article key={tech.name} className="hover-card group">
                  <div className="gradient-bar-horizontal"></div>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon && (
                      <tech.icon className={`text-xl ${tech.iconColor}`} />
                    )}
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                    {tech.category}
                  </span>

                  <p className="text-gray-500 text-xs">{tech.description}</p>
                </article>
              ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies
              .filter((tech) => tech.row === 2)
              .map((tech) => (
                <article key={tech.name} className="hover-card group">
                  <div className="gradient-bar-horizontal"></div>

                  <header className="flex items-center gap-2 mb-2">
                    {tech.icon && (
                      <tech.icon className={`text-xl ${tech.iconColor}`} />
                    )}
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {tech.name}
                    </h3>
                  </header>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">
                    {tech.category}
                  </span>
                  <p className="text-gray-500 text-xs">{tech.description}</p>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
