"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { cartState } from "@/recoil/atoms/cartState";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartList, setCartList] = useRecoilState(cartState);

  useEffect(() => {
    setCartCount(cartList.length);
  }, [cartList]);

  return (
    <>
      <Link href={"/cart"}>
        <div className="relative">
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
        </div>
      </Link>
    </>
  );
};

export default CartIcon;
