import React from "react";

const CartQunatityHandler = ({
  quantity,
  onQuantityChange,
}: {
  quantity: number;
  onQuantityChange: (count: number) => void;
}) => {
  const handleQuantity = (count: number) => {
    if (quantity + count <= 0) {
      return;
    }
    onQuantityChange(quantity + count);
  };

  return (
    <div className="relative">
      <div className=" h-[33px] w-[117px] flex align-middle items-center mt-[12px]">
        <button
          onClick={() => handleQuantity(-1)}
          className="w-[33px] h-[33px] mr-[1px] bg-[#fff] flex items-center justify-center"
        >
          <div className=" w-[11px] h-[11px] mr-[4px] bg-product-opt-icon bg-[position:-96px_-43px] bg-[size:194px_171px] align-middle" />
        </button>
        <span className="w-[49px] h-full bg-[#fff] flex items-center justify-center text-[14px]">
          {quantity}
        </span>
        <button
          onClick={() => handleQuantity(1)}
          className="w-[33px] h-[33px] ml-[1px] bg-[#fff] flex items-center justify-center"
        >
          <div className=" w-[11px] h-[11px] mr-[4px] bg-product-opt-icon bg-[position:-95px_-68px] bg-[size:194px_171px] align-middle" />
        </button>
      </div>
    </div>
  );
};

export default CartQunatityHandler;
