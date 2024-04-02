import BackArrowHeader from "@/components/common/BackArrowHeader";
import ReviewForm from "@/components/pages/mypage/review/ReviewForm";
import React from "react";

const page = () => {
  return (
    <>
      <BackArrowHeader title="리뷰 쓰기" />
      <ReviewForm />
    </>
  );
};

export default page;
