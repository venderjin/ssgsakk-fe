import React from "react";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import ReviewStar from "@/components/pages/mypage/review/ReviewStar";
import ReviewEditor from "@/components/pages/mypage/review/ReviewEditor";

const ReviewForm = () => {
  return (
    <div className="font-Pretendard">
      {/* 리뷰 작성 상품 정보 */}
      <ReviewProductInfo />
      {/* 리뷰 작성 별점 */}
      <ReviewStar />
      {/* 리뷰 작성 */}
      <ReviewEditor />

      <div className="fixed bottom-0 left-0 right-0 bg-[#fff] p-[15px] border-t border-t-[#f8f8f8]">
        <button className="bg-[#222] text-[#fbfbfb] text-[15px] rounded-[8px] h-[40px] w-full">
          등록
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
