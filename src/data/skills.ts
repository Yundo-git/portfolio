export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SASS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git/Github", "Figma", "Linux", "Netlify", "Heroku"],
  },
];
