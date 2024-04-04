import React from "react";

import RouterBackArrow from "@/components/UI/RouterBackArrow";

const CategoryHeader = ({ categorySeq }: { categorySeq: number }) => {
    return (
        <>
            <div className="bg-red-200 w-full h-[45px] flex flex-row items-center">
                <RouterBackArrow />
                <div>CategoryHeader</div>
                <div>categorySeq = {categorySeq}</div>
            </div>
        </>
    );
};

export default CategoryHeader;
