import React from "react";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import ReviewSummaryList from "@/components/pages/products/review/ReviewSummaryList";
import { PoroductReviewType } from "@/types/reviewType";

const ProductReview = ({
  reviewList,
  averageRating,
  reviewCount,
}: {
  reviewList: PoroductReviewType[];
  averageRating: number;
  reviewCount: number;
}) => {
  return (
    <div
      id="reviews"
      className="px-[20px] mb-[52px] border-t-[15px] border-t-[#f5f5f5] font-Pretendard"
    >
      <div className="relative ml-[2px] mb-[15px] pt-[40px]">
        <h3 className="text-[19px] relative inline-block text-[#222222] pb-[4px] font-semibold">
          고객리뷰
        </h3>
        <div className="h-[1px] bg-[#cfcfcf]"></div>
      </div>

      {reviewCount === 0 ? (
        <div className="flex items-center">
          <div className="w-[5px] h-[5px] rounded-[3px] bg-[#dadde2] mr-[5px]" />
          <p className="text-[14px] text-[#999]">
            아직 등록된 리뷰가 없습니다.
          </p>
        </div>
      ) : (
        <div>
          {/* 평점 */}
          <RatingAndStar rating={averageRating} reviewCount={reviewCount} />
          {/* 포토&동영상 리뷰 */}
          <PhotoReviewPreview reviewList={reviewList} />
          {/* 전체 리뷰 */}
          <ReviewSummaryList
            reviewList={reviewList}
            averageRating={averageRating}
            reviewCount={reviewCount}
          />
        </div>
      )}
    </div>
  );
};

export default ProductReview;
