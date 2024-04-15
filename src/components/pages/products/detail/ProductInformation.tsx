import Image from "next/image";
import Link from "next/link";
import UniverseBanner from "./UniverseBanner";
import ReviewReference from "./ReviewReference";
import ProductPrice from "@/components/pages/products/detail/ProductPrice";
import ProductDetailInfo from "@/components/pages/products/detail/ProductDetailInfo";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import { productType } from "@/types/productType";
import { PoroductReviewType } from "@/types/reviewType";
import Share from "@/components/images/Share";

const ProductInformation = ({
  productData,
  reviewList,
}: {
  productData: productType;
  reviewList: PoroductReviewType[];
}) => {
  return (
    <>
      {/* 상품 요약 상단 */}
      <div className="font-Pretendard block">
        <div className="py-[7px] px-[16px] flex justify-end border-b border-b-[#e5e5e5] ">
          <Share width={24} height={24} />
          {/* <Image
            src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg"
            alt="상품 공유하기"
            width={24}
            height={24}
          ></Image> */}
        </div>

        <div className="my-[15px] px-[16px]">
          {/* -------------상품명------------- */}
          <h2 className="text-[16px] text-[#222222]">
            <div className="font-bold text-[13px] mb-[10px] flex items-center">
              <Link href={"/"}>{productData.vendor}</Link>
              <RightHalfTriangle />
            </div>
            <span className="text-[16px] text-[#222222]">
              {productData.productName}
            </span>
          </h2>

          <ProductPrice
            productPrice={productData.productPrice}
            discountPer={productData.discountPercent}
          />
          <UniverseBanner />
          {productData.reviewCount > 0 && (
            <ReviewReference
              reviewList={reviewList}
              productId={productData.productId}
              reviewCount={productData.reviewCount}
              averageRating={productData.averageRating}
            />
          )}
        </div>
      </div>

      {/* 상품 상세 */}
      <ProductDetailInfo productDescription={productData.productDescription} />
    </>
  );
};

export default ProductInformation;
