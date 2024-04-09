"use client";
import CartItemCard from "@/components/pages/cart/CartItemCard";
import CartControl from "@/components/pages/cart/CartControl";
import { CartStateType } from "@/types/cartType";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/recoil/atoms/cartState";
import { cartSortState } from "@/recoil/selectors/cartSortState";
import { useEffect, useState } from "react";

const CartProductList = ({
  cartItemList,
  updateQunaity,
  deleteCartItem,
  fixCartItem,
  checkCartItem,
}: {
  cartItemList: CartStateType[];
  updateQunaity: (cartSeq: number, quantity: number) => void;
  deleteCartItem: (cartSeq: number) => void;
  fixCartItem: (cartSeq: number, fix: boolean) => void;
  checkCartItem: (cartSeq: number, check: boolean) => void;
}) => {
  const [showCheckedItem, setShowCheckedItem] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartState);
  const sortList = useRecoilValue(cartSortState(showCheckedItem));

  useEffect(() => {
    setCartList(cartItemList);
  }, [cartItemList]);

  return (
    <div className="pb-[10px]">
      <CartControl setShowCheckedItem={setShowCheckedItem} />
      {sortList.map((cartItem) => (
        <CartItemCard
          key={cartItem.cartSeq}
          cartItemState={cartItem}
          updateQunaity={updateQunaity}
          deleteCartItem={deleteCartItem}
          fixCartItem={fixCartItem}
          checkCartItem={checkCartItem}
        />
      ))}
    </div>
  );
};

export default CartProductList;
