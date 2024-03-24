import React from "react";
import Link from "next/link";
import ReviewImageThumb from "./ReviewImageThumb";

type Props = {
  reviewCount: number;
  averageRating: number;
  productId: number;
  reviewThumbList: string[];
};

const ReviewReference = ({
  reviewCount,
  averageRating,
  productId,
  reviewThumbList,
}: Props) => {
  return (
    <div className="flex items-center pt-[13px] pb-[10px] pr-[18px] border-b-[1px] border-b-[#e5e5e5]">
      {/* ---------리뷰평점--------- */}
      <div className="flex text-[15px] text-[#222] align-middle leading-[18px]">
        <div className="w-[16px] h-[16px] bg-product-icon bg-[position:-130px_-438px] bg-[size:524px_479px] align-middle"></div>
        <div className="font-bold pl-[5px]">{averageRating}</div>
      </div>

      {/* ---------고객리뷰--------- */}
      <Link
        className="text-[15px] underline align-middle font-medium ml-[24px]"
        href={"/"}
      >
        {reviewCount}건 리뷰
      </Link>

      {/* ---------포토&동영상 전체보기--------- */}
      <ReviewImageThumb
        productId={productId}
        reviewThumbList={reviewThumbList}
      />
    </div>
  );
};

export default ReviewReference;
