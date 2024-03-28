import React from "react";
import { signIn } from "next-auth/react";

type Props = {
  snsType: string;
  snsName: string;
  iconPosition: string;
};

export default function SnsButton({ snsType, snsName, iconPosition }: Props) {
  const requestSnsLogin = async (snsType: string) => {
    const res = await fetch(
      `${process.env.BASE_URL}/auth2/authorization/google`
    );
    console.log(res);
  };

  return (
    <li
      className="w-[51px] flex flex-col items-center justify-center"
      onClick={() => {
        requestSnsLogin(snsType);
        //signIn(snsType, { redirect: true, callbackUrl: "/" }
      }}
    >
      <span
        style={{ backgroundPosition: iconPosition }}
        className="w-[51px] h-[51px] appearance-none bg-sns-icon bg-no-repeat bg-[length:173px_173px]"
      />
      <span className="mt-[6px] text-[12px] text-[#4A4A4A] font-Pretendard font-medium">
        {snsName}
      </span>
    </li>
  );
}
