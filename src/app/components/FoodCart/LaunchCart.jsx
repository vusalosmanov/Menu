"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component

const LaunchCart = ({ categories }) => {
  const router = useRouter();

  const handleClick = (item) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-[20px] w-full text-white">
      {categories.map((item) => (
        <div
          key={item.id}
          className="w-[350px] h-[350px] flex flex-col items-center justify-center bg-gray-800 cursor-pointer relative overflow-hidden "
          onClick={() => handleClick(item)}
        >
          <div className=" w-full h-[350px] relative">
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <h4 className="text-[28px] font-semibold mt-4 text-center absolute">{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LaunchCart;
