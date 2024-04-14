import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { memberOrderState, orderProductListState } from "@/recoil/atoms/orderState";
import { useRecoilState } from "recoil";
import { OrderProductInfo } from "@/types/orderType";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import ChangeShippingMemo from "@/components/pages/order/ChangeShippingMemo";
import ChangePurchaserInfo from "@/components/pages/order/ChangePurchaserInfo";

interface MemberOrderFetchBody {
    purchaser: string;
    purchaserPhoneNum: string;
    purchaseEmail: string;
    recipient: string;
    recipientPhoneNum: string;
    recipientEmail: string;
    purchaseZipcode: string;
    purchaseRoadAddress: string;
    purchaseJibunAddress: string;
    purchaseDetailAddress: string;
    deliverymessage: string;
    shippingFee: number;
    purchaseProductDtoList: OrderProductInfo[];
}

const MemberPayments = ({ token }: { token: string }) => {
    const [memberInfo, setMemberInfo] = useRecoilState(memberOrderState);
    const [orderProductList, setOrderProductList] = useRecoilState(orderProductListState);
    const router = useRouter();

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
    const [shippingFee, setShippingFee] = useState<number>(0);

    const [finalMemberOrder, setFinalMemberOrder] = useState<MemberOrderFetchBody>({
        purchaser: purchaser,
        purchaserPhoneNum: purchaserPhoneNum,
        purchaseEmail: purchaseEmail,
        recipient: recipient,
        recipientPhoneNum: recipientPhoneNum,
        recipientEmail: recipientEmail,
        purchaseZipcode: purchaseZipcode,
        purchaseRoadAddress: purchaseRoadAddress,
        purchaseJibunAddress: purchaseJibunAddress,
        purchaseDetailAddress: purchaseDetailAddress,
        deliverymessage: deliverymessage,
        shippingFee: shippingFee,
        purchaseProductDtoList: orderProductInfoList,
    });

    const [shippingMessageChangeModal, setShippingMessageChangeModal] = useState(false);
    const [purchaserInfoChangeModal, setPurchaserInfoChangeModal] = useState(false);

    const shippingMemoModalOpen = () => {
        setShippingMessageChangeModal(!shippingMessageChangeModal);
    };

    const purchaserInfoModalOpen = () => {
        setPurchaserInfoChangeModal(!purchaserInfoChangeModal);
    };

    const GetMemberOrder = async () => {
        console.log(finalMemberOrder);
        try {
            const response = await fetch(`${process.env.BASE_URL}/purchase/member-purchase`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(finalMemberOrder),
            });
            const data = await response.json();
            console.log(data);
            router.push(`/order-result/member?code=${data.result.purchaseCode}`);
        } catch (error) {
            console.log(error);
        }
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
        setShippingFee(orderProductPrice > 50000 ? 0 : 3000);
    }, []);

    useEffect(() => {
        setOrderProductDiscountPrice(orderProductPrice - orderProductFinalPrice);
    }, [orderProductPrice, orderProductFinalPrice]);

    useEffect(() => {
        setFinalMemberOrder({
            purchaser: purchaser,
            purchaserPhoneNum: purchaserPhoneNum,
            purchaseEmail: purchaseEmail,
            recipient: recipient,
            recipientPhoneNum: recipientPhoneNum,
            recipientEmail: recipientEmail,
            purchaseZipcode: purchaseZipcode,
            purchaseRoadAddress: purchaseRoadAddress,
            purchaseJibunAddress: purchaseJibunAddress,
            purchaseDetailAddress: purchaseDetailAddress,
            deliverymessage: deliverymessage,
            shippingFee: shippingFee,
            purchaseProductDtoList: orderProductInfoList,
        });
    }, [memberInfo]);

    useEffect(() => {
        setDeliverymessage(memberInfo.deliverymessage);
        setPurchaser(memberInfo.purchaser);
        setPurchaserPhoneNum(memberInfo.purchaserPhoneNum);
        setPurchaseEmail(memberInfo.purchaseEmail);
    }, [memberInfo]);

    return (
        <>
            <BackArrowHeader title="결제하기" />
            <div className="w-full h-auto bg-[#F5F5F5] px-5 py-5">
                <div className="bg-white rounded-xl px-4 py-4">
                    <div className="my-1">
                        <p className="font-Pretendard text-[18px] font-bold">배송지 : {recipient}</p>
                    </div>
                    <div className="my-1">
                        <p className="font-Pretendard text-[14px]">
                            [{purchaseZipcode}] {purchaseRoadAddress} {purchaseDetailAddress}
                        </p>
                    </div>
                    <div className="my-1">
                        <p className="font-Pretendard text-[12px] text-gray-400">
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
                <div className="bg-white rounded-xl px-4 py-4 mt-5">
                    <div className="my-1 flex flex-row justify-between">
                        <p className="font-Pretendard text-[18px] font-bold">주문 상품</p>
                    </div>
                    {orderProductInfoList.map((product, index) => (
                        <div key={index} className="my-2 flex flex-row items-center gap-1">
                            <div className="w-[85px] h-[85px] bg-gray-100">
                                <Image src={`${product.productThumbnail}`} width={85} height={85} alt={product.purchaseProductName} />
                            </div>
                            <div style={{ width: "calc(100% - 85px)" }}>
                                <p className="font-Pretendard my-1 text-[12px]">신세계몰 : [{product.purchaseProductVendor}]</p>
                                <p className="font-Pretendard my-1 text-[14px] line-clamp-2">{product.purchaseProductName}</p>
                                <div className="flex flex-row gap-2">
                                    <p className="flex-2 font-Pretendard my-1 text-[12px] line-clamp-2 text-gray-400">(옵션)</p>
                                    <p className="flex-1 font-Pretendard my-1 text-[12px] line-clamp-2 text-gray-400">[{product.purchaseProductOptionName}]</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        {product.purchaseProductPrice !== product.purchaseProductDiscountPrice ? (
                                            <>
                                                <p className="font-Pretendard my-1 text-[13px] line-through	text-gray-400">
                                                    {product.purchaseProductPrice.toLocaleString()} 원
                                                </p>
                                                <p className="font-Pretendard my-1 text-[14px] font-bold">
                                                    {product.purchaseProductDiscountPrice.toLocaleString()} 원
                                                </p>
                                            </>
                                        ) : (
                                            <p className="font-Pretendard my-1 text-[14px] font-bold">
                                                {product.purchaseProductDiscountPrice.toLocaleString()} 원
                                            </p>
                                        )}
                                    </div>
                                    <p className="font-Pretendard my-1 text-[12px] text-gray-400">({product.purchaseProductCount}개)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
            <div onClick={GetMemberOrder} className="bg-primary-red sticky bottom-0 flex justify-center items-center" style={{ height: "calc(13vh - 42px)" }}>
                <p className="font-Pretendard text-[17px] text-white">결제하기</p>
            </div>
        </>
    );
};

export default MemberPayments;
