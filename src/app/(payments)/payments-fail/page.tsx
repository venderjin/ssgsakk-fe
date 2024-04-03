"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const PaymentsResultFailpage = () => {
    const msg = useSearchParams().get("message");

    // 고객에게 실패 사유 알려주고 다른 페이지로 이동

    return (
        <div>
            <h1>결제 실패</h1>
            <div>사유: {msg}</div>
        </div>
    );
};

export default PaymentsResultFailpage;
