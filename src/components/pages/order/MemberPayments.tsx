import React from "react";

import { memberOrderState, orderProductListState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";
import BackArrowHeader from "@/components/common/BackArrowHeader";

const MemberPayments = ({ token }: { token: string }) => {
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [orderProductList, setOrderProductList] = useRecoilState(orderProductListState);

    console.log("memberInfo", memberInfo);
    console.log("orderProductList", orderProductList);
    return (
        <>
            <BackArrowHeader title="결제하기" />
            <div className="w-full h-[200vh] bg-[#F5F5F5] px-5 pt-5">
                <div className="bg-white px-3 py-2 ">배송지</div>
                <div className="bg-white px-3 py-2 mt-5">배송지 요청사항</div>
                <div className="bg-white px-3 py-2 mt-5">적립 에상 포인트</div>
                <div className="bg-white px-3 py-2 mt-5">결제예정금액</div>
                <div className="bg-white px-3 py-2 mt-5">약관동의</div>
                <div className="bg-white px-3 py-2 mt-5">주문자 정보</div>
                <div className="bg-white px-3 py-2 my-5">배송물품정보</div>
            </div>
        </>
    );
};

export default MemberPayments;
