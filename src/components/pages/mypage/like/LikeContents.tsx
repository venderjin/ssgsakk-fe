"use client";
import { useEffect, useState, useCallback, use } from "react";
import { useGetClientToken } from "@/actions/useGetClientToken";
import LikeCategoryList from "./LikeCategoryList";
import LikeEmpty from "./LikeEmpty";

interface LikeProductList {
    productSeq: number;
    productName: string;
}
[];

interface LikeCategoryList {
    categorySeq: number;
    categoryName: string;
}
[];

const LikeContents = () => {
    const [isFocus, setIsFocus] = useState<string>("product");
    const [likeProductEdit, setLikeProductEdit] = useState<boolean>(false);
    const [likeCategoryEdit, setLikeCategoryEdit] = useState<boolean>(false);
    const [likeProductList, setLikeProductList] = useState<LikeProductList[]>([]);
    const [likeCategoryList, setLikeCategoryList] = useState<LikeCategoryList[]>([]);
    const [checkAllCategory, setCheckAllCategory] = useState<boolean>(false);
    const [checkedCategoryStates, setCheckedCategoryStates] = useState<Record<number, boolean>>({});
    const [checkedCategorySeqs, setCheckedCategorySeqs] = useState<number[]>([]);

    const token = useGetClientToken();

    const likeProductFocus = () => {
        setIsFocus("product");
    };
    const likeCategoryFocus = () => {
        setIsFocus("category");
    };

    useEffect(() => {
        if (isFocus == "product") {
            const getLikeProductList = async (token: string) => {
                const res = await fetch(`${process.env.BASE_URL}/likes/user/product`, {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                });
                const data = await res.json();
                console.log(data.result);
                setLikeProductList(data.result);
                return data.result;
            };
            getLikeProductList(token);
        } else if (isFocus == "category") {
            const getLikeCategoryList = async (token: string) => {
                const res = await fetch(`${process.env.BASE_URL}/likes/user/category`, {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                    cache: "no-store",
                });
                const data = await res.json();
                setLikeCategoryList(data.result);
                return data.result;
            };
            getLikeCategoryList(token);
        }
    }, [isFocus]);

    const handleCategoryCheckboxChange = (categorySeq: number) => {
        setCheckedCategoryStates((prevState) => ({
            ...prevState,
            [categorySeq]: !prevState[categorySeq],
        }));
    };

    useEffect(() => {
        // 각각의 카테고리 체크박스 상태가 변경될 때마다 전체 선택 체크박스 상태 업데이트
        const allChecked = likeCategoryList.every((category) => checkedCategoryStates[category.categorySeq]);
        setCheckAllCategory(allChecked);

        // 선택된 카테고리 시퀀스 업데이트
        const selectedCategorySeqs = likeCategoryList.filter((category) => checkedCategoryStates[category.categorySeq]).map((category) => category.categorySeq);
        setCheckedCategorySeqs(selectedCategorySeqs);
    }, [checkedCategoryStates, likeCategoryList]);

    const handleCheckAllCategories = () => {
        const newCheckAllCategory = !checkAllCategory;

        // 전체 선택 체크박스 상태 업데이트
        setCheckAllCategory(newCheckAllCategory);

        // 각각의 카테고리 체크박스 상태 업데이트
        const newCheckedCategoryStates: Record<number, boolean> = {};
        likeCategoryList.forEach((category) => {
            newCheckedCategoryStates[category.categorySeq] = newCheckAllCategory;
        });
        setCheckedCategoryStates(newCheckedCategoryStates);
    };

    useEffect(() => {
        console.log("checkedCategorySeqs changed:", checkedCategorySeqs);
    }, [checkedCategorySeqs]);

    return (
        <div className="">
            <div className="bg-[#f5f5f5] h-[50px] px-[15px] flex items-center gap-5 pl-6">
                <div onClick={likeProductFocus} className={`font-Pretendard text-[14px] ${isFocus == "product" ? "font-bold underline" : ""}`}>
                    상품
                </div>
                <div onClick={likeCategoryFocus} className={`font-Pretendard text-[14px] ${isFocus == "category" ? "font-bold underline" : ""}`}>
                    카테고리
                </div>
            </div>
            {isFocus == "product" ? (
                <>
                    {likeProductList && likeProductList.length == 0 ? (
                        <LikeEmpty type={isFocus} />
                    ) : (
                        <>
                            {likeProductList &&
                                likeProductList.map((product: LikeProductList, index: number) => (
                                    <div
                                        key={product.productSeq}
                                        className={`flex items-center justify-between mx-[15px] py-5 ${
                                            index !== likeProductList.length - 1 ? "border-b-[1px] border-[#e5e5e5]" : ""
                                        }`}
                                    >
                                        {product.productName}
                                    </div>
                                ))}
                        </>
                    )}
                </>
            ) : (
                <>
                    {likeCategoryList && likeCategoryList.length == 0 ? (
                        <LikeEmpty type={isFocus} />
                    ) : (
                        <>
                            <div
                                className={`flex flex-row mx-[15px] mt-[10px] 
                                ${!likeCategoryEdit ? "justify-end" : "justify-between"} `}
                            >
                                {!likeCategoryEdit ? (
                                    <>
                                        <div
                                            onClick={() => setLikeCategoryEdit(!likeCategoryEdit)}
                                            className=" flex flex-row px-2 py-1 justify-center items-center gap-1 border-[1px] rounded-sm"
                                        >
                                            <div className="bg-like-icon position bg-[position:-164px_-77px] bg-[size:180px_147px] w-[15px] h-[15px]" />
                                            <p className="font-Pretendard text-[12px]">편집</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-row items-center justify-center">
                                            <input
                                                type="checkbox"
                                                checked={checkAllCategory}
                                                onChange={handleCheckAllCategories}
                                                className={`${checkAllCategory ? "bg-[position:0px_-15px]" : "bg-[position:-20px_-15px]"}
                                                            appearance-none mr-[10px] w-[18px] h-[18px] 
                                                            bg-no-repeat bg-agree-icon  bg-[length:250px_250px]`}
                                            />
                                            <p className="font-Pretendard text-[12px]">전체선택</p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <div className="flex flex-row px-2 py-1 justify-center items-center border-[1px] rounded-sm">
                                                <p className="font-Pretendard text-[12px] font-bold">삭제</p>
                                            </div>
                                            <div
                                                className="flex flex-row px-2 py-1 justify-center items-center border-[1px] rounded-sm"
                                                onClick={() => setLikeCategoryEdit(!likeCategoryEdit)}
                                            >
                                                <p className="font-Pretendard text-[12px]">취소</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            {likeCategoryList &&
                                likeCategoryList.map((category: LikeCategoryList, index: number) => (
                                    <div
                                        key={category.categorySeq}
                                        className={`flex items-center justify-between mx-[15px] py-5 ${
                                            index !== likeCategoryList.length - 1 ? "border-b-[1px] border-[#e5e5e5]" : ""
                                        }`}
                                    >
                                        {likeCategoryEdit && (
                                            <input
                                                type="checkbox"
                                                checked={!!checkedCategoryStates[category.categorySeq]}
                                                onChange={() => {
                                                    handleCategoryCheckboxChange(category.categorySeq);
                                                }}
                                                className={`${
                                                    !!checkedCategoryStates[category.categorySeq] ? "bg-[position:0px_-15px]" : "bg-[position:-20px_-15px]"
                                                }
                                                            appearance-none mr-[10px] w-[21px] h-[18px] 
                                                            bg-no-repeat bg-agree-icon  bg-[length:250px_250px]`}
                                            />
                                        )}
                                        <LikeCategoryList categorySeq={category.categorySeq} categoryName={category.categoryName} />
                                    </div>
                                ))}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default LikeContents;
