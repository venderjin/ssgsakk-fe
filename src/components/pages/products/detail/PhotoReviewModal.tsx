import ModalHeader from "@/components/common/ModalHeader";
import React from "react";
import { reviewType } from "@/types/productType";
import PhotoReviewContainer from "./PhotoReviewContainer";

type Props = {
  onChangeModal: () => void;
  reviewList: reviewType[];
};

const PhotoReviewModal = ({ onChangeModal, reviewList }: Props) => {
  return (
    <div>
      <ModalHeader onChangeModal={onChangeModal} title="포토&동영상 전체" />
      <PhotoReviewContainer reviewList={reviewList} />
    </div>
  );
};

export default PhotoReviewModal;
