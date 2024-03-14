"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FloatingLeft() {
  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 bottom-[56px]">
      <div className="absolute left-[16px] right-0 bottom-[10px] z-[100]">
        <button
          className="w-[40px] h-[40px] rounded-[15px] border-solid border-[#f5f5f5] border-opacity-95 bg-white bg-opacity-90 shadow-md flex items-center justify-center"
          type="button"
          onClick={() => router.back()}
        >
          <Image
            src="/images/etc/leftArrow.png"
            alt="뒤로가기"
            width={20}
            height={20}
          ></Image>
        </button>
      </div>
    </div>
  );
}
