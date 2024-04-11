import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      userName: string;
      email: string;
      uuid: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface User {
    user: {
      token: string;
      userName: string;
      email: string;
      uuid: string;
    } & DefaultSession["user"];
  }
}
