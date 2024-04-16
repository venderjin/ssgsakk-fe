"use client";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { writableReviewState } from "@/recoil/atoms/reviewState";
import { WritableReviewType } from "@/types/reviewType";

const ReviewCreateButton = ({ review }: { review: WritableReviewType }) => {
  const router = useRouter();
  const [reviewInfo, setReviewInfo] = useRecoilState(writableReviewState);

  const onClickReview = (review: WritableReviewType) => {
    setReviewInfo(review);
    router.push(`/mypage/review/${review.purchaseProductSeq}/write`);
  };

  return (
    <div className="px-[20px]">
      <button
        onClick={() => onClickReview(review)}
        className="border border-[#444] rounded-[8px] w-full h-[45px] text-[14px] font-semibold"
      >
        리뷰쓰기
      </button>
    </div>
  );
};

export default ReviewCreateButton;
