"use client";
import Toggle from "@/components/UI/Toggle";
import { cartSelectedState } from "@/recoil/selectors/cartSortState";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

const CartControl = ({
  setShowCheckedItem,
  checkAllCartItem,
  deleteCartItem,
}: {
  setShowCheckedItem: (check: boolean) => void;
  checkAllCartItem: (check: boolean) => void;
  deleteCartItem: (cartSeq: number) => void;
}) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const selectedItem = useRecoilValue(cartSelectedState);

  const deleteHandler = () => {
    if (selectedItem.length === 0) {
      return alert("삭제할 상품을 선택해주세요.");
    }
    if (confirm("선택된 상품을 삭제하시겠습니까?")) {
      selectedItem.forEach((item) => {
        deleteCartItem(item.cartSeq);
      });
    }
  };

  useEffect(() => {
    checkAllCartItem(isCheckAll);
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
          <button onClick={deleteHandler} className="mr-[10px]">
            선택삭제
          </button>
          <span className="mr-[2px]">선택상품만 보기</span>
          <Toggle onChangeHandler={setShowCheckedItem} />
        </div>
      </div>
    </div>
  );
};

export default CartControl;
