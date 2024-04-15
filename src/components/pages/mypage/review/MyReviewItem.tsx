"use client";
import Link from "next/link";
import ReviewSummaryStar from "@/components/UI/ReviewSummaryStar";
import { WrittenReviewType } from "@/types/reviewType";
import dateFormatter from "@/utils/dateFormatter";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

//리뷰 별점, 리뷰 내용, 리뷰 작성일

const MyReviewItem = ({
  reviewInfo,
  deleteReview,
}: {
  reviewInfo: WrittenReviewType;
  deleteReview: (reviewSeq: number) => void;
}) => {
  const router = useRouter();

  const deleteHandler = async () => {
    if (
      confirm(
        "리뷰를 삭제하시면 재작성이 불가능하며, 작성 시 지급된 포인트가 차감됩니다. 삭제하시겠습니까?"
      )
    ) {
      //리뷰 삭제 fetch
      deleteReview(reviewInfo.reviewSeq);
    }
  };

  const updateHandler = async () => {
    alert("수정 기능은 준비 중입니다.");
  };

  return (
    <div className="px-[20px] font-Pretendard">
      <div className="flex">
        <ReviewSummaryStar rating={reviewInfo.reviewScore} />
        <div className="basis-1/3 flex absolute right-[20px]">
          <div
            onClick={updateHandler}
            className="w-full flex justify-center items-center "
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">수정</span>
          </div>
          <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
          <button
            onClick={deleteHandler}
            className="w-full flex justify-center items-center"
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">삭제</span>
          </button>
        </div>
      </div>

      <div className="pt-[10px] text-[14px] text-[#222] h-[50px]">
        <p className="h-full line-clamp-2">{reviewInfo.reviewParagraph}</p>
      </div>

      <div className="text-[12px] text-[#858585] mt-[3px]">
        {dateFormatter(reviewInfo.reviewDate)} 작성
      </div>

      <hr className="border-t border-t-[#e5e5e5] mt-[10px]" />
    </div>
  );
};

export default MyReviewItem;
