"use client";
import { useEffect } from "react";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import PhotoReviewList from "../review/PhotoReviewList";
import { useRecoilState } from "recoil";
import { isPhotoReviewAllModalOpen } from "@/recoil/atoms/reviewState";
import { PoroductReviewType } from "@/types/reviewType";

const ProductPhotoReviewAllModal = ({
  reviewList,
}: {
  reviewList: PoroductReviewType[];
}) => {
  //새로 고침될 때 모달이 열려있는 상태로 되어있는 문제 해결
  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const [isModalOpen, setIsModalOpen] = useRecoilState(
    isPhotoReviewAllModalOpen
  );
  const photoReviewList = reviewList
    .filter((review: PoroductReviewType) => review.reviewContentsList)
    .map((review: PoroductReviewType) => ({
      reviewId: review.reviewSeq,
      photoCount: review.reviewContentsList.length,
      thumbImage: review.reviewContentsList[0].contentUrl,
    }));

  return (
    <div className="font-Pretendard">
      {isModalOpen && (
        <Modal>
          <ModalHeader
            title={`포토&동영상 전체`}
            onChangeModal={() => setIsModalOpen(false)}
          />
          <PhotoReviewList photoReviews={photoReviewList} />
        </Modal>
      )}
    </div>
  );
};

export default ProductPhotoReviewAllModal;
