export { default } from "next-auth/middleware";

import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  // 로그인한 유저: 로그인/회원가입 접근 제한
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // 로그인하지 않은 유저: 마이페이지 접근 제한
  if (pathname.startsWith("/mypage")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/mypage/:path*", "/login/:path*", "/signup/:path*"],
};
