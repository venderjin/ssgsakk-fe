"use client";
import ReviewPreviewCard from "@/components/pages/products/review/ReviewPreviewCard";
import { PoroductReviewType } from "@/types/reviewType";
import GlobalModal from "@/components/common/GlobalModal";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import ReviewCard from "@/components/pages/products/review/ReviewCard";
import { useModal } from "@/actions/useModal";

const ReviewSummaryList = ({
  reviewList,
  averageRating,
  reviewCount,
}: {
  reviewList: PoroductReviewType[];
  averageRating: number;
  reviewCount: number;
}) => {
  const { openModal } = useModal();
  const photoReviewList = reviewList
    .filter((review: PoroductReviewType) => review.reviewContentsList)
    .map((review: PoroductReviewType) => ({
      reviewId: review.reviewSeq,
      photoCount: review.reviewContentsList.length,
      thumbImage: review.reviewContentsList[0].contentUrl,
    }));

  const modalData = {
    isOpen: true,
    title: "리뷰 전체 보기",
    fixed: true,
    content: (
      <div className="px-[20px]">
        {/* 평점 */}
        <RatingAndStar rating={averageRating} reviewCount={reviewCount} />
        {/* 포토&동영상 리뷰 */}
        <PhotoReviewPreview photoReviews={photoReviewList} />
        {/* 전체 리뷰 */}
        <div className="mt-[40px]">
          <div className="my-[20px] text-[13px]">전체</div>
          {reviewList.map((review) => (
            <ReviewCard key={review.reviewSeq} reviewData={review} />
          ))}
        </div>
      </div>
    ),
  };

  return (
    <>
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
            onClick={() => openModal(modalData)}
            className="h-[44px] w-full border border-[#ebebeb] rounded-[8px] text-[14px] text-[#888]"
          >
            더보기 ({reviewCount})
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewSummaryList;
