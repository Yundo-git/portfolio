import React from "react";
import { Cpu } from "lucide-react";

const DeploymentSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
        <Cpu className="w-5 h-5" />
        <h4>서버 & 배포</h4>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">AWS 인프라 구성</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>EC2: 애플리케이션 서버</li>
            <li>RDS: MySQL 데이터베이스</li>
            <li>S3: 정적 파일 및 미디어 저장소</li>
            <li>Route 53: 도메인 관리</li>
            <li>CloudFront: CDN</li>
          </ul>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">Nginx 리버스 프록시</h5>
          <p>로드 밸런싱과 SSL/TLS 종료를 위해 Nginx를 구성했습니다.</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">도메인 설정</h5>
          <p>barohanpo.xyz 도메인을 구매하여 서비스에 적용했습니다.</p>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h5 className="font-semibold text-lg mb-3">CI/CD 파이프라인</h5>
          <p>GitHub Actions를 사용하여 자동화된 배포 환경을 구성했습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default DeploymentSection;
