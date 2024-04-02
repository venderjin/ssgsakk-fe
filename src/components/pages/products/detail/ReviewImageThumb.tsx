"use client";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import PhotoReviewList from "../../review/PhotoReviewList";

type Props = {
  productId: number;
};

const ReviewImageThumb = ({ productId }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const reviewThumbList = [
    "https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202310/20231019191939_1206816677_0_1.jpg&w=500&h=500&autoOrient=true&t=1e7f78bce1c1ea862b77640ba149f5825ac14c24",
    "https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202308/20230830204922_1203913673_1_1.jpg&w=335&h=335&edit=c&autoOrient=true&t=639a64365260be78143d1e4767f31568c2836d99",
  ];

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
