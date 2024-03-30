import Image from "next/image";
import Link from "next/link";
import UniverseBanner from "./UniverseBanner";
import ReviewReference from "./ReviewReference";
import ProductPrice from "@/components/pages/products/detail/ProductPrice";
import ProductDetailInfo from "@/components/pages/products/detail/ProductDetailInfo";

async function getProductData(productId: number) {
  const res = await fetch(`${process.env.BASE_URL}/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (res.ok) {
    const data = await res.json();
    return data.result;
  }

  if (res.status === 400) {
    console.log("잘못된 요청입니다.");
  }
}

const ProductInformation = async ({ productId }: { productId: number }) => {
  const data = await getProductData(productId);

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
              <Link href={"/"}>{data.vendor}</Link>
            </div>
            <span className="text-[16px] text-[#222222]">
              {data.productName}
            </span>
          </h2>

          <ProductPrice
            productPrice={data.productPrice}
            discountPer={data.discountPercent}
          />
          <UniverseBanner />
          {data.reviewCount > 0 && <ReviewReference productId={productId} />}
        </div>
      </div>

      {/* 상품 상세 */}
      <ProductDetailInfo productDescription={data.productDescription} />
    </>
  );
};

export default ProductInformation;
