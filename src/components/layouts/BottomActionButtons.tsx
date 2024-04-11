"use client";
import React, { useState } from "react";
import BottomPurchaseMain from "@/components/pages/products/purchase/BottomPurchaseMain";
import BottomPurchaseSwitcher from "@/components/pages/products/purchase/BottomPurchaseSwitcher";
import { OptionResponse } from "@/types/optionType";
import BottomSoldOutButton from "../pages/products/purchase/BottomSoldOutButton";

type Props = {
  optionData: OptionResponse;
  productId: number;
  productName: string;
  productPrice: number;
  discountPercent: number;
};

const BottomActionButtons = ({
  optionData,
  productId,
  productName,
  productPrice,
  discountPercent,
}: Props) => {
  const minimumStock = 5;
  const [bottomMode, setBottomMode] = useState<string>("default");
  const onChangeBottomMode = (mode: string) => {
    setBottomMode(mode);
  };

  return (
    <>
      {/* 단일옵션&&옵션재고가 5개 이하일 때  */}
      {!optionData.depthLevel && optionData.options[0].stock <= minimumStock ? (
        <BottomSoldOutButton />
      ) : (
        <>
          {bottomMode === "default" ? (
            <BottomPurchaseMain
              changeMode={onChangeBottomMode}
              productSeq={productId}
            />
          ) : (
            <BottomPurchaseSwitcher
              productId={productId}
              productName={productName}
              productPrice={productPrice}
              discountPercent={discountPercent}
              changeMode={onChangeBottomMode}
              mode={bottomMode}
            />
          )}
        </>
      )}
    </>
  );
};

export default BottomActionButtons;
