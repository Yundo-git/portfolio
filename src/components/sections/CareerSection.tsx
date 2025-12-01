import { Card } from "../ui/Card";
import { careers } from "@/data/careers";

export const CareerSection = () => {
  return (
    <section
      id="career"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">경력</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Career </p>
        </div>
        <Card careerData={careers} />
      </div>
    </section>
  );
};
