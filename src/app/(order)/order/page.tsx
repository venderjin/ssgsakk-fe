"use client";
import React, { useEffect, useState } from "react";

import { useGetClientToken } from "@/actions/useGetClientToken";
import NonMemberInfo from "@/components/pages/order/NonMemberInfo";
import ShippingMemo from "@/components/pages/order/ShippingMemo";
import { memberOrderState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";

interface MemberShippingInfo {
    addressNickname: string;
    defaultAddressCheck: number;
    detailAddress: string;
    jibunAddress: string;
    receiverMobileNum: string;
    receiverName: string;
    roadAddress: string;
    shippingAddressSeq: number;
    zipCode: string;
}

const OrderPage = () => {
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [memberName, setMemberName] = useState<string>("");
    const [memberPhoneNum, setMemberPhoneNum] = useState<string>("");
    const [memberEmail, setMemberEmail] = useState<string>("");
    const [memberAddressZip, setMemberAddressZip] = useState<string>("");
    const [memberAddressRoad, setMemberAddressRoad] = useState<string>("");
    const [memberAddressJibun, setMemberAddressJibun] = useState<string>("");
    const [memberAddressDetail, setMemberAddressDetail] = useState<string>("");
    const token = useGetClientToken();

    //회원정보 조회 api fetch
    useEffect(() => {
        if (token && token !== "") {
            const getMemberData = async (token: string) => {
                const res = await fetch(`${process.env.BASE_URL}/auth/user-info`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                const data = await res.json();
                setMemberName(data.result.userName);
                setMemberPhoneNum(data.result.userMobileNum);
                setMemberEmail(data.result.userEmail);
                return data;
            };

            const getMemberAddress = async (token: string) => {
                const res = await fetch(`${process.env.BASE_URL}/shipping-addr/all`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                const data = await res.json();
                const dataResult = data.result;
                const defaultAddress = dataResult.find((item: MemberShippingInfo) => item.defaultAddressCheck === 1);
                if (!defaultAddress) {
                    console.error("Default address not found");
                    return; // 또는 적절한 에러 처리 로직을 넣으세요.
                }
                setMemberAddressZip(defaultAddress.zipCode);
                setMemberAddressRoad(defaultAddress.roadAddress);
                setMemberAddressJibun(defaultAddress.jibunAddress);
                setMemberAddressDetail(defaultAddress.detailAddress);
                return data;
            };
            getMemberData(token);
            getMemberAddress(token);
        }
    }, [token]);

    useEffect(() => {
        setMemberInfo({
            purchaser: memberName,
            purchaserPhoneNum: memberPhoneNum,
            purchaseEmail: memberEmail,
            recipient: memberName,
            recipientPhoneNum: memberPhoneNum,
            recipientEmail: memberEmail,
            purchaseZipcode: memberAddressZip,
            purchaseRoadAddress: memberAddressRoad,
            purchaseJibunAddress: memberAddressJibun,
            purchaseDetailAddress: memberAddressDetail,
            deliverymessage: "부재 시 경비실에 맡겨주세요.",
        });
    }, [memberName, memberPhoneNum, memberEmail, memberAddressZip, memberAddressRoad, memberAddressJibun, memberAddressDetail]);

    return (
        <>
            {token && token !== "" ? (
                <>
                    <ShippingMemo isMember={true} />
                </>
            ) : token && token === "" ? (
                <>
                    <NonMemberInfo />
                </>
            ) : null}
        </>
    );
};

export default OrderPage;
