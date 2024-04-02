"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { snsLoginData, loginSupportData } from "@/libs/loginDatas";
import { SnsLogin } from "@/types/snsLoginType";
import LoginCheckbox from "@/components/common/LoginCheckbox";
import SnsButton from "@/components/common/SnsButton";

type loginType = {
  loginId: string;
  password: string;
};

export default function LoginForm() {
  const [saveIdCheck, setCheck] = useState(false);
  const [loginData, setLoginData] = useState<loginType>({
    loginId: "",
    password: "",
  });

  const onInputCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(event.target.checked);
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginData.loginId || !loginData.password) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }

    const callbackUrl = `${process.env.HOME_URL}`;
    const { loginId, password } = loginData;
    const response = await signIn("user-credentials", {
      loginId,
      password,
      redirect: true,
      callbackUrl: callbackUrl,
    });
  };

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-[20px] pt-[40px]">
      <form onSubmit={loginSubmit}>
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] px-[15px] py-[12px] text-[15px] font-Pretendard"
          placeholder="아이디"
          type="text"
          name="loginId"
          onChange={onChangeLoginData}
        />
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] border-t-0 px-[15px] py-[12px] text-[15px] font-Pretendard"
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={onChangeLoginData}
        />

        <div className="flex w-full mt-[10px] px-[15px]">
          <LoginCheckbox
            id="keep_id"
            isChecked={saveIdCheck}
            labelName="아이디 저장"
            onChangeCheckbox={onInputCheckboxChange}
            iconSize={22}
          />
        </div>

        <button
          type="submit"
          className="base-btn bg-[#FF5452] text-white mt-[30px] font-medium"
        >
          로그인
        </button>
      </form>

      <div className="mt-[13px] w-full h-[19.5px] flex justify-center items-center">
        {loginSupportData.map((item) => {
          return (
            <div key={item.id}>
              <Link
                className={`px-[7px] text-[13px] text-[#4A4A4A] font-Pretendard 
                ${
                  item.id >= loginSupportData.length
                    ? ""
                    : "border-r-[1px] border-r-[#4a4a4a]"
                }
                
                `}
                href={item.url}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>

      <ul className="w-full my-[40px] flex justify-around items-center">
        {snsLoginData.map((sns: SnsLogin) => {
          return (
            <SnsButton
              key={sns.id}
              snsType={sns.type}
              snsName={sns.name}
              iconPosition={sns.img}
            />
          );
        })}
      </ul>

      <div className="mt-[100px]">
        <Link href="">
          <button className="base-btn bg-[#222222] text-white text-[14px] font-semibold mb-[34px]">
            휴대폰 간편 로그인
          </button>
        </Link>

        <Link href="/nonMemberLogin">
          <button className="base-btn bg-[#f3f3f3] text-[#9B9B9B] text-[13px]">
            비회원 조회하기
          </button>
        </Link>
      </div>
    </div>
  );
}
