// src/components/ui/SkillGroupList.tsx
import React from "react";
import { SkillGroup } from "@/data/skills";

interface SkillGroupListProps {
  skillData: SkillGroup[];
}

export const SkillGroupList: React.FC<SkillGroupListProps> = ({
  skillData,
}) => {
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
};
