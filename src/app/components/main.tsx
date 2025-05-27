import React from "react";

const Main = () => {
  return (
    <div>
      <section
        className="flex items-center justify-evenly px-10 bg-red-10"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="w-[500px] h-[500px] border rounded-full bg-blue-300"></div>
        <div className="">
          <h1 className="text-5xl font-bold mb-6">Hello!</h1>
          <p>This is Woochul's World</p>
          <p>코딩을 좋아하는 나</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
