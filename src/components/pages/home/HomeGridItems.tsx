"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { homeGridItemsData } from "@/libs/homeGridItemsData";

const HomeGridItems = () => {
    const [scrollProgress, setScrollProgress] = useState({ left: 0, right: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const container = document.querySelector(".scroll-container");
            if (container) {
                const scrollLeft = container.scrollLeft;
                const scrollWidth = container.scrollWidth - container.clientWidth;
                const rightProgress = (scrollLeft / scrollWidth) * 100;
                setScrollProgress((prevState) => ({ ...prevState, right: rightProgress }));
            }
        };

        const container = document.querySelector(".scroll-container");
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="bg-white">
            <div className="w-full h-[260px] flex-nowrap overflow-x-auto scroll-smooth scroll-container">
                <div className="h-[115px] flex-nowrap flex flex-row w-[912px] pt-[10px] ">
                    {homeGridItemsData[0].items.map((item: { id: number; title: string; url: string; imgsrc: string }) => (
                        <div key={item.id} className="flex justify-start items-center flex-col px-[10px]">
                            <Image src={item.imgsrc} alt={item.title} width={64} height={64} className="rounded-full" />
                            <span
                                className="font-Pretendard text-[13px] whitespace-nowrap leading-4 font-normal text-center mt-[6px]"
                                dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, "<br>") }}
                            />
                        </div>
                    ))}
                </div>
                <div className="h-[145px] flex-nowrap flex flex-row w-[912px] pt-[10px]">
                    {homeGridItemsData[1].items.map((item: { id: number; title: string; url: string; imgsrc: string }) => (
                        <div key={item.id} className="flex justify-start items-center flex-col px-[10px]">
                            <Image src={item.imgsrc} alt={item.title} width={64} height={96} className="rounded-full" />
                            <span
                                className="font-Pretendard text-[13px] whitespace-nowrap leading-4 font-normal text-center mt-[6px]"
                                dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, "<br>") }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-0.5 bg-gray-200">
                <div className="h-1 bg-black rounded-full" style={{ width: `${scrollProgress.right < 20 ? 20 : scrollProgress.right}%` }}></div>
            </div>
        </div>
    );
};

export default HomeGridItems;
