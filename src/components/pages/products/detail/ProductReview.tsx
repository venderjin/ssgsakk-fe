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
  const reviewImageList = reviewList.map(
    (review) => review.reviewContentVoList?.[0]
  );
  console.log(reviewImageList);

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

      <div>
        {/* 평점 */}
        <RatingAndStar rating={averageRating} reviewCount={reviewCount} />
        {/* 포토&동영상 리뷰 */}
        <PhotoReviewPreview reviewImageList={reviewImageList} />
        {/* 전체 리뷰 */}
        <ReviewSummaryList reviewList={reviewList} />
      </div>
    </div>
  );
};

export default ProductReview;
