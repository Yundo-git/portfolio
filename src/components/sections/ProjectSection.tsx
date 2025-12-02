import { Card } from "../ui/Card"; // Card 컴포넌트 경로 수정
import { projects } from "@/data/projects"; // projects를 projectsData로 가정 (데이터 파일에 따라 수정)

export const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">프로젝트</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Projects </p>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* 간소화된 Card 컴포넌트 사용 */}
          <Card projectData={projects} />
        </div>
      </div>
    </section>
  );
};
