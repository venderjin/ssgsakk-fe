"use client";
import React, { useEffect, useState } from "react";
import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import { productDummy } from "@/dummy/product";
import ProductSummary from "@/components/pages/products/detail/ProductSummary";
import PhotoReviewModal from "@/components/pages/products/detail/PhotoReviewModal";
import TopHeader from "@/components/layouts/TopHeader";

const page = ({ params }: { params: { productId: number } }) => {
  const [openModal, setOpenModal] = useState(false);
  const onChangeModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  const reviewThumbList = [];
  for (let i = 0; i < Math.min(3, productDummy.reviewList.length); i++) {
    const review = productDummy.reviewList[i];
    if (review.images && review.images.length > 0) {
      reviewThumbList.push(review.images[0].url);
    }
  }

  return (
    <div>
      {openModal ? (
        <PhotoReviewModal
          reviewList={productDummy.reviewList}
          onChangeModal={onChangeModal}
        />
      ) : (
        <>
          <TopHeader />
          <div className="pr-[16px]">
            <ImageSlider imageList={productDummy.images} />
            <ProductSummary
              title={productDummy.productName}
              price={productDummy.productPrice}
              discountPer={productDummy.discountPercent}
              vendor={productDummy.vendor}
              averageRating={productDummy.averageRating}
              reviewCount={productDummy.reviewCount}
              reviewThumbList={reviewThumbList}
              onChangeModal={onChangeModal}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
