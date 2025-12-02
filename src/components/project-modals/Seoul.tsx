// Barohanpo.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 페이지 넘기기 아이콘 사용

const SeoulContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5; // 페이지 몇개인지 정하기

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
              서울 관광객들을 위한 서울의 여행지,날씨,교통을 편하게
              알려주는사이트입니다.
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
              담당파트(1/4)
            </h4>
            <ul>
              <h3>
                프로젝트에서 <b>"교통"</b> 페이지를 제작하였습니다.
              </h3>
              <li>
                카카오 맵 API를 연동하여 서울의 맛집, 관광지의 검색 기능을
                개발하였습니다.
              </li>

              <img src="/seoul/1.png" alt="서울 교통 페이지 카카오 api이미지" />

              <li>
                검색 후 지도에 표시되는 마커를 클릭하면 카카오 맵 사이트로
                이동되어 자세한 정보를 확인 할 수 있습니다.
              </li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              담당파트(2/4)
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                서울에 처음오는 관광객들을 위한 교통 정보를 알려주는 기능을 개발
                하였습니다.
              </li>

              <img src="/seoul/2.png" alt="서울 교통 배너 이미지" />

              <li>
                각 배너를 클릭하게 되면 해당 정보를 자세하게 알려주는 페이지로
                이동하게 됩니다.
              </li>
            </ul>
          </>
        );

      case 4:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              담당파트(3/4)
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                “여행지”페이지에서 OpenAPI를 연동하고 불러온 데이터를 가공 후
                지도에 클릭 된 지역 별로 필터링되는 기능을 개발 하였습니다.
              </li>
              <img src="/seoul/5.png" alt="서울지도 이미지" />
              <li>
                지도의 지역을 클릭하게 되면 해당 지역의 관광지가 나오게 됩니다.
              </li>
              <img src="/seoul/3.png" alt="서울 여행지 페이지 이미지" />
            </ul>
          </>
        );

      case 5:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              담당파트(4/4)
            </h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>교통 수단 별 선호 여행지를 받아와 리스트화 했습니다.</li>
              <img src="/seoul/4.png" alt="서울지도 이미지" />
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
