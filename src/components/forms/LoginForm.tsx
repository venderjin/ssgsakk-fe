"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { snsLoginData } from "@/libs/snsLoginData";
import { SnsLogin } from "@/types/snsLoginType";
import Image from "next/image";

type Props = {
  onChangeSaveIdCheck: (data: boolean) => void;
};

export default function LoginForm({ onChangeSaveIdCheck }: Props) {
  const [saveIdCheck, setCheck] = useState(false);
  const onInputCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(event.target.checked);
    onChangeSaveIdCheck(event.target.checked);
  };

  const { data: session } = useSession();
  console.log("session:", session);

  return (
    <div className="p-[20px] pt-[40px]">
      <div>
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] px-[15px] py-[12px] text-[15px]"
          type="text"
          placeholder="아이디"
        />
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] border-t-0 px-[15px] py-[12px] text-[15px]"
          type="password"
          placeholder="비밀번호"
        />
      </div>

      <div className="flex w-full mt-[10px] px-[15px]">
        <span className="flex content-center items-center">
          <input
            checked={saveIdCheck}
            onChange={(e) => onInputCheckboxChange(e)}
            type="checkBox"
            id="keep_id"
            className={`w-[22px] h-[22px] appearance-none mr-[5px] bg-login-icon bg-no-repeat ${
              saveIdCheck
                ? "bg-[position:0px_-18px]"
                : "bg-[position:-24px_-18px]"
            } bg-[length:250px_250px]`}
          />
          <label htmlFor="keep_id" className="text-[14px] text-[#222222]">
            아이디 저장
          </label>
        </span>
      </div>

      <button className="login-btn bg-[#FF5452] text-white text-[15px]  mt-[30px] font-semibold">
        로그인
      </button>

      <div className="mt-[13px] w-full h-[19.5px] flex justify-center">
        <Link className="px-[8px] text-[13px] text-[#4A4A4A]" href="">
          아이디 찾기
        </Link>
        <span className="border-r-2 border-r-gray-400"></span>
        <Link className="px-[8px] text-[13px] text-[#4A4A4A]" href="">
          비밀번호 찾기
        </Link>
        <span className="border-r-2 border-r-gray-400"></span>
        <Link className="px-[8px] text-[13px] text-[#4A4A4A]" href="">
          회원가입
        </Link>
      </div>

      <ul className="w-full my-[40px] flex justify-around items-center">
        {snsLoginData.map((sns: SnsLogin) => {
          return (
            <li
              key={sns.id}
              className="w-[51px] flex flex-col items-center justify-center"
              onClick={() =>
                signIn(sns.type, { redirect: true, callbackUrl: "/" })
              }
            >
              <Image
                src={sns.icon}
                alt={sns.type}
                width={51}
                height={51}
              ></Image>
              <span className="mt-[6px] text-[12px] text-[#4A4A4A]">
                {sns.name}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-[100px]">
        <Link href="">
          <button className="login-btn bg-[#222222] text-white text-[14px] font-semibold mb-[34px]">
            휴대폰 간편 로그인
          </button>
        </Link>

        <Link href="/nonMemberLogin">
          <button className="login-btn bg-[#f3f3f3] text-[#9B9B9B] text-[13px] ">
            비회원 조회하기
          </button>
        </Link>
      </div>
    </div>
  );
}
