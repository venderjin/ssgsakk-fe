"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { homeMainAdvertisementCarouselData } from "@/libs/homeMainAdvertisementCarouselData";
import { HomeMainAdvertisementCarouselType } from "@/types/homeResourceType";

const HomeAdCarousel = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
    const [adPlay, setAdPlay] = useState<boolean>(true);
    const [adPlayString, setAdPlayString] = useState<string>("II");
    const totalAdLength = homeMainAdvertisementCarouselData.length;

    const nextAd = () => {
        setCurrentAdIndex((prevIndex) => (prevIndex === totalAdLength - 1 ? 0 : prevIndex + 1));
    };

    const prevAd = () => {
        setCurrentAdIndex((prevIndex) => (prevIndex === 0 ? totalAdLength - 1 : prevIndex - 1));
    };

    useEffect(() => {
        setAdPlayString(adPlay ? "II" : "▷");
        if (adPlay) {
            const interval = setInterval(() => {
                setCurrentAdIndex((prevIndex) => (prevIndex === totalAdLength - 1 ? 0 : prevIndex + 1));
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [adPlayString, adPlay]);

    const adPlayController = () => {
        setAdPlay(!adPlay);
    };

    return (
        <div className="w-full h-[50vh] bg-white relative">
            {homeMainAdvertisementCarouselData.map((ad: HomeMainAdvertisementCarouselType, index: number) => (
                <div key={ad.id} className={`absolute inset-0 pb-[40px] px-[40px] overflow-hidden ${index === currentAdIndex ? "block" : "hidden"}`}>
                    <Image src={ad.imgPath} alt="ad_backgorund" fill={true} className="blur-sm z-100 pb-[40px]" />
                    <Image src={ad.imgPath} alt="ad_main" fill={true} className="absolute inset-0 z-101 mt-[20px] px-[20px]" />
                    <div className="absolute inset-0 z-102 mt-[320px]">
                        {ad.title.split("\n").map((line, index) => (
                            <p className="font-Pretendard text-white text-[25px] font-extrabold text-center" key={index}>
                                {line}
                            </p>
                        ))}
                        <p className="font-Pretendard text-white text-[15px] font-semibold text-center">{ad.subtitle}</p>
                    </div>
                </div>
            ))}
            <div className="absolute inset-0 z-102 flex justify-between items-end mx-[20px]">
                <div className="bg-black bg-opacity-50 p-[5px]">
                    <button onClick={adPlayController} className="w-[20px]  font-Pretendard text-white text-[15px] font-extrabold text-center">
                        {adPlayString}
                    </button>
                </div>
                <div className="flex flex-row bg-black bg-opacity-50 p-[5px]">
                    <button onClick={prevAd} className="w-[20px]  font-Pretendard text-white text-[10px] font-extrabold text-center">
                        ◀
                    </button>

                    <p className="font-Pretendard text-white  text-[15px] font-bold text-center px-[5px]">
                        {currentAdIndex + 1} / {totalAdLength}
                    </p>
                    <button onClick={nextAd} className="w-[20px]  font-Pretendard text-white text-[10px] font-extrabold text-center">
                        ▶
                    </button>
                    <button className="font-Pretendard text-white text-[13px] font-bold text-center px-[5px]">전체보기</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAdCarousel;
