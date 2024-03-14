import React from "react";
import Image from "next/image";
import { themeData } from "@/libs/categoryData";
import Link from "next/link";

export default function ThemeList() {
  return (
    <div className="ml-[15px] mb-[20px]">
      <h2 className="pt-[20px] pb-[5px] font-Pretendard text-[14px] font-bold">
        <span>테마추천</span>
      </h2>

      <ul className="pb-[15px] grid grid-cols-2">
        {themeData.map((theme) => (
          <li key={theme.id} className="mt-[10px] mr-[15px]">
            <Link href={theme.url}>
              <Image
                className="rounded-[8px] h-[103.5px] overflow-hidden overflow-y-auto"
                src={`/images/category/${theme.img}.png`}
                alt={theme.img}
                width={172.5}
                height={103.5}
              ></Image>

              <div className="pt-[5px] pb-[3px]">
                <span className="mt-[5px] font-bold text-[13px] text-[#424242] font-Pretendard whitespace-pre-wrap tracking-tighter leading-tight  text-center">
                  {theme.name}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
