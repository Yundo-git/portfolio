import React from "react";
import { CareerItem } from "@/data/careers";
import { SkillGroup } from "@/data/skills";

type CardProps = {
  careerData?: CareerItem[];
  skillData?: SkillGroup[];
  projectData?: never; // Add other data types as needed
};

export const Card: React.FC<CardProps> = ({ careerData, skillData }) => {
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

  return null;
};
