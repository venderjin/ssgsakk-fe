import OptionDropBox from "@/components/UI/OptionDropBox";
import React, { useState, useEffect } from "react";

interface Option {
  optionId: number;
  data: string;
}

interface OptionType {
  type: string;
  optionList: Option[];
}

interface SelectedOption {
  type: string;
  optionId: number;
  data: string;
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

const OptionDropBoxList = () => {
  const [optionList, setOptionList] = useState<OptionType[]>([]);
  const [selectedOptionList, setSelectedOptionList] = useState<
    SelectedOption[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOptionList();
      setOptionList(result);
    };

    fetchData();
  }, []);

  return (
    <div className="px-[15px] pt-[8px] pb-[13px]">
      {optionList.map((option: OptionType, index) => (
        <OptionDropBox
          key={option.type}
          optionType={option.type}
          optionList={option.optionList}
        />
      ))}
    </div>
  );
};

export default OptionDropBoxList;
