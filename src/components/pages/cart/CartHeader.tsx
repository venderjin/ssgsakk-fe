"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CartHeader = () => {
  const router = useRouter();

  return (
    <nav className="h-[50px] px-[65px] flex sticky top-0 z-50 shadow-md bg-white font-Pretendard">
      <div
        onClick={() => router.back()}
        className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center"
      >
        <Image
          src="/images/etc/blackArrow.svg"
          alt="back-icon"
          width={24}
          height={24}
        />
      </div>

      <div className=" w-full flex items-center justify-center">
        <h1 className="text-black text-[16px] font-bold">장바구니</h1>
      </div>

      <div className="flex items-center absolute right-[16px] top-[13px] ">
        <Image
          src="/images/etc/search.svg"
          alt="search-icon"
          width={24}
          height={24}
        />
        <Image
          src="/images/etc/cart.svg"
          alt="cart-icon"
          width={24}
          height={24}
          className="ml-[12px]"
        />
      </div>
    </nav>
  );
};

export default CartHeader;
