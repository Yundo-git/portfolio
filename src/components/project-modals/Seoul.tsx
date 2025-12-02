// Seoul.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SeoulContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const contentRef = useRef<HTMLDivElement>(null);

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

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 소개
            </h4>
            <p className="text-lg mb-4">
              서울 관광객들을 위한 서울의 여행지, 날씨, 교통을 한눈에 확인할 수
              있는 종합 여행 정보 플랫폼입니다. 실시간 정보와 상세한 가이드를
              통해 방문객들에게 최적의 여행 경험을 제공합니다.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-800">프로젝트 이름</p>
                <p className="text-lg font-bold">서울서울 (SeoulSeoul)</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <p className="font-semibold text-green-800">개발 환경</p>
                <p>
                  <b>FrontEnd:</b> JavaScript, HTML5, CSS3, Bootstrap
                </p>
                <p>
                  <b>API:</b> 카카오 맵 API, 공공데이터 포털 OpenAPI
                </p>
                <p>
                  <b>Tools:</b> Figma, GitHub
                </p>
                <p>
                  <b>팀 구성:</b> 4인 팀 프로젝트
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="font-semibold text-yellow-800">프로젝트 목적</p>
                <p>
                  서울을 방문하는 관광객들이 주요 관광지, 날씨, 교통 정보를 한
                  곳에서 편리하게 확인할 수 있도록 하여 체계적인 여행 계획
                  수립과 원활한 현지 이동을 돕는 것을 목표로 합니다.
                </p>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              주요 기능
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800">1. 관광지 정보</h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>카카오 맵 API를 활용한 관광지 검색</li>
                  <li>지역별/카테고리별 필터링 기능</li>
                  <li>상세 정보 및 리뷰 확인</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800">2. 날씨 정보</h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>실시간 날씨 정보 제공</li>
                  <li>교통수단에 따른 관광지 추천</li>
                </ul>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              기술 스택
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800">FrontEnd</h5>
                <p>JavaScript, HTML5, CSS3, Bootstrap</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800">API</h5>
                <p>카카오 맵 API, 공공데이터 포털 OpenAPI</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-semibold text-yellow-800">Tools</h5>
                <p>Figma, GitHub, Visual Studio Code</p>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              트러블 슈팅
            </h4>
            <div className="space-y-6">
              <div className="p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-800">
                  1. 카카오 맵 API 연동 문제
                </h5>
                <p className="font-medium">문제 상황:</p>
                <p>맵 로딩이 느리고 마커가 제대로 표시되지 않는 현상</p>
                <p className="font-medium mt-2">원인:</p>
                <p>API 호출 시 비동기 처리 미흡 및 과도한 리렌더링</p>
                <p className="font-medium mt-2">해결:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm mt-2 overflow-x-auto">
                  {`// 최적화 전
const loadMap = () => {
  // 매 렌더링마다 새로고침
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
  };
  const map = new kakao.maps.Map(container, options);
};

// 최적화 후
useEffect(() => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 3
  };
  const map = new kakao.maps.Map(container, options);
  
  // 마커 생성 로직
  // ...
}, []); // 의존성 배열을 비워 한 번만 실행`}
                </pre>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800">
                  2. 반응형 디자인 이슈
                </h5>
                <p className="font-medium">문제 상황:</p>
                <p>모바일 환경에서 레이아웃이 깨지는 현상</p>
                <p className="font-medium mt-2">원인:</p>
                <p>고정된 픽셀 값 사용 및 미디어 쿼리 미적용</p>
                <p className="font-medium mt-2">해결:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm mt-2 overflow-x-auto">
                  {`/* 수정 전 */
.container {
  width: 1200px;
  margin: 0 auto;
}

/* 수정 후 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 반응형 그리드 시스템 적용 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* 미디어 쿼리 추가 */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`}
                </pre>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 미리보기
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/seoul/1.png"
                  alt="메인 화면"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">
                  카카오 api 연동영역
                </p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/seoul/2.png"
                  alt="관광지 검색"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">
                  서울 기본 교통 이용방법
                </p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/seoul/3.png"
                  alt="날씨 정보"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">
                  지역별 관광지 정보
                </p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/seoul/4.png"
                  alt="교통 정보"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">
                  여행지 리스트 정보
                </p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div
        ref={contentRef}
        className="min-h-[300px] max-h-[60vh] overflow-y-auto p-4 border rounded-lg bg-white dark:bg-gray-800 transition-opacity duration-300"
      >
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
          {step} / {totalSteps}
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

export default SeoulContent;
