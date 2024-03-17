"use client";
import { BackArrowHeader } from "@/components/common/BackArrowHeader";
import LoginForm from "@/components/forms/LoginForm";
import React from "react";

export default function Page() {
  return (
    <>
      <BackArrowHeader title="로그인" />
      <LoginForm />
    </>
  );
}
