import React from "react";
import { Cpu, ChevronRight } from "lucide-react";

interface DeploymentSectionProps {
  expandedSections: { [key: string]: boolean };
  toggleSection: (sectionId: string) => void;
}

const DeploymentSection: React.FC<DeploymentSectionProps> = ({
  expandedSections,
  toggleSection,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        <Cpu className="w-5 h-5" />
        <h4>서버 & 배포</h4>
      </div>

      {/* AWS 인프라 구성 */}
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("mysql")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Mysql
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["mysql"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["mysql"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <p>
              MySQL 기반의 데이터 베이스 서버를 설계 및 구축하여 AWS RDS에
              배포했습니다.
            </p>
            <div className="flex justify-center my-4">
              <img
                src="/barohanpo/inmodal/server/erd.png"
                alt="erd"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("ec2")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            EC2
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["ec2"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["ec2"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <p>개발이 완료된 백엔드를 AWS EC2에 배포하였습니다.</p>
            <p>barohanpo 도메인을 별도 구매하여 배포하였습니다. </p>
            <div className="flex justify-center my-4">
              <img
                src="/barohanpo/inmodal/server/ec2.png"
                alt="ec2"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Nginx 리버스 프록시 */}
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("s3")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            S3
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["s3"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["s3"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <p>
              서비스 내 사진(프로필&리뷰사진)을 S3에 저장하고 해당 경로를 DB에
              저장하여 연동하였습니다.
            </p>
            <img
              src="/barohanpo/inmodal/server/s3.png"
              alt="s3"
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* 도메인 설정 */}
      <div className="rounded-lg bg-white dark:bg-gray-800 shadow overflow-hidden border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => toggleSection("domain")}
          className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h5 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            도메인 설정
          </h5>
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedSections["domain"] ? "transform rotate-90" : ""
            }`}
          />
        </button>
        {expandedSections["domain"] && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <p>barohanpo.xyz 도메인을 구매하여 서비스에 적용했습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeploymentSection;
