"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { writableReviewState } from "@/recoil/atoms/reviewState";

type Props = {
  productImage?: string;
  productName?: string;
};

const ReviewProductInfo = ({ productImage, productName }: Props) => {
  const reviewInfo = useRecoilValue(writableReviewState);

  return (
    <div className="mt-[15px] ml-[15px] mr-[15px] pb-[15px] flex font-Pretendard">
      <div className="overflow-hidden relative min-w-[85px] min-h-[85px]">
        <Image
          src={
            productImage
              ? productImage
              : reviewInfo.productContentsVo.contentUrl
          }
          alt="상품이미지"
          fill={true}
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </div>
      <div className="pl-[15px] h-[50px] text-[#969696] text-[14px] flex items-center w-full ">
        <div className="h-[20px] text-ellipsis overflow-hidden">
          <span>
            {productName ? productName : reviewInfo.purchaseProductName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewProductInfo;
