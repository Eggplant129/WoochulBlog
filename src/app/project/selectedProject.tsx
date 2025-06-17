import React from "react";
import { Project } from "./project";
import Image from "next/image";
import Link from "next/link";
import { Fullscreen } from "lucide-react";
import {
  ExternalLink,
  Github,
  Smartphone,
  Palette,
  Database,
  Code2,
  Calendar,
  ArrowLeft,
} from "lucide-react";

type Props = { project: Project; onBack: () => void };

const SelectedProject = ({ project, onBack }: Props) => {
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
    <main className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        프로젝트 목록으로 돌아가기
      </button>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          height={64}
          width={64}
          className="object-cover"
        />

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {project.title}
              </h1>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{project.date}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  {getCategoryIcon(project.category)}
                  <span className="ml-1">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Link
                href={project.githubUrl}
                className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
                <span>Github</span>
              </Link>

              <Link
                href={project.liveUrl}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                프로젝트 소개
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">주요기능</h2>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                기술 스택
              </h2>
              <div className="space-y-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">태그</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SelectedProject;
