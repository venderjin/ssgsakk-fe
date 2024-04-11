import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HeartIcon from "@/components/UI/HeartIcon";
import DeliveryLabel from "@/components/UI/DeliveryLabel";
import ProductCartIcon from "@/components/UI/ProductCartIcon";
import { OptionResponse } from "@/types/optionType";
import { getOption } from "@/actions/product";

interface LikeProduct {
  likeProductSeq: number;
  productSeq: number;
  productName: string;
  discountPercent: number;
  productPrice: number;
  vendor: string;
  deliveryType: string;
  contents: {
    contentDescription: string;
    contentUrl: string;
    priority: number;
  }[];
}

interface LikeProductInfo {
  likeProductinfo: LikeProduct;
}

const LikeProductList = ({ likeProductinfo }: LikeProductInfo) => {
  const minimumStock = 5;
  const [optionData, setOptionData] = useState<OptionResponse>(
    {} as OptionResponse
  );
  const isSoldOut =
    !optionData.depthLevel && optionData?.options?.[0].stock <= minimumStock;

  useEffect(() => {
    const fetchOption = async () => {
      const response = await getOption(likeProductinfo.productSeq);
      setOptionData(response);
    };
    fetchOption();
  }, []);

  return (
    <>
      <div className="h-[310px] my-3 flex justify-start flex-col">
        <div className="w-auto h-auto relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${likeProductinfo.contents[0].contentUrl})`,
              filter: "blur(30px)", // 배경 이미지에 흐림 효과 적용
              zIndex: -1, // 배경 이미지를 뒤로 보냅니다.
            }}
          />
          <Link
            href={`/products/${likeProductinfo.productSeq}`}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src={likeProductinfo.contents[0].contentUrl}
                alt="productImage"
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />
              {isSoldOut && (
                <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-[16px] font-semibold font-Pretendard">
                    품절
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className=" flex flex-row gap-2 justify-between py-2 items-center">
          <DeliveryLabel deliveryType={likeProductinfo.deliveryType} />
          <div className="flex flex-row gap-2 items-center">
            <Suspense fallback={<div>Loading...</div>}>
              <HeartIcon productSeq={likeProductinfo.productSeq} />
            </Suspense>
            <ProductCartIcon
              productSeq={likeProductinfo.productSeq}
              optionData={optionData}
            />
          </div>
        </div>
        <div className="flex flex-row text-pretty">
          <span className="font-Pretendard text-[13px] line-clamp-2">
            <b>{likeProductinfo.vendor} </b>
            {likeProductinfo.productName}
          </span>
        </div>
        {likeProductinfo.discountPercent === 0 ? (
          <p className="font-Pretendard text-[16px] font-bold">
            {likeProductinfo.productPrice.toLocaleString()}원
          </p>
        ) : (
          <div className="flex flex-col">
            <p className="font-Pretendard text-[12px] text-[#969696] line-through	">
              {likeProductinfo.productPrice.toLocaleString()}원
            </p>
            <div className="flex flex-row gap-1">
              <p className="font-Pretendard text-[16px] font-bold text-primary-red">
                {likeProductinfo.discountPercent}%
              </p>
              <p className="font-Pretendard text-[16px] font-bold">
                {Math.round(
                  likeProductinfo.productPrice *
                    (1 - likeProductinfo.discountPercent / 100)
                ).toLocaleString()}
                원
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LikeProductList;
