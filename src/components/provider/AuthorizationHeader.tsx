// "use client";
// import { Session } from "next-auth";
// import { useSession } from "next-auth/react";
// import { useEffect } from "react";

// export default function AuthroizationHeader({ children }: {
//     children: React.ReactNode;
//   }) {
//     const { status, data: session } = useSession();

//     const isLogin = !!session && status === "authenticated";
//     const accesstoken = isLogin ? session.user.token : "";

//     useEffect(() => {
//       setCookie("Authroization", accesstoken);
//       setCookie("RefreshToken", refreshToken);
//     }, [isLogin]);
//     return <>{children}</>;
//   }
import React from "react";

const AuthorizationHeader = () => {
  return <div></div>;
};

export default AuthorizationHeader;
