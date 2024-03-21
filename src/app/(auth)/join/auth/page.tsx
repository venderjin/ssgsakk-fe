"use client";
import React, { useState } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import AuthCard from "@/components/pages/join/auth/AuthCard";
import EmailAuthPage from "@/components/pages/join/auth/EmailAuthPage";
import Modal from "@/components/common/Modal";

const page = () => {
  const [authType, setAuthType] = useState<string>("");
  const onChagneAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <>
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      <AuthCard onChagneAuthType={onChagneAuthType} />
      {authType === "email" ? (
        <Modal>
          <BackArrowHeader title="신세계포인트 통합회원 가입" />
          <EmailAuthPage />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
