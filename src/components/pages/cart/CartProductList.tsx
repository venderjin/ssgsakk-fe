import React from "react";
import CartItemCard from "@/components/pages/cart/CartItemCard";
import CartControl from "@/components/pages/cart/CartControl";
import { CartStateType } from "@/types/cartType";
import { useGetServerToken } from "@/actions/useGetServerToken";

const CartProductList = async ({
  cartItemList,
}: {
  cartItemList: CartStateType[];
}) => {
  const token = await useGetServerToken();

  const checkCartItem = async (cartSeq: number, check: boolean) => {
    "use server";
    if (!token) return;
    const res = await fetch(
      `${process.env.BASE_URL}/carts/${cartSeq}/checkbox?checkbox=${Number(
        check
      )}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (res.ok) console.log(data);
    else console.log(data);
  };

  const fixCartItem = async (cartSeq: number, fix: boolean) => {
    "use server";
    if (!token) return;
    const res = await fetch(
      `${process.env.BASE_URL}/carts/${cartSeq}/pin?fix=${Number(fix)}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (res.ok) console.log(data);
    else console.log(data);
  };

  const deleteCartItem = async (cartSeq: number) => {
    "use server";
    if (!token) return;
    const res = await fetch(`${process.env.BASE_URL}/carts/${cartSeq}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const data = await res.json();
    if (res.ok) console.log(data);
    else console.log(data);
  };

  const updateQunaity = async (cartSeq: number, quantity: number) => {
    "use server";

    if (!token) return;
    const res = await fetch(
      `${process.env.BASE_URL}/carts/${cartSeq}/quantity?quantity=${quantity}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();
    if (res.ok) console.log(data);
    else console.log(data);
  };

  return (
    <div className="pb-[120px]">
      <CartControl />
      {cartItemList.map((cartItem) => (
        <CartItemCard
          key={cartItem.cartSeq}
          cartItemState={cartItem}
          updateQunaity={updateQunaity}
          deleteCartItem={deleteCartItem}
          fixCartItem={fixCartItem}
          checkCartItem={checkCartItem}
        />
      ))}
    </div>
  );
};

export default CartProductList;
