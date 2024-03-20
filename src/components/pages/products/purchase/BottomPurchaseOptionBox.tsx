import React, { useState } from "react";
import PurchaseTotal from "@/components/pages/products/purchase/PurchaseTotal";
import OptionDropBoxList from "@/components/pages/products/purchase/OptionDropBoxList";
import BottomUpBox from "@/components/UI/BottomUpBox";

interface Props {
  changeMode: (mode: string) => void;
  productId: number;
}

interface selectedOption {
  optionId: number;
  optionType: string;
  data: string;
  quantity: number;
}

const BottomPurchaseOptionBox = ({ changeMode, productId }: Props) => {
  const [selectedOption, setSelectedOption] = useState<selectedOption[]>([]);
  const price = 0;
  const onClick = () => {
    changeMode("default");
  };

  return (
    <BottomUpBox onClickHandler={onClick} bottom={52}>
      {/* 옵션박스 */}
      <div className="w-full max-h-[391px] pb-[15px]">
        <OptionDropBoxList />
        <PurchaseTotal totalPrice={price} />
      </div>
    </BottomUpBox>
  );
};

export default BottomPurchaseOptionBox;
