import React from "react";
import RightArrow from "../images/RightArrow";
import Link from "next/link";

interface MoreContentsProps {
    title: string;
    link?: string;
}

const MoreContents = ({ title, link }: MoreContentsProps) => {
    return (
        <div className="px-3">
            <button className="w-full h-[40px] border-2 flex flex-row justify-center items-center">
                <p className="font-Pretendard text-[14px]">{title}</p>
                {link !== undefined ? (
                    <Link href={link}>
                        <RightArrow />
                    </Link>
                ) : (
                    <RightArrow />
                )}
            </button>
        </div>
    );
};

export default MoreContents;
