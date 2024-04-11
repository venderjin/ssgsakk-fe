type Props = {
  count: number;
  productPrice: number;
  discountPer: number;
};

const CartItemPrice = ({ count, productPrice, discountPer }: Props) => {
  const originalPrice = productPrice * count;
  const discountPrice = Math.round(
    originalPrice - originalPrice * (discountPer / 100)
  );

  return (
    <div className="leading-tight">
      {/* ----------할인 유무로 구분---------- */}
      {discountPer > 0 ? (
        <>
          <div className="block">
            <span className="inline-block font-medium text-[13px] text-[#777777] line-through align-middle">
              {originalPrice.toLocaleString()}원
            </span>
          </div>
          <div className="block">
            <div className="inline-block font-semibold text-[18px] text-[#222222] align-middle ">
              {discountPrice.toLocaleString()}원
            </div>
          </div>
        </>
      ) : (
        <div className="inline-block font-semibold text-[18px] text-[#222222] align-middle ">
          {originalPrice.toLocaleString()}원
        </div>
      )}
    </div>
  );
};

export default CartItemPrice;
