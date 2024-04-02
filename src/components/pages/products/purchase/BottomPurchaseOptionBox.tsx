import React, { useState, useEffect } from "react";
import PurchaseTotal from "@/components/pages/products/purchase/PurchaseTotal";
import OptionDropBoxList from "@/components/pages/products/purchase/OptionDropBoxList";
import BottomUpBox from "@/components/UI/BottomUpBox";
import SelectedOptionCardList from "@/components/pages/products/purchase/SelectedOptionCardList";

import {
  OptionCombination,
  OptionInfo,
  SelectedOptionAndQuantity,
} from "@/types/optionType";
import { set } from "react-hook-form";

interface Props {
  productId: number;
  productName: string;
  productPrice: number;
  discountPercent: number;
  changeMode: (mode: string) => void;
  onChangeOrderData: (orderData: SelectedOptionAndQuantity[]) => void;
}

const BottomPurchaseOptionBox = ({
  productId,
  productName,
  productPrice,
  discountPercent,
  changeMode,
  onChangeOrderData,
}: Props) => {
  const [depthLevel, setDepthLevel] = useState<number>(0);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [optionList, setOptionList] = useState<OptionInfo[]>([]);
  const [optionStock, setOptionStock] = useState<OptionCombination[]>([]);
  const [selectedOptionCombonations, setOptionCombonations] = useState<
    SelectedOptionAndQuantity[]
  >([]);

  useEffect(() => {
    onChangeOrderData(selectedOptionCombonations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptionCombonations]);

  useEffect(() => {
    setInitSellingPrice();
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.BASE_URL}/optionstock/${productId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-cache",
        }
      );

      if (res.ok) {
        const data = await res.json();
        setOptionStock(data.result.options);
        setOptionList(setOoptionList(data.result));
        if (!data.result.depthLevel) {
          handleNonOptionSelect(data.result.options[0].optionAndStockSeq);
        } else {
          setDepthLevel(data.result.depthLevel);
        }
      }

      if (res.status === 400) {
        console.log("잘못된 요청입니다.");
      }
    };

    fetchData();
  }, []);

  const setOoptionList = (data: any) => {
    const optionData: OptionInfo[] = [];
    for (let i = 1; i <= data.depthLevel; i++) {
      const optionList: Set<string> = new Set();
      data.options.forEach((option: OptionCombination) => {
        if (i === 1) optionList.add(option.explain || "");
        else if (i === 2) optionList.add(option.explain2 || "");
        else if (i === 3) optionList.add(option.explain3 || "");
      });

      const option: OptionInfo = { type: "", optionList: [] };
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

  // const optionList = setOoptionList(dummyData.optionData);
  // const optionStock = dummyData.optionData.options;

  const getOptionString = (optionAndStockSeq: number) => {
    const item = optionStock.filter(
      (option) => option.optionAndStockSeq === optionAndStockSeq
    )[0];
    let optionString: string = "";

    if (optionList.length === 0) return productName;

    optionList.forEach((option, idx) => {
      if (idx === 0) optionString += `${option.type}:${item.explain} `;
      else if (idx === 1) optionString += `${option.type}:${item.explain2}`;
      else if (idx === 2) optionString += `${option.type}:${item.explain3}`;
    });

    return optionString.replace(" ", "/");
  };

  const setInitSellingPrice = () => {
    const sellingPrice = Math.round(
      productPrice - productPrice * (discountPercent / 100)
    );
    setSellingPrice(sellingPrice);
  };

  const handleNonOptionSelect = (optionAndStockSeq: number) => {
    const sellingPrice = Math.round(
      productPrice - productPrice * (discountPercent / 100)
    );
    setSellingPrice(sellingPrice);

    const updateData = {
      optionAndStockSeq,
      optionString: getOptionString(optionAndStockSeq),
      quantity: 1,
    };

    const updateSelectedOptionCombination = [
      ...selectedOptionCombonations,
      updateData,
    ];
    setOptionCombonations(updateSelectedOptionCombination);
    // 총 가격 계산
    const newTotalPrice = totalPrice + sellingPrice * updateData.quantity;

    setTotalPrice(newTotalPrice);
  };

  const handleOptionSelect = (optionAndStockSeq: number) => {
    const updateData = {
      optionAndStockSeq,
      optionString: getOptionString(optionAndStockSeq),
      quantity: 1,
    };

    // 중복된 옵션이 있는지 확인
    const isDuplicate = selectedOptionCombonations.some(
      (item) => item.optionAndStockSeq === optionAndStockSeq
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

  const onQuantityChange = (optionAndStockSeq: number, newQuantity: number) => {
    // 변경된 수량을 반영하여 총 가격을 업데이트
    const updatedOptions = selectedOptionCombonations.map((option) => {
      if (option.optionAndStockSeq === optionAndStockSeq) {
        const priceDifference = (newQuantity - option.quantity) * sellingPrice;
        setTotalPrice(totalPrice + priceDifference);
        return { ...option, quantity: newQuantity };
      }
      return option;
    });

    setOptionCombonations(updatedOptions);
  };

  const deleteOption = (optionAndStockSeq: number) => {
    const deletedOption = selectedOptionCombonations.find(
      (option) => option.optionAndStockSeq === optionAndStockSeq
    );

    // 삭제될 옵션의 가격을 계산
    if (deletedOption) {
      const deletedOptionPrice = sellingPrice * deletedOption.quantity;
      const newTotalPrice = totalPrice - deletedOptionPrice;
      setTotalPrice(newTotalPrice);
    }

    const updatedOptions = selectedOptionCombonations.filter(
      (option) => option.optionAndStockSeq !== optionAndStockSeq
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
            depthLevel={depthLevel}
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
