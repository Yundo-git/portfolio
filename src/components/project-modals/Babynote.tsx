// Babynote.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BabynoteContent: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
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
              아기수첩, 알고계신가요? 신생아가 태어나면 아기수첩을 받게 됩니다.
              이 수첩에는 예방접종 기록과 아기의 키, 몸무게 등 성장 관련 수치를
              기록합니다. 하지만 이 모든 것이 수기로 작성되어, 소중한 기록들이
              분실되거나 훼손될 위험이 높습니다.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold text-blue-800">프로젝트 이름</p>
                <p className="text-lg font-bold">꼬물꼬물, 디지털 아기수첩</p>
                <p className="text-sm">현재 백엔드 배포 중지 상태입니다.</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
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

              <div className="p-4 bg-yellow-50 rounded-lg">
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
              주요 기능
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800">
                  1. 로그인/회원가입/로그아웃
                </h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>node.js, mysql, kakaoAPI 연동</li>
                  <li>유효성 검사 및 아이디 중복체크</li>
                  <li>세션 기반 인증 처리</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800">
                  2. 아이 정보 관리
                </h5>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>아이 정보 CRUD 기능</li>
                  <li>프로필 이미지 업로드 및 관리</li>
                  <li>성장 기록 시각화</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
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
      case 3:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              기술 스택
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-800">FrontEnd</h5>
                <p>
                  React.js, TypeScript, Tailwind CSS, Sass, Redux, Figma,
                  Netlify
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800">BackEnd</h5>
                <p>Node.js, Express, Heroku</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-semibold text-yellow-800">Database</h5>
                <p>MySQL, AWS RDS</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-800">
                  주요 라이브러리
                </h5>
                <p>Axios, React Router, Redux Toolkit, Chart.js</p>
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

              <div className="p-4 bg-blue-50 rounded-lg">
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
      case 5:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              성과 및 배운 점
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
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

              <div className="p-4 bg-blue-50 rounded-lg">
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
      case 6:
        return (
          <>
            <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
              프로젝트 미리보기(사진캡처 진행중입니다.)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/babynote/1.png"
                  alt="메인 화면"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">메인 화면</p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/babynote/2.png"
                  alt="성장 기록"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">성장 기록</p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/babynote/3.png"
                  alt="예방접종 관리"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">
                  예방접종 관리
                </p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src="/babynote/4.png"
                  alt="마이페이지"
                  className="w-full h-auto"
                />
                <p className="p-2 text-sm text-center bg-gray-50">마이페이지</p>
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

export default BabynoteContent;
