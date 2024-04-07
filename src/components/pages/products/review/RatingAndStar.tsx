import React from "react";

const RatingAndStar = ({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) => {
  return (
    <div className="relative text-center pt-[25px] pb-[34px] px-[16px]">
      <span className="inline-block mr-[20px] text-[44px] text-[#22222] font-bold align-middle">
        {rating}
      </span>
      <div className="inline-block text-left align-middle">
        <div className="bg-product-icon bg-[position:-113px_-162px] bg-[length:524px_479px] w-[110px] h-[22px]">
          <div
            style={{ width: `${(rating / 5) * 100}%` }}
            className="bg-product-icon bg-[position:0px_-198px] bg-[length:524px_479px] h-[22px] "
          />
        </div>
        <div className="mt-[6px] text-[14px] font-semibold">
          <span>{reviewCount}건 리뷰</span>
        </div>
      </div>
    </div>
  );
};

export default RatingAndStar;
