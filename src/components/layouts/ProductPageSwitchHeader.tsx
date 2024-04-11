"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import GoBackIcon from "../UI/GoBackIcon";
import CartIcon from "../UI/CartIcon";
import SearchPage from "../forms/SearchPage";

const ProductPageSwitchHeader = () => {
    const [display, setDisplay] = useState<boolean>(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
    const onScroll = useCallback(() => {
        const { scrollY } = window;

        if (scrollY >= 100) setDisplay(true);
        else setDisplay(false);
    }, []);

    const modalController = () => {
        setIsSearchModalOpen(!isSearchModalOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [onScroll]);

    return (
        <>
            <nav className={`h-[50px] px-[65px] flex sticky top-0 z-50 shadow-md bg-white ${display ? "" : "hidden"}`}>
                <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
                    <GoBackIcon />
                </div>

                <div className="w-full h-full  font-Pretendard">
                    <ul className="flex h-full items-center justify-center pr-[11px] pl-[12px] text-center text-[14px]">
                        <li className="w-[55px] h-full pt-[15px] pr-[7px] pl-[8px]">
                            <Link href={"/"} className="font-bold text-[#222222] tracking-tight">
                                상세
                            </Link>
                        </li>

                        <li className="w-[55px] h-full pt-[18px] pr-[7px] pl-[8px]">
                            <Link href={"/"} className="flex flex-col font-bold text-[#222222] leading-none tracking-tight">
                                리뷰
                                <span className="text-[10px] text-[#999] mt-[-1px]">12</span>
                            </Link>
                        </li>

                        <li className="w-[55px] h-full pt-[18px] pr-[7px] pl-[8px]">
                            <Link href={"/"} className="flex flex-col font-bold text-[#222222] leading-none tracking-tight">
                                Q&A
                                <span className="text-[10px] text-[#999] mt-[-1px]">6</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center absolute right-[16px] top-[13px] gap-4">
                    <Image src="/images/etc/search.svg" alt="search-icon" width={24} height={24} onClick={modalController} />
                    <CartIcon />
                </div>
            </nav>
            {isSearchModalOpen && <SearchPage onChangeModal={modalController} />}
        </>
    );
};

export default ProductPageSwitchHeader;
