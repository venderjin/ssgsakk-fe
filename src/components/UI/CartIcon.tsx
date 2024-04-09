"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetClientToken } from "@/actions/useGetClientToken";

const CartIcon = () => {
  const token = useGetClientToken();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartItemCount = async () => {
      if (!token) return;
      const res = await fetch(`${process.env.BASE_URL}/carts/count`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data.result);
        setCartCount(data.result);
      }
    };
    getCartItemCount();
  }, []);

  return (
    <>
      <Link href={"/cart"} className="relative">
        <Image
          src="/images/etc/cart.svg"
          alt="cart-icon"
          width={24}
          height={24}
        />
        {cartCount > 0 && (
          <div className="absolute top-[-5px] right-[0px]">
            <p className="bg-primary-red text-center text-[10px] text-[#fff] rounded-[50%] min-w-[16px] transform translate-x-1/2">
              {cartCount}
            </p>
          </div>
        )}
      </Link>
    </>
  );
};

export default CartIcon;
