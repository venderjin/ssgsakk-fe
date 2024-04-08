"use client";
import Toggle from "@/components/UI/Toggle";
import { useState, useEffect } from "react";

const CartControl = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="px-[16px] py-[10px] font-Pretendard">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={() => setIsCheck(!isCheck)}
          className={`w-[18px] h-[18px] border border-[#969696] mr-[5px] ${
            isCheck ? "accent-primary-red" : ""
          }`}
        />

        <div className="text-[13px] text-[#444444] flex items-center">
          <span className="mr-[10px]">전체</span>
          <span className="mr-[10px]">{isCheck ? "선택삭제" : "품절삭제"}</span>
          <span className="mr-[2px]">선택상품만 보기</span>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default CartControl;
