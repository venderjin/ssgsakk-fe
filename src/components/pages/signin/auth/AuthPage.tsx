"use client";
import React, { useState } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import AuthCard from "@/components/pages/signin/auth/AuthCard";
import EmailAuthPage from "@/components/pages/signin/auth/EmailAuthPage";
import Modal from "@/components/common/Modal";
import PhoneAuthPage from "@/components/pages/signin/auth/PhoneAuthPage";
import ModalHeader from "@/components/common/ModalHeader";
import Footer from "@/components/layouts/Footer";

const AuthPage = ({
  sendUserEmail,
}: {
  sendUserEmail: (email: string) => void;
}) => {
  const [authType, setAuthType] = useState<string>("");
  const onChagneAuthType = (type: string) => {
    setAuthType(type);
  };

  const authTypeComponent = () => {
    if (authType === "phone") return <PhoneAuthPage />;
    else if (authType === "email")
      return <EmailAuthPage sendUserEmail={sendUserEmail} />;
  };

  return (
    <>
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      <AuthCard onChagneAuthType={onChagneAuthType} />
      {authType !== "" && (
        <Modal>
          <ModalHeader
            title="신세계포인트 통합회원 가입"
            onChangeModal={() => setAuthType("")}
          />
          {authTypeComponent()}
          <Footer />
        </Modal>
      )}
    </>
  );
};

export default AuthPage;
