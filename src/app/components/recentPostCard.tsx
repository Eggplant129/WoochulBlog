import React from "react";
import { Clock, Calendar, ArrowRight } from "lucide-react";

type PostProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
};

const RecentPostCard = ({
  id,
  title,
  description,
  date,
  category,
  readTime,
}: PostProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shoadow duration-200 cursor-pointer">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
          {category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transision-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </div>
        <div className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-900 transition-colors">
          읽어보기 <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
