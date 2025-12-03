export interface ProjectFeature {
  title: string;
  description: string;
  details: string[];
  images: string[];
}

export const babynoteFeatures: ProjectFeature[] = [
  {
    title: "로그인/회원가입/로그아웃 기능",
    description:
      "Node.js, MySQL, KakaoAPI를 활용한 소셜 로그인 및 회원 관리 시스템 구현",
    details: [
      "이메일/비밀번호 기반 회원가입 및 로그인",
      "카카오 소셜 로그인 연동",
      "세션 기반 인증 처리 및 보안 강화",
      "회원가입 시 실시간 유효성 검증 및 중복 체크",
    ],
    images: ["1.png", "1-2.png", "1-3.png"],
  },
  {
    title: "회원정보 수정 기능",
    description: "사용자 프로필 관리 및 정보 수정 기능",
    details: [
      "이름, 프로필 사진 수정",
      "아이디 중복 체크",
      "비밀번호 변경 기능",
    ],
    images: ["2.png"],
  },
  {
    title: "아이 정보 CRUD 기능",
    description: "아이 프로필 관리 시스템",
    details: [
      "아이 정보 등록/조회/수정/삭제",
      "프로필 사진 업로드 및 관리",
      "생년월일 기반 개월수 자동 계산",
      "아이 정보 유효성 검증",
    ],
    images: ["3.png", "3-1.png", "3-2.png"],
  },
  {
    title: "성장일지 CRUD 기능",
    description: "아이의 성장 기록 관리 시스템",
    details: [
      "성장 기록 등록/조회/수정/삭제",
      "최근 기록 우선 표시",
      "성장 추이 시각화",
      "Redux를 활용한 상태 관리",
    ],
    images: ["4.gif"],
  },
  {
    title: "예방접종 관리 시스템",
    description: "예방접종 일정 및 이력 관리",
    details: [
      "예방접종 일정 자동 계산",
      "접종 상태별 필터링 (접종완료/진행중/미접종)",
      "접종 이력 관리 모달",
      "실시간 데이터 동기화",
    ],
    images: ["5.png", "6.png", "7.png"],
  },
  {
    title: "기술 스택 및 배포",
    description: "프로젝트 인프라 및 개발 환경",
    details: [
      "Frontend: React.js, TypeScript, Tailwind CSS, Redux",
      "Backend: Node.js, Express, MySQL",
      "배포: Netlify (프론트엔드), Heroku (백엔드)",
      "반응형 웹 디자인 (SCSS + Tailwind CSS)",
    ],
    images: ["8.png", "9.png", "10.png", "11-1.png", "11-2.png"],
  },
];
