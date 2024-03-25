import React, { useState, useEffect } from "react";
import BottomUpBox from "@/components/UI/BottomUpBox";
import RightArrow from "@/components/images/RightArrow";

interface Option {
  optionId?: number;
  data?: string;
}

interface OptionType {
  type: string;
  optionList: Option[];
}

interface SelectedOption {
  type: string;
  optionId?: number;
  data?: string;
}

async function getOptionList() {
  const res = await fetch(`http://localhost:3300/optionList`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("network error");
  }

  const data = await res.json();
  return data;
}

const OptionDropBoxList = ({
  onOptionSelect,
}: {
  onOptionSelect: (option: SelectedOption[]) => void;
}) => {
  const [optionList, setOptionList] = useState<OptionType[]>([]);
  const [openBox, setOpenBox] = useState<number>(-1);
  const [selectedOptionList, setSelectedOptionList] = useState<
    SelectedOption[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOptionList();
      setOptionList(result);

      const initOptionList = result.map((option: any) => {
        return { type: option.type, optionId: undefined, data: undefined };
      });
      setSelectedOptionList(initOptionList);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // 마지막 요소의 data 값이 변경될 때 실행되는 부분
    const lastSelectedOption =
      selectedOptionList[selectedOptionList.length - 1];
    if (lastSelectedOption && lastSelectedOption.data !== undefined) {
      onOptionSelect(selectedOptionList);
    }
  }, [selectedOptionList, onOptionSelect]);

  const handleOptionSelect = (index: number, selectedOption: Option) => {
    const updatedSelectedOptionList = [...selectedOptionList];
    updatedSelectedOptionList[index] = {
      type: optionList[index].type,
      optionId: selectedOption.optionId,
      data: selectedOption.data,
    };

    // 상위 옵션이 수정된 경우, 하위 옵션 초기화
    for (let i = index + 1; i < optionList.length; i++) {
      updatedSelectedOptionList[i] = {
        type: optionList[i].type,
        optionId: undefined,
        data: undefined,
      };
    }

    setSelectedOptionList(updatedSelectedOptionList);
    setOpenBox(-1);
  };

  return (
    <div className="px-[15px]">
      {optionList.map((option: OptionType, index: number) => (
        <div key={index}>
          {/* 옵션 드롭박스 */}
          <div
            onClick={() => setOpenBox(index)}
            style={{
              pointerEvents:
                index > 0 &&
                (!selectedOptionList[index - 1].optionId ||
                  selectedOptionList[index - 1].optionId === null)
                  ? "none"
                  : "auto",
              opacity:
                index > 0 &&
                (!selectedOptionList[index - 1].optionId ||
                  selectedOptionList[index - 1].optionId === null)
                  ? 0.5
                  : 1,
            }}
            className="flex items-center my-[12px] h-[42px]  pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal"
          >
            <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block">
              {selectedOptionList[index].data
                ? selectedOptionList[index].data
                : `선택하세요. (${option.type})`}
            </span>
            <div className="relative right-[15px]">
              <RightArrow width="16" height="16" rotate="90" color="#222" />
            </div>
          </div>

          {/* 클릭 시 나타나는 옵션 선택 박스 */}
          <BottomUpBox
            bottom={openBox >= 0 ? 0 : -572}
            onClickHandler={() => setOpenBox(-1)}
          >
            <div className="block relative">
              <div
                onClick={() =>
                  handleOptionSelect(openBox, {
                    optionId: undefined,
                    data: undefined,
                  })
                }
                className="mx-[15px] my-[12px] h-[42px] pr-[40px] pl-[15px] rounded-[5px] font-Pretendard text-left border-[1px] border-[#e5e5e5] leading-10 tracking-normal"
              >
                <span className="overflow-hidden w-full text-[13px] text-[#222] inline-block select-arrow">
                  선택하세요. ({option.type})
                </span>
              </div>
              <div className="h-[402px] mx-[15px] pr-[15px] pb-[24px]">
                <ul>
                  {openBox >= 0 &&
                    optionList[openBox].optionList.map((item) => (
                      <li
                        key={item.optionId}
                        onClick={() => handleOptionSelect(openBox, item)}
                        className={`${
                          selectedOptionList[openBox].optionId == item.optionId
                            ? "border-[1px] border-[#000]"
                            : ""
                        } pr-[10px] text-[#bcb2b2] rounded-[5px] align-middle`}
                      >
                        <span className="table-cell h-[50px] px-[10px]  align-middle">
                          <span className="text-[13px] text-[#222]">
                            {item.data}
                          </span>
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
