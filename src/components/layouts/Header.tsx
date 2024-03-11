import React from "react";
import SsgLogo from "@/images/svgs/SsgLogo";
import MallSelectDropdownButton from "@/images/svgs/MallSelectDropdownButton";
import Chatbot from "@/images/svgs/Chatbot";
import Cart from "@/images/svgs/Cart";
import SearchFrom from "../forms/SearchFrom";

const Header = () => {
    return (
        <div>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-3">
                <div className="flex gap-[3px] items-center w-[113px] h-[14px]">
                    <SsgLogo />
                    <MallSelectDropdownButton />
                </div>
                <SearchFrom />
                <div className="flex items-center justify-end">
                    <Chatbot />
                    <Cart />
                </div>
            </div>
            <div className="bg-teal-300 w-full font-Pretendard ">홈 특가 베스트</div>
        </div>
    );
};

export default Header;
