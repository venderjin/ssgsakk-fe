"use client";
import { useState } from "react";
import ReviewPreviewCard from "@/components/pages/products/review/ReviewPreviewCard";
import { PoroductReviewType } from "@/types/reviewType";
import { useRecoilState } from "recoil";
import { isReviewAllModalOpen } from "@/recoil/atoms/reviewState";

const ReviewSummaryList = ({
  reviewList,
  averageRating,
  reviewCount,
}: {
  reviewList: PoroductReviewType[];
  averageRating: number;
  reviewCount: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isReviewAllModalOpen);
  const photoReviewList = reviewList
    .filter((review: PoroductReviewType) => review.reviewContentsList)
    .map((review: PoroductReviewType) => ({
      reviewId: review.reviewSeq,
      photoCount: review.reviewContentsList.length,
      thumbImage: review.reviewContentsList[0].contentUrl,
    }));

  return (
    <div className="mt-[30px] pb-[40px] h-full w-full">
      <div className="mb-[16px] flex justify-between">
        <span className="text-[16px] text-[#222] font-bold">전체 리뷰</span>
      </div>
      {/* map으로 5개만 뿌려주기 */}
      {reviewList.slice(0, 5).map((review) => (
        <ReviewPreviewCard key={review.reviewSeq} reviewData={review} />
      ))}

      {/* 전체 보기 */}
      <div className="mt-[26px]">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-[44px] w-full border border-[#ebebeb] rounded-[8px] text-[14px] text-[#888]"
        >
          더보기 ({reviewCount})
        </button>
      </div>
    </div>
  );
};

export default ReviewSummaryList;
