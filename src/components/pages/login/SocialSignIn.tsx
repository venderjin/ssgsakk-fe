"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import LoadMypage from "./LoadMypage";

const SocialSignIn = ({
  userName,
  token,
}: {
  userName: string | undefined;
  token: string | undefined;
}) => {
  const handleSignIn = async () => {
    const response = await signIn("user-credentials", {
      userName: userName,
      token: token,
      redirect: true,
      callbackUrl: "/mypage",
    });
  };

  useEffect(() => {
    handleSignIn();
  }, []);

  return <LoadMypage />;
};

export default SocialSignIn;
