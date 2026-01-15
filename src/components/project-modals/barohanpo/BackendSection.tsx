import React, { useState } from "react";
import { Server, ChevronRight, ChevronDown } from "lucide-react";

interface BackendSectionProps {
  expandedSections: { [key: string]: boolean };
  toggleSection: (sectionId: string) => void;
}

const BackendSection: React.FC<BackendSectionProps> = ({
  expandedSections,
  toggleSection,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <Server className="w-5 h-5" />
        <h4>백엔드 개발</h4>
      </div>
      <div className="space-y-4">
        {/* MVC 패턴 적용 */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("mvc")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              MVC 패턴 적용
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["mvc"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["mvc"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p>
                코드의 가독성과 유지보수성을 높이기 위해 MVC 패턴으로 아키텍처를
                구성했습니다.
              </p>
              <div className="flex gap-4">
                <img
                  src="/barohanpo/inmodal/backend/mvc1.png"
                  alt="mvc1"
                  className="w-1/2"
                />
                <img
                  src="/barohanpo/inmodal/backend/mvc2.png"
                  alt="mvc2"
                  className="w-1/2"
                />
              </div>
            </div>
          )}
        </div>

        {/* JWT 인증 시스템 */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("jwt")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              JWT 인증 시스템
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["jwt"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["jwt"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <ul className="list-disc pl-5 space-y-1">
                <li>Access Token (15분 만료)</li>
                <li>Refresh Token (7일 만료)</li>
                <li>토큰 재발급 로직 구현</li>
              </ul>
            </div>
          )}
        </div>

        {/* Swagger 문서화 */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("swagger")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              Swagger 문서화
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["swagger"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["swagger"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p>
                프론트엔드와 api 연동을 쉽게 테스트하고 정리하기 위해 swagger를
                작성했습니다.
              </p>

              <div className="flex justify-center my-4">
                <img
                  src="/barohanpo/inmodal/backend/swagger.png"
                  alt="swagger"
                  className="w-1/2"
                />
              </div>
            </div>
          )}
        </div>

        {/* 이메일 알림 시스템 */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("email")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              이메일 알림 시스템
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["email"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["email"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
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

              <div className="flex justify-center my-4">
                <img
                  src="/barohanpo/inmodal/backend/email.png"
                  alt="email"
                  className="w-1/2"
                />
              </div>
            </div>
          )}
        </div>

        {/* 닉네임 자동 생성 */}
        <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => toggleSection("nickname")}
            className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
              닉네임 자동 생성
            </h5>
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-200 ${
                expandedSections["nickname"] ? "transform rotate-90" : ""
              }`}
            />
          </button>
          {expandedSections["nickname"] && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <p>
                회원가입 시 자동으로 닉네임이 생성됩니다. 이후 회원정보에서
                수정이 가능합니다.
              </p>
              <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto mt-2">
                {`function generateRandomNickname() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(100 + Math.random() * 900); // 100~999
  return \`\${adj}\${noun}\${num}\`;
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BackendSection;
