import React from "react";
import Image from "next/image";
import { headers } from "next/headers";

const HomeGradientSectionTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="mx-3 h-[50px] bg-gradient-to-r from-[#1D804A] to-[#FF4E00] p-[1px] mb-3">
            <div className="bg-white h-full justify-between flex">
                <div className="flex items-center">
                    <Image
                        src="https://sui.ssgcdn.com/cmpt/banner/202403/2024031515403230687083491808_37.png"
                        width={24}
                        height={24}
                        alt="ticket"
                        className="ml-[12px]"
                    />
                    <p className="font-Pretendard text-[14px] tracking-wide ml-2 font-semibold text-center bg-gradient-to-r from-[#1D804A] to-[#FF4E00] inline-block text-transparent bg-clip-text">
                        {title}
                    </p>
                </div>

                <div className="flex items-center">
                    <Image src="/images/home/rightArrow.svg" width={16} height={16} alt="arrow" className="mx-[8px]" style={{ height: "16px" }} />
                </div>
            </div>
        </div>
    );
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
