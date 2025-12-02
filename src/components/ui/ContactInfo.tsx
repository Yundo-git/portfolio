// ContactInfo.tsx
import React from "react";
import { Mail, Phone, Github } from "lucide-react";
import { Contact } from "@/data/contact"; // 경로 확인 필요

interface ContactInfoProps {
  contactData: Contact;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactData }) => {
  return (
    <div className="w-full md:w-[50vw] px-4 md:px-0">
      <div className="bg-white p-4 md:p-6 rounded-2xl flex flex-col gap-3 md:gap-4">
        <a
          href={`mailto:${contactData.Mail}`}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-6 h-6 md:w-7 md:h-7 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg break-all">
            {contactData.Mail}
          </span>
        </a>
        {/* ... (Phone, Github 링크 동일 로직) ... */}
        <div className="flex items-center gap-3 p-3">
          <Phone className="w-6 h-6 md:w-7 md:h-7 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg">{contactData.Phone}</span>
        </div>
        <a
          href={`https://github.com/${contactData.Github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Github className="w-6 h-6 md:w-7 md:h-7 text-gray-600 flex-shrink-0" />
          <span className="text-base md:text-lg">{contactData.Github}</span>
        </a>
      </div>
    </div>
  );
};
