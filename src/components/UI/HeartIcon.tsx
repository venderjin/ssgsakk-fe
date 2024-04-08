"use client";
import React, { use, useEffect, useState } from "react";
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
    const [isCheck, setIsCheck] = useState<Boolean | undefined>(undefined);
    const token = useGetClientToken();

    const handler = () => {
        setIsCheck(!isCheck);
    };

    useEffect(() => {
        //랜더링 되었을때 찜 상태인지 아닌지 확인하기 위한 fetch
        if (productSeq !== undefined && categorySeq === undefined) {
            const fetchCheckProduct = async () => {
                const response = await fetch(`${process.env.BASE_URL}/likes/check/product-seq/${productSeq}`, {
                    method: "GET",
                    headers: {
                        Authorization: token,
                    },
                });
                const data = await response.json();
                // console.log("fetchCheckProduct data", data.result.likeState);
                setIsCheck(data.result.likeState === 1 ? true : false);
            };
            fetchCheckProduct();
        } else if (productSeq === undefined && categorySeq !== undefined) {
            const fetchCheckCategory = async () => {
                const response = await fetch(`${process.env.BASE_URL}/likes/check/category-seq/${categorySeq}`, {
                    method: "GET",
                    headers: {
                        Authorization: token,
                    },
                });
                const data = await response.json();
                // console.log("fetchCheckCategory data", data.result.likeState);
                setIsCheck(data.result.likeState === 1 ? true : false);
            };
            fetchCheckCategory();
        }
    }, []);

    useEffect(() => {
        //상품 찜 하기
        if (isCheck === true) {
            if (productSeq !== undefined && categorySeq === undefined) {
                // productSeq에 좋아요를 누른 경우 상품 좋아요 api에 fetch
                const fetchLikeProduct = async () => {
                    const response = await fetch(`${process.env.BASE_URL}/likes/add?product-seq=${productSeq}`, {
                        method: "GET",
                        headers: {
                            Authorization: token,
                        },
                    });
                    const data = await response.json();
                    // console.log(data);
                };
                fetchLikeProduct();
            } else if (productSeq === undefined && categorySeq !== undefined) {
                // categorySeq에 좋아요를 누른 경우
                const fetchLikeCategory = async () => {
                    const response = await fetch(`${process.env.BASE_URL}/likes/add?category-seq=${categorySeq}`, {
                        method: "GET",
                        headers: {
                            Authorization: token,
                        },
                    });
                    const data = await response.json();
                    // console.log(data);
                };
                fetchLikeCategory();
            }
        }

        //상품 찜 취소
        if (isCheck === false) {
            if (productSeq !== undefined && categorySeq === undefined) {
                // productSeq에 좋아요를 취소한 경우 상품 좋아요 취소 api에 fetch
                const fetchUnlikeProduct = async () => {
                    const response = await fetch(`${process.env.BASE_URL}/likes/delete?product-seq=${productSeq}`, {
                        method: "GET",
                        headers: {
                            Authorization: token,
                        },
                    });
                    const data = await response.json();
                    // console.log("fetchUnlikeProduct data", data);
                };
                fetchUnlikeProduct();
            } else if (productSeq === undefined && categorySeq !== undefined) {
                // categorySeq에 좋아요를 취소한 경우
                const fetchUnlikeCategory = async () => {
                    const response = await fetch(`${process.env.BASE_URL}/likes/delete?category-seq=${categorySeq}`, {
                        method: "GET",
                        headers: {
                            Authorization: token,
                        },
                    });
                    const data = await response.json();
                    // console.log("fetchUnlikeCategory data", data);
                };
                fetchUnlikeCategory();
            }
        }
    }, [isCheck]);

    return (
        <div onClick={handler}>
            {isCheck === true ? (
                <div
                    style={{
                        animation: "smallScale 0.5s ease-in-out",
                    }}
                >
                    <RedHeart height={height} width={width} />
                </div>
            ) : isCheck === false ? (
                <Heart height={height} width={width} />
            ) : null}
        </div>
    );
}
