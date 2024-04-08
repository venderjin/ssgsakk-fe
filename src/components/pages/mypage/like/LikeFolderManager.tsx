import React from "react";
import FilledHeart from "../../../images/FilledHeart";

const LikeFolderManager = () => {
    return (
        <div className="flex-none w-[57px] bg-green-200 mx-2">
            <div className="rounded-full bg-orange-300 border-[1px] border-gray-300 w-[57px] h-[57px] flex justify-center items-center">
                <div className="bg-like-icon position bg-[position:-67px_0px] bg-[size:180px_147px] w-[57px] h-[57px]"></div>
            </div>
            <div className="font-Pretendard text-[12px] text-center">폴더관리</div>
        </div>
    );
};

export default LikeFolderManager;
