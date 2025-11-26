import { ChevronDown, Github, Mail, Phone } from "lucide-react";

interface AboutProps {
  onScrollDown: () => void;
}

export default function About({ onScrollDown }: AboutProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl mx-auto ">
        <div className="mb-8 flex flex-col gap-4 items-center justify-center">
          <div className="w-32 h-32 mx-auto bg-white/50 rounded-full flex items-center justify-center text-6xl">
            💻
          </div>
          <h1 className="text-3xl md:text-5xl font-bold ">윤도훈</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Frontend Developer
          </p>
        </div>
        <p className="text-sm">* 이 페이지는 Next.js로 제작되었습니다.</p>

        <div className="flex justify-center space-x-6 mb-12 ">
          <a
            href="https://github.com/Yundo-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-point transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:ydh7804@gmail.com"
            className="hover:text-point transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="tel:01047292422"
            className="hover:text-point transition-colors"
            aria-label="Phone"
          >
            <Phone size={28} />
          </a>
        </div>

        <button
          onClick={onScrollDown}
          className="animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
