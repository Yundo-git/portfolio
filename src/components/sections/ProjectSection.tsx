import { Card } from "../ui/Card";
import { projects } from "@/data/projects";

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="max-w-5xl mx-auto">
          <Card projectData={projects} />
        </div>
      </div>
    </section>
  );
};
