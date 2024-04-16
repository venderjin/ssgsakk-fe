"use client";
import { useState, useEffect } from "react";
import { cartDiscountPrice, cartProductPrice } from "@/recoil/atoms/cartState";
import { cartSelectedState } from "@/recoil/selectors/cartSortState";
import { useRecoilValue, useRecoilState } from "recoil";

const CartToolBar = () => {
  const selectedItem = useRecoilValue(cartSelectedState);
  const cartTotalPrice = useRecoilValue(cartProductPrice);
  const cartTotalDiscount = useRecoilValue(cartDiscountPrice);
  const cartSellingPrice = cartTotalPrice - cartTotalDiscount;
  const shippingFee = cartTotalPrice < 50000 ? 3000 : 0;
  const totalPrice = cartSellingPrice + shippingFee;
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(selectedItem.length);
  }, [selectedItem]);

  const orderHandler = () => {
    alert("서비스 준비중입니다.");
  };

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
          <span>전체상품 {itemCount}개 </span>
          <span>
            {cartSellingPrice.toLocaleString()}원 + 배송비 &nbsp;
            {shippingFee.toLocaleString()}원
          </span>
          <span className="font-bold">
            &nbsp;=&nbsp;{totalPrice.toLocaleString()}원
          </span>
        </p>
      </div>

      <div>
        <button
          onClick={orderHandler}
          className="w-full h-[50px] bg-primary-red text-[#fff] text-[14px]"
        >
          주문하기
        </button>
      </div>
    </div>
  );
};

export default CartToolBar;
