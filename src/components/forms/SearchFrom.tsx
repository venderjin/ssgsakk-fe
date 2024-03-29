"use client";
import React, { useState } from "react";

import Image from "next/image";
import SearchPage from "@/components/forms/SearchPage";

const SearchFrom = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달창을 열고 닫는 상태

    const modalController = () => {
        setIsModalOpen(!isModalOpen);
        console.log("isModalOpen is", isModalOpen);
    };

    return (
        <>
            <form className="relative w-full" onClick={modalController}>
                <input type="text" className="h-[40px] w-full rounded-full bg-[#F5F5F5] "></input>
                <div className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                    <Image src="/images/home/searchLogo.png" alt="Search" width={24} height={24} />
                </div>
            </form>
            {isModalOpen && <SearchPage isModalOpen={isModalOpen} onChangeModal={modalController} />}
        </>
    );
};

export default SearchFrom;
