"use client";
import { footerData, footerLoginData } from "@/libs/categoryData";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { loginState } from "@/recoil/atoms/userState";
import { cartState } from "@/recoil/atoms/cartState";
import { useRecoilState } from "recoil";

export default function CategoryFooter() {
  const [cartLists, setCartLists] = useRecoilState(cartState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const { data: session } = useSession();

  return (
    <div className="bg-[#555] pt-[30px] pb-[170px] text-center flex justify-center">
      {session
        ? footerLoginData.map((data, index) => (
            <div
              key={data.id}
              className={`pr-[10px] font-Pretendard text-[12px] text-[#cccccc] align-middle ${
                !index ? "" : "vetical-line"
              } `}
            >
              {data.title === "로그아웃" ? (
                <button
                  onClick={() => {
                    signOut();
                    setIsLogin(false);
                    setCartLists([]);
                  }}
                >
                  {data.title}
                </button>
              ) : (
                <Link href={data.url}>
                  <span>{data.title}</span>
                </Link>
              )}
            </div>
          ))
        : footerData.map((data, index) => (
            <Link key={data.id} href={data.url}>
              <span
                className={`pr-[10px] font-Pretendard text-[12px] text-[#cccccc] align-middle ${
                  !index ? "" : "vetical-line"
                } `}
              >
                {data.title}
              </span>
            </Link>
          ))}
    </div>
  );
}
