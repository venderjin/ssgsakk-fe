"use client";
import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductSummary from "@/components/pages/products/detail/ProductSummary";
import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import BottomActionButtons from "@/components/layouts/BottomActionButtons";
import ProductPageSwitchHeader from "@/components/layouts/ProductPageSwitchHeader";
import ProductDetailInfo from "@/components/pages/products/detail/ProductDetailInfo";

async function getProductData(productId: number) {
  const res = await fetch(`http://localhost:3300/products?id=${productId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("network error");
  }

  const data = await res.json();
  return data[0];
}

const page = async ({ params }: { params: { productId: number } }) => {
  const productData = await getProductData(params.productId);

  return (
    <>
      <TopHeader />
      <ProductPageSwitchHeader />
      <ImageSlider imageList={productData.images} />
      <ProductSummary
        title={productData.productName}
        price={productData.productPrice}
        discountPer={productData.discountPercent}
        vendor={productData.vendor}
        averageRating={productData.averageRating}
        reviewCount={productData.reviewCount}
        reviewThumbList={productData.reviewThumbList}
        productId={params.productId}
      />
      <ProductDetailInfo />
      <BottomActionButtons
        productId={params.productId}
        price={productData.productPrice}
        discountPer={productData.discountPercent}
      />
      <FloatingLeft />
      <FloatingUp />
    </>
  );
};

export default page;
