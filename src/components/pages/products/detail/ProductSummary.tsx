import React from "react";
import Image from "next/image";
import Link from "next/link";
import CouponIcon from "@/components/pages/products/detail/CouponIcon";
import UniverseBanner from "./UniverseBanner";
import ReviewReference from "./ReviewReference";

type Props = {
  title: string;
  vendor: string;
  price: number;
  discountPer: number;
  averageRating: number;
  reviewCount: number;
  reviewThumbList: string[];
  onChangeModal: () => void;
};

const ProductSummary = ({
  title,
  vendor,
  price,
  discountPer,
  averageRating,
  reviewCount,
  reviewThumbList,
  onChangeModal,
}: Props) => {
  const newPrice = price - price * (discountPer / 100);

  return (
    <div className="font-Pretendard block">
      <div className="py-[7px] px-[16px] flex justify-end border-b-[1px] border-b-[#e5e5e5]">
        <Image
          src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg"
          alt="상품 공유하기"
          width={24}
          height={24}
        ></Image>
      </div>

      <div className="my-[15px] px-[16px]">
        <h2 className="text-[16px] text-[#222222]">
          <div className="font-bold text-[13px] mb-[10px]">
            <Link href={`/${vendor}`}>{vendor}</Link>
          </div>
          <span className="text-[16px] text-[#222222]">{title}</span>
        </h2>

        {/* -------------상품 가격------------- */}
        <div className="mt-[25px] leading-tight">
          <div className="block">
            <span className="inline-block font-medium text-[16px] text-[#777777] line-through align-middle">
              {price.toLocaleString()}원
            </span>
            <CouponIcon />
          </div>

          <div className="block">
            <div className="inline-block mr-[5px] font-semibold text-[26px] text-primary-red align-middle">
              <span> {discountPer}%</span>
            </div>
            <div className="inline-block font-semibold text-[26px] text-[#222222] align-middle ">
              {newPrice.toLocaleString()}원
            </div>

            <div className="inline-block w-[24px] h-[24px] bg-product-icon bg-[position:-390px_-306px] bg-[size:524px_479px] align-middle"></div>
          </div>
        </div>

        <UniverseBanner />
        <ReviewReference
          reviewCount={reviewCount}
          averageRating={averageRating}
          reviewThumbList={reviewThumbList}
          onChangeModal={onChangeModal}
        />
      </div>
    </div>
  );
};

export default ProductSummary;
