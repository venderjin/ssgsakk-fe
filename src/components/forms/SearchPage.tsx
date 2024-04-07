"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Modal from "@/components/common/Modal";
import RightArrow from "../images/RightArrow";
import Cart from "../images/Cart";
import DeleteInput from "../images/DeleteInput";

interface SearchPageProps {
    onChangeModal: () => void;
}

const SearchPage = ({ onChangeModal }: SearchPageProps) => {
    const [searchValue, setSearchValue] = useState<string>(""); // 검색어를 담는 상태
    const [searchValueLength, setSearchValueLength] = useState<number>(0); // 검색어의 길이를 담는 상태
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        // 컴포넌트가 마운트될 때 포커스를 설정합니다.
        inputRef.current?.focus();
    }, []); // 빈 배열을 전달하여 이펙트가 컴포넌트가 마운트될 때만 실행되도록 합니다.

    const searchValueController = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setSearchValueLength(e.target.value.length);
    };

    const clearSearchValue = () => {
        setSearchValue("");
        setSearchValueLength(0);
    };

    const searchSubmit = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onChangeModal();
        } else if (e.key === "Enter" && searchValue.length > 0) {
            e.preventDefault();
            router.push(`/productList/searchProductList?keyword=${searchValue}`);
            onChangeModal();
        } else if (e.key === "Enter" && searchValue.length == 0) {
            e.preventDefault();
            alert("검색어를 확인해주세요.");
        }
    };

    const test = () => {
        router.push(`/productList/searchProductList?keyword=${searchValue}`);
    };

    return (
        <Modal>
            <div className="h-[55px] w-full py-[8px] flex flex-row justify-center items-center">
                <div onClick={onChangeModal} className="mx-[4px] w-[45px] flex-initial flex justify-center items-center">
                    <RightArrow width={20} height={20} rotate="180" />
                </div>
                <div className=" flex-1">
                    <form className="relative w-full">
                        <input
                            type="text"
                            className="h-[40px] w-full rounded-full bg-[#F5F5F5] pl-[15px] font-Pretendard text-[14px] text-black"
                            placeholder="원하시는 상품을 검색해보세요."
                            value={searchValue}
                            ref={inputRef}
                            onChange={(e) => searchValueController(e)}
                            onKeyDown={(e) => searchSubmit(e)}
                        ></input>
                        <div className='"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                            {searchValueLength === 0 ? (
                                <Image src="/images/home/searchLogo.png" alt="Search" width={24} height={24} />
                            ) : (
                                <div onClick={clearSearchValue}>
                                    <DeleteInput width={20} height={20} />
                                </div>
                            )}
                        </div>
                    </form>
                </div>
                <div onClick={test} className="mx-[4px] w-[40px] flex-initial flex justify-center items-center">
                    <Cart width={25} height={25} />
                </div>
            </div>
        </Modal>
    );
};

export default SearchPage;
