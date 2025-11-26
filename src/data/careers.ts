export interface CareerItem {
  title: string;
  date: string;
  role: string;
  description: string;
}

export const careers: CareerItem[] = [
  {
    title: "겟앤쇼",
    date: "2025.05 - 2025.12",
    role: "프론트엔드 개발자",
    description:
      "빌드업 사업팀 풀스택 개발자로 주로 프론트엔드와 백엔드 일부 개발",
  },
  {
    title: "청년취업사관학교",
    date: "2024.10 - 2025.02",
    role: "Apple, 하나의 UI/UX 웹 프론트엔드 과정",
    description: "수료",
  },
  {
    title: "룩업",
    date: "2022.03 - 2024.10",
    role: "공동창업",
    description: "정부지원사업 지원 및 자금관리, 마케팅 자료 제작",
  },
  {
    title: "SP정보기술",
    date: "2020.08 - 2022.03",
    role: "시큐아이 방화벽 엔지니어",
    description:
      "리눅스 기반 네트워크 장비 업무, 금융권 방화벽 및 VPN 장비 유지보수",
  },
];
