import Image from "next/image";
import Link from "next/link";
import UniverseBanner from "./UniverseBanner";
import ReviewReference from "./ReviewReference";
import ProductPrice from "@/components/pages/products/detail/ProductPrice";

type Props = {
  title: string;
  vendor: string;
  price: number;
  discountPer: number;
  averageRating: number;
  reviewCount: number;
  productId: number;
  reviewThumbList: string[];
};

const ProductSummary = ({
  title,
  vendor,
  price,
  discountPer,
  averageRating,
  reviewCount,
  productId,
  reviewThumbList,
}: Props) => {
  return (
    <div className="font-Pretendard block">
      <div className="py-[7px] px-[16px] flex justify-end border-b-[1px] border-b-[#e5e5e5]">
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
            <Link href={`/${vendor}`}>{vendor}</Link>
          </div>
          <span className="text-[16px] text-[#222222]">{title}</span>
        </h2>

        <ProductPrice productPrice={price} discountPer={discountPer} />
        <UniverseBanner />
        {reviewCount > 0 ? (
          <ReviewReference
            reviewCount={reviewCount}
            averageRating={averageRating}
            productId={productId}
            reviewThumbList={reviewThumbList}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductSummary;
