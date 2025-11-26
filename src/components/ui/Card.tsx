import React from "react";
import { CareerItem, careers } from "@/data/careers";

type CardPropsCareer = {
  careerData: CareerItem[];
  projectData?: never;
  skillData?: never;
};

type CardProps = CardPropsCareer;
// | CardPropsProject | CardPropsSkill; // 👈 유니온 확장

export const Card: React.FC<CardProps> = (props) => {
  console.log(careers);

  const data = careers; //여기 나중에 if문으로 바꿔가면서 넣기
  return (
    <div>
      {data.map((detail, i) => (
        <div className="pb-4">
          <ul key={i} className="bg-point/50 p-4 rounded-2xl">
            <li>{detail.title}</li>
            <li>{detail.role}</li>
            <li>{detail.date}</li>
            <li>{detail.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
