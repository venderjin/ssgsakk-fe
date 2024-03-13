import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
    return (
        <>
            <header className="w-full bg-white">
                <TopHeader />
            </header>
            <BottomHeader />
        </>
    );
};

export default Header;
