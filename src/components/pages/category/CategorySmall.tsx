import React from "react";

interface CategorySmallProps {
    midCategorySeq: number;
}

interface SmallCategory {
    categoryName: string;
    level: number;
    categorySeq: number;
}

async function GetSmallCategoryInfo(categorySeq: number) {
    const res = await fetch(`${process.env.BASE_URL}/category/small-by-mid?parentCategoryId=${categorySeq}`, { cache: "no-store" });
    const data = await res.json();
    return data.result;
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const results = [];
    while (array.length) {
        const chunk: T[] = array.splice(0, chunkSize);
        while (chunk.length < chunkSize) {
            chunk.push({ categoryName: "null", level: null, categorySeq: null } as T); // 빈 요소 추가
        }
        results.push(chunk);
    }
    return results;
}

const CategorySmall = async ({ midCategorySeq }: CategorySmallProps) => {
    const smallCategoryInfo = await GetSmallCategoryInfo(midCategorySeq);
    const chunkedSmallCategoryInfo: SmallCategory[][] = chunkArray(smallCategoryInfo, 3);

    return (
        <div>
            {chunkedSmallCategoryInfo.map((chunk: SmallCategory[], i) => (
                <div key={i} className="flex flex-row">
                    {chunk.map((item, j) => (
                        <p
                            key={j}
                            className={`flex-1 border-[1px] px-[15px] py-3 font-Pretendard text-[13px] border-gray-100 truncate ${
                                item.categoryName === "null" ? "text-transparent" : ""
                            }`}
                        >
                            {item.categoryName}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CategorySmall;
