"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import PhotoReviewList from "@/components/pages/products/review/PhotoReviewList";
import { ReviewImageType } from "@/types/reviewType";

const PhotoReviewPreview = ({
  reviewImageList,
}: {
  reviewImageList: ReviewImageType[];
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <Modal>
          <ModalHeader
            title={`포토&동영상 전체`}
            onChangeModal={() => setOpenModal(false)}
          ></ModalHeader>
          <PhotoReviewList productId={1} />
        </Modal>
      )}

      <div className="mt-[20px] h-full w-full">
        <div className="mb-[16px] flex justify-between">
          <span className="text-[16px] text-[#222] font-bold">
            포토&동영상 리뷰
          </span>
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center"
          >
            <span className="text-[13px] text-[#777]">
              더보기({reviewImageList.length})
            </span>
            <RightHalfTriangle color="#777" />
          </button>
        </div>

        <div className="overflow-hidden">
          <ul className="px-[16px] mx-[-20px] overflow-x-auto flex flex-nowrap">
            {reviewImageList.map((reviewImage, index) => (
              <li
                key={reviewImage.priority}
                className={`min-w-[25%] ${!index ? "" : "ml-[10px]"} `}
              >
                <Link href="/">
                  <div className="relative w-[85px] min-h-[80px]">
                    <Image
                      src={reviewImage.contentUrl}
                      alt="첨부이미지"
                      fill={true}
                      sizes="(max-width: 600px) 100vw, 600px"
                      className="rounded-[8px]"
                    />
                  </div>
                </Link>
              </li>
            ))}
            {reviewImageList.length > 4 && (
              <li className="w-min-[25%] ml-[10px]">
                <button
                  onClick={() => setOpenModal(true)}
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
