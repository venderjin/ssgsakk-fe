"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Close from "@/components/images/Close";
import { PoroductReviewType } from "@/types/reviewType";
import ReviewCard from "./ReviewCard";

const PhotoReviewSliderModal = ({
  currentIndex,
  onChangeModal,
  photoReviews,
}: {
  currentIndex?: number;
  onChangeModal: () => void;
  photoReviews: PoroductReviewType[];
}) => {
  SwiperCore.use([Pagination]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (currentIndex) {
      setCurrentSlideIndex(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="bg-white fixed z-[300] top-0 left-0 w-full h-full overflow-y-scroll">
      {/* 헤더 */}
      <div className="h-[50px] py-[11px]  justify-center border-b-[#BCBCBC] border-b-[1px] bg-white font-Pretendard flex sticky top-0">
        <h1 className="text-black text-[15px] font-bold align-middle flex items-center font-Pretendard">
          <span>{currentSlideIndex + 1}</span>
          <span className="text-[#969696]">/ {photoReviews.length}</span>
        </h1>
        <div
          onClick={onChangeModal}
          className={`flex absolute right-0 top-0 bottom-0 items-center justify-center`}
          style={{
            width: "60px",
            height: "60px",
          }}
        >
          <Close />
        </div>
      </div>
      {/* 포토 리뷰 상세 컨텐츠 */}
      <div className="h-[373px] ">
        <Swiper
          className="mySwiper"
          spaceBetween={30} // 슬라이스 사이 간격
          slidesPerView={1} // 보여질 슬라이스 수
          onSlideChange={handleSlideChange}
          initialSlide={currentIndex}
        >
          {photoReviews.map((review: PoroductReviewType) => (
            <SwiperSlide key={review.reviewSeq}>
              <ReviewCard reviewData={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoReviewSliderModal;
