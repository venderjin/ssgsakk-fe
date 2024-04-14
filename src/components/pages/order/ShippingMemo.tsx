import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OrderMemo } from "@/types/orderType";
import { shippingMemoData } from "@/libs/orderData";
import { memberOrderState, nonMemberOrderState, shippingMemoState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";

const ShippingMemo = ({ isMember }: { isMember: boolean }) => {
    const [openShippingMemo, setOpenShippingMemo] = useRecoilState(shippingMemoState);
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [nonMemberInfo, setNonMemberInfo] = useRecoilState(nonMemberOrderState);
    const [writeMemoLength, setWriteMemoLength] = useState<number>(0);
    const [shippingMemoId, setShippingMemoId] = useState<number>(1);
    const [shippingMemo, setShippingMemo] = useState<string>("부재 시 경비실에 맡겨주세요.");
    const router = useRouter();

    useEffect(() => {
        //회원 / 비회원 구분해서 Recoil에 저장
        isMember ? setMemberInfo({ ...memberInfo, deliverymessage: shippingMemo }) : setNonMemberInfo({ ...nonMemberInfo, deliverymessage: shippingMemo });
    }, [shippingMemo]);

    useEffect(() => {
        // 초기값 설정
        setShippingMemoId(1);
        setShippingMemo("부재 시 경비실에 맡겨주세요.");
    }, []); // 한 번만 실행되도록 빈 배열로 설정

    const redirectToPayment = () => {
        setOpenShippingMemo(false);
        router.push("/payments");
    };

    return (
        <>
            <div className="h-[42px] py-[11px] flex justify-center border-b-[#BCBCBC] border-b-[1px]">
                <div className="w-[50px] h-[42px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
                    <button
                        onClick={() => {
                            isMember ? router.back() : setOpenShippingMemo(false);
                        }}
                        className="w-[22px] h-[20px] bg-top-icon bg-no-repeat bg-[position:0px_0px] bg-[length:100px_100px]"
                    ></button>
                </div>

                <h1 className="text-black text-[16px] font-bold align-middle flex items-center font-Pretendard">수령위치 선택</h1>
            </div>
            <div className="px-5 pt-5 h-[87vh] ">
                <p className="font-Pretendard text-[18px] font-bold mb-3">택배배송 요청사항</p>
                <form>
                    {shippingMemoData.map((memo: OrderMemo, idx: number) => (
                        <div key={idx} className="flex flex-row gap-1 my-1">
                            <input
                                key={memo.id}
                                type="radio"
                                name="shippingMemo"
                                checked={shippingMemoId === memo.id ? true : false}
                                value={memo.memo}
                                id={memo.id.toString()}
                                onChange={(e) => {
                                    setShippingMemoId(memo.id);
                                    setShippingMemo(e.target.value);
                                }}
                                className="mr-3 h-5 w-5 accent-[#ff5452]"
                            />
                            <p className="font-Pretendard text-[15px]">{memo.memo}</p>
                        </div>
                    ))}
                    {shippingMemoId === 5 && (
                        <div className="relative">
                            <textarea
                                maxLength={50}
                                onChange={(e) => {
                                    setWriteMemoLength(e.target.value.length);
                                    setShippingMemo(e.target.value);
                                }}
                                className="flex px-3 w-[100%] h-[70px] py-2 my-2 font-Pretendard border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                                placeholder="메세지를 입력해 주세요."
                            />
                            <p className="absolute bottom-0 right-0 mr-[15px] mb-[10px] text-[#959595] text-[13px]">
                                <span>{writeMemoLength}</span>
                                <span> / 50</span>
                            </p>
                        </div>
                    )}
                </form>
            </div>
            <div
                onClick={redirectToPayment}
                className="bg-primary-red sticky bottom-0 flex justify-center items-center"
                style={{ height: "calc(13vh - 42px)" }}
            >
                <p className="font-Pretendard text-[17px] text-white">계속하기</p>
            </div>
        </>
    );
};

export default ShippingMemo;
