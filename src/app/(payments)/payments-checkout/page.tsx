"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

const PaymentsTestpage = () => {
    // const [amount, setAmount] = useState(0);
    const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
    // const router = useRouter();
    const price = 10000;

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(tossPaymentsClientKey ?? "", customerKey);

            paymentWidget.renderPaymentMethods("#payment-widget", price);

            paymentWidgetRef.current = paymentWidget;
        })();
    }, []);

    const paymentSubmitHandler = async () => {
        const paymentWidget = paymentWidgetRef.current;

        try {
            await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: "토스 티셔츠 외 2건",
                customerName: "김토스",
                customerEmail: "customer123@gmail.com",
                successUrl: `${window.location.origin}/payments-success`,
                failUrl: `${window.location.origin}/payments-fail`,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="border-y-2 flex flex-col justify-center items-center m-4 py-4">
                <h1>PaymentsTestpage</h1>
                <h2>결제 테스트 페이지</h2>
                <div>결제 금액: {price.toLocaleString()}원</div>
            </div>
            <div id="payment-widget" />
            <div className="flex justify-center items-center">
                <button onClick={paymentSubmitHandler} className="bg-gray-200 m-4 p-2 w-5/6 flex rounded-xl justify-center items-center">
                    결제
                </button>
            </div>
        </>
    );
};

export default PaymentsTestpage;
