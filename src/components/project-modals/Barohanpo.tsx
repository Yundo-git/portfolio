// Barohanpo.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 페이지 넘기기 아이콘 사용

const BarohanpoContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 1; // 프로젝트 상세 내용을 3개의 페이지로 나눈다고 가정

  const goToNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const goToPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // --- 페이지별 내용 정의 ---
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 개요 (1/3)
            </h4>
            <p className="text-lg">
              해당프로젝트 상세 내용 작성 진행 중입니다. 현재 어플리케이션
              배포는 중지 되어있으며, 웹 모바일 환경으로 이용 가능합니다.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                <b>팀원:</b> 기획(2명) , UI/UX(1명), <b>개발(1명)</b>
              </p>
              <p className="mt-2 font-bold">바로한포 서비스 구성도</p>
              <img
                src="/barohanpo/1.png"
                alt="서비스 구성도"
                className="mt-2 rounded-lg max-w-full h-auto"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b pb-2">
        바로한포: 약사 추천 영양제 서비스 상세
      </h3>

      <div className="min-h-[300px] p-4 border rounded-lg bg-white dark:bg-gray-800 transition-opacity duration-300">
        {renderContent()}
      </div>

      {/* 페이지네이션 컨트롤 */}
      <div className="flex justify-between items-center pt-4">
        {/* 이전 버튼 */}
        <button
          onClick={goToPrev}
          disabled={step === 1}
          className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          <ChevronLeft className="w-4 h-4" /> 이전
        </button>

        {/* 페이지 표시 */}
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          페이지 {step} / {totalSteps}
        </span>

        {/* 다음 버튼 */}
        <button
          onClick={goToNext}
          disabled={step === totalSteps}
          className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-blue-500 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          다음 <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BarohanpoContent;
