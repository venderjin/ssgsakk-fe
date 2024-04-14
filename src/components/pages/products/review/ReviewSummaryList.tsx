"use client";
import ReviewPreviewCard from "@/components/pages/products/review/ReviewPreviewCard";
import { PoroductReviewType } from "@/types/reviewType";
import { useModal } from "@/actions/useModal";
import ProductReviewAllModal from "@/components/pages/products/review/ProductReviewAllModal";

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
    .filter(
      (review: PoroductReviewType) => review.reviewContentsList.length > 0
    )
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
      <ProductReviewAllModal
        averageRating={averageRating}
        reviewCount={reviewCount}
        reviewList={reviewList}
        photoReviewList={photoReviewList}
      />
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
