"use client";
import React from "react";
import Image from "next/image";

export default function FloatingUp() {
    const handleScroll = (e) => {
        if (!window.scrollY) return;
        // 현재 위치가 이미 최상단일 경우 return

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed left-0 right-0 bottom-[56px]">
            <div className="absolute right-[16px] bottom-[10px] z-[100]">
                <button
                    className="w-[40px] h-[40px] rounded-[15px] border-solid border-[#f5f5f5] border-opacity-95 bg-white bg-opacity-90 shadow-md flex items-center justify-center"
                    type="button"
                    onClick={handleScroll}
                >
                    <Image src="/images/etc/upArrow.png" alt="위로가기" width={20} height={20}></Image>
                </button>
            </div>
        </div>
    );
}
