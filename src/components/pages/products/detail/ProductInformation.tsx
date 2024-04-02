import Image from "next/image";
import Link from "next/link";
import UniverseBanner from "./UniverseBanner";
import ReviewReference from "./ReviewReference";
import ProductPrice from "@/components/pages/products/detail/ProductPrice";
import ProductDetailInfo from "@/components/pages/products/detail/ProductDetailInfo";

type ProductData = {
  productId: number;
  vendor: string;
  productName: string;
  productPrice: number;
  discountPercent: number;
  reviewCount: number;
  averageRating: number;
  productDescription: string;
};

const ProductInformation = ({
  productId,
  vendor,
  productName,
  productPrice,
  discountPercent,
  reviewCount,
  averageRating,
  productDescription,
}: ProductData) => {
  return (
    <>
      {/* 상품 요약 상단 */}
      <div className="font-Pretendard block">
        <div className="py-[7px] px-[16px] flex justify-end border-b border-b-[#e5e5e5] ">
          <Image
            src="https://sui.ssgcdn.com/ui/m_ssg/img/product/svg/ic_share24.svg"
            alt="상품 공유하기"
            width={24}
            height={24}
          ></Image>
        </div>

        <div className="my-[15px] px-[16px]">
          {/* -------------상품명------------- */}
          <h2 className="text-[16px] text-[#222222]">
            <div className="font-bold text-[13px] mb-[10px]">
              {/* <Link href={"/"}>{productData.vendor}</Link> */}
            </div>
            <span className="text-[16px] text-[#222222]">{productName}</span>
          </h2>

          <ProductPrice
            productPrice={productPrice}
            discountPer={discountPercent}
          />
          <UniverseBanner />
          {reviewCount > 0 && (
            <ReviewReference
              productId={productId}
              reviewCount={reviewCount}
              averageRating={averageRating}
            />
          )}
        </div>
      </div>

      {/* 상품 상세 */}
      <ProductDetailInfo productDescription={productDescription} />
    </>
  );
};

export default ProductInformation;
