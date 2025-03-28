import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 w-full h-full p-5 flex justify-between">
        <div className="font-bold text-white">
          <Link href="/" className="text-3xl text-amber-300 font-bold m-5">
            Serviso
          </Link>
          <ul className="ml-10 mt-10 flex flex-col gap-10">
            <li className="hover:cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 justify-center items-center flex w-full h-full text-white cursor-default">
        All Rights Reserved @serviso
      </div>
    </>
  );
};

export default Footer;
