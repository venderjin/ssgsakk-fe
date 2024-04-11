import Link from "next/link";
import { WritableReviewType } from "@/types/reviewType";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import MyReviewItem from "./MyReviewItem";

//작성 가능한 리뷰 또는 작성한 리뷰 리스트를 fetch 한다.

const getReviewList = async () => {
  const res = await fetch(`http://localhost:3300/writableReviewList`, {
    cache: "no-store",
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  if (!res.ok) {
    throw new Error("network error");
  }
};

const MyReviewList = async ({ type }: { type: string }) => {
  const reviewList = await getReviewList();

  return (
    <div>
      <div className="mt-[30px] mx-[20px] font-Pretendard">
        <ul className="rounded-[8px] border border-[#444] flex h-[52px] justify-between text-[14px] overflow-hidden">
          <Link
            href="/mypage/reviewList/writable"
            className={`h-full basis-1/2  flex items-center justify-center ${
              type === "writable" && "bg-[#444] text-[#fff]"
            }`}
          >
            작성 가능한 리뷰
          </Link>

          <Link
            href="/mypage/reviewList/written"
            className={`h-full basis-1/2  flex items-center justify-center ${
              type === "written" && "bg-[#444] text-[#fff]"
            }`}
          >
            작성한 리뷰
          </Link>
        </ul>
      </div>

      {/* 리뷰리스트 */}
      {/* {type === "writable" && <MyWritableReview reviewList={reviewList} />}
      {type === "written" && <MyWrittenReveiw />} */}
      <ul>
        {reviewList.map((review: WritableReviewType, index: number) => (
          <li key={index} className="pb-[10px] ">
            {/* 주문번호 및 주문정보 */}
            <Link
              href={""}
              className="px-[20px] pt-[10px] text-[12px] text-[#888] flex items-center"
            >
              {review.purchaseDate} ({review.purchaseCode})
              <RightHalfTriangle />
            </Link>
            <div className="">
              {/* 리뷰 상품 정보 */}
              <ReviewProductInfo
                productImage={review.purchaseProductImage}
                productName={review.purchaseProductName}
              />
              {/* 리뷰 작성 버튼 */}
              {type === "writable" && (
                <div className="px-[20px]">
                  <Link
                    href={`/mypage/review/${review.purchaseProductSeq}/create`}
                  >
                    <button className="border border-[#444] rounded-[8px] w-full h-[45px] text-[14px] font-semibold">
                      리뷰쓰기
                    </button>
                  </Link>
                </div>
              )}

              {/* 리뷰 내용 */}
              {type === "written" && (
                <MyReviewItem purchaseProductSeq={review.purchaseProductSeq} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReviewList;
