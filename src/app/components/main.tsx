import React from "react";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";
import RecentPostSection from "./recentPostSection";

const Main = () => {
  return (
    // <div>
    //   <section
    //     className="flex items-center justify-evenly px-10 bg-red-10"
    //     style={{ height: "calc(100vh - 4rem)" }}
    //   >
    //     <div className="w-[500px] h-[500px] border rounded-full bg-blue-300"></div>
    //     <div className="">
    //       <h1 className="text-5xl font-bold mb-6">Hello!</h1>
    //       <p>This is Woochul's World</p>
    //       <p>코딩을 좋아하는 나</p>
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center">
            {/* My emoji */}
            <div className="flex-1">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto shadow-lg"></div>
            </div>

            {/* Description of me */}
            <div className="flex-1 pl-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                안녕하세요!
              </h2>
              <h3 className="text-2xl text-gray-700 mb-6">
                마음이 움직이는 순간들을 기록하는
                <span className="text-blue-600 font-semibold"> 우철</span>
                입니다.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                이 블로그에서는 제가 배우고 경험한 것들을 정리하고 공유합니다.
              </p>

              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/Eggplant129"
                  className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Github
                </Link>
                <Link
                  href="mailto:woochul129@gmail.com"
                  className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              최근 게시물
            </h2>
            <p className="text-gray-600 text-lg">
              삶의 다양한 부분들을 기록하고 있습니다.
            </p>
          </div>
          <RecentPostSection />
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            모든 글 보기 <ArrowRight className=" w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
