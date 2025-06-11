import React from "react";
import Link from "next/link";
import { Code, Heart, BookOpen, Coffee, Github, Mail } from "lucide-react";

const Page = () => {
  return (
    // <div>
    //   <section
    //     className="flex items-center justify-center py-16 gap-16"
    //     style={{ height: "calc(100vh - 4rem)" }}
    //   >
    //     <div className="">
    //       <div>
    //         <h2 className="text-4xl font-bold mb-2">Back-End by nature.</h2>
    //         <h2 className="text-4xl font-bold mb-4">Developer by choice.</h2>
    //       </div>
    //       <p className="text-lg max-w-xl text-gray-800 text-justify indent-8">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </p>
    //     </div>
    //     <div className="w-[400px] h-[500px] border">Picture</div>
    //   </section>
    // </div>

    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-red-100 flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Hero Section */}
          <div className="flex shrink-0">
            <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-6xl font-light">W</span>
            </div>
          </div>

          <div className="bg-red-200 flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              안녕하세요 :&#41;
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              이 페이지는 저와 저의 관심분야를 소개합니다.
              <br />
              코딩뿐만 아니라 일상의 생각과 인사이트도 함께 나누고 있어요.
            </p>
          </div>
        </div>

        {/* About Sections */}
        <div className="bg-red-100 grid md:grid-cols-2 gap-12 mb-16">
          {/* 개발 이야기 */}
          <div className="bg-gray-100 p-8 rounded-xl">
            <div className="bg-red-200 flex items-center mb-4">
              <Code className="text-blue-500 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">개발 이야기</h3>
            </div>
            <p className="text-gray-600 mb-4">
              처음에는 단순한 코딩 포트폴리오로 시작했지만, 지금은 제 삶과
              생각을 담는 공간이 되었습니다.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li> Next.js와 React를 주로 사용합니다</li>
              <li> 깔끔하고 직관적인 UI/UX를 추구해요</li>
              <li> 새로운 기술 학습을 즐깁니다</li>
            </ul>
          </div>
          {/* 일상 이야기 */}
          <div className="bg-gray-100 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <Heart className="text-red-500 mr-3" size={24} />
              <h3 className="texdt-xl font-bold text-gray-900">일상 이야기</h3>
            </div>
            <p className="text-gray-600 mb-4">
              코딩 외에도 다양한 관심사와 경험들을 블로그에 기록하고 있습니다.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>책 읽기와 지식 공유를 좋아해요</li>
              <li>새로운 아이디어를 실현하는 것을 즐깁니다</li>
              <li>소통과 피드백을 소중히 여겨요</li>
            </ul>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="mb-16">
          <h3 className="bg-red-200 text-2xl font-bold text-gray-900 mb-8 text-center">
            관심분야
          </h3>

          <div className="bg-red-300 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-200 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Code className="text-blue-600" size={24} />
              </div>
              <h4 className="font-medium">Front-end</h4>
              <p className="text-sm text-gray-600">React, Next.js</p>
            </div>

            <div className="bg-blue-200 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <h4 className="font-medium">독서</h4>
              <p className="text-sm text-gray-600">지식 습득</p>
            </div>

            <div className="bg-blue-200 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h4 className="font-medium">창작</h4>
              <p className="text-sm text-gray-600">아이디어 실현</p>
            </div>

            <div className="bg-blue-200 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Coffee className="text-orange-600" size={24} />
              </div>
              <h4 className="font-medium">소통</h4>
              <p className="text-sm text-gray-600">경험 공유</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-50 py-12 px-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            함께 소통해요
          </h3>
          <p className="text-gray-600 mb-8">
            궁금한 것이 있거나 함께 이야기하고 싶은 주제가 있다면 언제든
            연락주세요!
          </p>
          <div className="bg-red-100 flex justify-center space-x-4">
            <Link
              href="https://github.com/Eggplant129"
              className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              <span>GitHhub에서 만나요</span>
            </Link>
            <Link
              href="mailto:woochul129@gmail.com"
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail size={20} />
              <span>이메일 보내기</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
