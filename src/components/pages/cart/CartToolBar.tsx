import React from "react";

const CartToolBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 font-Pretendard">
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #000)",
          opacity: 0.15,
        }}
        className="absolute block top-[-12px] left-0 right-0 h-[24px] "
      ></div>
      <div className="relative p-[18px] bg-[#fff] rounded-t-[8px]">
        <p className="text-[14px] text-[#222] ">
          <span>전체상품 5개</span>
          <span>원 + 배송비 9000원</span>
          <span className="font-bold">원</span>
        </p>
      </div>

      <div>
        <button className="w-full h-[50px] bg-primary-red text-[#fff] text-[14px]">
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartToolBar;
