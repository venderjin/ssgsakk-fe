import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import { PoroductReviewType } from "@/types/reviewType";
import dateFormatter from "@/utils/dateFormatter";

const ReviewCard = ({ reviewData }: { reviewData: PoroductReviewType }) => {
  return (
    <div className="h-full mb-[10px]">
      {reviewData.reviewContentsList.length > 0 && (
        <ImageSlider imageList={reviewData.reviewContentsList} />
      )}
      <div className="p-[20px] font-Pretendard">
        <div className="flex items-center">
          {/* 별점 */}
          <div className="flex items-center mr-[20px]">
            <div className="bg-product-icon bg-[position:-509px_-305px] bg-[size:524px_479px] w-[12px] h-[11px]" />
            <span className="text-[12px] font-bold ml-[5px]">
              {reviewData.reviewScore}
            </span>
          </div>

          <div className="text-[14px] absolute right-[20px]">신고/차단</div>
        </div>

        {/* 리뷰작성일, 아이디 */}
        <div className="text-[11px] text-[#969696] mb-[20px]">
          <span>{dateFormatter(reviewData.reviewDate)}</span>
          <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
          <span>{reviewData.userId}</span>
        </div>

        {/* 구매 옵션 */}
        <div>
          <span className="text-[13px] text-[#777777] font-bold mr-[10px]">
            구매옵션:
          </span>
          <span className="text-[13px] text-[#777777]">
            {reviewData.purchaseProductOption}
          </span>
        </div>

        {/* 내용 */}
        <p className="text-[14px] mt-[5px]">{reviewData.reviewParagraph}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
