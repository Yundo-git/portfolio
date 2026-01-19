import React from "react";
import { Lightbulb } from "lucide-react";

const LessonsLearned = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
        <Lightbulb className="w-5 h-5 text-yellow-400" />
        <h4>프로젝트를 통해 배운 점</h4>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
        <div className="space-y-2">
          <p className="font-medium">서비스 관점의 설계 중요성</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            본 프로젝트를 통해 단순한 기능 구현을 넘어, 서비스 관점에서의 설계
            중요성을 깊이 이해하게 되었습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">타입 기반 설계와 UI 구조</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            Next.js와 TypeScript를 활용하여 타입 기반 설계를 경험했고, Tailwind
            CSS를 통해 재사용 가능한 UI 구조의 필요성을 체감했습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">프론트엔드와 백엔드 협업</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            또한 프론트엔드와 백엔드를 함께 개발하며 각 영역의 사고방식 차이를
            이해했고, 데이터베이스 구조가 서비스 확장성에 직접적인 영향을 준다는
            점을 배웠습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">에러 처리와 예외 상황 대응</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            특히 에러 처리와 예외 상황 대응의 중요성을 경험하며, 실제 서비스에
            가까운 개발 역량을 키울 수 있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonsLearned;
