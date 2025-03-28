import Carousel from "@/components/Carousel";
import { getSinglePost } from "@/helpers";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const page = async ({ searchParams }: Props) => {
  const { _id } =  searchParams;
  const _idString = Number(_id);
  const post = await getSinglePost(_idString);
  return (
    <div className="h-full max-w-screen-xl flex flex-col lg:flex-row items-center gap-10 px-0 sm:px-10 py-20 mx-auto">
      <div className="w-full h-full max-w-[400px] lg:max-w-[600px] ">
        <Carousel autoSlide>
          {post?.image.map((s: string) => (
            <Image
              src={s}
              key={s}
              alt="image"
              width={800}
              height={800}
              className="h-fit w-fit min-h-[600] shadow-lg shadow-amber-400"
            />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col gap-10 px-3">
        <p className="text-2xl md:text-5xl font-semibold">{post?.title}</p>
        <p className="text-gray-500 text-xl lg:text-lg">{post?.description}</p>
        <p className="text-2xl font-bold text-gray-700">
          Price : ₹{post?.price}
        </p>
        <p>Category : {post?.category}</p>
        <p className="font-bold text-amber-600 text-xl">
          {post?.isNew && "New Item"}
        </p>
      </div>
    </div>
  );
};

export default page;
