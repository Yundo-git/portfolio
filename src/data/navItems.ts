export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "홈" },
  { id: "skills", label: "스킬" },
  { id: "projects", label: "프로젝트" },
  { id: "career", label: "경력" },
  { id: "contact", label: "연락처" },
];
