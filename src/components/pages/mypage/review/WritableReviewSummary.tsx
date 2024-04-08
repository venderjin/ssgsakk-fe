import Image from "next/image";
import Link from "next/link";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import { WritableReviewType } from "@/types/reviewType";

const WritableReviewSummary = ({
  reviewList,
}: {
  reviewList: WritableReviewType[];
}) => {
  return (
    <div>
      {reviewList ? (
        <div>
          <ul className="flex flex-wrap justify-between py-[20px]">
            {reviewList.map((review: WritableReviewType, index: number) => (
              <li key={index}>
                <Link
                  href={`/mypage/review/${review.purchaseProductSeq}/write`}
                >
                  <div className="overflow-hidden relative w-[110px] min-h-[110px] rounded-[8px] flex-shrink: 0 border border-slate-200">
                    <Image
                      src={review.purchaseProductImage}
                      alt="상품이미지"
                      fill={true}
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-center  text-[#fff] text-[14px] py-[2px] opacity-45">
                      리뷰쓰기
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/mypage/reviewList/writable"
            className="border-t border-t-gray-200 py-[10px] text-center flex justify-center"
          >
            <span className="text-[15px] text-[#5e5e5e]">
              작성가능한 리뷰 더보기
            </span>
            <RightHalfTriangle />
          </Link>
        </div>
      ) : (
        <p className="mt-[50px] text-[14px] text-[#969696] text-center">
          당신의 소중한 리뷰를 기다립니다.
        </p>
      )}
    </div>
  );
};

export default WritableReviewSummary;
