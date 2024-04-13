import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "user-credentials",
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSG" },
        password: { label: "Password", type: "password" },
        userName: { label: "userName", type: "text" },
        token: { label: "token", type: "password" },
      },
      async authorize(credentials) {
        // 소셜 로그인인 경우
        if (credentials?.userName && credentials?.token) {
          return { userName: credentials.userName, token: credentials.token };
        }

        //통합 로그인인 경우
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }

        const res = await fetch(`${process.env.BASE_URL}/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: credentials.loginId,
            userPassword: credentials.password,
          }),
          cache: "no-store",
        });

        const data = await res.json();

        if (data.status === 409) {
          return;
        } else {
          return data.result;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile) {
        const accessToken = account?.access_token;

        const data = await (
          await fetch(`https://kapi.kakao.com/v2/user/me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          })
        ).json();

        //console.log(data);
      }
      return true;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : `${baseUrl}/${url}`;
    },
  },
  pages: {
    // signOut: "/cart",
    signIn: "/login",
    error: "/auth_error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
