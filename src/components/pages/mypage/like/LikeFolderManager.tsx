import React from "react";
import FilledHeart from "../../../images/FilledHeart";

const LikeFolderManager = () => {
    return (
        <div className="flex-none w-[57px] bg-green-200">
            <div className="rounded-full bg-white border-[1px] border-gray-300 w-[57px] h-[57px] flex justify-center items-center">
                <FilledHeart />
            </div>
            <div className="font-Pretendard text-[12px] text-center">폴더관리</div>
        </div>
    );
};

export default LikeFolderManager;
