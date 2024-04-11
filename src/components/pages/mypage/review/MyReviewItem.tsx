"use client";
import Link from "next/link";
import ReviewSummaryStar from "@/components/UI/ReviewSummaryStar";

//리뷰 별점, 리뷰 내용, 리뷰 작성일

const MyReviewItem = ({
  purchaseProductSeq,
}: {
  purchaseProductSeq: number;
}) => {
  const rating = 5;
  const content =
    "배송도 빠르고 양 많은 것 시키면 맨날 남는데 딱 먹기 좋은 것 같아요:)배송도 빠르고 양 많은 것 시키면 맨날 남는데 딱 먹기 좋은 것 같아요:)";
  const reviewDate = "2021.09.01";

  const deleteHandler = () => {
    alert(
      "리뷰를 삭제하시면 재작성이 불가능하며, 작성 시 지급된 포인트가 차감됩니다. 삭제하시겠습니까?"
    );
    console.log(purchaseProductSeq);
    //리뷰 삭제 fetch
  };

  return (
    <div className="px-[20px] font-Pretendard">
      <div className="flex">
        <ReviewSummaryStar rating={rating} />
        <div className="basis-1/3 flex absolute right-[20px]">
          <Link
            href={`/mypage/review/${purchaseProductSeq}/modify`}
            className="w-full flex justify-center items-center "
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">수정</span>
          </Link>
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
        <p className="h-full line-clamp-2">{content}</p>
      </div>

      <div className="text-[12px] text-[#858585] mt-[3px]">
        {reviewDate} 작성
      </div>

      <hr className="border-t border-t-[#e5e5e5] mt-[10px]" />
    </div>
  );
};

export default MyReviewItem;
