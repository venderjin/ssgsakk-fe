"use client";
import { useState } from "react";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import ReviewStar from "@/components/pages/mypage/review/ReviewStar";
import ReviewEditor from "@/components/pages/mypage/review/ReviewEditor";

interface ReviewForm {
  content: string;
  images: string[];
}

const ReviewForm = () => {
  const [reviewRating, setReviewRaing] = useState<number>(0);

  const saveReviewForm = (review: ReviewForm) => {
    const data = { ...review, reviewRating };
    console.log(data);
  };

  return (
    <div className="font-Pretendard ">
      {/* 리뷰 작성 상품 정보 */}
      <ReviewProductInfo />
      {/* 리뷰 작성 별점 */}
      <ReviewStar setReviewRaing={setReviewRaing} />
      {/* 리뷰 작성 */}
      <ReviewEditor saveReviewForm={saveReviewForm} />
    </div>
  );
};

export default ReviewForm;
