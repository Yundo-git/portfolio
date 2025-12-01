"use client";

import { Card } from "@/components/ui/Card";
import { skills } from "@/data/skills";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-5xl mx-auto">
          <Card skillData={skills} />
        </div>
      </div>
    </section>
  );
};
