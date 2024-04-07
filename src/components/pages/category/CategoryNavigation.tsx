"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface CategoryNavigationProps {
    child: ChildCategory | string;
    sibling: SiblingCategory[];
    big: string;
    mid: string;
    small: string | undefined;
}

interface ChildCategory {
    categoryName: string;
    level: number;
    categorySeq: number;
}

interface SiblingCategory {
    categoryName: string;
    level: number;
    categorySeq: number;
}
[];

const CategoryNavigation = ({ child, sibling, big, mid, small }: CategoryNavigationProps) => {
    const router = useRouter();
    const activeRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }, []);

    const navToTotal = () => {
        if (small === undefined) {
            //대분류 전체보기 화면 또는 중분류 카테고리 화면일때 대분류 전체보기 화면으로 이동
            router.push(`/category/${big}?big=${big}&mid=total`);
        } else if (small !== undefined) {
            //중분류 전체보기 화면 또는 소분류 카테고리 화면일때 중분류 전체보기 화면으로 이동
            router.push(`/category/${mid}?big=${big}&mid=${mid}&small=total`);
        }
    };

    const navToSibling = (categorySeq: number) => {
        if (small === undefined) {
            //대분류 전체보기 화면 또는 중분류 카테고리 화면일때 대분류 전체보기 화면으로 이동
            router.push(`/category/${categorySeq}?big=${big}&mid=${categorySeq}`);
        } else if (small !== undefined) {
            //중분류 전체보기 화면 또는 소분류 카테고리 화면일때 중분류 전체보기 화면으로 이동
            router.push(`/category/${categorySeq}?big=${big}&mid=${mid}&small=${categorySeq}`);
        }
    };

    return (
        <div className="h-[50px] flex flex-row items-center px-[16px] gap-2 overflow-x-auto">
            <div
                onClick={navToTotal}
                className={`flex h-[70%] px-3 items-center text-center whitespace-nowrap font-Pretendard text-[13px]
                ${child == "전체보기" ? "bg-black text-white" : "bg-gray-100"}
                `}
            >
                전체보기
            </div>
            {sibling.map((sibling: SiblingCategory) => (
                <div
                    ref={typeof child !== "string" && child.categoryName == sibling.categoryName ? (activeRef as React.RefObject<HTMLDivElement>) : null}
                    onClick={() => navToSibling(sibling.categorySeq)}
                    key={sibling.categorySeq}
                    className={`flex h-[70%] px-3 items-center text-center whitespace-nowrap font-Pretendard text-[13px]
                    ${typeof child !== "string" && child.categoryName == sibling.categoryName ? "bg-black text-white" : "bg-gray-100"}
                        `}
                >
                    {sibling.categoryName}
                </div>
            ))}
        </div>
    );
};

export default CategoryNavigation;
