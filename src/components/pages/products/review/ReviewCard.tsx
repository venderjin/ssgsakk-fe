import maskUserId from "@/utils/markUserId";
import ImageSlider from "@/components/pages/products/detail/ImageSlider";

type Props = {
  rating: number;
  purchaseOption: string;
  reviewDate: string;
  userId: string;
  content: string;
  reviewImageList: {
    priority: number;
    contentUrl: string;
    contentDescription: string;
  }[];
};

const ReviewCard = (reviewData: Props) => {
  return (
    <div className="h-full">
      {reviewData.reviewImageList.length > 0 && (
        <ImageSlider imageList={reviewData.reviewImageList} />
      )}
      <div className="p-[20px] font-Pretendard">
        <div className="flex items-center">
          {/* 별점 */}
          <div className="flex items-center mr-[20px]">
            <div className="bg-product-icon bg-[position:-509px_-305px] bg-[size:524px_479px] w-[12px] h-[11px]" />
            <span className="text-[12px] font-bold ml-[5px]">
              {reviewData.rating}
            </span>
          </div>

          <div className="text-[14px] absolute right-[20px]">신고/차단</div>
        </div>

        {/* 리뷰작성일, 아이디 */}
        <div className="text-[11px] text-[#969696] mb-[20px]">
          <span>{reviewData.reviewDate}</span>
          <span className="border-r border-r-[#e5e5e5] h-[12px] mx-[10px]" />
          <span>{maskUserId(reviewData.userId)}</span>
        </div>

        {/* 구매 옵션 */}
        <div>
          <span className="text-[13px] text-[#777777] font-bold mr-[10px]">
            구매옵션:
          </span>
          <span className="text-[13px] text-[#777777]">
            {reviewData.purchaseOption}
          </span>
        </div>

        {/* 내용 */}
        <p className="text-[14px] mt-[5px]">{reviewData.content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
