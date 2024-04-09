import React from "react";

const CartTotalCard = () => {
  return (
    <div className="pb-[150px] font-Pretendard">
      <div className="px-[16px] pt-[16px] pb-[20px]">
        <h3 className="text-[20px] text-[#222] font-bold">결제 예정금액</h3>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>주문금액</span>
          <span>+49302749원</span>
        </div>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>상품할인</span>
          <span className="text-primary-red">-49302749원</span>
        </div>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>배송비</span>
          <span>+49302749원</span>
        </div>

        <div className="mt-[20px] flex justify-between w-full">
          <span className="text-[15px] font-semibold">총 결제예정금액</span>
          <span className="text-[20px] font-bold">3392043원</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotalCard;
