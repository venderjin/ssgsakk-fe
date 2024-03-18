import React from "react";
import { footerData } from "@/libs/categoryData";
import Link from "next/link";

export default function CategoryFooter() {
  return (
    <div className="bg-[#555] pt-[30px] pb-[170px] text-center">
      {footerData.map((data, index) => (
        <Link key={data.id} href={data.url}>
          <span
            className={`pr-[10px] font-Pretendard text-[12px] text-[#cccccc] align-middle ${
              !index ? "" : "vetical-line"
            } `}
          >
            {data.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
