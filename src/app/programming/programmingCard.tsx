import React from "react";
import { Programming } from "./programming";
import { Calendar, Clock } from "lucide-react";
type programmingCard = Programming;

const ProgrammingCard = ({
  id,
  title,
  excerpt,
  content,
  date,
  readTime,
  difficulty,
  platform,
  tags,
  image,
}: programmingCard) => {
  return (
    <article className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-gray-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
            {platform}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
            {difficulty}
          </span>
        </div>

        <div className="flex items-center text-gray-400 text-sm">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        {title}
      </h2>

      <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {tags.slice(0, 4).map((tag, index) => (
            <span className="bg-gray-100 rounded text-gray-700 px-2 py-1 text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-gray-500">
          <Clock size={14} className="mr-1" />
          <span className="text-sm">{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default ProgrammingCard;
