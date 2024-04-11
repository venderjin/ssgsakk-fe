"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { snsLoginData, loginSupportData } from "@/libs/loginDatas";
import { SnsLogin } from "@/types/snsLoginType";
import LoginCheckbox from "@/components/common/LoginCheckbox";
import SnsButton from "@/components/common/SnsButton";
import { useRouter } from "next/navigation";
import { getCookies, setCookie, deleteCookie } from "cookies-next";
import { LoginType } from "@/types/authType";
import { loginState } from "@/recoil/atoms/userState";
import { useRecoilState } from "recoil";
import Notify from "../UI/Notify";

export default function LoginForm({
  callbackUrl,
  error,
}: {
  callbackUrl: string | null;
  error: string | null;
}) {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const router = useRouter();
  const cookies = getCookies();
  const [saveIdCheck, setCheck] = useState(false);
  const [loginData, setLoginData] = useState<LoginType>({
    loginId: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.rememberUserId) {
      setLoginData({
        ...loginData,
        loginId: cookies.rememberUserId,
      });
      setCheck(true);
    }
  }, []);

  const onInputCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheck(event.target.checked);
    //쿠키 제거
    if (!event.target.checked) deleteCookie("rememberUserId");
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("callbackUrl", callbackUrl);

    //로그인 버튼을 누를 때 쿠키에 저장
    if (saveIdCheck)
      setCookie("rememberUserId", loginData.loginId, { path: "/" });

    if (!loginData.loginId || !loginData.password) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }

    const { loginId, password } = loginData;
    const response = await signIn("user-credentials", {
      loginId,
      password,
      //로그인 실패 시 새로고침 여부
      redirect: true,
      callbackUrl:
        callbackUrl && callbackUrl !== "undefined"
          ? `${callbackUrl}`
          : "/mypage",
    });

    // if (response?.ok) {
    //   setIsLogin(true);

    //   if (callbackUrl && callbackUrl !== "undefined") router.push(`/${callbackUrl}`);
    //   else router.push("/mypage");
    // }
    // if (response?.error) {
    //   alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    //   location.reload();
    // }
  };

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-[20px] pt-[40px]">
      {error && error !== "undefined" && (
        <Notify message="아이디 혹은 패스워드가 틀립니다." />
      )}
      <form onSubmit={loginSubmit}>
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] px-[15px] py-[12px] text-[15px] font-Pretendard"
          placeholder="아이디"
          type="text"
          name="loginId"
          value={loginData.loginId}
          onChange={onChangeLoginData}
        />
        <input
          className="h-[48.5px] w-full border-[#BCBCBC] border-[1px] border-t-0 px-[15px] py-[12px] text-[15px] font-Pretendard"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={loginData.password}
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
