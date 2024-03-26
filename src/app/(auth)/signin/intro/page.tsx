"use client";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import JoinIntroCard from "@/components/pages/signin/intro/JoinIntroCard";
import SimpleJoinList from "@/components/pages/signin/intro/SimpleJoinList";
import React from "react";

export default function Page() {
  return (
    <>
      <BackArrowHeader title="회원가입" />
      <JoinIntroCard />
      <SimpleJoinList />
    </>
  );
}
