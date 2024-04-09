import RouterBackArrow from "@/components/UI/RouterBackArrow";
import HeartIcon from "@/components/UI/HeartIcon";
import Share from "@/components/images/Share";
import RightArrow from "@/components/images/RightArrow";
import FoldableTriangle from "@/components/UI/FoldableTriangle";
import React, { Suspense } from "react";
import CategoryNavigation from "@/components/pages/category/CategoryNavigation";
import CategorySmall from "@/components/pages/category/CategorySmall";

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

async function GetChildCategoryInfo(categorySeq: number, categoryLevel: number) {
    if (categoryLevel === 1) {
        const res = await fetch(`${process.env.BASE_URL}/category/mid-by-big?parentCategoryId=${categorySeq}`, { cache: "no-store" });
        const data = await res.json();
        return data.result;
    } else if (categoryLevel === 2) {
        const res = await fetch(`${process.env.BASE_URL}/category/small-by-mid?parentCategoryId=${categorySeq}`, { cache: "no-store" });
        const data = await res.json();
        return data.result;
    }
}

async function GetSmallCategoryInfo(categorySeq: number) {
    const res = await fetch(`${process.env.BASE_URL}/category/small-by-mid?parentCategoryId=${categorySeq}`, { cache: "no-store" });
    const data = await res.json();
    return data.result;
}

const CategoryHeader = async ({ categorySeq, bigCategorySeq, midCategorySeq, smallCategorySeq }: CategoryInheritance) => {
    let parents = undefined;
    let child = undefined;
    let sibling = undefined;
    let smallCategoryInfo = undefined;
    if (bigCategorySeq !== undefined && midCategorySeq === "total" && smallCategorySeq === undefined) {
        // 대분류 카테고리 exist & 중분류 카테고리 전체보기 & 소분류 카테고리 없음
        parents = await GetCategoryInfo(Number(bigCategorySeq));
        child = "전체보기";
        sibling = await GetChildCategoryInfo(Number(bigCategorySeq), 1);
    } else if (bigCategorySeq !== undefined && midCategorySeq !== undefined && smallCategorySeq === undefined) {
        // 대분류 카테고리 exist & 중분류 카테고리 exist & 소분류 카테고리 없음
        parents = await GetCategoryInfo(Number(bigCategorySeq));
        child = await GetCategoryInfo(Number(midCategorySeq));
        sibling = await GetChildCategoryInfo(Number(bigCategorySeq), 1);
    } else if (bigCategorySeq !== undefined && midCategorySeq !== undefined && smallCategorySeq === "total") {
        // 대분류 카테고리 exist & 중분류 카테고리 exist & 소분류 카테고리 전체보기
        parents = await GetCategoryInfo(Number(midCategorySeq));
        child = "전체보기";
        sibling = await GetChildCategoryInfo(Number(midCategorySeq), 2);
    } else if (bigCategorySeq !== undefined && midCategorySeq !== undefined && smallCategorySeq !== undefined) {
        // 대분류 카테고리 exist & 중분류 카테고리 exist & 소분류 카테고리 exist
        parents = await GetCategoryInfo(Number(midCategorySeq));
        child = await GetCategoryInfo(Number(smallCategorySeq));
        sibling = await GetChildCategoryInfo(Number(midCategorySeq), 2);
    }

    if (midCategorySeq !== "total") {
        smallCategoryInfo = await GetSmallCategoryInfo(Number(midCategorySeq));
    }

    return (
        <div>
            <div className="w-full h-[50px] flex flex-row items-center px-[16px] justify-between gap-2">
                <div className="flex justify-center items-center">
                    <RouterBackArrow />
                </div>

                <div className="pl-[10px] w-[75%] flex flex-row items-center ">
                    <p className="mr-2  font-Pretendard text-[14px] truncate ">{parents.categoryName}</p>
                    <RightArrow width={13} height={13} />
                    <p className="ml-2 mr-1  font-Pretendard text-[14px] font-bold truncate">{child == "전체보기" ? child : child.categoryName}</p>
                    <FoldableTriangle />
                </div>
                <div className="flex justify-center items-center gap-1">
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeartIcon width={20} height={20} categorySeq={child == "전체보기" ? parents.categorySeq : categorySeq} />
                    </Suspense>
                    <Share width={24} height={24} />
                </div>
            </div>
            <CategoryNavigation
                child={child}
                sibling={sibling}
                big={bigCategorySeq as string}
                mid={midCategorySeq as string}
                small={smallCategorySeq as string}
            />
            {midCategorySeq !== "total" && smallCategorySeq == undefined ? (
                <CategorySmall smallCategory={smallCategoryInfo} big={bigCategorySeq as string} mid={midCategorySeq as string} small={smallCategorySeq ?? ""} />
            ) : null}
        </div>
    );
};

export default CategoryHeader;
