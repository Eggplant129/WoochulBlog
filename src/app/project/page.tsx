"use client";

import React, { useState } from "react";
import ProjectCard from "./projectCard";
import { Proportions } from "lucide-react";
import SelectedProject from "./selectedProject";
import { Project } from "./project";

const Page = () => {
  //testProjects
  const projectCards: Project[] = [
    {
      id: 1,
      title: "Woochul's Blog",
      description:
        "개인 블로그 웹사이트로 Next.js와 Tailwind CSS로 제작했습니다.",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      date: "2024.01",
      category: "Web",
      githubUrl: "https://github.com/username/blog",
      liveUrl: "https://woochul-blog.vercel.app",
      longDescription:
        "개인 브랜딩과 지식 공유를 목적으로 제작한 블로그입니다. 깔끔하고 모던한 디자인을 추구하며, 반응형 웹으로 구현했습니다.",
      features: [
        "반응형 디자인",
        "다크/라이트 모드",
        "SEO 최적화",
        "빠른 로딩 속도",
      ],
      techStack: [
        "Next.js 14",
        "React 18",
        "Tailwind CSS",
        "TypeScript",
        "Vercel",
      ],
    },
    {
      id: 2,
      title: "Todo App",
      description: "React Hooks를 활용한 할일 관리 애플리케이션입니다.",
      image: "/api/placeholder/400/250",
      tags: ["React", "JavaScript", "CSS3", "LocalStorage"],
      date: "2023.12",
      category: "Web",
      githubUrl: "https://github.com/username/todo-app",
      liveUrl: "https://my-todo-app.netlify.app",
      longDescription:
        "일상의 할일을 효율적으로 관리할 수 있는 웹 애플리케이션입니다. 직관적인 UI와 부드러운 애니메이션을 적용했습니다.",
      features: [
        "할일 추가/삭제/수정",
        "완료 상태 토글",
        "로컬 스토리지 저장",
        "필터링 기능",
      ],
      techStack: ["React", "JavaScript ES6+", "CSS3", "LocalStorage API"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "OpenWeather API를 활용한 날씨 정보 대시보드입니다.",
      image: "/api/placeholder/400/250",
      tags: ["Vue.js", "API", "Chart.js", "CSS3"],
      date: "2023.11",
      category: "Web",
      githubUrl: "https://github.com/username/weather-dashboard",
      liveUrl: "https://weather-dash.netlify.app",
      longDescription:
        "실시간 날씨 정보와 5일 예보를 시각적으로 보여주는 대시보드입니다. Chart.js를 사용해 데이터를 그래프로 표현했습니다.",
      features: [
        "실시간 날씨 정보",
        "5일 날씨 예보",
        "온도 차트 시각화",
        "지역 검색 기능",
      ],
      techStack: ["Vue.js 3", "OpenWeather API", "Chart.js", "Axios"],
    },
    {
      id: 4,
      title: "E-commerce UI Kit",
      description: "재사용 가능한 이커머스 UI 컴포넌트 라이브러리입니다.",
      image: "/api/placeholder/400/250",
      tags: ["React", "Storybook", "Styled-components", "TypeScript"],
      date: "2023.10",
      category: "UI/UX",
      githubUrl: "https://github.com/username/ecommerce-ui-kit",
      liveUrl: "https://ui-kit-storybook.netlify.app",
      longDescription:
        "이커머스 프로젝트에서 재사용할 수 있는 UI 컴포넌트들을 모아놓은 라이브러리입니다. Storybook으로 문서화했습니다.",
      features: [
        "30+ 재사용 가능한 컴포넌트",
        "Storybook 문서화",
        "TypeScript 지원",
        "테스트 코드 포함",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Styled-components",
        "Storybook",
        "Jest",
      ],
    },
  ];

  //Category filtering
  const categories = ["All", "Web", "Mobile", "UI/UX", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectCards
      : projectCards.filter((project) => project.category === activeCategory);

  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(
    null
  );

  if (selectedProject) {
    return (
      <SelectedProject
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }
  const changeActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">프로젝트</h2>
        <p className="text-lg text-gray-600">
          제가 만든 다양한 프로젝트들을 소개합니다
        </p>
      </div>

      {/* CategoryFilter */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => changeActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* ProjectsGrid */}
      <div className="grid md:grid-cols-2 lg:gird-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} onClick={() => setSelectedProject(project)}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
