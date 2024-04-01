"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import SearchPage from "@/components/forms/SearchPage";

const SearchFrom = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달창을 열고 닫는 상태
    const searchkeyword = useSearchParams().get("keyword");

    const modalController = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <form className="relative w-[70%] " onClick={modalController}>
                <input type="text" className="h-[40px] w-full rounded-full bg-[#F5F5F5] "></input>
                <div className=" pointer-events-none absolute inset-y-0 w-[100%] justify-between  flex items-center px-4">
                    <p className="text-[14px] font-Pretendard text-[#222222]">{searchkeyword}</p>
                    <Image src="/images/home/searchLogo.png" alt="Search" width={24} height={24} />
                </div>
            </form>
            {isModalOpen && <SearchPage onChangeModal={modalController} />}
        </>
    );
};

export default SearchFrom;
