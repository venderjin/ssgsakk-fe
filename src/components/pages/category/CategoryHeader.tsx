// "use client";
// import React, { useState } from "react";

import RouterBackArrow from "@/components/UI/RouterBackArrow";
import HeartIcon from "@/components/UI/HeartIcon";
import Share from "@/components/images/Share";
import RightArrow from "@/components/images/RightArrow";
import FoldableTriangle from "@/components/UI/FoldableTriangle";

interface CategoryInheritance {
    categorySeq: number;
    parentsCategorySeq?: string;
}

async function GetCategoryInfo(categorySeq: number, parentsCategorySeq?: string) {
    const res = await fetch(`${process.env.BASE_URL}/category/search/${categorySeq}`, { cache: "no-store" });
    const data = await res.json();
    return data.result;
    // if (parentsCategorySeq === 0) {
    //     //전체 보기 누른경우 categorySeq == parentsCategorySeq
    //     const parentsResponse = await fetch(`${process.env.BASE_URL}/category/search/${parentsCategorySeq}`, { cache: "no-store" });
    //     const parentsData = await parentsResponse.json();
    //     return { childData: parentsData.result[0], parentsData: parentsData.result[0] };
    // } else {
    //     const childResponse = await fetch(`${process.env.BASE_URL}/category/search/${categorySeq}`, { cache: "no-store" });
    //     const parentsResponse = await fetch(`${process.env.BASE_URL}/category/search/${parentsCategorySeq}`, { cache: "no-store" });
    //     const childData = await childResponse.json();
    //     const parentsData = await parentsResponse.json();
    //     return { childData: childData.result[0], parentsData: parentsData.result[0] };
    // }
}

const CategoryHeader = async ({ categorySeq, parentsCategorySeq }: CategoryInheritance) => {
    const CategoryInheritanceInfo = await GetCategoryInfo(categorySeq, parentsCategorySeq);
    console.log("CategoryInheritanceInfo = ", CategoryInheritanceInfo);

    return (
        <>
            <div className="w-full h-[45px] flex flex-row items-center px-[16px] justify-between gap-2">
                <RouterBackArrow />
                {/* <div className="bg-blue-200 px-[20px] flex flex-1 flex-row items-center">
                    {CategoryInheritanceInfo.parentsData.categoryName}
                    <RightArrow width={13} height={13} />
                    {CategoryInheritanceInfo.childData.categoryName !== CategoryInheritanceInfo.parentsData.categoryName
                        ? CategoryInheritanceInfo.childData.categoryName
                        : "전체보기"}
                    <FoldableTriangle />
                </div> */}
                <HeartIcon width={20} height={20} />
                <Share width={24} height={24} />
            </div>
        </>
    );
};

export default CategoryHeader;
