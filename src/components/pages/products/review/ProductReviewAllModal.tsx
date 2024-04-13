"use client";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import ReviewCard from "@/components/pages/products/review/ReviewCard";
import { PoroductReviewType, PhotoReviewType } from "@/types/reviewType";

type Props = {
  averageRating: number;
  reviewCount: number;
  reviewList: PoroductReviewType[];
  photoReviewList: PhotoReviewType[];
};

// 리뷰 전체보기 페이지
const ProductReviewAllModal = ({
  averageRating,
  reviewCount,
  reviewList,
  photoReviewList,
}: Props) => {
  return (
    <div className="px-[20px]">
      {/* 평점 */}
      <RatingAndStar rating={averageRating} reviewCount={reviewCount} />
      {/* 포토&동영상 리뷰 */}
      <PhotoReviewPreview reviewList={reviewList} />
      {/* 전체 리뷰 */}
      <div className="mt-[40px]">
        <div className="my-[20px] text-[13px]">전체</div>
        {reviewList.map((review) => (
          <ReviewCard key={review.reviewSeq} reviewData={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductReviewAllModal;
