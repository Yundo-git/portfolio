import { contact } from "@/data/contact";
import { Card } from "../ui/Card";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">연락처</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Contact </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Card contactData={contact} />
        </div>
      </div>
    </section>
  );
};
