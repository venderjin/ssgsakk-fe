import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductInformation from "@/components/pages/products/detail/ProductInformation";
import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import BottomActionButtons from "@/components/layouts/BottomActionButtons";
import ProductPageSwitchHeader from "@/components/layouts/ProductPageSwitchHeader";

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

  return (
    <>
      <TopHeader />
      <ProductPageSwitchHeader />
      <ImageSlider imageList={productData.contents} />
      <ProductInformation
        productId={productData.productId}
        vendor={productData.vendor}
        productName={productData.productName}
        productPrice={productData.productPrice}
        discountPercent={productData.discountPercent}
        reviewCount={productData.reviewCount}
        averageRating={productData.averageRating}
        productDescription={productData.productDescription}
      />
      <BottomActionButtons
        productId={params.productId}
        productPrice={productData.productPrice}
        discountPercent={productData.discountPercent}
      />
      <FloatingLeft />
      <FloatingUp />
    </>
  );
};

export default page;
