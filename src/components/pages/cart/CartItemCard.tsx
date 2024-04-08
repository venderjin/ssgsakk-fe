"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Imgae from "next/image";
import Link from "next/link";
import CartItemPrice from "@/components/pages/cart/CartItemPrice";
import CartQunatityHandler from "./CartQunatityHandler";
import { CartItemType, CartStateType } from "@/types/cartType";
import { useGetClientToken } from "@/actions/useGetClientToken";

const CartItemCard = ({
  cartItemState,
  updateQunaity,
  deleteCartItem,
  fixCartItem,
  checkCartItem,
}: {
  cartItemState: CartStateType;
  updateQunaity: (cartSeq: number, quantity: number) => void;
  deleteCartItem: (cartSeq: number) => void;
  fixCartItem: (cartSeq: number, fix: boolean) => void;
  checkCartItem: (cartSeq: number, check: boolean) => void;
}) => {
  const router = useRouter();
  const token = useGetClientToken();
  const [cartItem, setCartItem] = useState<CartItemType | null>(null);

  useEffect(() => {
    const getCartItem = async () => {
      if (!token) return;
      const res = await fetch(
        `${process.env.BASE_URL}/carts/${cartItemState.cartSeq}`,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      const data = await res.json();
      if (res.ok) {
        setCartItem(data.result);
      } else {
        console.log(data);
      }
    };

    getCartItem();
  }, [cartItemState, token]);

  const onQuantityChange = (count: number) => {
    if (!cartItem) return;
    updateQunaity(cartItemState.cartSeq, count);
    setCartItem({ ...cartItem, quantity: count });
  };

  const deleteHandler = () => {
    if (!cartItem) return;
    if (confirm("해당 상품을 삭제하시겠습니까?"))
      deleteCartItem(cartItemState.cartSeq);
    router.refresh();
  };

  const pinHandler = () => {
    if (!cartItem) return;
    fixCartItem(cartItemState.cartSeq, !cartItemState.fixItem);
    router.refresh();
  };

  const checkHandler = () => {
    if (!cartItem) return;
    checkCartItem(cartItemState.cartSeq, !cartItemState.checkbox);
    router.refresh();
  };

  return (
    cartItem && (
      <div className="py-[20px] px-[16px] flex font-Pretendard border-b border-b-[#f0f0f0]">
        {/* 썸네일 이미지 */}
        <section className="relative">
          <div className="relative w-[85px] h-[85px]">
            <Imgae
              src={cartItem.productImage}
              alt="상품 이미지"
              fill={true}
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>
          <span className="absolute top-0 left-0">
            <input
              type="checkbox"
              checked={cartItemState.checkbox ? true : false}
              onChange={checkHandler}
              className={`w-[18px] h-[18px] border border-[#969696] ${
                cartItemState.checkbox ? "accent-primary-red" : ""
              }`}
            />
          </span>
        </section>

        {/* 상품정보 */}
        <section className="ml-[10px] relative w-full ">
          <span className="text-[12px] text-[#222222] align-top">신세계몰</span>

          {/* 고정/삭제 */}
          <div className="absolute top-[-6px] right-0">
            <button onClick={pinHandler} className="w-[28px] h-[28px]">
              <Imgae
                src={`/images/etc/${
                  cartItemState.fixItem ? "colorPin" : "pin"
                }.svg`}
                alt="pin-icon"
                width={20}
                height={20}
              />
            </button>
            <button onClick={deleteHandler}>
              <Imgae
                src="/images/etc/delete.svg"
                alt="pin-icon"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* 상품명 */}
          <p className="mr-[57px] mb-[6px] text-[14px]">
            <Link href={`/products/${cartItem.productSeq}`}>
              <strong>{cartItem.productVendor}</strong>
              <span>{cartItem.productName}</span>
            </Link>
          </p>

          {/* 옵션 */}
          {cartItem.productOption && (
            <span className="block mt-[5px] text-[12px] text-[#666666] ">
              옵션 :&nbsp;{cartItem.productOption}
            </span>
          )}

          {/* 가격 및 수량 */}
          <div className="mt-[8px] flex justify-between">
            <CartItemPrice
              count={cartItem.quantity}
              productPrice={cartItem.productPrice}
              discountPer={cartItem.discountPercent}
            />
            <CartQunatityHandler
              quantity={cartItem.quantity}
              onQuantityChange={onQuantityChange}
            />
          </div>

          {/* 옵션변경 및 바로구매 */}
          <div className="mt-[8px] text-[13px] w-full flex justify-between border border-[#e5e5e5] text-center">
            {cartItem.productOption && (
              <button className="h-[36px] border-r border-r-[#e5e5e5] w-full">
                옵션변경
              </button>
            )}
            <button className="h-[36px] w-full font-semibold">바로구매</button>
          </div>
        </section>
      </div>
    )
  );
};

export default CartItemCard;
