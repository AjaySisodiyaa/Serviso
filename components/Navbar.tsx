import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <div className="bg-gray-700 py-5 sm:p-5  border-b-1 border-amber-500 flex justify-between w-[100vw] shadow-lg shadow-gray-700">
      <Link href="/" className="text-3xl text-amber-300 font-bold">
        Serviso
      </Link>
      {/* <div className="w-full h-full">
        <SearchFilter posts={posts} />
      </div> */}
      <div className="sm:font-bold text-white">
        <ul className="text-sm flex gap-1 sm:gap-10 hover:cursor-pointer">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
