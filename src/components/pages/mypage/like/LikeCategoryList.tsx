import React, { useState, useEffect } from "react";
import HeartIcon from "@/components/UI/HeartIcon";

interface LikeCategory {
    categorySeq: number;
    categoryName: string;
}

const LikeCategoryList = ({ categorySeq, categoryName }: LikeCategory) => {
    return (
        <>
            <div className="flex items-center w-[100%]">
                <p className="font-Pretendard text-[18px]">{categoryName}</p>
            </div>
            <HeartIcon categorySeq={categorySeq} height={24} width={24} />
        </>
    );
};

export default LikeCategoryList;
