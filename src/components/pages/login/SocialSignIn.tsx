"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import LoadMypage from "./LoadMypage";

const SocialSignIn = ({
  userName,
  token,
}: {
  userName: string | undefined;
  token: string | undefined;
}) => {
  const [loading, setLoading] = useState(true);
  const handleSignIn = async () => {
    const response = await signIn("user-credentials", {
      userName: userName,
      token: token,
      redirect: true,
      callbackUrl: "/mypage",
    });
    setLoading(false);
  };

  useEffect(() => {
    handleSignIn();
  }, []);

  return <div>{loading ? <LoadMypage /> : null}</div>;
};

export default SocialSignIn;
