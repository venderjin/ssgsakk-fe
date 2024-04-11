import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductInformation from "@/components/pages/products/detail/ProductInformation";
import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import BottomActionButtons from "@/components/layouts/BottomActionButtons";
import ProductPageSwitchHeader from "@/components/layouts/ProductPageSwitchHeader";
import ProductReview from "@/components/pages/products/detail/ProductReview";
import QuestionAndAnswer from "@/components/pages/products/detail/QuestionAndAnswer";
import ProductCatogoryCard from "@/components/pages/products/detail/ProductCatogoryCard";
import "./productDetail.css";
import { getReviewList } from "@/actions/review";
import { getOption } from "@/actions/product";
import Footer from "@/components/layouts/Footer";

async function getProductData(productId: number) {
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data.result;
  }

  if (res.status === 400) {
    console.log("잘못된 요청입니다.");
  }
}

const page = async ({ params }: { params: { productId: number } }) => {
  const productData = await getProductData(params.productId);
  const reviewList = await getReviewList(params.productId);
  const optionData = await getOption(params.productId);

  return (
    <>
      <TopHeader />
      <ProductPageSwitchHeader />
      <ImageSlider imageList={productData.contents} />
      <ProductInformation productData={productData} />
      <ProductReview
        reviewList={reviewList}
        averageRating={productData.averageRating}
        reviewCount={productData.reviewCount}
      />
      <QuestionAndAnswer />
      <ProductCatogoryCard />
      <BottomActionButtons
        optionData={optionData}
        productId={params.productId}
        productName={productData.productName}
        productPrice={productData.productPrice}
        discountPercent={productData.discountPercent}
      />
      <Footer />
      <FloatingLeft />
      <FloatingUp />
    </>
  );
};

export default page;
