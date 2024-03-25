import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "믿고 사는 즐거움 SSG.COM",
  description:
    "신세계 그룹의 온라인 쇼핑 플랫폼, SSG.COM. 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village가 SSG.COM 이라는 이름으로 하나가 되었어요.",
  authors: [],
  keywords:
    "SSG.COM, 신세계몰, 신세계백화점, 이마트몰, 트레이더스, 신세계라이브쇼핑, S.I. Village",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
    </html>
  );
}
