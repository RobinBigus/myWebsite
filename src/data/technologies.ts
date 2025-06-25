import { FaGitAlt, FaNode, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Technology } from "../types";

export const technologies: Technology[] = [
  {
    name: "React",
    description:
      "Building interactive and responsive user interfaces with modern React, including hooks and context.",
    category: "Frontend",
    icon: FaReact,
    iconColor: "text-[#61DAFB]",
    row: 1
  },
  {
    name: "TypeScript",
    description:
      "Writing type-safe code to create more reliable and maintainable applications.",
    category: "Language",
    icon: SiTypescript,
    iconColor: "text-[#3178C6]",
    row: 1
  },
  {
    name: "Node.js",
    description:
      "Developing scalable backend services and REST APIs with Express.js.",
    category: "Backend",
    icon: FaNode,
    iconColor: "text-[#339933]",
    row: 2
  },
  {
    name: "Express",
    description:
      "Creating robust and scalable web applications with Node.js and Express framework.",
    category: "Framework",
    icon: SiExpress,
    iconColor: "text-gray-800",
    row: 2
  },
  {
    name: "MongoDB",
    description:
      "Working with NoSQL databases for flexible and scalable data storage solutions.",
    category: "Database",
    icon: SiMongodb,
    iconColor: "text-[#47A248]",
    row: 2
  },
  {
    name: "SQL",
    description:
      "Managing relational databases and writing efficient queries for data operations.",
    category: "Database",
    icon: SiPostgresql,
    iconColor: "text-[#336791]",
    row: 2
  },
  {
    name: "Tailwind CSS",
    description:
      "Creating custom, responsive designs with utility-first CSS framework.",
    category: "Framework",
    icon: SiTailwindcss,
    iconColor: "text-[#06B6D4]",
    row: 1
  },
  {
    name: "Git",
    description:
      "Version control and collaboration using Git with modern workflow practices.",
    category: "Tool",
    icon: FaGitAlt,
    iconColor: "text-[#F05032]",
    row: 1
  },
];
