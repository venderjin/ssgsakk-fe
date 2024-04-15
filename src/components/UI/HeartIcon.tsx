"use client";
import React, { useEffect, useState } from "react";
import RedHeart from "../images/RedHeart";
import Heart from "../images/Heart";
import { useGetClientToken } from "@/actions/useGetClientToken";

interface Props {
    productSeq?: number;
    categorySeq?: number;
    height?: number;
    width?: number;
}

export default function HeartIcon({ productSeq, categorySeq, height, width }: Props) {
    const [isCheck, setIsCheck] = useState<Boolean>(false);
    const token = useGetClientToken();

    const handler = async () => {
        if (productSeq) {
            if (isCheck) {
                await productUnlike();
            } else {
                await productLike();
            }
        } else if (categorySeq) {
            if (isCheck) {
                await categoryUnlike();
            } else {
                await categoryLike();
            }
        }
    };

    //찜(상품,카테고리)하기 함수 -----------------------------------------------------------------
    const productLike = async () => {
        const response = await fetch(`${process.env.BASE_URL}/likes/add?product-seq=${productSeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
            cache: "no-cache",
        });
        const data = await response.json();
        setIsCheck(true);
        return data;
    };

    const categoryLike = async () => {
        const response = await fetch(`${process.env.BASE_URL}/likes/add?category-seq=${categorySeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        setIsCheck(true);
        return data;
    };

    //찜(상품,카테고리)취소 함수 -----------------------------------------------------------------
    const productUnlike = async () => {
        const response = await fetch(`${process.env.BASE_URL}/likes/delete?product-seq=${productSeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
            cache: "no-cache",
        });
        const data = await response.json();
        setIsCheck(false);
        return data;
    };

    const categoryUnlike = async () => {
        const response = await fetch(`${process.env.BASE_URL}/likes/delete?category-seq=${categorySeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        setIsCheck(false);
        return data;
    };

    useEffect(() => {
        const productChecker = async () => {
            const response = await fetch(`${process.env.BASE_URL}/likes/check/product-seq/${productSeq}`, {
                method: "GET",
                headers: {
                    Authorization: token,
                },
                next: { tags: ["heart"] },
                cache: "no-cache",
            });
            const data = await response.json();
            setIsCheck(data.result.likeState === 1 ? true : false);
        };

        const categoryChecker = async () => {
            const response = await fetch(`${process.env.BASE_URL}/likes/check/category-seq/${categorySeq}`, {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            });
            const data = await response.json();
            setIsCheck(data.result.likeState === 1 ? true : false);
        };

        if (token && token !== "" && productSeq) {
            productChecker();
        } else if (token && token !== "" && categorySeq) {
            categoryChecker();
        }
    }, [isCheck, token]); // Add token to the dependency array

    return (
        <>
            {token ? (
                <div onClick={handler}>
                    {isCheck === true ? (
                        <div
                            style={{
                                animation: "smallScale 0.5s ease-in-out",
                            }}
                        >
                            <RedHeart height={height} width={width} />
                        </div>
                    ) : (
                        <Heart height={height} width={width} />
                    )}
                </div>
            ) : (
                <div
                    onClick={() => {
                        alert("로그인이 필요한 서비스입니다.");
                    }}
                >
                    <Heart height={height} width={width} />
                </div>
            )}
        </>
    );
}
