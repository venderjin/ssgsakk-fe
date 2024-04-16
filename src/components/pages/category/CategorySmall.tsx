"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface SmallCategoryProps {
    big: string;
    mid: string;
    small: string;
    smallCategory: SmallCategory[];
}

interface SmallCategory {
    categoryName: string;
    level: number | null;
    categorySeq: number | null;
}
[];

const CategorySmall = ({ smallCategory, big, mid, small }: SmallCategoryProps) => {
    const router = useRouter();

    const remainder = 3 - (smallCategory.length % 3); // 3의 배수가 아닌 나머지 계산
    const extendedCategories: SmallCategory[] = smallCategory.slice(); // 기존 데이터 복사
    if (remainder < 3) {
        for (let i = 0; i < remainder; i++) {
            extendedCategories.push({ categoryName: "null", level: null, categorySeq: null }); // 나머지 만큼 null 데이터 추가
        }
    }

    // 데이터를 3열로 나누어 배열로 그룹화합니다.
    const groupedCategories: SmallCategory[][] = extendedCategories.reduce((acc: SmallCategory[][], category: SmallCategory, index: number) => {
        const chunkIndex: number = Math.floor(index / 3); // 3으로 나눈 몫을 인덱스로 사용하여 그룹을 만듭니다.
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = []; // 새 그룹을 만듭니다.
        }
        acc[chunkIndex].push(category); // 현재 요소를 현재 그룹에 추가합니다.
        return acc;
    }, []);

    const handleClick = (categorySeq: number) => {
        router.push(`/category/${categorySeq}?big=${big}&mid=${mid}&small=${categorySeq}`);
    };

    return (
        <div className="w-[100%]">
            <table className="w-[100%]">
                <tbody>
                    {groupedCategories.map((row: SmallCategory[], rowIndex: number) => (
                        <tr key={rowIndex} className="flex">
                            {row.map((category: SmallCategory, columnIndex: number) => (
                                <td
                                    onClick={() => handleClick(category.categorySeq as number)}
                                    key={columnIndex}
                                    className={`flex-1 px-[15px] py-3 border-[1px]
                                                font-Pretendard text-[13px] border-gray-200 
                                                truncate ${category.categoryName === "null" ? "text-transparent" : ""}`}
                                >
                                    {category.categoryName}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategorySmall;
