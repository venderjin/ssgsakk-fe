import MyOrderSummary from "@/components/pages/mypage/MyOrderSummary";
import MyPoint from "@/components/pages/mypage/MyPoint";
import MyReviewSummary from "@/components/pages/mypage/MyReviewSummary";
import QuickMenu from "@/components/pages/mypage/QuickMenu";
import React from "react";

const Page = () => {
  return (
    <div className="font-Pretendard">
      <MyPoint />
      <MyOrderSummary />
      <QuickMenu />
      <MyReviewSummary />
    </div>
  );
};

export default Page;
