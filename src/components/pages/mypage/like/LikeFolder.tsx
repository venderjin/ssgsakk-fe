import React from "react";
import FilledHeart from "../../../images/FilledHeart";

interface LikeTotalFolerProps {
    folderName: string;
}

const LikeTotalFoler = ({ folderName }: LikeTotalFolerProps) => {
    return (
        <>
            <div className="flex-none w-[57px] mx-2">
                <div className="rounded-full bg-[#e4e4e4] w-[57px] h-[57px] flex justify-center items-center">
                    <FilledHeart />
                </div>
                <div className="font-Pretendard text-[12px] text-center truncate">{folderName}</div>
            </div>
        </>
    );
};

export default LikeTotalFoler;
