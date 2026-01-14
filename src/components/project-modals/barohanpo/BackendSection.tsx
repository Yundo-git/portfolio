import React from "react";
import { Server } from "lucide-react";

const BackendSection = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <Server className="w-5 h-5" />
        <h4>백엔드 개발</h4>
      </div>
      <div className="space-y-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">MVC 패턴 적용</h5>
          <p>
            코드의 가독성과 유지보수성을 높이기 위해 MVC 패턴으로 아키텍처를
            구성했습니다.
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">JWT 인증 시스템</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access Token (15분 만료)</li>
            <li>Refresh Token (7일 만료)</li>
            <li>토큰 재발급 로직 구현</li>
          </ul>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">Swagger 문서화</h5>
          <p>
            API 문서를 자동으로 생성하여 프론트엔드 개발자와의 협업을 용이하게
            했습니다.
          </p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">이메일 알림 시스템</h5>
          <p>예약 완료 시 관리자에게 자동으로 이메일이 발송됩니다.</p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto mt-2">
            {`// 예약 완료 시 이메일 발송 로직
const sendReservationEmail = async (reservationData) => {
  await emailSender({
    to: 'admin@barohanpo.xyz',
    subject: '새로운 예약이 접수되었습니다',
    html: generateReservationEmail(reservationData)
  });
};`}
          </pre>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">닉네임 자동 생성</h5>
          <p>회원가입 시 자동으로 닉네임이 생성됩니다.</p>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto mt-2">
            {`function generateRandomNickname() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(100 + Math.random() * 900); // 100~999
  return \`\${adj}\${noun}\${num}\`;
}`}
          </pre>
        </div>
      </div>
    </>
  );
};

export default BackendSection;
