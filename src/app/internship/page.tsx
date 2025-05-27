import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <section
          className="flex items-center justify-center py-16 gap-16"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="w-[550px] h-[400px] border">Picture</div>
          <div className="">
            {/* <div>
              <h2 className="text-4xl font-bold mb-2">Back-End by nature.</h2>
              <h2 className="text-4xl font-bold mb-4">Developer by choice.</h2>
            </div> */}
            <p className="text-lg max-w-2xs text-gray-800 text-justify indent-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
