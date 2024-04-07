"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import maskUserId from "@/utils/markUserId";
import ReviewCard from "./ReviewCard";

// 별점, 리뷰작성일, 이미지, 아이디, 구매옵션, 내용

const ReviewPreviewCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const rating = 4;
  const reviewDate = "2021.09.01";
  const userId = "user123";
  const purchaseOption = "화이트 s";
  const content =
    "블라우스이지만 티처럼 편하게 입을수 있어서 굿 캐주얼스럽기도하고 여성스러워 보이기까지도 하고 최애옷이 되지않을까 싶어요~~";
  const reviewImageList = [
    {
      contentDescription: "리뷰이미지1",
      priority: 1,
      contentUrl:
        "https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240305162753_1215536390_0_1.jpg&w=500&h=500&autoOrient=true&t=082ad0f54250aaa72fbdf3acb66a3a7cb5a0908d",
    },
    {
      contentDescription: "리뷰이미지2",
      priority: 2,
      contentUrl:
        "https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240305162753_1215536390_0_1.jpg&w=500&h=500&autoOrient=true&t=082ad0f54250aaa72fbdf3acb66a3a7cb5a0908d",
    },
    {
      contentDescription: "리뷰이미지3",
      priority: 3,
      contentUrl:
        "https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202403/20240305162753_1215536390_0_1.jpg&w=500&h=500&autoOrient=true&t=082ad0f54250aaa72fbdf3acb66a3a7cb5a0908d",
    },
  ];

  return (
    <>
      {isModalOpen && (
        <Modal>
          <ModalHeader
            onChangeModal={() => setIsModalOpen(false)}
            title="일반 리뷰 상세"
          />
          <ReviewCard
            rating={rating}
            reviewDate={reviewDate}
            userId={userId}
            purchaseOption={purchaseOption}
            content={content}
            reviewImageList={reviewImageList}
          />
        </Modal>
      )}

      <div className="pr-[20px] font-Pretendard">
        <div className="flex items-cente">
          {/* 별점 */}
          <div className="flex items-center mr-[20px]">
            <div className="bg-product-icon bg-[position:-509px_-305px] bg-[size:524px_479px] w-[12px] h-[11px]" />
            <span className="text-[12px] font-bold ml-[5px]">{rating}</span>
          </div>

          {/* 리뷰작성일, 아이디 */}
          <div className="text-[11px] text-[#969696]">
            <span>{reviewDate}</span>
            <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
            <span>{maskUserId(userId)}</span>
          </div>

          <button onClick={openModal} className="absolute right-[20px]">
            <RightHalfTriangle color="#777" />
          </button>
        </div>
        {/* 이미지 */}
        <ul className="flex my-[12px]">
          {reviewImageList.map((image) => (
            <li
              key={image.priority}
              onClick={openModal}
              className="relative w-[85px] min-h-[80px] mr-[10px]"
            >
              <Image
                src={image.contentUrl}
                alt={image.contentDescription}
                fill={true}
                sizes="(max-width: 600px) 100vw, 600px"
                className="rounded-[8px]"
              />
            </li>
          ))}
        </ul>

        {/* 내용 */}
        <p
          onClick={openModal}
          className="text-[14px] mt-[5px] h-full line-clamp-2"
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default ReviewPreviewCard;
