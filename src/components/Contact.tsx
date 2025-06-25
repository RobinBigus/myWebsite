import { FaAddressCard, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { HiClock, HiLocationMarker, HiMail } from "react-icons/hi";
import { socialLinks } from "../data";
import { QuestionIcon, TeamIcon } from "../utils/icons";

const Contact = () => {
  return (
    <section id="contact" className="scroll-m-16 bg-gray-200 py-16 select-none">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Let's discuss how we can work together.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="hover-card flex flex-col gap-4">
            <div className="gradient-bar-horizontal"></div>
            <div className="flex items-center gap-2">
              <FaAddressCard className="text-2xl text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900">
                Contact Information
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiMail className="mt-1 text-xl text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a
                    href="mailto:robin.bigus1604@gmail.com"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    robin.bigus1604@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiLocationMarker className="mt-1 text-xl text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-700">Location</p>
                  <p className="text-gray-600">Bocholt, NRW, Germany</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiClock className="mt-1 text-xl text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-700">Availability</p>
                  <p className="text-gray-600">
                    Monday - Friday, 9:00 - 17:00 CET
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-4 text-sm font-medium tracking-wider text-gray-500 uppercase">
                Connect with me
              </h4>
              <ul className="flex gap-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="link-hover-light transform duration-200 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <link.icon className="text-2xl" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hover-card flex flex-col gap-4">
            <div className="gradient-bar-horizontal"></div>
            <div className="flex items-center gap-2">
              <FaHandshake className="text-2xl text-indigo-600" />
              <h3 className="text-lg font-medium text-gray-900">
                Working Together
              </h3>
            </div>
            <p className="mb-4 text-gray-600">
              I'm open to discussing various collaboration opportunities:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <FaLaptopCode className="mt-1 text-xl text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-700">
                    Web Development Projects
                  </p>
                  <p className="text-gray-600">
                    Full-stack development for websites and web applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <QuestionIcon />
                <div>
                  <p className="font-medium text-gray-700">
                    Technical Consultation
                  </p>
                  <p className="text-gray-600">
                    Advice on technology stack, architecture, and best
                    practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TeamIcon />
                <div>
                  <p className="font-medium text-gray-700">
                    Team Collaboration
                  </p>
                  <p className="text-gray-600">
                    Integration with your existing development team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
