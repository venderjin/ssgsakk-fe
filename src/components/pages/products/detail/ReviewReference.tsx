"use client";
import Image from "next/image";
import { PoroductReviewType } from "@/types/reviewType";
import { useModal } from "@/actions/useModal";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import ReviewCard from "@/components/pages/products/review/ReviewCard";

type Props = {
  productId: number;
  reviewCount: number;
  averageRating: number;
  reviewList: PoroductReviewType[];
};

const ReviewReference = ({
  productId,
  reviewCount,
  averageRating,
  reviewList,
}: Props) => {
  const { openModal } = useModal();
  const photoReviewList = reviewList
    .filter((review: PoroductReviewType) => review.reviewContentsList)
    .map((review: PoroductReviewType) => ({
      reviewId: review.reviewSeq,
      photoCount: review.reviewContentsList.length,
      thumbImage: review.reviewContentsList[0].contentUrl,
    }));

  const reviewThumbList = reviewList
    ?.map(
      (review: PoroductReviewType) => review.reviewContentsList?.[0].contentUrl
    )
    .slice(0, 3);

  const reviewAllModalData = {
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

  const photoReviewModalData = {
    isOpen: true,
    title: "포토&동영상 전체",
    fixed: true,
    content: (
      <div className="px-[20px]">
        <PhotoReviewPreview photoReviews={photoReviewList} />
      </div>
    ),
  };

  return (
    <div className="flex items-center pt-[13px] pb-[10px] pr-[18px] ">
      {/* ---------리뷰평점--------- */}
      <div className="flex text-[15px] text-[#222] align-middle leading-[18px]">
        <div className="w-[16px] h-[16px] bg-product-icon bg-[position:-130px_-438px] bg-[size:524px_479px] align-middle"></div>
        <div className="font-bold pl-[5px]">{averageRating}</div>
      </div>

      {/* ---------고객리뷰--------- */}
      <button
        onClick={() => openModal(reviewAllModalData)}
        className="text-[15px] underline align-middle font-medium ml-[24px]"
      >
        {reviewCount}건 리뷰
      </button>

      {/* ---------포토&동영상 전체보기--------- */}
      <div
        className="ml-[10px] pr-[20px] align-middle flex relative"
        onClick={() => openModal(photoReviewModalData)}
      >
        <div className="flex mr-[-1px] align-middle">
          {reviewThumbList.map((image: string, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden w-[22px] h-[22px] mr-[-6.5px] rounded-[50%] border-[1.5px] border-[#fff] bg-[#f1f1f1]"
            >
              <Image src={image} alt={`첨부이미지${idx}`} fill sizes="24px" />
            </div>
          ))}
        </div>
        <div className="ml-[6px] right-arrow"></div>
      </div>
    </div>
  );
};

export default ReviewReference;
