import BackArrowHeader from "@/components/common/BackArrowHeader";
import Footer from "@/components/layouts/Footer";
import MyReviewList from "@/components/pages/mypage/review/MyReviewList";

const ReviewList = ({ params }: { params: { slug: string } }) => {
  const [type] = params.slug;

  return (
    <>
      <BackArrowHeader title="상품 리뷰" />
      <MyReviewList type={type} />
      <Footer />
    </>
  );
};

export default ReviewList;
