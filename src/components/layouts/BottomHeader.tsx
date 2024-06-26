"use client";
import React from "react";
import { HomeHeaderNavigationType } from "@/types/navigationType";
import { homeHeaderCategoryData } from "@/libs/homeHeaderCategoryData";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BottomHeader = () => {
    const pathname = usePathname();
    return (
        <nav className="flex flex-row overflow-x-auto sticky top-0 z-50 drop-shadow-sm bg-white">
            <ul className="w-full flex flex-row items-center">
                {homeHeaderCategoryData.map((category: HomeHeaderNavigationType) => {
                    return (
                        <li
                            key={category.id}
                            className={`px-[12px] ${category.url === pathname ? "border-b-2 border-black" : ""} ${category.id !== 7 ? "py-2" : ""}`}
                        >
                            {category.id === 7 ? (
                                <Image
                                    onClick={() => alert("준비중인 서비스입니다.")}
                                    src="/images/home/ssgTVLogo.png"
                                    alt="ssgtvlogo"
                                    width={60}
                                    height={46}
                                    className="px-[4px] min-w-[60px] h-auto"
                                ></Image>
                            ) : category.id < 7 ? (
                                <Link
                                    href={category.url || ""}
                                    className={`font-Pretendardd text-[14px] whitespace-nowrap px-[4px] h-auto ${
                                        category.url === pathname ? "font-black" : ""
                                    } `}
                                >
                                    {category.title}
                                </Link>
                            ) : (
                                <span
                                    onClick={() => alert("준비중인 서비스입니다.")}
                                    className="font-Pretendardd text-[14px] whitespace-nowrap px-[4px] h-auto"
                                >
                                    {category.title}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomHeader;
