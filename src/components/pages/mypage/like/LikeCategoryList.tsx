import React, { useState, useEffect } from "react";
import HeartIcon from "@/components/UI/HeartIcon";
import Link from "next/link";
import { set } from "react-hook-form";

interface LikeCategory {
    categorySeq: number;
    categoryName: string;
}

const LikeCategoryList = ({ categorySeq, categoryName }: LikeCategory) => {
    const [categoryLevel, setCategoryLevel] = useState<number>(0);
    const [bigCategory, setBigCategory] = useState<number>(0);
    const [middleCategory, setMiddleCategory] = useState<number>(0);
    const [router, setRouter] = useState<string>("");

    useEffect(() => {
        if (categorySeq > 0 && categorySeq < 14) {
            setCategoryLevel(1);
        } else if (categorySeq > 3 && categorySeq < 109) {
            setCategoryLevel(2);
        } else if (categorySeq > 108 && categorySeq < 900) {
            setCategoryLevel(3);
        }
    }, []);

    // useEffect(() => {
    //     console.log(categoryName, "level is", categoryLevel);

    //     const GetParentsCategory = async (categorySeq: number) => {
    //         try {
    //             const response = await fetch(`${process.env.BASE_URL}/category/find/parentCategories/${categorySeq}`);
    //             const data = await response.json();
    //             console.log("data is", data.result);
    //             return data.result[0].categorySeq;
    //         } catch (error) {
    //             // 오류가 발생한 경우 적절한 처리를 해줍니다.
    //             console.error("Error fetching parent category:", error);
    //             // 오류 처리 방법은 상황에 따라 다를 수 있습니다. 예를 들어 기본값을 반환하거나, 예외를 다시 던지거나, 빈 값으로 처리할 수 있습니다.
    //             return null;
    //         }
    //     };

    //     const fetchData = async () => {
    //         if (categoryLevel === 1) {
    //             // 찜 카테고리가 대카테고리일 경우
    //             setBigCategory(categorySeq);
    //             setRouter(`/category/${bigCategory}?big=${bigCategory}&mid=total`);
    //         } else if (categoryLevel === 2) {
    //             // 찜 카테고리가 중카테고리일 경우
    //             const mid = await GetParentsCategory(categorySeq);
    //             // console.log("mid is", mid);
    //             // setBigCategory(mid);
    //             // setMiddleCategory(categorySeq);
    //             // setRouter(`/category/${middleCategory}?big=${bigCategory}&mid=${middleCategory}`);
    //         } else if (categoryLevel === 3) {
    //             // 찜 카테고리가 소카테고리일 경우
    //             const mid = await GetParentsCategory(categorySeq);
    //             const big = await GetParentsCategory(mid);
    //             // console.log("big is", big);
    //             // console.log("mid is", mid);
    //             // setBigCategory(big);
    //             // setMiddleCategory(mid);
    //             // setRouter(`/category/${categorySeq}?big=${bigCategory}&mid=${middleCategory}&small=${categorySeq}`);
    //         }
    //     };

    //     fetchData();
    // }, [categoryLevel]);

    // useEffect(() => {
    //     console.log("router is", router);
    // }, [router]);

    return (
        <>
            <div className="flex items-center w-[100%]">
                <Link href={`/category/${categorySeq}`} className="w-[100%]">
                    <p className="font-Pretendard text-[18px]">{categoryName}</p>
                </Link>
            </div>
            <HeartIcon categorySeq={categorySeq} height={24} width={24} />
        </>
    );
};

export default LikeCategoryList;
