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
          <p className="font-medium">1. 서비스 관점의 설계 중요성</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            단순 기능 구현을 넘어 사용자 경험과 확장성을 고려한 설계의 중요성을
            깨달았습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">2. 타입 기반 개발</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            TypeScript를 활용해 타입 안정성을 확보하고, 컴파일 단계에서 오류를
            사전에 방지할 수 있었습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">3. 백엔드와의 협업</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            프론트엔드와 백엔드의 사고방식 차이를 이해하고, 효과적인 협업 방식을
            터득했습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">4. 에러 처리의 중요성</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            다양한 예외 상황에 대비한 에러 처리의 중요성을 배웠고, 사용자에게
            명확한 피드백을 제공하는 방법을 익혔습니다.
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">5. 성능 최적화</p>
          <p className="text-gray-600 dark:text-gray-300 pl-4">
            코드 스플리팅, 이미지 최적화, 캐싱 전략 등을 통해 웹사이트 성능을
            개선하는 방법을 배웠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonsLearned;
