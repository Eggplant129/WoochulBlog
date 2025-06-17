import React from "react";
import Link from "next/link";
import { Project } from "./project";
import {
  ExternalLink,
  Github,
  Smartphone,
  Palette,
  Database,
  Code2,
} from "lucide-react";

type ProjectCard = Project;

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  date,
  category,
  githubUrl,
  liveUrl,
  longDescription,
  features,
  techStack,
}: ProjectCard) => {
  // const sampleProject = {
  //   id: 1,
  //   title: "Woochul's Blog",
  //   description:
  //     "개인 블로그 웹사이트로 Next.js와 Tailwind CSS로 제작했습니다.",
  //   image: "/api/placeholder/400/250",
  //   tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  //   date: "2024.01",
  //   category: "Web",
  //   githubUrl: "https://github.com/username/blog",
  //   liveUrl: "https://woochul-blog.vercel.app",
  //   longDescription:
  //     "개인 브랜딩과 지식 공유를 목적으로 제작한 블로그입니다. 깔끔하고 모던한 디자인을 추구하며, 반응형 웹으로 구현했습니다.",
  //   features: [
  //     "반응형 디자인",
  //     "다크/라이트 모드",
  //     "SEO 최적화",
  //     "빠른 로딩 속도",
  //   ],
  //   techStack: [
  //     "Next.js 14",
  //     "React 18",
  //     "Tailwind CSS",
  //     "TypeScript",
  //     "Vercel",
  //   ],
  // };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web":
        return <Code2 size={16} />;
      case "Mobile":
        return <Smartphone size={16} />;
      case "UI/UX":
        return <Palette size={16} />;
      case "Backend":
        return <Database size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  return (
    <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-colorl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="bg-blue-100 w-full h-48 object-hover"
        />
        <div className="absolute top-3 right-3">
          <span className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {getCategoryIcon(category)}
            <span className="ml-1">{category}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className=" text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{tags.length - 3}
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          <Link
            href={githubUrl}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </Link>
          <Link
            href={liveUrl}
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
