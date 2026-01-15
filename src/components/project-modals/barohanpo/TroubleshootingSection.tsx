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
              src="/barohanpo/inmodal/trouble/cors1.png"
              alt="cors1.png"
              className="w-full"
            />{" "}
            <p>
              <b>원인:</b> 프론트엔드(barohanpo-fe.vercel.app)와
              백엔드(barohanpo.xyz)의 도메인이 달라 브라우저에서 차단
            </p>
            <p>
              <b>해결:</b> 프론트엔드 URL을 app.barohanpo.xyz로 변경하여 동일
              도메인 하위 도메인으로 통일
            </p>
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
            <p>
              <b>문제:</b> 시크릿 모드에서 카카오 로그인 시 토큰 전달 실패
            </p>
            <p>
              <b>원인:</b> 서드파티 쿠키 차단 정책으로 인한 쿠키 저장 실패
            </p>
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
