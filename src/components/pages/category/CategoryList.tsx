"use client";
import React, { useState, useEffect, use } from "react";
import { categoryData } from "@/libs/categoryData";
import Image from "next/image";
import Link from "next/link";

interface middleCategory {
    categoryName: string;
    categorySeq: number;
    level: number;
}
[];

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [middleCategory, setMiddleCategory] = useState<middleCategory[]>([]);
    const handleClick = (id: number) => {
        setSelectedCategory(id);
    };

    useEffect(() => {
        const getMiddleCategory = async () => {
            const res = await fetch(`${process.env.BASE_URL}/category/mid-by-big?parentCategoryId=${selectedCategory}`, { method: "GET" });
            const data = await res.json();
            setMiddleCategory(data.result);
        };
        getMiddleCategory();
    }, [selectedCategory]);

    return (
        <div>
            <div className="bg-gradient-to-r from-[#FF5352] via-[#F43479] to-[#BF3FF9]" style={{ height: "1.5px" }}></div>
            <ul className="grid grid-cols-5 px-[10px] pt-[15px] pb-[25px] bg-white">
                {categoryData.map((category) => (
                    <li key={category.id}>
                        <a onClick={() => handleClick(category.id)} className="flex flex-col justify-center items-center p-[5px]">
                            <Image src={category.imgUrl} alt={category.name} width={64} height={64}></Image>
                            <p className="line-clamp-1 mt-[5px] text-[12px] text-[#424242] font-Pretendard whitespace-pre-wrap tracking-tighter leading-tight  text-center">
                                {category.name}
                            </p>
                        </a>
                        {selectedCategory === category.id && (
                            <div style={{ height: `${category.height}px` }}>
                                <div className="absolute left-0 w-full ">
                                    <ul className="bg-[#f5f5f5] my-[5px] grid grid-cols-2 pl-[13px] pt-[12px] pr-[12px] pb-[20px]">
                                        <li className="font-Pretendard text-[14px] min-h-[38px] pl-[12px] pr-[13px] tracking-tight flex items-center">
                                            <Link href={`/category/${category.id}`}>상품전체보기</Link>
                                        </li>
                                        {middleCategory.map((item, idx) => (
                                            <li
                                                className="font-Pretendard text-[14px] min-h-[38px] pl-[12px] pr-[13px] tracking-tight flex items-center"
                                                key={idx}
                                            >
                                                <Link href={`/category/${item.categorySeq}`}>{item.categoryName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
