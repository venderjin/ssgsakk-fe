"use client";
import React from "react";
import { useGetClientToken } from "@/actions/useGetClientToken";
import MemberPayments from "@/components/pages/order/MemberPayments";
import NonmemberPayments from "@/components/pages/order/NonmemberPayments";

const PaymentsPage = () => {
    const token = useGetClientToken();
    return (
        <>
            {token && token !== "" ? (
                <>
                    <MemberPayments token={token} />
                </>
            ) : token && token === "" ? (
                <>
                    <NonmemberPayments />
                </>
            ) : null}
        </>
    );
};

export default PaymentsPage;
