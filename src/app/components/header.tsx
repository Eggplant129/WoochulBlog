import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    // <header className="w-full h-16 flex items-center justify-between border-b px-6 sticky">
    //   <div className="flex-1 bg-red-100 mr-2"></div>
    //   <div className="">
    //     <Link href="/" className="text-xl font-bold">
    //       Woochul's Blog
    //     </Link>
    //   </div>
    //   <nav className="flex-1 justify-end flex gap-6 ml-2">
    //     <Link href="/about" className="hover:underline">
    //       ABOUT
    //     </Link>
    //     <Link href="/project" className="hover:underline">
    //       PROJECT
    //     </Link>
    //     <Link href="/internship" className="hover:underline">
    //       INTERNSHIP
    //     </Link>
    //     <Link href="/contact" className="hover:underline">
    //       CONTACT
    //     </Link>
    //   </nav>
    // </header>

    <header className="bg-white border-b">
      {/* Container */}
      <div className=" mx-auto px-4 py-4 max-w-6xl">
        {/* Layout */}
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Woochul's Blog</h1>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-gray-900 font-bold text-xl">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors text-xl"
            >
              About
            </Link>
            <Link
              href="/project"
              className="text-gray-700 hover:text-gray-900 transition-colors text-xl"
            >
              Project
            </Link>
            <Link
              href="/programming"
              className="text-gray-700 hover:text-gray-900 transition-colors text-xl"
            >
              Programming
            </Link>
            <Link
              href="/book"
              className="text-gray-700 hover:text-gray-900 transition-colors text-xl"
            >
              Book
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
