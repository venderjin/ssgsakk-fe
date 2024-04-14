"use client";
import { ImageType } from "@/types/productType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ImageSlider = ({ imageList }: { imageList: ImageType[] }) => {
  SwiperCore.use([Pagination]);

  return (
    <div className="h-[373px] ">
      <Swiper
        className="mySwiper"
        pagination={{ type: "fraction" }}
        loop={imageList.length > 1 ? true : false} // 슬라이드 루프
        spaceBetween={30} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
      >
        {imageList.map((image: ImageType) => (
          <SwiperSlide key={image.priority}>
            <div className="h-[373px] relative">
              <Image
                fill
                style={{ objectFit: "contain" }}
                src={image.contentUrl}
                alt={
                  image.contentDescription
                    ? image.contentDescription
                    : "상품 이미지"
                }
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
