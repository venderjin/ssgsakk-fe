import React from "react";
import Image from "next/image";
import { headers } from "next/headers";

const HomeGradientSectionTitle: React.FC<{ title: string }> = ({ title }) => {
    const grandientBox = {
        width: "100%",
        height: "50px",
        background: "black",
        margin: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return <div className="bg-red-200 mx-3 h-[50px] bg-gradient-to-r from-[#1D804A] to-[#FF4E00] p-[1px]"></div>;
};

const HomeSectionTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="p-3 bg-red-200">
            <div>sdfsdf</div>
            <p className="font-Pretendard font-semibold text-[20px] tracking-wide">{title}</p>
        </div>
    );
};

export { HomeGradientSectionTitle, HomeSectionTitle };
