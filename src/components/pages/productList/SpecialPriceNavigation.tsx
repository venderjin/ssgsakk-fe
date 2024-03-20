"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { specialPriceCategoryData } from "@/libs/specialPriceCategoryData";
import WhiteSpace from "@/components/UI/WhiteSpace";
import RightArrow from "@/components/images/RightArrow";

interface Props {
    type: string; // "totalSpecialPrice" | "ssgSpecialPrice" | "todayGrocery"
    title: string;
}

const SpecialPriceNavigation = ({ type, title }: Props) => {
    const [resetSpecialPriceType, setResetSpecialPriceType] = useState<string>(""); //
    const [clickedCategoryIndex, setClickedCategoryIndex] = useState<number>(0); // 클릭한 버튼의 인덱스를 저장하는 상태
    const router = useRouter();

    const handleTypeClick = (path: string) => {
        setResetSpecialPriceType(path);
        router.push(`/productList/eventProductList?type=${path}`);
    };

    useEffect(() => {
        setClickedCategoryIndex(0);
    }, [resetSpecialPriceType]);

    return (
        <div className="m-3">
            <div className="flex flex-row gap-2">
                {specialPriceCategoryData.map((item) => (
                    <button
                        key={item.type}
                        onClick={() => handleTypeClick(item.type)}
                        className={`flex-1 ${type === item.type ? "bg-white border-2 border-black" : "bg-[#F5F5F5]"} py-[10px]`}
                    >
                        {item.title.split("\n").map((line, index) => (
                            <p
                                className={`font-Pretendard text-black text-[13px] text-center leading-tight ${title === item.title ? "font-bold" : ""}`}
                                key={index}
                            >
                                {line}
                            </p>
                        ))}
                    </button>
                ))}
            </div>
            <WhiteSpace height={20} />
            <div className="flex flex-row gap-1">
                <div className="bg-white flex-1 flex overflow-x-auto scroll-smooth">
                    {specialPriceCategoryData
                        .filter((item) => item.type === type)
                        .map((item) =>
                            item.category.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setClickedCategoryIndex(index)}
                                    className={`
                                    ${clickedCategoryIndex === index ? "bg-black text-white" : "bg-white text-black"}
                            border-2 border-[#E5E5E5] py-2 px-3 whitespace-nowrap mr-1 font-Pretendard text-[13px]`}
                                >
                                    {category.title}
                                </button>
                            ))
                        )}
                </div>
                <button className="bg-white border-2 border-[#E5E5E5] py-2 px-3 flex-3 font-Pretendard text-[13px]">
                    <RightArrow rotate={"90"} />
                </button>
            </div>
        </div>
    );
};

export default SpecialPriceNavigation;
