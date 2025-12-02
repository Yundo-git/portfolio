// Barohanpo.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 페이지 넘기기 아이콘 사용

const SeoulContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3; // 프로젝트 상세 내용을 3개의 페이지로 나눈다고 가정

  const goToNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const goToPrev = () => setStep((prev) => Math.max(prev - 1, 1));

  // --- 페이지별 내용 정의 ---
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 개요
            </h4>
            <p className="text-lg">
              서울 관광객들을 위한 서울의 여행지,날씨,교통을 편하게 알려주는
              사이트
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                <b>프로젝트 이름:</b> 서울서울
              </p>
              <p>
                <b>팀원:</b> 4명
              </p>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-bold">주요 기술 스택:</p>
              <p>JavaScript, css, html, figma, OpenAPI, bootstrap</p>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-bold">주요기능:</p>
              <ul>
                <li>- 카카오 맵 API를 활용한 맛집/관광지 검색</li>
                <li>- 지역별 여행지 필터링 기능</li>
                <li>- 교통 정보 안내 페이지 개발</li>
                <li>- OpenAPI 데이터 가공 및 활용</li>
              </ul>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              담당파트
            </h4>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              핵심 기능 구현
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                **맞춤형 영양제 추천 시스템:** 사용자 설문 결과를 기반으로 약사
                추천 로직을 구현하고 추천 결과를 시각적으로 제공.
              </li>
              <li>
                **약국 방문 예약 기능:** 사용자가 원하는 약국과 시간을 선택하고
                예약하는 기능을 구현.
              </li>
              <li>
                **약사/사용자 인증 분리:** 권한을 분리하여 안전한 데이터 접근 및
                서비스 이용 환경 구축.
              </li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
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

export default SeoulContent;
