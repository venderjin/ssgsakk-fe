"use client";
import { useEffect } from "react";
import { cartState } from "@/recoil/atoms/cartState";
import { useRecoilState } from "recoil";
import { useGetClientToken } from "@/actions/useGetClientToken";

const CartData = () => {
  const token = useGetClientToken();
  const [cartList, setCartList] = useRecoilState(cartState);
  useEffect(() => {
    const getCartList = async (token: string) => {
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

    getCartList(token);
  }, []);

  return <></>;
};

export default CartData;
