"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductPageSwitchHeader = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const links = [
    {
      id: 1,
      name: "상세",
      targetId: "productDetail",
      count: "",
    },
    {
      id: 2,
      name: "리뷰",
      targetId: "reviews",
      count: 12,
    },
    {
      id: 3,
      name: "Q&A",
      targetId: "qna",
      count: 6,
    },
  ];

  const onScroll = useCallback(() => {
    const { scrollY } = window;

    if (scrollY >= 100) setDisplay(true);
    else setDisplay(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const handleClick = (targetId: string) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="w-[50px] float bg-[#fff] flex left-0 top-0 bottom-0 items-center justify-center">
        <Image
          src="/images/etc/whiteArrow.svg"
          alt="search-icon"
          width={24}
          height={24}
        />
      </div> */}

      <nav
        className={`h-[50px] px-[65px] flex sticky top-0 z-50 shadow-md bg-white ${
          display ? "" : "hidden"
        }`}
      >
        <div className="w-[50px] h-[50px] flex absolute left-0 top-0 bottom-0 items-center justify-center">
          <Image
            src="/images/etc/blackArrow.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        </div>

        <div className="w-full h-full  font-Pretendard">
          <ul className="flex h-full items-center justify-center pr-[11px] pl-[12px] text-center text-[14px]">
            {links.map((link, index) => (
              <li
                key={link.id}
                className={`w-[55px] h-full pt-[15px] pr-[7px] pl-[8px] ${
                  index === 0 ? "" : "pt-[18px]"
                }`}
              >
                <button
                  onClick={() => handleClick(link.targetId)}
                  className={`font-bold text-[#222222] tracking-tight ${
                    index === 0 ? "" : "flex flex-col leading-none items-center"
                  }`}
                >
                  {link.name}
                  {link.count && (
                    <span className="text-[10px] text-[#999] mt-[-1px]">
                      {link.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
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
    </>
  );
};

export default ProductPageSwitchHeader;
