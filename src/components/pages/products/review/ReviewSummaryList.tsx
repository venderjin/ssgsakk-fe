"use client";
import { useState } from "react";
import ReviewPreviewCard from "@/components/pages/products/review/ReviewPreviewCard";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import ReviewCard from "@/components/pages/products/review/ReviewCard";

const ReviewSummaryList = () => {
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
            title="리뷰 전체 보기"
          />
          <div className="px-[20px]">
            {/* 평점 */}
            <RatingAndStar rating={4.6} reviewCount={100} />
            {/* 포토&동영상 리뷰 */}
            <PhotoReviewPreview />
            {/* 전체 리뷰 */}
            <div className="mt-[40px]">
              <div className="my-[20px] text-[13px]">전체</div>
              <ReviewCard
                rating={rating}
                reviewDate={reviewDate}
                userId={userId}
                purchaseOption={purchaseOption}
                content={content}
                reviewImageList={reviewImageList}
              />
              <ReviewCard
                rating={rating}
                reviewDate={reviewDate}
                userId={userId}
                purchaseOption={purchaseOption}
                content={content}
                reviewImageList={[]}
              />
            </div>
          </div>
        </Modal>
      )}

      <div className="mt-[30px] pb-[40px] h-full w-full">
        <div className="mb-[16px] flex justify-between">
          <span className="text-[16px] text-[#222] font-bold">전체 리뷰</span>
        </div>
        {/* map으로 5개만 뿌려주기 */}
        <ReviewPreviewCard />

        {/* 전체 보기 */}
        <div className="mt-[26px]">
          <button
            onClick={openModal}
            className="h-[44px] w-full border border-[#ebebeb] rounded-[8px] text-[14px] text-[#888]"
          >
            더보기 (100)
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewSummaryList;
