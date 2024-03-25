"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import PhotoReviewList from "../../review/PhotoReviewList";

type Props = {
  productId: number;
  reviewThumbList: string[];
};

const ReviewImageThumb = ({ productId, reviewThumbList }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="ml-[10px] pr-[20px] align-middle flex relative"
        onClick={() => setOpenModal(!openModal)}
      >
        <div className="flex mr-[-1px] align-middle">
          {reviewThumbList.map((image, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden w-[22px] h-[22px] mr-[-6.5px] rounded-[50%] border-[1.5px] border-[#fff] bg-[#f1f1f1]"
            >
              <Image src={image} alt={`첨부이미지${idx}`} fill sizes="24px" />
            </div>
          ))}
        </div>
        <div className="ml-[6px] right-arrow"></div>
      </div>

      {openModal ? (
        <Modal>
          <ModalHeader
            title={`포토&동영상 전체`}
            onChangeModal={() => setOpenModal(false)}
          ></ModalHeader>
          <PhotoReviewList productId={productId} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReviewImageThumb;
