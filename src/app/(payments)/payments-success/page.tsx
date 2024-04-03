"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const PaymentsResultSuccessPage = () => {
    const orderId = useSearchParams().get("orderId");
    const amount = useSearchParams().get("amount");

    return (
        <div>
            <h1>결제 성공</h1>
            <div>{`주문 아이디: ${orderId}`}</div>
            <div>{`결제 금액: ${Number(amount).toLocaleString()}원`}</div>
        </div>
    );
};

export default PaymentsResultSuccessPage;
