"use client";
import React, { useState } from "react";

import SearchFrom from "../forms/SearchFrom";
import SliderModal from "@/components/common/SliderModal";

import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달창을 열고 닫는 상태

    const modalController = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <header className="w-full bg-white">
                <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-2">
                    <div className="flex gap-[3px] items-center w-[113px] h-[14px]">
                        <Link href="/">
                            <Image src="/images/home/ssgLogo.svg" alt="SSG" width={86} height={40} />
                        </Link>
                        <Image
                            onClick={modalController}
                            src="/images/home/mallSelectDropdownButton.png"
                            alt="MallSelectDropdownButton"
                            width={14}
                            height={14}
                        />
                    </div>
                    <SearchFrom />
                    <div className="flex items-center">
                        <Image src="/images/home/chatbotLogo.png" alt="Chatbot" width={26} height={26} className="mr-[10px]" />
                        <Image src="/images/home/cartLogo.png" alt="Cart" width={26} height={26} />
                    </div>
                </div>
            </header>
            <SliderModal isModalOpen={isModalOpen} onChangeModal={modalController}>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </SliderModal>
        </>
    );
};

export default TopHeader;
