import React from "react";
import Image from "next/image";
import { themeData } from "@/libs/categoryData";

export default function ThemeList() {
  return (
    <div className="ml-[15px]">
      <h2 className="px-[15px] pt-[20px] pb-[5px] font-Pretendard text-[14px] font-bold">
        <span>테마추천</span>
      </h2>
      <div className="pb-[15px] ">
        <ul className="grid grid-cols-2">
          {themeData.map((theme) => (
            <li className="">
              <Image
                className="rounded-[8px]"
                src={`/images/category/${theme.img}.png`}
                alt={theme.img}
                width={172.5}
                height={103.5}
              ></Image>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
