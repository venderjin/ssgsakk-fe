import React from "react";
import { MainNavigationType } from "@/types/navigationType";
import { mainNavigationData } from "@/libs/mainNavigationData";
import Link from "next/link";
import Image from "next/image";

const BottomNav = () => {
    return (
        <div className="w-full h-[50px] sticky bottom-0 drop-shadow-[0_-4px_3px_rgba(0,0,0,0.07)] bg-white flex flex-row justify-around items-center">
            {mainNavigationData.map((category: MainNavigationType) => {
                return (
                    <div key={category.id}>
                        <Link href={category.url} className="font-Pretendard text-[#777777] flex-col text-[11px] flex items-center">
                            <Image src={category.icon} alt={category.title} width={28} height={28} />
                            {category.title}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default BottomNav;
