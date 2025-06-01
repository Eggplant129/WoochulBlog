import React from "react";
import RecentPostCard from "./recentPostCard";

const RecentPostSection = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Next.js 14 App Router 완벽 가이드",
      description:
        "새로운 App Router의 핵심 개념과 실제 사용법을 정리했습니다.",
      date: "2024-05-25",
      category: "Next.js",
      readTime: "5분",
    },
    {
      id: 2,
      title: "React Hook 최적화 패턴",
      description:
        "성능 향상을 위한 React Hook 사용법과 최적화 기법들을 소개합니다.",
      date: "2024-05-20",
      category: "React",
      readTime: "7분",
    },
    {
      id: 3,
      title: "개발자 포트폴리오 제작기",
      description: "첫 개발자 포트폴리오를 만들면서 배운 점들을 공유합니다.",
      date: "2024-05-15",
      category: "개발일기",
      readTime: "4분",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {recentPosts.map((post) => (
        <RecentPostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default RecentPostSection;
