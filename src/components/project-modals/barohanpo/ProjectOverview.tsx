import React from "react";

const ProjectOverview = () => {
  return (
    <>
      <h4 className="text-xl font-semibold mt-0 mb-3 text-gray-800 dark:text-gray-200">
        프로젝트 소개
      </h4>
      <p className="text-lg mb-4">
        약사에게 처방받는 맞춤형 건강기능식품 서비스로, 사용자 맞춤형 영양제
        추천과 전문 약사 상담을 제공하는 플랫폼입니다.
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg">
          <p className="font-semibold text-blue-800">프로젝트 이름</p>
          <p className="text-lg font-bold">바로한포: 약사 추천 건강기능식품</p>
          <p className="text-sm">
            웹뷰를 사용해 안드로이드, iOS, 모바일 웹으로 접속 가능한
            서비스입니다.
          </p>
        </div>

        <div className="p-4 rounded-lg">
          <p className="font-semibold text-green-800">개발 환경</p>
          <p>
            <b>FrontEnd:</b> Next.js, TypeScript, Redux, TailwindCSS
          </p>
          <p>
            <b>BackEnd:</b> Node.js, Express
          </p>
          <p>
            <b>Database:</b> MySQL (RDS)
          </p>
          <p>
            <b>Infra:</b> AWS (EC2, S3, RDS), Nginx
          </p>
          <p>
            <b>팀 구성:</b> 기획(2명), UI/UX(1명), 개발(1명)
          </p>
        </div>

        <div className="p-4 rounded-lg">
          <p className="font-semibold text-yellow-800">프로젝트 기간</p>
          <p>2025.07.15 ~ 2025.10.17 (3개월)</p>
        </div>

        <div className="p-4 rounded-lg">
          <p className="font-semibold text-purple-800">서비스 구성도</p>
          <img
            src="/barohanpo/1.png"
            alt="서비스 구성도"
            className="mt-2 rounded-lg max-w-full h-auto border border-gray-200"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;
