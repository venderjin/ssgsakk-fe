"use client";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "@/recoil/atoms/cartState";
import { cartSortState } from "@/recoil/selectors/cartSortState";

const Toggle = ({
  onChangeHandler,
}: {
  onChangeHandler: (isCheck: boolean) => void;
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [cartList, setCartList] = useRecoilState(cartState);
  const sortList = useRecoilValue(cartSortState(checked));

  useEffect(() => {
    if (cartList.length > 0 && sortList.length === 0) {
      alert("선택된 상품이 없습니다.");
      setChecked(false);
      return;
    }
    onChangeHandler(checked);
  }, [checked]);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only peer"
      />
      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
    </label>
  );
};

export default Toggle;
