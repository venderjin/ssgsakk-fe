"use client";
import React, { useState } from "react";
import BottomPurchaseOptionBox from "@/components/pages/products/purchase/BottomPurchaseOptionBox";

interface SelectedOptionAndQuantity {
  optionCombId: number;
  optionString: string;
  quantity: number;
}

interface OptionType {
  optionId: number;
  quantity: number;
}

interface OrderData {
  productId: number;
  optionList: OptionType[];
}

interface Props {
  productId: number;
  changeMode: (mode: string) => void;
  mode: string;
}

const BottomPurchaseSwitcher = ({ productId, changeMode, mode }: Props) => {
  const [orderData, setOrderData] = useState<OrderData>({
    productId: productId,
    optionList: [],
  });

  const onChangeOrderData = (data: SelectedOptionAndQuantity[]) => {
    setOrderData({
      productId: productId,
      optionList: data.map((item) => {
        return {
          optionId: item.optionCombId,
          quantity: item.quantity,
        };
      }),
    });
  };

  const orderHandler = () => {
    console.log(orderData);
  };

  return (
    <>
      <div className="w-full h-[52px] fixed left-0 right-0 bottom-0 bg-white flex font-Pretendard ">
        <button className="w-1/2 border-t-[1px] bg-[#121314] flex justify-center items-center">
          <span className="text-[17px] text-[#fff]">장바구니</span>
        </button>

        <button
          onClick={() => orderHandler()}
          className="w-1/2 h-[52px] bg-primary-red border-t-[1px] flex justify-center items-center"
        >
          <div className={`${mode === "purchase" ? "block" : "hidden"} flex`}>
            <div className=" w-[22px] h-[22px] mr-[4px] bg-product-opt-icon bg-[position:-68px_-126px] bg-[size:194px_171px] align-middle" />
            <span className="text-[17px] text-[#fff]">바로 구매</span>
          </div>
          <span
            className={`${
              mode === "gift" ? "block" : "hidden"
            } text-[17px] text-[#fff]`}
          >
            바로 선물하기
          </span>
        </button>
      </div>
      <BottomPurchaseOptionBox
        changeMode={changeMode}
        onChangeOrderData={onChangeOrderData}
      />
    </>
  );
};

export default BottomPurchaseSwitcher;
