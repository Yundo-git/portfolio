import React from "react";
import { CareerItem } from "@/data/careers";
import { SkillGroup } from "@/data/skills";
import { Project } from "@/data/projects";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Contact } from "@/data/contact";
import { Github } from "lucide-react";

type CardProps = {
  careerData?: CareerItem[];
  skillData?: SkillGroup[];
  projectData?: Project[]; // Add other data types as needed
  contactData?: Contact;
};

export const Card: React.FC<CardProps> = ({
  careerData,
  skillData,
  projectData,
  contactData,
}) => {
  if (careerData) {
    return (
      <div>
        {careerData.map((detail, i) => (
          <div className="pb-4" key={i}>
            <ul className="bg-point/50 p-4 rounded-2xl">
              <li className="font-bold">{detail.title}</li>
              <li>{detail.role}</li>
              <li className="text-sm text-gray-400">{detail.date}</li>
              <li className="mt-2">{detail.description}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (skillData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillData.map((group, i) => (
          <div key={i} className="bg-point/50 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (projectData) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="bg-point/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.period}</p>
              <p className="mb-4 text-gray-700">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  주요 기술
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/50 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  주요 기능
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 flex items-start"
                    >
                      <span className="mr-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="flex justify-between items-center">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 hover:text-white hover:underline flex items-center"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (contactData) {
    return (
      <div className="w-[50vw]">
        <div className="bg-white p-6 rounded-2xl flex flex-col gap-2 items-center justify-center">
          <div className="flex items-center gap-2">
            <Mail size={28} />
            <a href={`mailto:${contactData.Mail}`}>{contactData.Mail}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={28} />
            <a href={`tel:${contactData.Phone}`}>{contactData.Phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={28} />
            <a href={`https://github.com/${contactData.Github}`}>
              {contactData.Github}
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
