import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
    return (
        <header className="w-full">
            <TopHeader />
            <BottomHeader />
        </header>
    );
};

export default Header;
