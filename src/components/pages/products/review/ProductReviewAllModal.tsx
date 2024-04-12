"use client";
import PhotoReviewPreview from "@/components/pages/products/review/PhotoReviewPreview";
import RatingAndStar from "@/components/pages/products/review/RatingAndStar";
import Modal from "@/components/common/Modal";
import ModalHeader from "@/components/common/ModalHeader";
import ReviewCard from "@/components/pages/products/review/ReviewCard";
import { useRecoilState } from "recoil";
import { isReviewAllModalOpen } from "@/recoil/atoms/reviewState";
import { PoroductReviewType } from "@/types/reviewType";

type Props = {
  averageRating: number;
  reviewCount: number;
  reviewList: PoroductReviewType[];
};

// 리뷰 전체보기 페이지
const ProductReviewAllModal = ({
  averageRating,
  reviewCount,
  reviewList,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isReviewAllModalOpen);
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
            onChangeModal={() => setIsModalOpen(false)}
            title="리뷰 전체 보기"
          />
          <div className="px-[20px]">
            {/* 평점 */}
            <RatingAndStar rating={averageRating} reviewCount={reviewCount} />
            {/* 포토&동영상 리뷰 */}
            <PhotoReviewPreview photoReviews={photoReviewList} />
            {/* 전체 리뷰 */}
            <div className="mt-[40px]">
              <div className="my-[20px] text-[13px]">전체</div>
              {reviewList.map((review) => (
                <ReviewCard key={review.reviewSeq} reviewData={review} />
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductReviewAllModal;
