"use client";
import React, { useState } from "react";
import { categoryData } from "@/libs/categoryData";
import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const handleClick = (id: number) => {
    setSelectedCategory(id);
  };

  return (
    <ul className="grid grid-cols-5 px-[10px] pt-[15px] pb-[25px]">
      {categoryData.map((category) => (
        <li key={category.id}>
          <a
            onClick={() => handleClick(category.id)}
            className="flex flex-col justify-center items-center p-[5px]"
          >
            <Image
              src={`/images/category/${category.id}.png`}
              alt={category.name}
              width={64}
              height={64}
            ></Image>
            <span className="mt-[5px] text-[12px] text-[#424242] font-Pretendard whitespace-pre-wrap tracking-tighter leading-tight  text-center">
              {category.name}
            </span>
          </a>
          {selectedCategory === category.id && (
            <div style={{ height: `${category.height}px` }}>
              <div className="absolute left-0 w-full ">
                <ul className="bg-[#f5f5f5] my-[5px] grid grid-cols-2 pl-[13px] pt-[12px] pr-[12px] pb-[20px]">
                  {category.subCategories.map((item) => (
                    <li
                      className="font-Pretendard text-[14px] min-h-[38px] pl-[12px] pr-[13px] tracking-tight flex items-center"
                      key={item.id}
                    >
                      <Link href={`/category/${item.id}`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
