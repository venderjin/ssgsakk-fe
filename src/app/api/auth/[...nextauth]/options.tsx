import { Session } from "next-auth";
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
      },
      async authorize(credentials) {
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
        });

        const data = await res.json();

        if (res.ok) {
          return data.result;
        }
        if (res.status === 409) {
          return null;
        }

        return null;
      },
    }),
    CredentialsProvider({
      id: "google",
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSG" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("여기야");
        // if (!credentials?.loginId || !credentials?.password) {
        //   return null;
        // }

        // const res = await fetch(`${process.env.BASE_URL}/auth/signin`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     userId: credentials.loginId,
        //     userPassword: credentials.password,
        //   }),
        // });

        // const data = await res.json();

        // if (res.ok) {
        //   return data.result;
        // }
        // if (res.status === 409) {
        //   return null;
        // }

        return null;
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

    async session({ session, token }: { session: Session; token: any }) {
      session.user.token = token.token;
      session.user.userName = token.userName;
      return session;

      //return { ...session, ...token };
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signOut: "/",
    signIn: "/login",
    error: "/auth_error",
  },
};
