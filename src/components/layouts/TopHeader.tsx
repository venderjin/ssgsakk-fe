import React from "react";
import SsgLogo from "@/images/svgs/SsgLogo";
import MallSelectDropdownButton from "@/images/svgs/MallSelectDropdownButton";
import Chatbot from "@/images/svgs/Chatbot";
import Cart from "@/images/svgs/Cart";
import SearchFrom from "../forms/SearchFrom";

const TopHeader = () => {
    return (
        <div>
            <div className="w-full flex justify-between items-center py-[8px] pl-[16px] pr-[10px] gap-2">
                <div className="flex gap-[3px] items-center w-[113px] h-[14px] mr-[20px]">
                    <SsgLogo />
                    <MallSelectDropdownButton />
                </div>
                <SearchFrom />
                <div className="flex items-center">
                    <Chatbot />
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
