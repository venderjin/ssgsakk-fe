"use client";
import Toggle from "@/components/UI/Toggle";
import { cartState } from "@/recoil/atoms/cartState";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const CartControl = ({
  setShowCheckedItem,
}: {
  setShowCheckedItem: (check: boolean) => void;
}) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartState);
  useEffect(() => {
    setCartList((prev) =>
      prev.map((item) => {
        return { ...item, checkbox: Number(isCheckAll) };
      })
    );
  }, [isCheckAll]);

  return (
    <div className="px-[16px] py-[10px] font-Pretendard">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isCheckAll}
          onChange={() => setIsCheckAll(!isCheckAll)}
          className={`w-[18px] h-[18px] border border-[#969696] mr-[5px] ${
            isCheckAll ? "accent-primary-red" : ""
          }`}
        />

        <div className="text-[13px] text-[#444444] flex items-center">
          <span className="mr-[10px]">전체</span>
          <span className="mr-[10px]">
            {isCheckAll ? "선택삭제" : "품절삭제"}
          </span>
          <span className="mr-[2px]">선택상품만 보기</span>
          <Toggle onChangeHandler={setShowCheckedItem} />
        </div>
      </div>
    </div>
  );
};

export default CartControl;
