"use client";
import React, { useState } from "react";
import HeartIcon from "@/components/UI/HeartIcon";

const BottomActionButtons = () => {
  const [isCheck, setIsCheck] = useState<Boolean>(false);
  const handler = () => {
    setIsCheck(!isCheck);
    console.log("checked");
  };

  return (
    <div className="w-full h-[50px] fixed left-0 right-0 bottom-0 bg-white flex font-Pretendard ">
      <button
        onClick={() => handler()}
        className="w-[54px] h-[52px] border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center"
      >
        <HeartIcon height={28} width={28} handleLike={() => handler()} />
      </button>

      <button className="w-[110px] h-[52px] border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center">
        <div className=" w-[18px] h-[19px] mr-[4px] bg-product-icon bg-[position:-456px_-63px] bg-[size:524px_479px] align-middle" />
        <span className="text-[17px] ">선물하기</span>
      </button>

      <button className="flex-grow h-[52px] bg-primary-red border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center">
        <span className="text-[17px] text-[#fff]">구매하기</span>
      </button>
    </div>
  );
};

export default BottomActionButtons;
