import BackArrowHeader from "@/components/common/BackArrowHeader";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import ReviewEditor from "@/components/pages/mypage/review/ReviewEditor";

//리뷰 작성 상품 seq / 상품명 / 이미지 받아오기
//수정인 경우 기존 리뷰 정보 받아오기

const ReviewWrite = ({ params }: { params: { slug: string } }) => {
  const [purchaseProductSeq, type] = params.slug;

  const createReview = async (reviewForm: FormData) => {
    "use server";

    const content = reviewForm.get("content");
    const images = JSON.parse(reviewForm.get("images")?.toString() || "[]");
    const rating = reviewForm.get("rating");

    console.log(content, images, rating);

    // 리뷰 작성 API FETCH
  };

  return (
    <>
      <BackArrowHeader title={`리뷰 ${type === "write" ? "쓰기" : "수정"}`} />
      <ReviewProductInfo
        productImage="https://sitem.ssgcdn.com/00/76/49/item/1000414497600_i1_500.jpg"
        productName="오트밀 500g 귀리 100% 시리얼오트밀 500g 귀리 100% 시리얼오트밀 500g 귀리 100% 시리얼오트밀 500g 귀리 100% 시리얼오트밀 500g 귀리 100% 시리얼"
      />
      <ReviewEditor type={type} />
    </>
  );
};

export default ReviewWrite;
