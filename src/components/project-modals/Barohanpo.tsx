// Barohanpo.tsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectOverview from "./barohanpo/ProjectOverview";
import DemoVideo from "./barohanpo/DemoVideo";
import FrontendSection from "./barohanpo/FrontendSection";
import BackendSection from "./barohanpo/BackendSection";
import DeploymentSection from "./barohanpo/DeploymentSection";
import TroubleshootingSection from "./barohanpo/TroubleshootingSection";
import LessonsLearned from "./barohanpo/LessonsLearned";

const BarohanpoContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const totalSteps = 7; // 프로젝트 개요, 프론트엔드, 백엔드, 서버&배포, 트러블 슈팅, 알게된 점, 시연 영상
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // 스크롤을 맨 위로 올리는 함수
  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [step]);

  const goToNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const goToPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // --- 페이지별 내용 정의 ---
  const renderContent = () => {
    switch (step) {
      case 1: // 프로젝트 개요
        return <ProjectOverview />;

      case 2: // 시연 영상
        return <DemoVideo />;

      case 3: // 프론트엔드
        return (
          <FrontendSection
            expandedSections={expandedSections}
            toggleSection={toggleSection}
          />
        );

      case 4: // 백엔드
        return <BackendSection />;

      case 5: // 서버 & 배포
        return <DeploymentSection />;

      case 6: // 트러블 슈팅
        return <TroubleshootingSection />;

      case 7: // 알게된 점
        return <LessonsLearned />;

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6" ref={contentRef}>
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white border-b pb-2">
        바로한포: 약사 추천 영양제 서비스 상세
      </h3>

      <div className="min-h-[300px] p-4 border rounded-lg bg-white dark:bg-gray-800 transition-opacity duration-300">
        {renderContent()}
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={goToPrev}
          disabled={step === 1}
          className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          <ChevronLeft className="w-4 h-4" /> 이전
        </button>

        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          페이지 {step} / {totalSteps}
        </span>

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
