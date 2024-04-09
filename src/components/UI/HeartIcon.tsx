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
    const [isCheck, setIsCheck] = useState<Boolean>(false);
    const [userToken, setUserToken] = useState<string>(""); // [1
    const token = useGetClientToken();

    const handler = () => {
        setIsCheck(!isCheck);
    };

    //token 값으로 회원 비회원 구분
    // 1. token이 존재하면 회원
    // 2. token이 존재하지 않으면 비회원
    // 3. 회원일때만 찜 상태를 확인하고 찜 상태에 따라 찜하기, 찜취소 api fetch
    // 4. 비회원일때는 찜하기, 찜취소 api fetch를 하지 않음

    const memberCheck = () => {
        //회원, 비회원 구분 함수
        if (token) {
            //회원
            return true;
        } else {
            //비회원
            return false;
        }
    };

    const productLikeCheck = async () => {
        //상품 찜 상태 확인 함수
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

    const categoryLikeCheck = async () => {
        //카테고리 찜 상태 확인 함수
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

    const productLike = async () => {
        //상품 찜하기 함수
        const response = await fetch(`${process.env.BASE_URL}/likes/add?product-seq=${productSeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        // console.log(data);
    };

    const categoryLike = async () => {
        //카테고리 찜하기 함수
        const response = await fetch(`${process.env.BASE_URL}/likes/add?category-seq=${categorySeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        // console.log(data);
    };

    const productUnlike = async () => {
        //상품 찜취소 함수
        const response = await fetch(`${process.env.BASE_URL}/likes/delete?product-seq=${productSeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        // console.log("fetchUnlikeProduct data", data);
    };

    const categoryUnlike = async () => {
        //카테고리 찜취소 함수
        const response = await fetch(`${process.env.BASE_URL}/likes/delete?category-seq=${categorySeq}`, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });
        const data = await response.json();
        // console.log("fetchUnlikeCategory data", data);
    };

    useEffect(() => {
        //membercheck 함수 값이 반환될때까지 대기
        async function isUserProductLike() {
            const isMember = await memberCheck();

            if (isMember) {
                await productLikeCheck();
            } else {
                // Call the next function here if memberCheck returns false
            }
        }
    }, []);

    return (
        <>
            {/* {token && ( */}
            {/* <div onClick={handler}>
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
            </div> */}
            {/* )} */}
        </>
    );
}
