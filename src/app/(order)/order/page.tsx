import React from "react";

import { useGetServerToken } from "@/actions/useGetServerToken";
import Payments from "@/components/pages/order/Payments";
import NonMemberInfo from "@/components/pages/order/NonMemberInfo";

const OrderPage = async () => {
    const token = await useGetServerToken();

    return (
        <>
            {token && token !== "" ? (
                <>
                    <div>OrderPage</div>
                    <div>회원입니다</div>
                    <Payments />
                    {/* 회원이면 결제 페이지로 이동 */}
                </>
            ) : (
                <>
                    <NonMemberInfo />

                    {/* <div>OrderPage</div>
                    <div>token = {token}no token</div> */}
                </>
            )}

            {/* // 회원이면 배송정보입력 페이지로 이동
            //비회원이면 비회원 정보입력 컴포넌트를 최상단에 띄우고 내용 다 입력하게 한 뒤 닫을수 있는 컴포넌트로 생성 후
            //닫기 버튼을 누르면 배송정보입력 페이지로 이동 */}
        </>
    );
};

export default OrderPage;
