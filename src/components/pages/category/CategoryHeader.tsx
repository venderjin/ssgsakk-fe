// "use client";
// import React, { useState } from "react";

import RouterBackArrow from "@/components/UI/RouterBackArrow";
import HeartIcon from "@/components/UI/HeartIcon";
import Share from "@/components/images/Share";
import RightArrow from "@/components/images/RightArrow";
import FoldableTriangle from "@/components/UI/FoldableTriangle";

interface CategoryInheritance {
    categorySeq: number;
    bigCategorySeq?: string;
    midCategorySeq?: string;
    smallCategorySeq?: string;
}

async function GetCategoryInfo(categorySeq: number) {
    const res = await fetch(`${process.env.BASE_URL}/category/search/${categorySeq}`, { cache: "no-store" });
    const data = await res.json();
    return data.result[0];
}

const CategoryHeader = async ({ categorySeq, bigCategorySeq, midCategorySeq, smallCategorySeq }: CategoryInheritance) => {
    let parents = undefined;
    let child = undefined;
    if (midCategorySeq === undefined && smallCategorySeq === undefined) {
        parents = await GetCategoryInfo(bigCategorySeq as unknown as number);
        child = "전체보기";
    } else if (smallCategorySeq === undefined) {
        parents = await GetCategoryInfo(bigCategorySeq as unknown as number);
        child = await GetCategoryInfo(midCategorySeq as unknown as number);
    } else {
        parents = await GetCategoryInfo(midCategorySeq as unknown as number);
        child = await GetCategoryInfo(smallCategorySeq as unknown as number);
    }

    console.log("parents = ", parents);
    console.log("child = ", child);

    return (
        <>
            <div className="w-full h-[45px] flex flex-row items-center px-[16px] justify-between gap-2">
                <RouterBackArrow />
                <div className="px-[10px] flex flex-1 flex-row items-center">
                    <p className="mr-2 font-Pretendard text-[14px]">{parents.categoryName}</p>
                    <RightArrow width={13} height={13} />
                    <p className="ml-2 mr-1 font-Pretendard text-[14px] font-bold">{child == "전체보기" ? child : child.categoryName}</p>
                    <FoldableTriangle />
                </div>
                <HeartIcon width={20} height={20} />
                <Share width={24} height={24} />
            </div>
        </>
    );
};

export default CategoryHeader;
