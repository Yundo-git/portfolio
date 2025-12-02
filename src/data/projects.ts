import BarohanpoContent from "@/components/project-modals/Barohanpo";
import BabynoteContent from "@/components/project-modals/Babynote";
import SeoulContent from "@/components/project-modals/Seoul"; // 파일명에 맞게 수정

export interface ProjectLink {
  demo?: string;
  github?: string;
}
export type ProjectContentComponent = React.FC;

export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  features: string[];
  links: ProjectLink;
  ContentComponent: ProjectContentComponent;
}

export const projects: Project[] = [
  {
    title: "바로한포",
    period: "2025.07.15 - 2025.10.17",
    description: "약사가 추천해주는 영양제, 약국 방문 예약 서비스",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "AWS",
      "Nginx",
      "EC2",
      "RDS",
      "S3",
      "Cookie",
      "JWT",
      "MySQL",
    ],
    features: [
      "로그인/회원가입 및 카카오 API 연동",
      "아이 정보 CRUD 기능 구현",
      "성장일지 기록 및 데이터 시각화",
      "예방접종 테이블 관리 시스템",
      "Redux를 활용한 전역 상태 관리",
    ],
    links: {
      demo: "https://app.barohanpo.xyz/",
      github: "https://github.com/Yundo-git/barohanpo_Fe.git",
    },
    ContentComponent: BarohanpoContent,
  },
  {
    title: "꼬물꼬물 | 디지털 아기수첩",
    period: "2025.01.25 - 2025.02.17",
    description:
      "아기의 성장 기록과 예방접종 이력을 디지털로 관리하는 웹 애플리케이션",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "Node.js", "MySQL"],
    features: [
      "로그인/회원가입 및 카카오 API 연동",
      "아이 정보 CRUD 기능 구현",
      "성장일지 기록 및 데이터 시각화",
      "예방접종 테이블 관리 시스템",
      "Redux를 활용한 전역 상태 관리",
    ],
    links: {
      demo: "https://babynote.netlify.app/",
      github: "https://github.com/SeSAC-refactoring/cutebaby.git",
    },
    ContentComponent: BabynoteContent,
  },
  {
    title: "서울서울 (seoulseoul)",
    period: "2024.12.13 - 2024.12.23",
    description: "서울 관광객을 위한 여행지, 날씨, 교통 정보 제공 사이트",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Kakao Map API",
      "OpenAPI",
    ],
    features: [
      "카카오 맵 API를 활용한 맛집/관광지 검색",
      "지역별 여행지 필터링 기능",
      "교통 정보 안내 페이지 개발",
      "OpenAPI 데이터 가공 및 활용",
    ],
    links: {
      demo: "https://seoulseoul.netlify.app/",
      github: "https://github.com/sesacCteam/sesacCteam",
    },
    ContentComponent: SeoulContent,
  },
];
