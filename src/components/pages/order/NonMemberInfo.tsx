"use client";
import React, { useState, useCallback, useEffect, use } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import SearchZipcode from "@/components/pages/signup/form/SearchZipcode";
import ShippingMemo from "@/components/pages/order/ShippingMemo";
import Footer from "@/components/layouts/Footer";

import { nonMemberOrderState, shippingMemoState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";

interface NonMemberInfo {
    nonMemberName: string;
    nonMemberPhone: string;
    nonMemberEmail: string;
    nonMemberAddress: Address;
}

type Address = {
    zipCode: string;
    roadAddress?: string;
    jibunAddress?: string;
    detailAddress?: string;
};

const NonMemberInfo = () => {
    const [nonMemberInfo, setNonMemberInfo] = useRecoilState(nonMemberOrderState);
    const [openShippingMemo, setOpenShippingMemo] = useRecoilState(shippingMemoState);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [Address, setAddress] = useState<Address>({} as Address);
    const [openAddress, setOpenAddress] = useState<boolean>(false);

    const onChangeAddress = useCallback((address: Address) => {
        setAddress({ ...address });
    }, []);

    // 이메일 주소가 유효한지 확인하는 함수
    function isValidEmail(email: string) {
        // 정규 표현식을 사용하여 이메일 형식 검사
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const submitNonMemberInfo = () => {
        //유효성 검사
        if (name === "") {
            alert("주문자명을 입력해주세요.");
            return;
        }
        if (phone === "") {
            alert("휴대폰 번호를 입력해주세요.");
            return;
        } else if (phone.length < 13) {
            alert("올바른 휴대폰 번호 형식을 입력하세요.");
            return;
        }
        if (email === "") {
            alert("이메일 주소를 입력해주세요.");
            return;
        } else if (!isValidEmail(email)) {
            alert("올바른 이메일 주소 형식을 입력하세요.");
            return;
        }
        if (Address.zipCode === "") {
            alert("배송 주소를 입력해주세요.");
            return;
        }
        //Recoil 상태 업데이트
        setNonMemberInfo({
            purchaser: name,
            purchaserPhoneNum: phone,
            purchaseEmail: email,
            recipient: name,
            recipientPhoneNum: phone,
            recipientEmail: email,
            purchaseZipcode: Address.zipCode,
            purchaseRoadAddress: Address.roadAddress || "", // Provide a default value for Address.roadAddress
            purchaseJibunAddress: Address.jibunAddress || "",
            purchaseDetailAddress: Address.detailAddress || "",
            deliverymessage: "",
        });
        // 배송메모 페이지로 이동
        setOpenShippingMemo(!openShippingMemo);
    };

    return (
        <>
            {!openShippingMemo ? (
                <>
                    {openAddress ? (
                        <SearchZipcode onChangeAddress={onChangeAddress} setOpenAddress={setOpenAddress} />
                    ) : (
                        <>
                            <BackArrowHeader title="비회원 주문하기" />
                            <div className="bg-white px-5 pt-5 h-[60vh] ">
                                <form>
                                    <input
                                        className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="주문자명"
                                    />
                                    <input
                                        className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                                        value={phone}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
                                            let formattedValue = value;
                                            if (value.length > 2) {
                                                const parts = [value.slice(0, 3), value.slice(3, 7), value.slice(7, 11)];
                                                formattedValue = parts.filter(Boolean).join("-");
                                            }
                                            setPhone(formattedValue);
                                        }}
                                        type="text"
                                        placeholder="휴대폰 번호"
                                    />
                                    <input
                                        className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            isValidEmail(e.target.value);
                                        }}
                                        type="text"
                                        placeholder="이메일 주소"
                                    />
                                    {email && !isValidEmail(email) && (
                                        <p className="font-Pretendard text-[12px] text-primary-red">** 올바른 이메일 주소 형식을 입력하세요. **</p>
                                    )}
                                    <div onClick={() => setOpenAddress(!openAddress)} className="flex flex-row">
                                        <input
                                            className="w-full h-[40px] px-3 py-2 my-2 font-Pretendard border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
                                            value={Address.zipCode}
                                            type="text"
                                            placeholder="배송 주소"
                                            readOnly // Prevent user input
                                        />
                                        <div className="w-[40%] h-[40px] px-3 py-2 my-2 flex justify-center items-center font-Pretendard border border-gray-300 rounded-sm bg-[#f6f6f6] text-[13px]">
                                            우편번호 찾기
                                        </div>
                                    </div>
                                </form>
                                {Address.roadAddress && (
                                    <>
                                        {/* 우편번호 검색 후 나타나는 폼 */}
                                        <div className="my-[10px] pb-[10px] text-[13px]">
                                            <strong className="mr-[30px] float-left font-normal leading-4 w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                                                도로명
                                            </strong>
                                            <span className="break-words leading-4 block overflow-hidden py-[5px] text-[#222]">
                                                {`${Address.roadAddress} ${Address.detailAddress}`}
                                            </span>

                                            <strong className="mr-[30px] float-left font-normal w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                                                지번
                                            </strong>
                                            <span className="leading-4 block overflow-hidden py-[5px] text-[#222]">
                                                {`${Address.jibunAddress} ${Address.detailAddress}`}
                                            </span>
                                        </div>
                                    </>
                                )}
                                <div className="bg-red-200 flex flex-row mt-4">
                                    <div className="w-[50%] h-[50px] flex justify-center items-center font-Pretendard text-[14px] border-[1px] border-black bg-white">
                                        취소
                                    </div>
                                    <div
                                        onClick={submitNonMemberInfo}
                                        className="w-[50%] h-[50px] flex justify-center items-center font-Pretendard text-[14px] border-[1px] border-black bg-black text-white"
                                    >
                                        주문하기
                                    </div>
                                </div>
                            </div>

                            <Footer />
                        </>
                    )}
                </>
            ) : (
                <ShippingMemo isMember={false} />
            )}
        </>
    );
};

export default NonMemberInfo;
