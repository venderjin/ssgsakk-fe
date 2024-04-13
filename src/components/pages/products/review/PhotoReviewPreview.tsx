"use client";
import { useState } from "react";
import Image from "next/image";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import { PoroductReviewType } from "@/types/reviewType";
import PhotoReviewList from "@/components/pages/products/review/PhotoReviewList";
import PhotoReviewSliderModal from "@/components/pages/products/review/PhotoReviewSliderModal";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";

const PhotoReviewPreview = ({
  reviewList,
}: {
  reviewList: PoroductReviewType[];
}) => {
  const [isPhotoListModalOpen, setIsPhotoListModalOpen] =
    useState<boolean>(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const photoModalHandler = (index: number) => {
    setIsPhotoModalOpen(true);
    setCurrentIndex(index);
  };
  const photoReviews = reviewList
    ? reviewList.filter(
        (review: PoroductReviewType) => review.reviewContentsList
      )
    : [];

  return (
    <>
      {isPhotoListModalOpen && (
        <Modal>
          <ModalHeader
            title="포토&동영상 전체"
            onChangeModal={() => setIsPhotoListModalOpen(false)}
          />
          <PhotoReviewList reviewList={reviewList} />
        </Modal>
      )}
      {isPhotoModalOpen && (
        <PhotoReviewSliderModal
          currentIndex={currentIndex}
          onChangeModal={() => setIsPhotoModalOpen(false)}
          photoReviews={photoReviews}
        />
      )}
      <div className="mt-[20px] h-full w-full">
        <div className="mb-[16px] flex justify-between">
          <span className="text-[16px] text-[#222] font-bold">
            포토&동영상 리뷰
          </span>
          <button
            onClick={() => setIsPhotoListModalOpen(true)}
            className="flex items-center"
          >
            <span className="text-[13px] text-[#777]">
              더보기({photoReviews && photoReviews.length})
            </span>
            <RightHalfTriangle color="#777" />
          </button>
        </div>

        <div className="overflow-hidden">
          <ul className="px-[16px] mx-[-20px] overflow-x-auto flex flex-nowrap">
            {photoReviews &&
              photoReviews.map((review, index) => (
                <li
                  key={index}
                  onClick={() => photoModalHandler(index)}
                  className={`min-w-[25%] ${!index ? "" : "ml-[10px]"} `}
                >
                  <div className="relative w-[85px] min-h-[80px]">
                    <Image
                      src={review.reviewContentsList[0].contentUrl}
                      alt="첨부이미지"
                      fill={true}
                      sizes="(max-width: 600px) 100vw, 600px"
                      className="rounded-[8px]"
                    />
                  </div>
                </li>
              ))}
            {photoReviews && photoReviews.length > 4 && (
              <li className="w-min-[25%] ml-[10px]">
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="relative w-[85px] min-h-[80px] rounded-[8px] bg-[#f0f0f0] text-[#777] flex flex-col items-center justify-center"
                >
                  <div className="bg-product-icon bg-[position:-60px_-408px] bg-[length:524px_479px] w-[20px] h-[20px] mb-[2px] block" />
                  <span className="text-[12px]">더보기</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PhotoReviewPreview;
