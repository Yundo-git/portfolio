import React from "react";
import { AlertTriangle, ChevronRight } from "lucide-react";

interface TroubleshootingSectionProps {
  expandedSections: { [key: string]: boolean };
  toggleSection: (sectionId: string) => void;
}

const TroubleshootingSection: React.FC<TroubleshootingSectionProps> = ({
  expandedSections,
  toggleSection,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <AlertTriangle className="w-5 h-5 text-yellow-500" />
        <h4>트러블 슈팅</h4>
      </div>

      {/* CORS 에러 해결 */}
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("cors")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            CORS 에러 해결
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["cors"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["cors"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-3">
            <p>
              <b>문제:</b> 배포 후 CORS 에러 발생
            </p>
            <img
              src="/barohanpo/inmodal/trouble/cors2.png"
              alt="cors2.png"
              className="w-full"
            />
            <img
              src="/barohanpo/inmodal/trouble/cors1.png"
              alt="cors1.png"
              className="w-full"
            />
            <img
              src="/barohanpo/inmodal/trouble/cors3.png"
              alt="cors3.png"
              className="w-full"
            />
            <p>
              <b>문제:</b> 배포 후 CORS 에러 발생
            </p>
            <p>
              <b>특이사항:</b> 위 사진처럼 백엔드에 cors 허용 설정을 하였으나
              문제는 해결 되지 않았고 이는 기존에 cors 설정에 이해도가 떨어져
              발생한 상황
            </p>
            <p>
              <b>원인:</b> 프론트엔드(barohanpo-fe.vercel.app)와
              백엔드(barohanpo.xyz)의 도메인이 달라 브라우저에서 차단
            </p>
            <p>
              <b>해결:</b> 프론트엔드 URL을 app.barohanpo.xyz로 변경하여 동일
              도메인 하위 도메인으로 통일
            </p>
            <img
              src="/barohanpo/inmodal/trouble/cors4.png"
              alt="cors4.png"
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* 시크릿 모드 로그인 문제 */}
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("secretMode")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            시크릿 모드 로그인 문제
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["secretMode"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["secretMode"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 space-y-3">
            <img
              src="/barohanpo/inmodal/trouble/cookie.png"
              alt="cookie.png"
              className="w-full"
            />
            <p>사진 설명: 쿠키값이 전달 되지않는 비정상 헤더(시크릿모드)</p>
            <img
              src="/barohanpo/inmodal/trouble/cookie2.png"
              alt="cookie2.png"
              className="w-full"
            />
            <p>사진 설명: 쿠키값이 전달 되지않는 비정상 헤더(시크릿모드)</p>
            <p>
              <b>문제:</b> 시크릿 모드에서 카카오 로그인 시 토큰 전달 실패
            </p>
            <p>
              <b>
                특이사항: 서비스의 프론트엔드와 백엔드 URL이 동일한 도메인
                환경이었음에도 불구하고 쿠키가 저장되지 않음.
              </b>
            </p>
            <div className="space-y-2 mt-4">
              <p className="font-medium">- Third-party Cookies 차단 정책</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 pl-4">
                시크릿모드에서는 기본적으로 교차사이트 추적 방지를 위해 서드파티
                쿠키를 차단.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 pl-4">
                카카오 로그인 과정에서 카카오의 인증서버인 kauth.kakao.com과
                프로젝트의 URL을 오갈때 브라우저는 카카오에서 생성한 데이터를
                서드파티리소스로 간주하여 차단된 상황
              </p>
            </div>
            <p>
              <b>해결:</b> sameSite 옵션을 "lax"로 변경하여 시크릿 모드에서도
              정상 동작하도록 수정
            </p>
            <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto mt-2">
              {`// 수정 전
const clearOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: COOKIE_PATH,
};

// 수정 후
const clearOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: COOKIE_PATH,
};`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TroubleshootingSection;
