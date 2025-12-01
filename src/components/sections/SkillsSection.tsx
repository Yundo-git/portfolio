"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">스킬</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Skills </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card skillData={skills} />
        </div>
      </div>
    </section>
  );
};
