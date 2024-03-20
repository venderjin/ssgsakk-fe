import React, { useState } from "react";
import BottomUpBox from "./BottomUpBox";
import Image from "next/image";
import RightArrow from "../images/RightArrow";

interface option {
  optionId?: number;
  data?: string;
}

interface Props {
  optionType: string;
  optionList: option[];
}

const OptionDropBox = ({ optionType, optionList }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<option>({});
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block">
      {/* <select
        name=""
        id=""
        className="hidden w-full h-[42px] pr-[40px] pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5]"
      >
        {optionList.map((option) => (
          <option
            className="text-[13px]"
            key={option.optionId}
            value={option.optionId}
          >
            {option.data}
          </option>
        ))}
      </select> */}

      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center my-[12px] h-[42px]  pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal"
      >
        <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block">
          {!selectedOption.data
            ? `선택하세요. (${optionType})`
            : selectedOption.data}
        </span>
        <div className="relative right-[15px]">
          <RightArrow width="16" height="16" rotate="90" color="#222" />
        </div>
      </div>

      {/* 이게 진짜 */}
      <BottomUpBox bottom={isOpen ? 0 : -572} onClickHandler={onClickHandler}>
        <div className="block relative">
          <div className="mx-[15px] my-[12px] h-[42px] pr-[40px] pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal">
            <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block select-arrow">
              선택하세요. ({optionType})
            </span>
          </div>
          <div className="h-[402px] mx-[15px] pr-[15px] pb-[24px]">
            <ul>
              {optionList.map((option) => (
                <li
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(!isOpen);
                  }}
                  key={option.optionId}
                  className={`${
                    selectedOption == option.optionId
                      ? "border-[1px] border-[#000]"
                      : ""
                  } pr-[10px] text-[#bcb2b2] rounded-[5px] align-middle`}
                >
                  <span className="table-cell h-[50px] px-[10px]  align-middle">
                    <span className="text-[13px] text-[#222]">
                      {option.data}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BottomUpBox>
    </div>
  );
};

export default OptionDropBox;
