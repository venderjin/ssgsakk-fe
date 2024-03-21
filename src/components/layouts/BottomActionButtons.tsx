import React, { useState } from "react";
import BottomPurchaseMain from "@/components/pages/products/purchase/BottomPurchaseMain";
import BottomPurchaseSwitcher from "@/components/pages/products/purchase/BottomPurchaseSwitcher";
import BottomPurchaseOptionBox from "@/components/pages/products/purchase/BottomPurchaseOptionBox";

type Props = {
  productId: number;
  price: number;
  discountPer: number;
};

const BottomActionButtons = ({ productId, price, discountPer }: Props) => {
  const [bottomMode, setBottomMode] = useState<string>("default");
  const onChangeBottomMode = (mode: string) => {
    setBottomMode(mode);
  };

  return (
    <>
      {bottomMode === "default" ? (
        <BottomPurchaseMain changeMode={onChangeBottomMode} />
      ) : (
        <>
          <BottomPurchaseSwitcher
            changeMode={onChangeBottomMode}
            mode={bottomMode}
          />
          <BottomPurchaseOptionBox
            changeMode={onChangeBottomMode}
            productId={productId}
            price={price}
            discountPer={discountPer}
          />
        </>
      )}
    </>
  );
};

export default BottomActionButtons;
