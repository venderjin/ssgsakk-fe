"use client";
import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import ProductSummary from "@/components/pages/products/detail/ProductSummary";
import PhotoReviewModal from "@/components/pages/products/detail/PhotoReviewModal";
import TopHeader from "@/components/layouts/TopHeader";
import { cache } from "react";

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
  // const [openModal, setOpenModal] = useState(false);
  // const onChangeModal = () => {
  //   setOpenModal(!openModal);
  // };

  // useEffect(() => {
  //   console.log(openModal);
  // }, [openModal]);

  const productData = await getProductData(params.productId);

  // const reviewThumbList = [];
  // for (let i = 0; i < Math.min(3, productDummy.reviewList.length); i++) {
  //   const review = productDummy.reviewList[i];
  //   if (review.images && review.images.length > 0) {
  //     reviewThumbList.push(review.images[0].url);
  //   }
  // }

  return (
    <>
      {/* {openModal ? (
        <PhotoReviewModal
          reviewList={productDummy.reviewList}
          onChangeModal={onChangeModal}
        />
      ) : ( */}
      <>
        <TopHeader />
        <div className="pr-[16px]">
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
        </div>
      </>
    </>
  );
};

export default page;
