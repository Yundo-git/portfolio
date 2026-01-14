import React from "react";
import { Video } from "lucide-react";

const DemoVideo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
        <Video className="w-5 h-5" />
        <h4>서비스 시연 영상</h4>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-[50vw] h-[50vh] max-w-4xl mx-auto rounded-lg"
            controls
            controlsList="nodownload"
            playsInline
            preload="metadata"
            poster="/barohanpo/2.png"
          >
            <source src="/barohanpo/barohanpo.mov" type="video/mp4" />
            귀하의 브라우저는 비디오 태그를 지원하지 않습니다.
          </video>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h5 className="font-semibold">주요 기능</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>카카오 소셜 로그인</li>
              <li>실시간 위치 기반 약국 검색</li>
              <li>온라인 예약 시스템</li>
              <li>건강기능식품 추천</li>
              <li>리뷰 및 평점 시스템</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold">기술적 도전</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>실시간 위치 추적</li>
              <li>JWT 기반 인증 시스템</li>
              <li>성능 최적화</li>
              <li>보안 강화</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
