import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between border-b px-6 sticky">
      <div className="flex-1 bg-red-100 mr-2"></div>
      <div className="">
        <Link href="/" className="text-xl font-bold">
          Woochul's Blog
        </Link>
      </div>
      <nav className="flex-1 justify-end flex gap-6 ml-2">
        <Link href="/about" className="hover:underline">
          ABOUT
        </Link>
        <Link href="/project" className="hover:underline">
          PROJECT
        </Link>
        <Link href="/internship" className="hover:underline">
          INTERNSHIP
        </Link>
        <Link href="/contact" className="hover:underline">
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
