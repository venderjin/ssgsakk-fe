"use client";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

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
      callbackUrl: "/",
    });
  };

  useEffect(() => {
    handleSignIn();
  }, []);

  return <div></div>;
};

export default SocialSignIn;
