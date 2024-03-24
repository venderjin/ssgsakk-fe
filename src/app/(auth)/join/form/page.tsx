"use client";
import React from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import JoinForm from "@/components/pages/join/form/JoinForm";

const Page = () => {
  return (
    <>
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      <JoinForm />
    </>
  );
};

export default Page;
