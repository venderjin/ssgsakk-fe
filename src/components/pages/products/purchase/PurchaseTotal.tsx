import React from "react";

const PurchaseTotal = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="w-full h-[57px] flex items-center justify-end pt-[6px] pr-[20px] pb-[5px] ">
      <strong className="text-[16px] text-[#222] mr-[6px] mt-[2px]">
        총 합계
      </strong>
      <strong className="text-[25px] text-[#ff5452]">
        <em className="not-italic">{totalPrice.toLocaleString()}</em>
        <span>원</span>
      </strong>
    </div>
  );
};

export default PurchaseTotal;
