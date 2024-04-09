"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartCountState } from "@/recoil/selectors/cartSortState";

const CartIcon = () => {
  const cartCount = useRecoilValue(cartCountState);
  const [cartItemNum, setCartItemNum] = useState(0);
  useEffect(() => {
    console.log("갱신");
    setCartItemNum(cartCount);
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
        {cartItemNum > 0 && (
          <div className="absolute top-[-5px] right-[0px]">
            <p className="bg-primary-red text-center text-[10px] text-[#fff] rounded-[50%] min-w-[16px] transform translate-x-1/2">
              {cartItemNum}
            </p>
          </div>
        )}
      </Link>
    </>
  );
};

export default CartIcon;
