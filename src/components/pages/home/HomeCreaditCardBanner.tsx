import React from "react";
import Image from "next/image";

import { homeCreditCardEventBannerData } from "@/libs/homeCreditCardEventBannerData";
import { HomeCreditCardEventBannerType } from "@/types/homeResourceType";

const HomeCreaditCardBanner = () => {
    return (
        <div className="w-full h-[120px] px-3 flex py-[10px] flex-row  overflow-x-auto scroll-smooth">
            <div className="flex justify-between">
                {homeCreditCardEventBannerData.map((event: HomeCreditCardEventBannerType) => (
                    <div
                        key={event.id}
                        className="w-[150px] h-[100px] px-[16px] py-[12px] mx-[5px] flex flex-col justify-between"
                        style={{
                            background: `linear-gradient(45deg, ${event.firstGradientColor}, ${event.secondGradientColor})`,
                        }}
                    >
                        <div className="w-[118px] h-[28px] flex items-center  justify-between">
                            <div className="flex flex-row items-end">
                                <p className="font-Pretendard text-[24px] tracking-wide font-extrabold text-white mr-0.5">{event.discountRate}</p>
                                <p className="font-Pretendard text-[15px] tracking-wide font-semibold text-white">{event.discountUnit}</p>
                            </div>
                            <Image src={event.imgPath} width={24} height={24} alt="creditCard" />
                        </div>
                        <div>
                            <p className="font-Pretendard text-[14px] text-white truncate">{event.title}</p>
                            <p className="font-Pretendard text-[12px] text-white truncate font-thin">{event.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCreaditCardBanner;
