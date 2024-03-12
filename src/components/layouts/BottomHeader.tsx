import React from "react";
import { HomeHeaderNavigationType } from "@/types/navigationType";
import { homeHeaderCategoryData } from "@/libs/homeHeaderCategoryData";
import SsgTVLogo from "@/images/svgs/SsgTVLogo";

import Link from "next/link";

const BottomHeader = () => {
    return (
        <div className="flex flex-row justify-center overflow-x-auto">
            {homeHeaderCategoryData.map((category: HomeHeaderNavigationType) => (
                <div key={category.id} className="flex-grow py-[14px] px-[9px]">
                    {category.id === 7 ? (
                        <p className="whitespace-nowrap overflow-hidden bg-slate-200">{category.title}로고오는자리</p>
                    ) : (
                        <Link href={category.url} className="font-Pretendard whitespace-nowrap bg-slate-300">
                            {category.title}
                        </Link>
                    )}
                </div>
            ))}
            {/* <SsgTVLogo /> */}
        </div>
    );
};

export default BottomHeader;
