import React, { useEffect, useState } from "react";

import { memberOrderState, orderProductListState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";
import { OrderProductInfo } from "@/types/orderType";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ChangeShippingMemo from "@/components/pages/order/ChangeShippingMemo";
import ChangePurchaserInfo from "@/components/pages/order/ChangePurchaserInfo";

const MemberPayments = ({ token }: { token: string }) => {
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [orderProductList, setOrderProductList] = useRecoilState(orderProductListState);

    const [purchaser, setPurchaser] = useState<string>(memberInfo.purchaser);
    const [purchaseEmail, setPurchaseEmail] = useState<string>(memberInfo.purchaseEmail);
    const [purchaseDetailAddress, setPurchaseDetailAddress] = useState<string>(memberInfo.purchaseDetailAddress);
    const [purchaseJibunAddress, setPurchaseJibunAddress] = useState<string>(memberInfo.purchaseJibunAddress);
    const [purchaseRoadAddress, setPurchaseRoadAddress] = useState<string>(memberInfo.purchaseRoadAddress);
    const [purchaseZipcode, setPurchaseZipcode] = useState<string>(memberInfo.purchaseZipcode);
    const [purchaserPhoneNum, setPurchaserPhoneNum] = useState<string>(memberInfo.purchaserPhoneNum);
    const [recipient, setRecipient] = useState<string>(memberInfo.recipient);
    const [recipientEmail, setRecipientEmail] = useState<string>(memberInfo.recipientEmail);
    const [recipientPhoneNum, setRecipientPhoneNum] = useState<string>(memberInfo.recipientPhoneNum);
    const [deliverymessage, setDeliverymessage] = useState<string>(memberInfo.deliverymessage);

    const [orderProductInfoList, setOrderProductInfoList] = useState<OrderProductInfo[]>(orderProductList);
    const [orderProductPrice, setOrderProductPrice] = useState<number>(0);
    const [orderProductFinalPrice, setOrderProductFinalPrice] = useState<number>(0);
    const [orderProductDiscountPrice, setOrderProductDiscountPrice] = useState<number>(0);

    const [shippingMessageChangeModal, setShippingMessageChangeModal] = useState(false);
    const [purchaserInfoChangeModal, setPurchaserInfoChangeModal] = useState(false);

    console.log("memberInfo", memberInfo);
    console.log("orderProductList", orderProductList);

    const shippingMemoModalOpen = () => {
        setShippingMessageChangeModal(!shippingMessageChangeModal);
    };

    const purchaserInfoModalOpen = () => {
        setPurchaserInfoChangeModal(!purchaserInfoChangeModal);
    };

    useEffect(() => {
        setOrderProductPrice(
            orderProductInfoList.map((product) => product.purchaseProductPrice * product.purchaseProductCount).reduce((total, price) => total + price, 0)
        );
        setOrderProductFinalPrice(
            orderProductInfoList
                .map((product) => product.purchaseProductDiscountPrice * product.purchaseProductCount)
                .reduce((total, price) => total + price, 0)
        );
    }, []);

    useEffect(() => {
        setOrderProductDiscountPrice(orderProductPrice - orderProductFinalPrice);
    }, [orderProductPrice, orderProductFinalPrice]);

    useEffect(() => {
        setDeliverymessage(memberInfo.deliverymessage);
    }, [memberInfo]);

    return (
        <>
            <BackArrowHeader title="결제하기" />
            {/* <div className="w-full h-[100vh] bg-[#F5F5F5] px-5 pt-5"> */}
            <div className="w-full h-[200vh] bg-blue-400 px-5 pt-5">
                <div className="bg-white rounded-xl px-4 py-4">
                    <div className="my-1">
                        <p className="bg-red-100 font-Pretendard text-[18px] font-bold">배송지 : {recipient}</p>
                    </div>
                    <div className="my-1">
                        <p className="bg-red-100 font-Pretendard text-[14px]">
                            [{purchaseZipcode}] {purchaseRoadAddress} {purchaseDetailAddress}
                        </p>
                    </div>
                    <div className="my-1">
                        <p className="bg-red-100 font-Pretendard text-[12px] text-gray-400">
                            {recipient} / {recipientPhoneNum}
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 mt-5">
                    <div className="my-1 flex flex-row justify-between ">
                        <p className="font-Pretendard text-[18px] font-bold">배송 요청사항</p>
                        <div onClick={shippingMemoModalOpen} className="border-[1px] font-Pretendard text-[12px] px-2 flex items-center">
                            변경
                        </div>
                    </div>
                    <div className="my-1 flex flex-row">
                        <p className="flex-2 font-Pretendard text-[12px] text-gray-400 mr-2">택배배송 요청사항</p>
                        <p className="flex-1 font-Pretendard text-[14px]">{deliverymessage}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 mt-5">
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[18px] font-bold">적립 예상 포인트</p>
                        <p className="font-Pretendard text-[18px] font-semibold">{Math.floor(orderProductFinalPrice / 1000).toLocaleString()} Point</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 mt-5">
                    <div className="my-1 pb-1 flex flex-row justify-between border-b-[2px] border-gray-200">
                        <p className="font-Pretendard text-[18px] font-bold">결제예정금액</p>
                        <p className="font-Pretendard text-[18px] font-bold">{orderProductFinalPrice.toLocaleString()} 원 </p>
                    </div>
                    <div className="my-1 pt-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[14px]">주문금액</p>
                        <p className="font-Pretendard text-[14px]">{orderProductPrice.toLocaleString()} 원</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[14px]">배송비</p>
                        <p className="font-Pretendard text-[14px]">{orderProductPrice > 50000 ? "0" : "3,000"}원</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[14px]">할인금액</p>
                        <p className={`font-Pretendard text-[14px] ${orderProductDiscountPrice > 0 ? "text-primary-red" : "text-black"}`}>
                            {orderProductDiscountPrice > 0 ? `-${orderProductDiscountPrice.toLocaleString()}` : "0"} 원{" "}
                        </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 mt-5">
                    <div className="my-1 flex flex-row justify-between ">
                        <p className="font-Pretendard text-[18px] font-bold">주문자 정보</p>
                        <div onClick={purchaserInfoModalOpen} className="border-[1px] font-Pretendard text-[12px] px-2 flex items-center">
                            변경
                        </div>
                    </div>
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[12px] text-gray-400 mr-2">주문자명</p>
                        <p className="font-Pretendard text-[14px]">{purchaser}</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[12px] text-gray-400 mr-2">연락처</p>
                        <p className="font-Pretendard text-[14px]">{purchaserPhoneNum}</p>
                    </div>
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[12px] text-gray-400 mr-2">이메일</p>
                        <p className="font-Pretendard text-[14px]">{purchaseEmail}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
                <div className="bg-white rounded-xl px-4 py-4 my-5">배송물품정보</div>
            </div>
            {shippingMessageChangeModal && <ChangeShippingMemo isMember={true} isModalOpen={shippingMemoModalOpen} />}
            {purchaserInfoChangeModal && (
                <ChangePurchaserInfo
                    isModalOpen={purchaserInfoModalOpen}
                    originName={purchaser}
                    originPhoneNum={purchaserPhoneNum}
                    originEmail={purchaseEmail}
                />
            )}
            <div className="bg-primary-red sticky bottom-0 flex justify-center items-center" style={{ height: "calc(13vh - 42px)" }}>
                <p className="font-Pretendard text-[17px] text-white">결제하기</p>
            </div>
        </>
    );
};

export default MemberPayments;
