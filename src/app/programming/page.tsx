"use client";

import { Search, Filter } from "lucide-react";
import React, { useState } from "react";
import ProgrammingCard from "./programmingCard";
import { posts } from "./data";
import { Programming } from "./programming";
import SelectedProgramming from "./selectedProgramming";

const Page = () => {
  const difficulties = [
    "All",
    "Easy",
    "Level 1",
    "Level 2",
    "Level 3",
    "Silver 2",
  ];

  const platforms = ["All", "프로그래머스", "백준", "LeetCode"];

  const [selectedPost, setSelectedPost] = useState<Programming | null>(null);

  //categorization for filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedplatform, setSelectedPlatform] = useState("All");

  //filtering algorithm
  const filteredPosts: Programming[] = posts.filter((post) => {
    const matchesSearch: boolean =
      post.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDifficulty: boolean =
      selectedDifficulty === "All" || post.difficulty === selectedDifficulty;

    const matchesPlatform: boolean =
      selectedplatform === "All" || post.platform === selectedplatform;
    return matchesSearch && matchesDifficulty && matchesPlatform;
  });

  if (selectedPost) {
    return (
      <div>
        <SelectedProgramming
          selectedCard={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">프로그래밍</h2>
        <p className="text-lg text-gray-600">
          코딩테스트 문제 풀이와 알고리즘 학습 기록
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="제목, 내용, 태그로 검색 ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <Filter size={16} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">난이도:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-gray-200 rounded px-3 py-1 text-sm"
            >
              {difficulties.map((difficulty) => (
                <option value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">플랫폼:</span>
            <select
              value={selectedplatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="border border-gray-200 rounded px-3 py-1 text-sm"
            >
              {platforms.map((platform) => (
                <option value={platform}>{platform}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <div key={post.id} onClick={() => setSelectedPost(post)}>
            <ProgrammingCard key={post.id} {...post} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
