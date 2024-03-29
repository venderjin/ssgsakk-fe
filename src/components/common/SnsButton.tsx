import Imgae from "next/image";
import { signIn } from "next-auth/react";

type Props = {
  snsType: string;
  snsName: string;
  iconPosition: string;
};

export default function SnsButton({ snsType, snsName, iconPosition }: Props) {
  const requestSnsLogin = async (snsType: string) => {
    window.location.href = `${process.env.BASE_URL}/oauth2/authorization/${snsType}`;

    // const res = await fetch(
    //   `${process.env.BASE_URL}/auth2/authorization/${snsType}`
    // );

    // if (res.ok) {
    //   //const data = await res.json();
    //   console.log(res);
    // }
  };

  return (
    <li
      className="w-[51px] flex flex-col items-center justify-center"
      onClick={() => {
        requestSnsLogin(snsType);
        //signIn(snsType, { redirect: true, callbackUrl: "/" }
      }}
    >
      {snsType === "google" ? (
        <div className="h-[51px] w-[51px]">
          <Imgae
            alt="sns 로그인 아이콘"
            src="/images/login/google.png"
            width={51}
            height={51}
            className="bg-[#fff] rounded-[50%] w-[51px] h-[51px]"
          ></Imgae>
        </div>
      ) : (
        <span
          style={{ backgroundPosition: iconPosition }}
          className="w-[51px] h-[51px] appearance-none bg-sns-icon bg-no-repeat bg-[length:173px_173px]"
        />
      )}
      <span className="mt-[6px] text-[12px] text-[#4A4A4A] font-Pretendard font-medium">
        {snsName}
      </span>
    </li>
  );
}
