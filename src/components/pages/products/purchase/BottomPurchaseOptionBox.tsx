import React, { useState } from "react";
import PurchaseTotal from "@/components/pages/products/purchase/PurchaseTotal";
import OptionDropBoxList from "@/components/pages/products/purchase/OptionDropBoxList";
import BottomUpBox from "@/components/UI/BottomUpBox";
import SelectedOptionCardList from "@/components/pages/products/purchase/SelectedOptionCardList";

interface SelectedOption {
  type: string;
  optionId?: number;
  data?: string;
}

interface SelectedOptionAndQuantity {
  optionCombId: number;
  optionComb: SelectedOption[];
  quantity: number;
}

interface Props {
  changeMode: (mode: string) => void;
  productId: number;
  price: number;
  discountPer: number;
}

const BottomPurchaseOptionBox = ({
  changeMode,
  productId,
  price,
  discountPer,
}: Props) => {
  const [selectedOptionCombonations, setOptionCombonations] = useState<
    SelectedOptionAndQuantity[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const sellingPrice = price - price * (discountPer / 100);

  // 옵션 조합 ID 생성 함수
  const generateOptionCombId = (): number => {
    // 현재 시간을 기반으로 고유한 ID 생성
    return Date.now();
  };

  const handleOptionSelect = (option: SelectedOption[]) => {
    const optionCombId = generateOptionCombId(); // 옵션 조합 ID 생성

    const updateData = { optionCombId, optionComb: option, quantity: 1 };

    // 중복된 옵션이 있는지 확인
    const isDuplicate = selectedOptionCombonations.some(
      (item) => JSON.stringify(item.optionComb) === JSON.stringify(option)
    );

    if (isDuplicate) {
      alert("이미 동일한 옵션이 있습니다.");
    } else {
      setOptionCombonations([...selectedOptionCombonations, updateData]);

      // 총 가격 계산
      const newTotalPrice = totalPrice + sellingPrice * updateData.quantity;
      setTotalPrice(newTotalPrice);
    }
  };

  const onQuantityChange = (optionCombId: number, newQuantity: number) => {
    // 변경된 수량을 반영하여 총 가격을 업데이트
    const updatedOptions = selectedOptionCombonations.map((option) => {
      if (option.optionCombId === optionCombId) {
        const priceDifference = (newQuantity - option.quantity) * sellingPrice;
        setTotalPrice(totalPrice + priceDifference);
        return { ...option, quantity: newQuantity };
      }
      return option;
    });

    setOptionCombonations(updatedOptions);
  };

  const deleteOption = (optionCombId: number) => {
    const deletedOption = selectedOptionCombonations.find(
      (option) => option.optionCombId === optionCombId
    );

    // 삭제될 옵션의 가격을 계산
    if (deletedOption) {
      const deletedOptionPrice = sellingPrice * deletedOption.quantity;
      const newTotalPrice = totalPrice - deletedOptionPrice;
      setTotalPrice(newTotalPrice);
    }

    const updatedOptions = selectedOptionCombonations.filter(
      (option) => option.optionCombId !== optionCombId
    );

    setOptionCombonations(updatedOptions);
  };

  const onClick = () => {
    changeMode("default");
  };

  return (
    <BottomUpBox onClickHandler={onClick} bottom={52}>
      {/* 옵션박스 */}
      <div className="w-full max-h-[391px] pb-[15px]">
        <div className="max-h-[255px] overflow-auto">
          <OptionDropBoxList onOptionSelect={handleOptionSelect} />
          <SelectedOptionCardList
            deleteOption={deleteOption}
            sellingPrice={sellingPrice}
            selectOption={selectedOptionCombonations}
            onQuantityChange={onQuantityChange}
          />
        </div>
        <PurchaseTotal totalPrice={totalPrice} />
      </div>
    </BottomUpBox>
  );
};

export default BottomPurchaseOptionBox;
