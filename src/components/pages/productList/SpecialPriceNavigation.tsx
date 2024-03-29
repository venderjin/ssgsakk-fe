"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { specialPriceCategoryData } from "@/libs/specialPriceCategoryData";
import RightArrow from "@/components/images/RightArrow";
import HomeSingleAdImage from "@/components/pages/home/HomeSingleAdImage";
import SliderModal from "@/components/common/SliderModal";
import ModalSlider from "@/components/images/ModalSlider";
import SliderModalHeader from "@/components/common/SliderModalHeader";

const SpecialPriceNavigation = () => {
    const [resetSpecialPriceType, setResetSpecialPriceType] = useState<string>(""); //
    const [clickedCategoryIndex, setClickedCategoryIndex] = useState<number>(0); // 클릭한 버튼의 인덱스를 저장하는 상태
    const [clickedDeliveryTypeIndex, setClickedDeliveryTypeIndex] = useState<number | null>(null); // 클릭한 배송타입의 인덱스를 저장하는 상태
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달창을 열고 닫는 상태

    const [specialPriceType, setSpecialPriceType] = useState<string>("totalSpecialPrice");
    const [specialPriceTitle, setSpecialPriceTitle] = useState<string>("전체\n보기");
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    useEffect(() => {
        if (type) {
            setSpecialPriceType(type);
            const category = specialPriceCategoryData.find((item) => item.type === type);
            if (category) {
                setSpecialPriceTitle(category.title);
            }
        }
    }, [type]);

    const router = useRouter();

    const handleTypeClick = (path: string) => {
        setResetSpecialPriceType(path);
        router.push(`/productList/eventProductList?type=${path}`);
    };

    const handleDeliveryTypeClick = (index: number) => {
        if (clickedDeliveryTypeIndex === index) {
            setClickedDeliveryTypeIndex(null);
            return;
        }
        setClickedDeliveryTypeIndex(index);
    };

    const ModalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        setClickedDeliveryTypeIndex(null);
    }, [resetSpecialPriceType]);

    useEffect(() => {
        setClickedCategoryIndex(0);
    }, [resetSpecialPriceType]);

    return (
        <>
            <div className="flex flex-row gap-2 m-3">
                {specialPriceCategoryData.map((item) => (
                    <button
                        key={item.type}
                        onClick={() => handleTypeClick(item.type)}
                        className={`flex-1 ${specialPriceType === item.type ? "bg-white border-2 border-black" : "bg-[#F5F5F5]"} py-[10px]`}
                    >
                        {item.title.split("\n").map((line, index) => (
                            <p
                                className={`font-Pretendard text-black text-[13px] text-center leading-tight ${
                                    specialPriceTitle === item.title ? "font-bold" : ""
                                }`}
                                key={index}
                            >
                                {line}
                            </p>
                        ))}
                    </button>
                ))}
            </div>
            {specialPriceType === "ssgSpecialPrice" && (
                <HomeSingleAdImage
                    imgPath="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0                "
                    title="universeCLubSingleAdImage"
                />
            )}
            <div className="flex flex-row gap-1 m-3 sticky top-10 z-50 py-2 bg-white">
                <div className="bg-white flex-1 flex overflow-x-auto scroll-smooth">
                    {specialPriceCategoryData
                        .filter((item) => item.type === specialPriceType)
                        .map((item) =>
                            item.category.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setClickedCategoryIndex(index)}
                                    className={`
                                    ${
                                        clickedCategoryIndex === index ? "bg-[#222222] text-white" : "bg-white text-black border-2 border-[#E5E5E5]"
                                    } py-2 px-3 whitespace-nowrap mr-1 font-Pretendard text-[13px]`}
                                >
                                    {category.title}
                                </button>
                            ))
                        )}
                </div>
                <div
                    className="flex-3 flex"
                    style={{
                        boxShadow: " -10px 0 8px 0px white",
                        backgroundColor: "rgba(0,0,255,0)",
                    }}
                >
                    <button
                        onClick={() => ModalHandler()}
                        className="bg-white border-2 border-[#E5E5E5] flex-1 justify-center items-center py-2 px-3  font-Pretendard text-[13px]"
                    >
                        <RightArrow rotate={"90"} />
                    </button>
                </div>
            </div>
            <div className="flex flex-row overflow-x-auto scroll-smooth items-center pb-3 mx-3">
                {specialPriceCategoryData
                    .filter((item) => item.type === specialPriceType)
                    .map((item) =>
                        item.deliveryType?.map((deliveryType, index) => (
                            <div key={index} className="flex-none mr-3" style={{ width: "auto", height: "30px" }}>
                                <Image
                                    onClick={() => {
                                        handleDeliveryTypeClick(index);
                                    }}
                                    src={clickedDeliveryTypeIndex === index ? deliveryType.checkedImgpath : deliveryType.unCheckedImgpath}
                                    alt={deliveryType.title}
                                    width={80}
                                    height={30}
                                    style={{ width: "auto", height: "30px" }}
                                    className="object-contain transition-opacity"
                                />
                            </div>
                        ))
                    )}
            </div>
            <SliderModal isModalOpen={isModalOpen} onChangeModal={() => ModalHandler()}>
                <ModalSlider />
                <SliderModalHeader title="전체 카테고리" onChangeModal={() => ModalHandler()} />
                <div className="flex flex-col gap-2 p-3">
                    {specialPriceCategoryData
                        .filter((item) => item.type === specialPriceType)
                        .map((item) =>
                            item.category.map((category, index) => (
                                <label key={index} className={`mx-3 py-2 flex justify-start items-center ${clickedCategoryIndex === index ? "font-bold" : ""}`}>
                                    <input
                                        type="radio"
                                        value={category.title}
                                        checked={clickedCategoryIndex === index}
                                        onChange={() => setClickedCategoryIndex(index)}
                                        className="mr-3 h-6 w-6  accent-[#ff5452]" // 여기에 높이와 너비를 조정합니다.
                                    />
                                    <span className="text-black font-Pretendard text-[16px]">{category.title}</span>
                                </label>
                            ))
                        )}
                </div>
            </SliderModal>
        </>
    );
};

export default SpecialPriceNavigation;
