"use client";
import React from "react";
import { ImageType } from "@/types/productType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

async function getProductData(productId: number) {
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data.result.contents;
  }

  if (res.status === 400) {
    console.log("잘못된 요청입니다.");
  }
}

const ImageSlider = async ({ productId }: { productId: number }) => {
  const imageList = await getProductData(productId);
  SwiperCore.use([Pagination]);

  return (
    <div className="h-[373px] ">
      <Swiper
        className="mySwiper"
        pagination={{ type: "fraction" }}
        loop={true} // 슬라이드 루프
        spaceBetween={30} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
      >
        {imageList.map((image: ImageType) => (
          <SwiperSlide key={image.priority}>
            <div className="h-[373px] relative">
              <Image
                fill
                src={image.contentUrl}
                alt={image.contentDescription}
                priority={image.priority === 1 ? true : false}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
