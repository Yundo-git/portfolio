import React from "react";
import { AlertTriangle } from "lucide-react";

const TroubleshootingSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
        <AlertTriangle className="w-5 h-5 text-yellow-500" />
        <h4>트러블 슈팅</h4>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">CORS 에러 해결</h5>
          <div className="space-y-3">
            <p>
              <b>문제:</b> 배포 후 CORS 에러 발생
            </p>
            <p>
              <b>원인:</b> 프론트엔드(barohanpo-fe.vercel.app)와
              백엔드(barohanpo.xyz)의 도메인이 달라 브라우저에서 차단
            </p>
            <p>
              <b>해결:</b> 프론트엔드 URL을 app.barohanpo.xyz로 변경하여 동일
              도메인 하위 도메인으로 통일
            </p>
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">
            시크릿 모드 로그인 문제
          </h5>
          <div className="space-y-3">
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
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingSection;
