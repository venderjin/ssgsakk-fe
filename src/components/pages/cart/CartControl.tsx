"use client";
import { useState } from "react";

const CartControl = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="px-[16px] py-[10px]">
      <div>
        <input
          type="checkbox"
          checked={isCheck}
          onChange={() => setIsCheck(!isCheck)}
          className={`w-[18px] h-[18px] border border-[#969696] ${
            isCheck ? "accent-primary-red" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default CartControl;
