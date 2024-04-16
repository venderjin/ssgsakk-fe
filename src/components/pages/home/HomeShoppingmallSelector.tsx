"use client";
import React, { useState } from "react";
import Image from "next/image";

import { homeShoppingmallSelectModalData } from "@/libs/homeShoppingmallSelectModalData";
import SliderModal from "@/components/common/SliderModal";
import ModalSlider from "@/components/images/ModalSlider";
import RightArrow from "@/components/images/RightArrow";
import WhiteSpace from "@/components/UI/WhiteSpace";

const HomeShoppingmallSelector = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달창을 열고 닫는 상태

    const modalController = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <Image onClick={modalController} src="/images/home/mallSelectDropdownButton.png" alt="MallSelectDropdownButton" width={14} height={14} />
            <SliderModal isModalOpen={isModalOpen} onChangeModal={modalController} backgroundClose={true}>
                <ModalSlider />
                <div className="py-[20px] px-[16px]">
                    <p className="font-Pretendard text-[17px] text-black font-semibold">어떤 쇼핑을 원하시나요?</p>
                    {homeShoppingmallSelectModalData[0].items.map(
                        (item: { id: number; title: string; subtitle?: string | undefined; eventBoolean?: boolean | undefined; imgPath: string }) => {
                            return (
                                <div key={item.id} className="flex flex-row  justify-between items-center py-[16px] border-b-[1px]">
                                    <div className="flex items-center gap-[10px]">
                                        <Image src={item.imgPath} alt={item.title} width={44} height={44} />
                                        <div>
                                            <div className="flex flex-row gap-1">
                                                <p className="font-Pretendard text-[14px] text-black font-semibold">{item.title}</p>
                                                {item.eventBoolean && (
                                                    <div className="border-2 border-primary-red px-[4px]">
                                                        <p className="text-[11px] text-primary-red text-center">EVENT</p>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="font-Pretendard text-[13px] text-gray-400">{item.subtitle}</p>
                                        </div>
                                    </div>
                                    <RightArrow />
                                </div>
                            );
                        }
                    )}
                    <WhiteSpace height={40} />
                    <p className="font-Pretendard text-[17px] text-black font-semibold">더 다양한 신세계 브랜드!</p>
                    <WhiteSpace height={5} />
                    <div className="flex flex-row items-center gap-2 overflow-x-scroll scroll-smooth">
                        {homeShoppingmallSelectModalData[1].items.map(
                            (item: { id: number; title: string; subtitle?: string | undefined; eventBoolean?: boolean | undefined; imgPath: string }) => {
                                return (
                                    <div key={item.id}>
                                        <div className="w-[150px] h-[62px]">
                                            <Image src={item.imgPath} alt={item.title} width={150} height={62} />
                                        </div>
                                        <p className="font-Pretendard text-[13px] text-[#222222] pt-[6px] whitespace-nowrap">{item.title}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </SliderModal>
        </>
    );
};

export default HomeShoppingmallSelector;
