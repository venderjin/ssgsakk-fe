import React, { useState, useEffect, use } from "react";
import HeartIcon from "@/components/UI/HeartIcon";
import Link from "next/link";

interface LikeCategory {
    categorySeq: number;
    categoryName: string;
}

const LikeCategoryList = ({ categorySeq, categoryName }: LikeCategory) => {
    const [categoryLevel, setCategoryLevel] = useState<number>(0);

    useEffect(() => {
        if (categorySeq > 0 && categorySeq < 14) {
            setCategoryLevel(1);
        } else if (categorySeq > 3 && categorySeq < 109) {
            setCategoryLevel(2);
        } else if (categorySeq > 108 && categorySeq < 900) {
            setCategoryLevel(3);
        }
    }, []);

    useEffect(() => {
        console.log(categoryName, "level is", categoryLevel);
    }, [categoryLevel]);

    return (
        <>
            <div className="flex items-center w-[100%]">
                <Link href={`/category/${categorySeq}`} className="bg-orange-200 w-[100%]">
                    <p className="font-Pretendard text-[18px]">{categoryName}</p>
                </Link>
            </div>
            <HeartIcon categorySeq={categorySeq} height={24} width={24} />
        </>
    );
};

export default LikeCategoryList;
