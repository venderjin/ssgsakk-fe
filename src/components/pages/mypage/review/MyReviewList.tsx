import Link from "next/link";
import { WritableReviewType, WrittenReviewType } from "@/types/reviewType";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import MyReviewItem from "./MyReviewItem";
import { useGetServerToken } from "@/actions/useGetServerToken";
import dateFormatter from "@/utils/dateFormatter";
import { revalidateTag } from "next/cache";
import ReviewCreateButton from "./ReviewCreateButton";

const DeleteReview = async (reviewSeq: number) => {
  "use server";

  const token = await useGetServerToken();
  if (!token) return;
  const res = await fetch(
    `${process.env.BASE_URL}/reviews/${Number(reviewSeq)}`,
    {
      headers: {
        Authorization: token,
      },
      method: "DELETE",
    }
  );

  const data = await res.json();

  if (res.ok) {
    revalidateTag("reviews");
  }
  if (!res.ok) {
    console.log(data);
  }
};

const GetReviewList = async (type: string) => {
  const token = await useGetServerToken();
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/reviews/${type}`, {
    headers: {
      Authorization: token,
    },
    next: { tags: ["reviews"] },
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
  const reviewList = await GetReviewList(type);

  return (
    <div className="mb-[50px]">
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
          type === "writable" &&
          reviewList.map((review: WritableReviewType, index: number) => (
            <li key={index} className="pb-[10px] ">
              {/* 주문번호 및 주문정보 */}
              <Link
                href={""}
                className="px-[20px] pt-[10px] text-[12px] text-[#888] flex items-center"
              >
                {dateFormatter(review.purchaseDate)} ({review.purchaseCode})
                <RightHalfTriangle />
              </Link>
              <div>
                {/* 리뷰 상품 정보 */}
                <Link href={`/products/${review.productSeq}`}>
                  <ReviewProductInfo
                    productImage={review.productContentsVo.contentUrl}
                    productName={review.purchaseProductName}
                  />
                </Link>
                {/* 리뷰 작성 버튼 */}
                <ReviewCreateButton review={review} />
              </div>
            </li>
          ))}
        {reviewList &&
          type === "written" &&
          reviewList.map((review: WrittenReviewType, index: number) => (
            <li key={index} className="pb-[10px] ">
              {/* 주문번호 및 주문정보 */}
              <Link
                href={""}
                className="px-[20px] pt-[10px] text-[12px] text-[#888] flex items-center"
              >
                {dateFormatter(review.purchaseDate)} ({review.purchaseCode})
                <RightHalfTriangle />
              </Link>

              {/* 리뷰 상품 정보 */}
              <Link href={`/products/${review.productSeq}`}>
                <ReviewProductInfo
                  productImage={review.productContentsVo.contentUrl}
                  productName={review.purchaseProductName}
                />
              </Link>
              {/* 리뷰 내용 */}
              {type === "written" && (
                <MyReviewItem reviewInfo={review} deleteReview={DeleteReview} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MyReviewList;
