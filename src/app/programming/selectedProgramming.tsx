import React, { useEffect } from "react";
import { Programming } from "./programming";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";

type Props = { selectedCard: Programming; onBack: () => void };

const SelectedProgramming = ({ selectedCard, onBack }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 ">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        뒤로 돌아가기
      </button>

      <div className="flex items-center space-x-4 mb-4">
        <span className="bg-blue-100 text-blue-800 rounded-full text-sm font-medium px-3 py-1">
          {selectedCard.platform}
        </span>
        <span className="bg-green-100 text-green-900 rounded-full text-sm font-medium px-3 py-1">
          {selectedCard.difficulty}
        </span>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {selectedCard.title}
      </h2>
      <div className="flex items-center text-gray-500 mb-6">
        <Calendar size={16} className="mr-2" />
        <span className="mr-4">{selectedCard.date}</span>
        <Clock size={16} className="mr-2" />
        <span>{selectedCard.readTime}</span>
      </div>

      {selectedCard.image && (
        <Image
          src={selectedCard.image}
          alt={selectedCard.title}
          height={30}
          width={64}
          className="bg-gray-100 w-full"
        />
      )}

      <div className="prose max-w-none">
        <div className="whitespace-pre-line text-gray-700 leading-relaxed">
          {selectedCard.content}
        </div>
      </div>
    </main>
  );
};

export default SelectedProgramming;
