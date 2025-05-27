import React from "react";

const Page = () => {
  return (
    <div
      className="flex justify-center items-center gap-30"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      {/* Component 별로 pop-up 모달 또는 링크를 통해 프로젝트 열람 가능해야함. May 26 */}
      <div>
        <div className="w-[250px] h-[450px] border  bg-blue-300 mb-4">
          첫 프로젝트 - 홈페이지 부분 담당, 리액트의 기초 이해, 작동방식 확인
          2인 협업 프로젝트, 깃허브 이해.
        </div>
        <h1 className="justify-center flex text-1xl font-bold">
          Career Center Website
        </h1>
      </div>
      <div>
        <div className="w-[250px] h-[450px] border  bg-blue-300 mb-4">
          3인 협업 프로젝트, 삶에 필요한 아이디어를 현실적으로 구현 결과...홍보
          실패긴 한데 잘 꾸며야지 뭐
        </div>
        <h1 className="justify-center flex text-1xl font-bold">
          저녁 메뉴 추천
        </h1>
      </div>
      <div>
        <div className="w-[250px] h-[450px] border  bg-blue-300 mb-4">
          인턴쉽 중 부족한 부분 확인 후 나만의 방식으로 새로 리모델링.
        </div>
        <h1 className="justify-center flex text-1xl font-bold">
          KM TECH Website Remodelling
        </h1>
      </div>
    </div>
  );
};

export default Page;
