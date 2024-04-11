"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomPurchaseOptionBox from "@/components/pages/products/purchase/BottomPurchaseOptionBox";
import { SelectedOptionAndQuantity, OrderData } from "@/types/optionType";
import { useGetClientToken } from "@/actions/useGetClientToken";
import { cartState } from "@/recoil/atoms/cartState";
import { useRecoilState } from "recoil";
import Link from "next/link";

interface Props {
    productId: number;
    productName: string;
    productPrice: number;
    discountPercent: number;
    changeMode: (mode: string) => void;
    mode: string;
}

const BottomPurchaseSwitcher = ({ productId, productName, productPrice, discountPercent, changeMode, mode }: Props) => {
    const [cartList, setCartList] = useRecoilState(cartState);
    const router = useRouter();
    const token = useGetClientToken();
    const [orderData, setOrderData] = useState<OrderData>({
        productId: productId,
        optionList: [],
    });

    const onChangeOrderData = (data: SelectedOptionAndQuantity[]) => {
        setOrderData({
            productId: productId,
            optionList: data.map((item) => {
                return {
                    optionAndStockSeq: item.optionAndStockSeq,
                    quantity: item.quantity,
                };
            }),
        });
    };

    const orderHandler = () => {
        if (orderData.optionList.length === 0) return alert("상품 옵션을 선택해주세요.");
        console.log(orderData);
    };

    const addCartHandler = async () => {
        if (orderData.optionList.length === 0) return alert("상품 옵션을 선택해주세요.");

        const promises = orderData.optionList.map((option) =>
            fetch(`${process.env.BASE_URL}/carts/add`, {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productSeq: Number(orderData.productId),
                    optionAndStockSeq: option.optionAndStockSeq,
                    quantity: option.quantity,
                    checkbox: 0,
                    fixItem: 0,
                }),
            })
        );

        const responses = await Promise.all(promises);
        const data = await Promise.all(
            responses.map((response) => {
                if (!response.ok) {
                    alert("서버로부터 응답이 없습니다.");
                }

                return response.json();
            })
        );

        const duplicate = data.filter((item) => item.result !== "success");
        if (duplicate.length > 0) {
            alert(duplicate[0].result);
        } else {
            alert("장바구니에 상품이 추가되었습니다.");
        }
        updateCartCount();
        changeMode("default");
    };

    const updateCartCount = async () => {
        if (!token) return;
        const res = await fetch(`${process.env.BASE_URL}/carts/list`, {
            headers: {
                Authorization: token,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        const data = await res.json();
        if (res.ok) {
            setCartList(data.result);
        }

        if (res.status === 500) {
            console.log(data.msg);
        }
    };

    return (
        <>
            <div className="w-full h-[52px] fixed left-0 right-0 bottom-0 bg-white flex font-Pretendard ">
                <button onClick={() => addCartHandler()} className="w-1/2 border-t-[1px] bg-[#121314] flex justify-center items-center">
                    <span className="text-[17px] text-[#fff]">장바구니</span>
                </button>

                <button onClick={() => orderHandler()} className="w-1/2 h-[52px] bg-primary-red border-t-[1px] flex justify-center items-center">
                    <Link href="/order" className={`${mode === "purchase" ? "block" : "hidden"} flex`}>
                        <div className=" w-[22px] h-[22px] mr-[4px] bg-product-opt-icon bg-[position:-68px_-126px] bg-[size:194px_171px] align-middle" />
                        {/* <Link href="/order"> */}

                        <span className="text-[17px] text-[#fff]">바로 구매</span>
                        {/* </Link> */}
                    </Link>
                    <span className={`${mode === "gift" ? "block" : "hidden"} text-[17px] text-[#fff]`}>바로 선물하기</span>
                </button>
            </div>
            <BottomPurchaseOptionBox
                productId={productId}
                productName={productName}
                productPrice={productPrice}
                discountPercent={discountPercent}
                changeMode={changeMode}
                onChangeOrderData={onChangeOrderData}
            />
        </>
    );
};

export default BottomPurchaseSwitcher;
