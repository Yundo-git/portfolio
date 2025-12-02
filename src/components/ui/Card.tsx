// Card.tsx (리팩토링 완료)

import React from "react";
// 분리된 컴포넌트들을 import 합니다.
import { ProjectCardList } from "./ProjectCardList"; // ProjectCardList는 기존 로직을 옮긴 파일
import { CareerList } from "./CareerList";
import { SkillGroupList } from "./SkillGroupList"; // 이 파일도 별도로 분리했다고 가정
import { ContactInfo } from "./ContactInfo";

// 타입 임포트 경로 확인 및 수정
import { CareerItem } from "@/data/careers";
import { SkillGroup } from "@/data/skills";
import { Project } from "@/data/projects";
import { Contact } from "@/data/contact";

// --- Types ---
type CardProps = {
  careerData?: CareerItem[];
  skillData?: SkillGroup[];
  projectData?: Project[];
  contactData?: Contact;
};

// --- Main Card Component: 라우터 역할 ---
export const Card: React.FC<CardProps> = ({
  careerData,
  skillData,
  projectData,
  contactData,
}) => {
  if (careerData) {
    return <CareerList careerData={careerData} />;
  }

  if (skillData) {
    return <SkillGroupList skillData={skillData} />;
  }

  if (projectData) {
    return <ProjectCardList projectData={projectData} />;
  }

  if (contactData) {
    return <ContactInfo contactData={contactData} />;
  }

  return null;
};
