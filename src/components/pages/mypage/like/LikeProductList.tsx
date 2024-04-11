import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import HeartIcon from "@/components/UI/HeartIcon";
import Cart from "@/components/images/Cart";
import DeliveryLabel from "@/components/UI/DeliveryLabel";
import ProductCartIcon from "@/components/UI/ProductCartIcon";

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
                    <Link href={`/products/${likeProductinfo.productSeq}`} className="flex justify-center">
                        <Image src={likeProductinfo.contents[0].contentUrl} alt="productImage" width={200} height={200} style={{ objectFit: "cover" }} />
                    </Link>
                </div>
                <div className=" flex flex-row gap-2 justify-between py-2 items-center">
                    <DeliveryLabel deliveryType={likeProductinfo.deliveryType} />
                    <div className="flex flex-row gap-2 items-center">
                        <Suspense fallback={<div>Loading...</div>}>
                            <HeartIcon productSeq={likeProductinfo.productSeq} />
                        </Suspense>
                        <ProductCartIcon productSeq={likeProductinfo.productSeq} />
                    </div>
                </div>
                <div className="flex flex-row text-pretty">
                    <span className="font-Pretendard text-[13px] line-clamp-2">
                        <b>{likeProductinfo.vendor} </b>
                        {likeProductinfo.productName}
                    </span>
                </div>
                {likeProductinfo.discountPercent === 0 ? (
                    <p className="font-Pretendard text-[16px] font-bold">{likeProductinfo.productPrice.toLocaleString()}원</p>
                ) : (
                    <div className="flex flex-col">
                        <p className="font-Pretendard text-[12px] text-[#969696] line-through	">{likeProductinfo.productPrice.toLocaleString()}원</p>
                        <div className="flex flex-row gap-1">
                            <p className="font-Pretendard text-[16px] font-bold text-primary-red">{likeProductinfo.discountPercent}%</p>
                            <p className="font-Pretendard text-[16px] font-bold">
                                {Math.round(likeProductinfo.productPrice * (1 - likeProductinfo.discountPercent / 100)).toLocaleString()}원
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default LikeProductList;
