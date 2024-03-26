"use client";
import { useState } from "react";
import AuthPage from "@/components/pages/signup/auth/AuthPage";
import JoinForm from "@/components/pages/signup/form/JoinForm";
import SignupForm from "@/components/pages/signup/form/SignupForm";

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
        <>
          <SignupForm userEmail={userEmail} />
          {/* <JoinForm userEmail={userEmail} /> */}
        </>
      )}
    </>
  );
};

export default Page;
