// Babynote.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { babynoteFeatures } from "@/data/babynote-features";

const BabynoteContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 7;
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

  const [selectedFeature, setSelectedFeature] = useState<number>(-1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (featureIndex: number, imageIndex = 0) => {
    setSelectedFeature(featureIndex);
    setCurrentImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedFeature(-1);
  };

  const navigateImages = (direction: "prev" | "next") => {
    if (selectedFeature === -1) return;

    const currentFeature = projectFeatures[selectedFeature];
    setCurrentImageIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % currentFeature.images.length;
      } else {
        return (
          (prev - 1 + currentFeature.images.length) %
          currentFeature.images.length
        );
      }
    });
  };

  const projectFeatures = babynoteFeatures;

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 소개
            </h4>
            <p className="text-lg mb-4">
              아기수첩, 알고계신가요? 신생아가 태어나면 아기수첩을 받게 됩니다.
              이 수첩에는 예방접종 기록과 아기의 키, 몸무게 등 성장 관련 수치를
              기록합니다. 하지만 이 모든 것이 수기로 작성되어, 소중한 기록들이
              분실되거나 훼손될 위험이 높습니다.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <p className="font-semibold text-blue-800">프로젝트 이름</p>
                <p className="text-lg font-bold">꼬물꼬물, 디지털 아기수첩</p>
                <p className="text-sm">현재 백엔드 배포 중지 상태입니다.</p>
              </div>

              <div className="p-4 rounded-lg">
                <p className="font-semibold text-green-800">개발 환경</p>
                <p>
                  <b>FrontEnd:</b> React.js, TypeScript, Tailwind CSS, Sass,
                  Redux, Figma
                </p>
                <p>
                  <b>BackEnd:</b> Node.js, Heroku
                </p>
                <p>
                  <b>Database:</b> MySQL
                </p>
                <p>
                  <b>팀 구성:</b> 디자인+퍼블리싱(1명), 프론트엔드+백엔드(2명)
                </p>
              </div>

              <div className="p-4 rounded-lg">
                <p className="font-semibold text-yellow-800">프로젝트 목적</p>
                <p>
                  아기의 첫시작이 담긴 아기수첩, 데이터의 디지털화를 통해
                  안전하게 보관하고 누적된 데이터를 보기쉽게 시각화하여
                  아기기록을 쉽게 관리합니다.
                </p>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              서비스 시연 영상
            </h4>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <video
                className="w-[50vw] h-[50vh] max-w-2xl mx-auto rounded-lg shadow-md"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster="/babynote/12.png"
              >
                <source src="/babynote/홈페이지.mp4" type="video/mp4" />
                귀하의 브라우저는 비디오 태그를 지원하지 않습니다.
              </video>

              <video
                className="w-[50vw] h-[50vh] max-w-2xl mx-auto rounded-lg shadow-md"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster="/babynote/12.png"
              >
                <source src="/babynote/my.mov" type="video/mp4" />
                귀하의 브라우저는 비디오 태그를 지원하지 않습니다.
              </video>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              주요 기능
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800">
                  1. 로그인/회원가입/로그아웃
                </h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>node.js, mysql, kakaoAPI 연동</li>
                  <li>유효성 검사 및 아이디 중복체크</li>
                  <li>세션 기반 인증 처리</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg">
                <h5 className="font-semibold text-green-800">
                  2. 아이 정보 관리
                </h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>아이 정보 CRUD 기능</li>
                  <li>프로필 이미지 업로드 및 관리</li>
                  <li>성장 기록 시각화</li>
                </ul>
              </div>

              <div className="p-4    rounded-lg">
                <h5 className="font-semibold text-yellow-800">
                  3. 예방접종 관리
                </h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>예방접종 일정 및 이력 관리</li>
                  <li>접종 상태별 필터링 (접종완료/진행중/미접종)</li>
                  <li>실시간 DB 연동</li>
                </ul>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              기술 스택
            </h4>
            <div className="space-y-4">
              <div className="p-4  rounded-lg">
                <h5 className="font-semibold text-blue-800">FrontEnd</h5>
                <p>
                  React.js, TypeScript, Tailwind CSS, Sass, Redux, Figma,
                  Netlify
                </p>
              </div>

              <div className="p-4 rounded-lg">
                <h5 className="font-semibold text-green-800">BackEnd</h5>
                <p>Node.js, Express, Heroku</p>
              </div>

              <div className="p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800">Database</h5>
                <p>MySQL, AWS RDS</p>
              </div>

              <div className="p-4  rounded-lg">
                <h5 className="font-semibold text-purple-800">
                  주요 라이브러리
                </h5>
                <p>Axios, React Router, Redux Toolkit, Chart.js</p>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              트러블 슈팅
            </h4>
            <div className="space-y-6">
              <div className="p-4  rounded-lg">
                <h5 className="font-semibold text-red-800">
                  1. 비동기 상태 업데이트 문제
                </h5>
                <p className="font-medium">문제 상황:</p>
                <p>
                  삭제 버튼을 한 번 클릭해도 삭제되지 않고, 두 번 클릭해야
                  삭제되는 현상
                </p>
                <p className="font-medium mt-2">원인:</p>
                <p>
                  setState()의 비동기적 특성으로 인해 상태 업데이트가 즉시
                  반영되지 않음
                </p>
                <p className="font-medium mt-2">해결:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm mt-2 overflow-x-auto">
                  {`// 수정 전
setGrowId(Number(e.currentTarget.value));
const response = await axios.post(/* ... */);

// 수정 후
const selectedGrowId = Number(e.currentTarget.value);
const response = await axios.post(
  'http://localhost:5001/api/delgrow',
  { growId: selectedGrowId } // 즉시 반영된 값 사용
);`}
                </pre>
              </div>

              <div className="p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800">
                  2. 이메일 유효성 검사 문제
                </h5>
                <p className="font-medium">문제 상황:</p>
                <p>
                  이메일 형식이 아님에도 중복체크시 사용가능한 이메일로 처리
                </p>
                <p className="font-medium mt-2">원인:</p>
                <p>카카오 로그인과 일반 이메일 로그인 분기 처리 누락</p>
                <p className="font-medium mt-2">해결:</p>
                <pre className="bg-gray-100 p-2 rounded text-sm mt-2 overflow-x-auto">
                  {`const emailCheck = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.email.includes("@")) {
    setMessages((prev) => ({
      ...prev,
      email: "유효하지 않은 이메일 주소입니다!",
    }));
    return;
  }
  // ... 나머지 로직
};`}
                </pre>
              </div>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              성과 및 배운 점
            </h4>
            <div className="space-y-4">
              <div className="p-4  rounded-lg">
                <h5 className="font-semibold text-green-800">주요 성과</h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    React와 Node.js를 활용한 풀스택 웹 애플리케이션 개발 경험
                  </li>
                  <li>
                    Redux를 활용한 전역 상태 관리로 컴포넌트 간 데이터 흐름
                    최적화
                  </li>
                  <li>RESTful API 설계 및 구현을 통한 백엔드 개발 경험</li>
                  <li>Netlify와 Heroku를 활용한 클라우드 배포 경험</li>
                </ul>
              </div>

              <div className="p-4  rounded-lg">
                <h5 className="font-semibold text-blue-800">배운 점</h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>React의 비동기 상태 관리에 대한 이해도 향상</li>
                  <li>TypeScript를 활용한 타입 안전성 확보</li>
                  <li>REST API 설계 및 구현 방법</li>
                  <li>데이터베이스 설계 및 최적화 기법</li>
                  <li>팀 협업을 통한 버전 관리 및 이슈 트래킹</li>
                </ul>
              </div>
            </div>
          </>
        );
      case 7:
        return (
          <div className="py-4 space-y-8">
            <h4 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
              프로젝트 상세 기능
            </h4>

            {projectFeatures.map((feature, index) => (
              <div key={index} className="mb-12">
                <h5 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {feature.title}
                </h5>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2 space-y-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {feature.images.length > 1 && (
                      <button
                        onClick={() => openImageModal(index)}
                        className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                      >
                        <span>
                          더 많은 이미지 보기 ({feature.images.length})
                        </span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    )}
                  </div>

                  <div className="relative group">
                    <div
                      className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                      onClick={() => openImageModal(index, 0)}
                    >
                      <img
                        src={`/babynote/${feature.images[0]}`}
                        alt={`${feature.title} 대표 이미지`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < projectFeatures.length - 1 && (
                  <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
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

      {/* Image Modal */}
      {selectedFeature >= 0 && selectedFeature < projectFeatures.length && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative">
              <img
                src={`/babynote/${projectFeatures[selectedFeature]?.images[currentImageIndex]}`}
                alt={`${projectFeatures[selectedFeature]?.title} 이미지 ${
                  currentImageIndex + 1
                }`}
                className="max-w-full max-h-[80vh] mx-auto rounded-lg shadow-2xl"
              />

              {projectFeatures[selectedFeature]?.images.length > 1 && (
                <>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      navigateImages("prev");
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                    aria-label="이전 이미지"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      navigateImages("next");
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
                    aria-label="다음 이미지"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {projectFeatures[selectedFeature]?.images.map(
                      (_: unknown, idx: number) => (
                        <button
                          key={idx}
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-2 w-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-white w-6"
                              : "bg-white bg-opacity-50"
                          }`}
                          aria-label={`이미지 ${idx + 1}로 이동`}
                        />
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BabynoteContent;
