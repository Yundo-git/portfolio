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
                    <div className="flex p-3 space-y-2 text-sm bg-white dark:bg-gray-800 overflow-x-auto">
                      <img
                        src="/barohanpo/inmodal/1.png"
                        alt="예약사진"
                        className="w-1/3 p-2"
                      />
                      <img
                        src="/barohanpo/inmodal/2.png"
                        alt="예약완료"
                        className="w-1/3 p-2"
                      />
                      <img
                        src="/barohanpo/inmodal/3.png"
                        alt="예약내역"
                        className="w-1/3 p-2"
                      />
                      <img
                        src="/barohanpo/inmodal/4.png"
                        alt="예약취소"
                        className="w-1/3 p-2"
                      />
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
                    <div className="flex p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <img
                        src="/barohanpo/inmodal/user1.png"
                        alt="user1"
                        className="w-1/2"
                      />
                      <img
                        src="/barohanpo/inmodal/user2.png"
                        alt="user2"
                        className="w-1/2"
                      />
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
                    <div className="flex p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <img
                        src="/barohanpo/inmodal/review1.png"
                        alt="review1"
                        className="w-1/2"
                      />
                      <img
                        src="/barohanpo/inmodal/review2.png"
                        alt="review2"
                        className="w-1/2"
                      />
                    </div>
                  )}
                </div>
                {/* 2-5. 찜하기 토글 */}
                <div className="border border-gray-100 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection("likeEndpoints")}
                    className="w-full flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      5. 찜하기 관련
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections["likeEndpoints"] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSections["likeEndpoints"] && (
                    <div className="flex p-3 space-y-2 text-sm bg-white dark:bg-gray-800">
                      <img
                        src="/barohanpo/inmodal/like1.png"
                        alt="like1"
                        className="w-1/2"
                      />
                      <img
                        src="/barohanpo/inmodal/like2.png"
                        alt="like2"
                        className="w-1/2"
                      />
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
            <>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <p className="mb-3">도메인별로 상태를 분리하여 관리했습니다.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>사용자 인증 상태 (auth)</li>
                  <li>약국 정보 (pharmacy)</li>
                  <li>예약 정보 (reservation)</li>
                  <li>리뷰 정보 (review)</li>
                </ul>
              </div>
              <img
                src="/barohanpo/inmodal/redux.png"
                alt="redux"
                className="p-4"
              />
            </>
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
              <p className="p-4">
                타입스크립트를 적용해 안정성을 높혀 개발하였습니다.
              </p>
              <img
                src="/barohanpo/inmodal/typeScript.png"
                alt=""
                className="p-4"
              />
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
              <ul className="list-disc pl-5 space-y-1">
                1. 카카오 로그인 API
                <li>
                  빠른 로그인을 위해 카카오 로그인 서비스를 개발하였습니다.
                </li>
                <li>
                  사용자가 카카로 로그인 버튼을 클릭하면 백엔드의 카카오 로그인
                  엔드포인트로 리다이렉트되며 카카오 로그인 페이지에서 인증 성공
                  시 백엔드에서 설정한 리다이렉트 url로 리다이렉트되고,
                   URL 파라미터에 login=success가 포함됩니다.
                </li>
                <li>
                  인증 완료 후에는 백엔드로 부터 토큰을 요청하고 토큰이
                  성공적으로 발급되면 redux에 사용자 정보가 저장됩니다.
                </li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                2. 카카오 지도 API
                <li>
                  약국 페이지의 지도를 카카오 map api를 연동하여 개발하였습니다.
                </li>
                <li>카카오에서 제공하는 마커 디자인을 변경하였습니다.</li>
                <li>실시간 위치를 알아와 현재 위치를 실시간으로 표시합니다.</li>
                <li>마커 클릭 시 해당 약국 정보를 표시합니다.</li>
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
