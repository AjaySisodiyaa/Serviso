// "use client";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import SearchFilter from "./SearchFIlter";

interface PostProps {
  _id: number;
  title: string;
  discription: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  posts: PostProps[];
}

const getPost = async () => {
  const res = await fetch("http://localhost:3000/api/postjson");

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
};
const Posts = async ({ posts }: Props) => {
  const searchPost = await getPost();

  return (
    <>
      <div className="w-full h-full">
        <SearchFilter posts={searchPost} />
      </div>
      {/* <div className="max-w-screen-xl mx-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 ">
        {posts.map((item) => (
          <Link
            href={{ pathname: "/singlepost", query: { _id: item?._id } }}
            key={item._id}
          >
            <div className="w-[350px] h-full mx-auto border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300 rounded-lg shadow-lg shadow-cyan-300">
              <Image
                src={item?.image[0]}
                width={500}
                height={500}
                alt="product image"
                className="w-full h-fit object-cover"
              />
              <div className="px-4 pb-2 test-md flex flex-col gap-1">
                <p className="text-gray-600">{item?.title}</p>
                <p className="font-semibold">₹{item?.price}</p>
                <div className="flex items-center justify-between">
                  <button className="uppercase font-semibold text-sm text-blue-700 duration-200 ">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default Posts;
