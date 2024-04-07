"use client";
import React, { useState, useEffect } from "react";
import BottomUpBox from "@/components/UI/BottomUpBox";
import RightArrow from "@/components/images/RightArrow";
import { OptionCombination, OptionInfo } from "@/types/optionType";

type Props = {
    optionList: OptionInfo[];
    optionStock: OptionCombination[];
    onOptionSelect: (selectedOptionId: number) => void;
};

const OptionDropBoxList = ({ optionList, optionStock, onOptionSelect }: Props) => {
    const [openBox, setOpenBox] = useState<number>(-1);
    const [selectedOption, setSelectedOption] = useState<string[]>([]);
    const depth = optionList.length;

    useEffect(() => {
        // 마지막 요소의 data 값이 변경될 때 실행되는 부분
        const lastSelectedOption = selectedOption[depth - 1];
        if (lastSelectedOption && lastSelectedOption !== "") {
            const selectedOptionId = findOptionAndStockSeq();
            onOptionSelect(selectedOptionId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOption]);

    const findOptionAndStockSeq = () => {
        const filteredOptions = optionStock.filter((option) => {
            if (selectedOption.length === 1) {
                return option.explain === selectedOption[0];
            }
            if (selectedOption.length === 2) {
                return option.explain === selectedOption[0] && option.explain2 === selectedOption[1];
            }
            if (selectedOption.length === 3) {
                return option.explain === selectedOption[0] && option.explain2 === selectedOption[1] && option.explain3 === selectedOption[2];
            }
        });

        return filteredOptions[0].optionAndStockSeq;
    };

    const handleOptionSelect = (data: string) => {
        if (openBox === depth - 1 && getStock(data) === "(품절)") return;

        const updateSelectedOption = [...selectedOption];
        updateSelectedOption[openBox] = data;

        // 상위 옵션이 수정된 경우, 하위 옵션 초기화
        for (let i = openBox + 1; i < depth; i++) {
            updateSelectedOption[i] = "";
        }

        setSelectedOption(updateSelectedOption);
        setOpenBox(-1);
    };

    const getStock = (data: string) => {
        if (openBox !== depth - 1) return "";
        //마지막 옵션인 경우 재고 정보를 표출해야한다.
        const filteredOptions = optionStock.filter((option) => {
            if (depth === 1) {
                return option.explain === data;
            }
            if (depth === 2) {
                return option.explain === selectedOption[0] && option.explain2 === data;
            }
            if (depth === 3) {
                return option.explain === selectedOption[0] && option.explain2 === selectedOption[1] && option.explain3 === data;
            }
        });

        const stock = filteredOptions.length > 0 ? filteredOptions[0].stock : 0;
        if (stock === 0) return "(품절)";
        return `(남은 수량: ${stock}개)`;
    };

    return (
        <div className="px-[15px]">
            {optionList.map((option: OptionInfo, idx: number) => (
                <div key={idx}>
                    {/* 옵션 드롭박스 */}
                    <div
                        onClick={() => setOpenBox(idx)}
                        style={{
                            pointerEvents: idx > 0 && (!selectedOption[idx - 1] || selectedOption[idx - 1] === "") ? "none" : "auto",
                            opacity: idx > 0 && (!selectedOption[idx - 1] || selectedOption[idx - 1] === "") ? 0.5 : 1,
                        }}
                        className="flex items-center my-[12px] h-[42px]  pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal"
                    >
                        <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block">
                            {!selectedOption[idx] || selectedOption[idx] === "" ? `선택하세요. (${option.type})` : selectedOption[idx]}
                        </span>
                        <div className="relative right-[15px]">
                            <RightArrow width={16} height={16} rotate="90" color="#222" />
                        </div>
                    </div>

                    {/* 클릭 시 나타나는 옵션 선택 박스 */}
                    <BottomUpBox bottom={openBox >= 0 ? 0 : -572} onClickHandler={() => setOpenBox(-1)}>
                        <div className="block relative">
                            <div
                                onClick={() => handleOptionSelect("")}
                                className="mx-[15px] my-[12px] h-[42px] pr-[40px] pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal"
                            >
                                <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block select-arrow">선택하세요. ({option.type})</span>
                            </div>
                            <div className="h-[402px] mx-[15px] pr-[15px] pb-[24px]">
                                <ul>
                                    {openBox >= 0 &&
                                        optionList[openBox].optionList.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleOptionSelect(item)}
                                                className={`${
                                                    selectedOption[openBox] == item ? "border-[1px] border-[#000]" : ""
                                                } pr-[10px] text-[#bcb2b2] rounded-[5px] align-middle cursor-default`}
                                            >
                                                <span className="table-cell h-[50px] px-[10px]  align-middle">
                                                    <span className={`text-[13px]  ${getStock(item) === "(품절)" ? "text-[#969696]" : "text-[#222]"}`}>
                                                        {item}
                                                        {getStock(item)}
                                                    </span>
                                                    <span></span>
                                                </span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </BottomUpBox>
                </div>
            ))}
        </div>
    );
};

export default OptionDropBoxList;
