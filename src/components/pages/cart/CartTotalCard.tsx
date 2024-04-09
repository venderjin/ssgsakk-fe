"use client";
import { cartDiscountPrice, cartProductPrice } from "@/recoil/atoms/cartState";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const CartTotalCard = () => {
  const cartTotalPrice = useRecoilValue(cartProductPrice);
  const cartTotalDiscount = useRecoilValue(cartDiscountPrice);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartTotalPrice < 50000) {
      setShippingFee(3000);
    } else {
      setShippingFee(0);
    }

    setTotalPrice(cartTotalPrice - cartTotalDiscount + shippingFee);
  }, [cartTotalPrice, cartTotalDiscount]);
  return (
    <div className="pb-[150px] font-Pretendard">
      <div className="px-[16px] pt-[16px] pb-[20px]">
        <h3 className="text-[20px] text-[#222] font-bold">결제 예정금액</h3>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>주문금액</span>
          <span>+{cartTotalPrice.toLocaleString()}원</span>
        </div>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>상품할인</span>
          <span className="text-primary-red">
            -{cartTotalDiscount.toLocaleString()}원
          </span>
        </div>
        <div className="mt-[6px] text-[14px] text-[#222] flex justify-between w-full">
          <span>배송비</span>
          <span>+{shippingFee.toLocaleString()}원</span>
        </div>

        <div className="mt-[20px] flex justify-between w-full">
          <span className="text-[15px] font-semibold">총 결제예정금액</span>
          <span className="text-[20px] font-bold">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartTotalCard;
