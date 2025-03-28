"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function SearchFilter({ posts }: Props) {
  const [search, setSearch] = useState("");
  const searchPost = posts.filter(
    (post) =>
      post?.title.toLowerCase().includes(search.toLowerCase()) ||
      post?.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="max-w-md mx-auto mt-10  ">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full shadow-lg shadow-amber-300 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <ul className="mt-4 space-y-2">
          {posts.map((post, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              {post.title.toLowerCase().includes(search)
                ? post.title
                : "no post"}
            </li>
          ))}
        </ul> */}
      </div>

      {/* post */}
      <div className="max-w-screen-xl mx-w-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 ">
        {searchPost.map((item) => (
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
      </div>
    </>
  );
}
