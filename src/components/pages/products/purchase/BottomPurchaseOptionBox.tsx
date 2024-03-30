import React, { useState, useEffect, useCallback } from "react";
import PurchaseTotal from "@/components/pages/products/purchase/PurchaseTotal";
import OptionDropBoxList from "@/components/pages/products/purchase/OptionDropBoxList";
import BottomUpBox from "@/components/UI/BottomUpBox";
import SelectedOptionCardList from "@/components/pages/products/purchase/SelectedOptionCardList";

interface SelectedOptionAndQuantity {
  optionCombId: number;
  optionString: string;
  quantity: number;
}

interface Option {
  explain?: string;
  explain2?: string;
  explain3?: string;
  stock: number;
  optionAndStockSeq: number;
}

interface OptionType {
  type: string;
  optionList: string[];
}

interface Props {
  changeMode: (mode: string) => void;
  onChangeOrderData: (orderData: SelectedOptionAndQuantity[]) => void;
}

const BottomPurchaseOptionBox = ({ changeMode, onChangeOrderData }: Props) => {
  const [optionNumber, setOptionNumber] = useState<number>(0);
  const [optionList, setOptionList] = useState<OptionType[]>([]);
  const [optionStock, setOptionStock] = useState<Option[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [selectedOptionCombonations, setOptionCombonations] = useState<
    SelectedOptionAndQuantity[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    onChangeOrderData(selectedOptionCombonations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptionCombonations]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3300/optionData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });

      if (res.ok) {
        const data = await res.json();
        setOptionNumber(data.depthLevel);
        setOptionStock(data.options);
        setOptionList(setOoptionList(data));
        setPrice(data.price);
        const sellingPrice =
          data.price - data.price * (data.discountPercent / 100);

        setSellingPrice(sellingPrice);
      }

      if (res.status === 400) {
        console.log("잘못된 요청입니다.");
      }
    };

    fetchData();
  }, []);

  const setOoptionList = (data: any) => {
    const optionData: OptionType[] = [];
    for (let i = 1; i <= data.depthLevel; i++) {
      const optionList: Set<string> = new Set();
      data.options.forEach((option: Option) => {
        if (i === 1) optionList.add(option.explain || "");
        else if (i === 2) optionList.add(option.explain2 || "");
        else if (i === 3) optionList.add(option.explain3 || "");
      });

      const option: OptionType = { type: "", optionList: [] };
      if (i === 1) {
        option.type = data.firstDepthName;
        option.optionList = Array.from(optionList);
      } else if (i === 2) {
        option.type = data.secondDepthName;
        option.optionList = Array.from(optionList);
      } else if (i === 3) {
        option.type = data.thirdDepthName;
        option.optionList = Array.from(optionList);
      }
      optionData.push(option);
    }

    return optionData;
  };

  // const handleOptionSelect = (optionCombId: number) => {
  // setOptionCombonations((prev) => {
  //     console.log("prev: ", prev);
  //     const isDuplicate = prev.some(
  //       (item) => item.optionCombId === optionCombId
  //     );
  //     console.log(optionCombId);
  //     if (isDuplicate) {
  //       alert("이미 동일한 옵션이 있습니다.");
  //       return prev;
  //     }
  //     const newOption = { optionCombId, quantity: 1 };
  //     return [...prev, newOption];
  //   });
  //   console.log("next:", selectedOptionCombonations);
  // };
  const getOptionString = (optionCombId: number) => {
    const item = optionStock.filter(
      (option) => option.optionAndStockSeq === optionCombId
    )[0];
    let optionString: string = "";

    optionList.forEach((option, idx) => {
      if (idx === 0) optionString += `${option.type}:${item.explain} `;
      else if (idx === 1) optionString += `${option.type}:${item.explain2} `;
      else if (idx === 2) optionString += `${option.type}:${item.explain3}`;
    });

    return optionString.replace(" ", "/");
  };

  const handleOptionSelect = (optionCombId: number) => {
    const updateData = {
      optionCombId,
      optionString: getOptionString(optionCombId),
      quantity: 1,
    };

    // 중복된 옵션이 있는지 확인
    const isDuplicate = selectedOptionCombonations.some(
      (item) => item.optionCombId === optionCombId
    );

    if (isDuplicate) {
      alert("이미 동일한 옵션이 있습니다.");
    } else {
      const updateSelectedOptionCombination = [
        ...selectedOptionCombonations,
        updateData,
      ];
      setOptionCombonations(updateSelectedOptionCombination);
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
          <OptionDropBoxList
            optionList={optionList}
            optionStock={optionStock}
            onOptionSelect={handleOptionSelect}
          />
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
