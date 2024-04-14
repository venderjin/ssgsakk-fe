"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderResultPage = ({ params, searchParams }: { params: { categoryId: number }; searchParams: { [key: string]: string | undefined } }) => {
    const orderCode = searchParams.code;
    const router = useRouter();

    return (
        <>
            <div className="w-full h-[90vh] bg-[#F5F5F5] py-5 px-3 flex justify-center items-center flex-col">
                <div className="bg-white my-4 rounded-xl px-4 py-4 w-full flex justify-center ">
                    <p className="font-Pretendard text-[20px] font-bold">주문이 완료되었습니다!</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 w-full flex flex-col justify-center items-center">
                    <p className="my-1 font-Pretendard text-[15px] ">주문번호</p>
                    <p className="my-1 font-Pretendard text-[17px] font-bold">{orderCode}</p>
                </div>
            </div>
            <div onClick={() => router.push("/mypage")} className="bg-primary-red sticky bottom-0 flex justify-center items-center h-[10vh]">
                <p className="font-Pretendard text-[17px] text-white">마이페이지로 이동</p>
            </div>
        </>
    );
};

export default OrderResultPage;
