"use client";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import JoinIntroCard from "@/components/pages/join/joinIntro/JoinIntroCard";
import SimpleJoinList from "@/components/pages/join/joinIntro/SimpleJoinList";
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
