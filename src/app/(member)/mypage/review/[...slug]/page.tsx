import BackArrowHeader from "@/components/common/BackArrowHeader";
import ReviewProductInfo from "@/components/pages/mypage/review/ReviewProductInfo";
import ReviewEditor from "@/components/pages/mypage/review/ReviewEditor";

//리뷰 작성 상품 seq / 상품명 / 이미지 받아오기
//수정인 경우 기존 리뷰 정보 받아오기

const ReviewWrite = ({ params }: { params: { slug: string } }) => {
  const [purchaseProductSeq, type] = params.slug;

  return (
    <>
      <BackArrowHeader title={`리뷰 ${type === "write" ? "쓰기" : "수정"}`} />
      <ReviewProductInfo />
      <ReviewEditor type={type} />
    </>
  );
};

export default ReviewWrite;
