import React from "react";
import { HomeHeaderNavigationType } from "@/types/navigationType";
import { homeHeaderCategoryData } from "@/libs/homeHeaderCategoryData";

import Image from "next/image";
import Link from "next/link";

const BottomHeader = () => {
    return (
        <nav className="flex flex-row overflow-x-auto sticky top-0 z-50 drop-shadow-md bg-white">
            <ul className="w-full flex flex-row items-center">
                {homeHeaderCategoryData.map((category: HomeHeaderNavigationType) => {
                    return (
                        <li key={category.id} className="px-[12px] ">
                            {category.id === 7 ? (
                                <Image src="/images/home/ssgTVLogo.png" alt="ssgtvlogo" width={60} height={46} className="px-[4px] min-w-[60px] h-auto"></Image>
                            ) : (
                                <Link href={category.url} className="font-Pretendardd text-[14px] whitespace-nowrap px-[4px] h-auto ">
                                    {category.title}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomHeader;
