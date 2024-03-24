"use client";
import JoinForm from "@/components/pages/join/form/JoinForm";

const Page = () => {
  // 휴대폰 인증 후 이름과 전화번호가 넘어온다
  const userName = "서여진";

  return (
    <>
      <JoinForm userName={userName} />
    </>
  );
};

export default Page;
