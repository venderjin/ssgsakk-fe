"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { homeMainAdvertisementCarouselData } from "@/libs/homeMainAdvertisementCarouselData";
import { HomeMainAdvertisementCarouselType } from "@/types/homeResourceType";
import Modal from "@/components/common/Modal";

const HomeAdCarousel = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
  const [adPlay, setAdPlay] = useState<boolean>(true);
  const [adPlayString, setAdPlayString] = useState<string>("II");
  const totalAdLength = homeMainAdvertisementCarouselData.length;
  const [adModalIsOpen, setAdModalIsOpen] = useState<boolean>(false);

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === totalAdLength - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === 0 ? totalAdLength - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setAdPlayString(adPlay ? "II" : "▷");
    if (adPlay) {
      const interval = setInterval(() => {
        setCurrentAdIndex((prevIndex) =>
          prevIndex === totalAdLength - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [adPlayString, adPlay, totalAdLength]);

  const adPlayController = () => {
    setAdPlay(!adPlay);
  };

  const adModalController = () => {
    setAdModalIsOpen(!adModalIsOpen);
  };

  return (
    <div className="w-full h-[50vh] bg-white relative">
      {homeMainAdvertisementCarouselData.map(
        (ad: HomeMainAdvertisementCarouselType, index: number) => (
          <div
            key={ad.id}
            className={`absolute inset-0 pb-[40px] px-[40px] overflow-hidden ${
              index === currentAdIndex ? "block" : "hidden"
            }`}
          >
            <Image
              src={ad.imgPath}
              alt="ad_backgorund"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              className="blur-sm z-100 pb-[40px]"
            />
            <Image
              src={ad.imgPath}
              alt="ad_main"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              className="absolute inset-0 z-101 mt-[20px] px-[20px]"
            />
            <div className="absolute inset-0 z-102 h-fit mt-[300px]">
              {ad.title.split("\n").map((line, index) => (
                <p
                  className="font-Pretendard text-white text-[25px] font-extrabold text-center"
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
        )
      )}
      <div className=" absolute inset-0 z-102 flex justify-between items-end mx-[20px]">
        <div className="bg-black bg-opacity-50 p-[5px]">
          <button
            onClick={adPlayController}
            className="w-[20px]  font-Pretendard text-white text-[15px] font-extrabold text-center"
          >
            {adPlayString}
          </button>
        </div>
        <div className="flex flex-row bg-black bg-opacity-50 p-[5px]">
          <button
            onClick={prevAd}
            className="w-[20px]  font-Pretendard text-white text-[10px] font-extrabold text-center"
          >
            ◀
          </button>

          <p className="font-Pretendard text-white  text-[15px] font-bold text-center px-[5px]">
            {currentAdIndex + 1} / {totalAdLength}
          </p>
          <button
            onClick={nextAd}
            className="w-[20px]  font-Pretendard text-white text-[10px] font-extrabold text-center"
          >
            ▶
          </button>
          <button
            onClick={() => {
              adModalController();
              console.log("click");
            }}
            className="font-Pretendard text-white text-[13px] font-bold text-center px-[5px]"
          >
            전체보기
          </button>
        </div>
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

export default HomeAdCarousel;
