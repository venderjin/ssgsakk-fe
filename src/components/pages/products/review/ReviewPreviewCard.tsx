"use client";
import { useState } from "react";
import Image from "next/image";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import maskUserId from "@/utils/markUserId";
import ReviewCard from "./ReviewCard";
import { PoroductReviewType } from "@/types/reviewType";
import dateFormatter from "@/utils/dateFormatter";

// 별점, 리뷰작성일, 이미지, 아이디, 구매옵션, 내용

const ReviewPreviewCard = ({
  reviewData,
}: {
  reviewData: PoroductReviewType;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal>
          <ModalHeader
            onChangeModal={() => setIsModalOpen(false)}
            title="일반 리뷰 상세"
          />
          <ReviewCard reviewData={reviewData} />
        </Modal>
      )}

      <div className="pr-[20px] font-Pretendard">
        <div className="flex items-cente">
          {/* 별점 */}
          <div className="flex items-center mr-[20px]">
            <div className="bg-product-icon bg-[position:-509px_-305px] bg-[size:524px_479px] w-[12px] h-[11px]" />
            <span className="text-[12px] font-bold ml-[5px]">
              {reviewData.reviewScore}
            </span>
          </div>

          {/* 리뷰작성일, 아이디 */}
          <div className="text-[11px] text-[#969696]">
            <span>{dateFormatter(reviewData.reviewDate)}</span>
            <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
            <span>{maskUserId(reviewData.userId)}</span>
          </div>

          <button onClick={openModal} className="absolute right-[20px]">
            <RightHalfTriangle color="#777" />
          </button>
        </div>
        {/* 이미지 */}
        <div className="relative w-[85px] min-h-[80px] my-[10px]">
          <Image
            src={reviewData.reviewContentsList[0].contentUrl}
            alt="첨부이미지"
            fill={true}
            sizes="(max-width: 600px) 100vw, 600px"
            className="rounded-[8px]"
          />
        </div>

        {/* 내용 */}
        <p
          onClick={openModal}
          className="text-[14px] mt-[5px] h-full line-clamp-2"
        >
          {reviewData.reviewParagraph}
        </p>
      </div>
    </>
  );
};

export default ReviewPreviewCard;
