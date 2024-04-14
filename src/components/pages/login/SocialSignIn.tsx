"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

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

  return <div>{loading ? "Loading..." : ""}</div>;
};

export default SocialSignIn;
