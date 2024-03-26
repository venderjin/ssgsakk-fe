"use client";
import { useState } from "react";
import AuthPage from "@/components/pages/signin/auth/AuthPage";
import JoinForm from "@/components/pages/signin/form/JoinForm";

const Page = () => {
  const [isVeryfied, setIsVeryfied] = useState<boolean>(true);
  const [userEmail, setUserEmail] = useState<string>("");

  const sendUserEmail = (userEmail: string) => {
    setUserEmail(userEmail);
    setIsVeryfied(true);
  };

  return (
    <>
      {!isVeryfied ? (
        <AuthPage sendUserEmail={sendUserEmail} />
      ) : (
        <JoinForm userEmail={userEmail} />
      )}
    </>
  );
};

export default Page;
