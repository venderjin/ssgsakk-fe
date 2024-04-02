"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { homeMainAdvertisementCarouselData } from "@/libs/homeMainAdvertisementCarouselData";
import { HomeMainAdvertisementCarouselType } from "@/types/homeResourceType";
import Modal from "@/components/common/Modal";

const HomeAdSwiper = () => {
  const [backgroundUrl, setBackgroundUrl] = useState<string>("");
  //   const [swiperPlay, setSwiperPlay] = useState<boolean>(true);
  //   const [adPlayString, setAdPlayString] = useState<string>("II");
  const [adModalIsOpen, setAdModalIsOpen] = useState<boolean>(false);

  //   const swiperRef = useRef<Swiper | null>(null);

  const adModalController = () => {
    setAdModalIsOpen(!adModalIsOpen);
  };

  const handleSlideChange = (swiper: any) => {
    setBackgroundUrl(
      homeMainAdvertisementCarouselData[swiper.realIndex].imgPath
    );
  };

  //   const swiperController = () => {
  //     setSwiperPlay(!swiperPlay);
  //     setAdPlayString(swiperPlay ? "II" : "▷");
  //     if (swiperPlay) {
  //       swiperRef.current.swiper.autoplay.start();
  //     } else {
  //       swiperRef.current.swiper.autoplay.stop();
  //     }
  //   };

  return (
    <div className="bg-white relative w-full h-[50vh]">
      <div
        className="absolute overflow-hidden top-0 left-0 right-0 bottom-[50px] bg-cover"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          filter: "blur(5px)",
          transition: "background-image 1s ease-in",
        }}
      ></div>
      <div className="absolute top-2 left-2 bottom-0 right-2">
        <Swiper
          //   ref={swiperRef}
          loop={true} // 슬라이드 루프
          spaceBetween={1} // 슬라이스 사이 간격
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          modules={[Autoplay, Pagination]}
          className="homeSwiper"
          onSlideChange={handleSlideChange}
        >
          {homeMainAdvertisementCarouselData.map(
            (ad: HomeMainAdvertisementCarouselType, index: number) => (
              <SwiperSlide key={ad.id}>
                <div className="h-[100%] relative">
                  <Image
                    src={ad.imgPath}
                    alt="swiper_ad"
                    fill
                    priority={index === 0 ? true : false}
                  />
                  <div className="absolute inset-x-0 bottom-[35px] z-102 bg-transparent">
                    {ad.title.split("\n").map((line, index) => (
                      <p
                        className="font-Pretendard text-white text-[25px] font-bold text-center"
                        key={index}
                      >
                        {line}
                      </p>
                    ))}
                    <p className="font-Pretendard text-white text-[15px] font-semibold text-center">
                      {ad.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          fontFamily: "Pretendard",
          backgroundColor: "rgba(34, 34, 34, 0.15)",
          color: "white",
          transform: "translate(-11%, 0)",
          alignContent: "center",
        }}
        className="absolute left-[10%] bottom-0 z-[105] h-[30px] w-[100px] flex justify-around items-center px-[5px]"
      >
        <button onClick={adModalController}>전체보기</button>
        {/* <button onClick={swiperController}>{adPlayString}</button> */}
      </div>
      {adModalIsOpen && (
        <Modal>
          <div className="sticky top-0 bg-white w-full h-[48px] py-[12px]">
            <p className="font-Pretendard text-[16px] font-semibold text-center tracking-wide">
              전체 보기
            </p>
            <div className="w-[50px] h-[24px] my-[12px]flex absolute right-0 top-0 bottom-0 items-center justify-center">
              <button
                onClick={() => {
                  adModalController();
                }}
                className="w-[50px] h-[50px] bg-[position:0px_0px] bg-[length:100px_100px]"
              >
                <Image
                  src="/images/etc/closeIcon.png"
                  alt="closeIcon"
                  width={28}
                  height={28}
                  priority={true}
                />
              </button>
            </div>
          </div>
          <div className="h-full mt-3">
            {homeMainAdvertisementCarouselData.map(
              (ad: HomeMainAdvertisementCarouselType, index: number) => (
                <div
                  key={ad.id}
                  className=" h-[160px] mx-3 my-[20px] border-b-[1px] flex flex-row gap-4"
                >
                  <Image
                    src={ad.imgPath}
                    alt="ad_main"
                    width={120}
                    height={140}
                    priority={true}
                    style={{ width: "120px", height: "140px" }}
                  />
                  <div className="flex flex-col justify-center item-center">
                    {ad.title.split("\n").map((line, index) => (
                      <p
                        className="font-Pretendard text-black text-[18px] font-bold"
                        key={index}
                      >
                        {line}
                      </p>
                    ))}
                    <p className="font-Pretendard text-black text-[13px] ">
                      {ad.subtitle}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomeAdSwiper;
