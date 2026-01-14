import React from "react";
import { Code, ChevronRight, ChevronDown } from "lucide-react";

interface FrontendSectionProps {
  expandedSections: { [key: string]: boolean };
  toggleSection: (sectionId: string) => void;
}

const FrontendSection: React.FC<FrontendSectionProps> = ({
  expandedSections,
  toggleSection,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <Code className="w-5 h-5" />
        <h4>프론트엔드 개발</h4>
      </div>

      <div className="space-y-6">
        {/* 1. Tailwind Config Section */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("tailwindConfig")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Tailwind CSS 커스텀 설정
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["tailwindConfig"] ? "transform rotate-90" : ""
              }`}
            />
          </button>

          {expandedSections["tailwindConfig"] && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              <p className="p-4">
                tailwindCSS를 사용했으며, 재사용성을 위해 커스텀 설정
                하였습니다.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 text-sm overflow-x-auto">
                {`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        main: "#00bfa5",
        Light_color: "#f7f7fb",
        Regular_color: "#f1f1f5",
        gradient_start: "#A1FF8B",
        gradient_end: "#3F93FF",
        mainText: "#111111",
        subText: "#505050",
        subText2: "#767676",
        disabled: "#999999",
        border: "#E5E5EC"
      },
      fontFamily: { sans: ["Pretendard"] },
      fontWeight: { rg: "400", md: "500", sb: "600" },
      letterSpacing: { 'tight-2_5': '-0.025em' }
    }
  }
}`}
              </pre>
            </div>
          )}
        </div>

        {/* 2. 엔드포인트 연동 (중첩 토글 적용) */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("endpoints")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              프론트엔드 기능 개발
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["endpoints"] ? "transform rotate-90" : ""
              }`}
            />
          </button>

          {expandedSections["endpoints"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-4">
              <div className="space-y-3">
                {/* 2-1. 로그인화면 */}
                <div className="border border-gray-100 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection("authEndpoints")}
                    className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      1. 로그인&로그아웃&회원가입
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections["authEndpoints"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedSections["authEndpoints"] && (
                    <>
                      <div className="flex p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                        <img
                          src="/barohanpo/inmodal/login.png"
                          alt="login"
                          className="w-1/3"
                        />
                        <img
                          src="/barohanpo/inmodal/logout.png"
                          alt="logout"
                          className="w-1/3"
                        />

                        <img
                          src="/barohanpo/inmodal/signup.png"
                          alt="signup"
                          className="w-1/3"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* 2-2. 약국 토글 */}
                <div className="border border-gray-100 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection("pharmacyEndpoints")}
                    className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      2. 약국 관련
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections["pharmacyEndpoints"]
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {expandedSections["pharmacyEndpoints"] && (
                    <div className="p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <p>
                        • 주변 약국 조회:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          GET /api/pharmacies/nearby
                        </code>
                      </p>
                      <p>
                        • 약국 상세 정보:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          GET /api/pharmacies/:id
                        </code>
                      </p>
                      <p>
                        • 예약 생성:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          POST /api/reservations
                        </code>
                      </p>
                    </div>
                  )}
                </div>

                {/* 2-3. 회원 정보 토글 */}
                <div className="border border-gray-100 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection("userEndpoints")}
                    className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      3. 회원 정보 관련
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections["userEndpoints"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSections["userEndpoints"] && (
                    <div className="p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <p>
                        • 내 정보 조회:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          GET /api/users/me
                        </code>
                      </p>
                      <p>
                        • 정보 수정:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          PATCH /api/users/me
                        </code>
                      </p>
                      <p>
                        • 회원 탈퇴:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          DELETE /api/users/me
                        </code>
                      </p>
                    </div>
                  )}
                </div>

                {/* 2-4. 리뷰 토글 */}
                <div className="border border-gray-100 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection("reviewEndpoints")}
                    className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      4. 리뷰 관련
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections["reviewEndpoints"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSections["reviewEndpoints"] && (
                    <div className="p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <p>
                        • 리뷰 목록 조회:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          GET /api/reviews
                        </code>
                      </p>
                      <p>
                        • 리뷰 작성:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          POST /api/reviews
                        </code>
                      </p>
                      <p>
                        • 리뷰 수정:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          PATCH /api/reviews/:id
                        </code>
                      </p>
                      <p>
                        • 리뷰 삭제:{" "}
                        <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">
                          DELETE /api/reviews/:id
                        </code>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Redux State Section */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("reduxState")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Redux를 활용한 상태 관리
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["reduxState"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["reduxState"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p className="mb-3">도메인별로 상태를 분리하여 관리했습니다.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>사용자 인증 상태 (auth)</li>
                <li>약국 정보 (pharmacy)</li>
                <li>예약 정보 (reservation)</li>
                <li>리뷰 정보 (review)</li>
              </ul>
            </div>
          )}
        </div>

        {/* 4. TypeScript Types Section */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("typescriptTypes")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              TypeScript 타입 정의
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["typescriptTypes"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["typescriptTypes"] && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 text-sm overflow-x-auto">
                {`export interface Reservation {
  p_id: number;
  book_date: string;
  book_id: number;
  book_time: string;
  pharmacy_name: string;
}`}
              </pre>
            </div>
          )}
        </div>

        {/* 5. Kakao API Section */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("kakaoApi")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              카카오 API 연동
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["kakaoApi"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["kakaoApi"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-3">
              <p>1. 카카오 로그인 API</p>
              <p>2. 카카오 지도 API</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>커스텀 마커 디자인 적용</li>
                <li>실시간 위치 추적</li>
                <li>마커 클릭 시 해당 약국 정보 표시</li>
              </ul>
            </div>
          )}
        </div>

        {/* 6. Geolocation Section */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("geolocation")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Geolocation API
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["geolocation"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["geolocation"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p>
                사용자의 현재 위치 좌표를 기반으로 주변 약국 정보를 표시합니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FrontendSection;
