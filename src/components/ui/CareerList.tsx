// CareerList.tsx
import React from "react";
import { CareerItem } from "@/data/careers"; // 경로 확인 필요

interface CareerListProps {
  careerData: CareerItem[];
}

export const CareerList: React.FC<CareerListProps> = ({ careerData }) => {
  return (
    <div>
      {careerData.map((detail, i) => (
        <div className="pb-4" key={i}>
          <ul className="bg-point/50 p-4 rounded-2xl">
            <li className="font-bold">{detail.title}</li>
            <li>{detail.role}</li>
            <li className="text-sm text-gray-400">{detail.date}</li>
            <li className="mt-2">{detail.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
