"use client";
import React, { useState } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import AuthCard from "@/components/pages/join/auth/AuthCard";
import EmailAuthPage from "@/components/pages/join/auth/EmailAuthPage";
import Modal from "@/components/common/Modal";
import PhoneAuthPage from "@/components/pages/join/auth/PhoneAuthPage";
import ModalHeader from "@/components/common/ModalHeader";

const page = () => {
  const [authType, setAuthType] = useState<string>("");
  const onChagneAuthType = (type: string) => {
    setAuthType(type);
  };

  return (
    <>
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      <AuthCard onChagneAuthType={onChagneAuthType} />
      {authType === "phone" ? (
        <Modal>
          <ModalHeader
            title="신세계포인트 통합회원 가입"
            onChangeModal={() => setAuthType("")}
          />
          <PhoneAuthPage />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default page;
