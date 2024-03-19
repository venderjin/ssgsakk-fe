import CouponIcon from "@/components/pages/products/detail/CouponIcon";

type Props = {
  productPrice: number;
  discountPer: number;
};

const ProductPrice = ({ productPrice, discountPer }: Props) => {
  const newPrice = productPrice - productPrice * (discountPer / 100);

  return (
    <div className="mt-[25px] leading-tight">
      {/* ----------할인 유무로 구분---------- */}
      {discountPer > 0 ? (
        <>
          <div className="block">
            <span className="inline-block font-medium text-[16px] text-[#777777] line-through align-middle">
              {productPrice.toLocaleString()}원
            </span>
            <CouponIcon />
          </div>
          <div className="block">
            <div className="inline-block mr-[5px] font-semibold text-[26px] text-primary-red align-middle">
              <span> {discountPer}%</span>
            </div>
            <div className="inline-block font-semibold text-[26px] text-[#222222] align-middle ">
              {newPrice.toLocaleString()}원
            </div>

            <div className="inline-block w-[24px] h-[24px] bg-product-icon bg-[position:-390px_-306px] bg-[size:524px_479px] align-middle"></div>
          </div>
        </>
      ) : (
        <div className="inline-block font-semibold text-[26px] text-[#222222] align-middle ">
          {productPrice.toLocaleString()}원
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
