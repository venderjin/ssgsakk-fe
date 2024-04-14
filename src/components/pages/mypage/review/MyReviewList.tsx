import Link from "next/link";
import { WritableReviewType } from "@/types/reviewType";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import MyReviewItem from "./MyReviewItem";
import { useGetServerToken } from "@/actions/useGetServerToken";

//작성 가능한 리뷰 또는 작성한 리뷰 리스트를 fetch 한다.

const getReviewList = async (type: string) => {
  const token = await useGetServerToken();
  const res = await fetch(`${process.env.BASE_URL}/reviews/${type}`, {
    headers: {
      Authorization: token,
    },
    cache: "no-store",
  });

  const data = await res.json();
  if (res.ok) {
    return data.result;
  }
  if (!res.ok) {
    console.log(data);
  }
};

const MyReviewList = async ({ type }: { type: string }) => {
  const reviewList = await getReviewList(type);
  console.log(reviewList);

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

      {!reviewList ||
        (reviewList.length === 0 && (
          <div className="py-[35px] px-[20px] font-Pretendard text-center">
            <p className="text-[17px] text-[#222] ">
              최근 3개월간 구매 내역이 없습니다.
            </p>
            <p className="text-[12px] text-[#666]">
              SSG.COM이 준비한 상품들을 구매하시고
              <br />
              리뷰를 작성하시면 다양한 혜택을 받을 수 있습니다.
            </p>
          </div>
        ))}

      {!reviewList && type === "written" && (
        <div className="py-[35px] px-[20px] font-Pretendard text-center">
          <p className="text-[17px] text-[#222] ">작성된 리뷰가 없습니다.</p>
          <p className="text-[12px] text-[#666]">
            SSG.COM이 준비한 상품들을 구매하시고
            <br />
            리뷰를 작성하시면 다양한 혜택을 받을 수 있습니다.
          </p>
        </div>
      )}

      <ul>
        {reviewList &&
          reviewList.map((review: WritableReviewType, index: number) => (
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
                  <MyReviewItem
                    purchaseProductSeq={review.purchaseProductSeq}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyReviewList;
