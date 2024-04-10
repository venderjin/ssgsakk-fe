"use client";
import CartItemCard from "@/components/pages/cart/CartItemCard";
import CartControl from "@/components/pages/cart/CartControl";
import { CartStateType } from "@/types/cartType";
import { cartState } from "@/recoil/atoms/cartState";
import { cartSortState } from "@/recoil/selectors/cartSortState";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDiscountPrice, cartProductPrice } from "@/recoil/atoms/cartState";

const CartProductList = ({
  cartItemList,
  updateQunaity,
  deleteCartItem,
  fixCartItem,
  checkCartItem,
  useCheckAllCartItem,
}: {
  cartItemList: CartStateType[];
  updateQunaity: (cartSeq: number, quantity: number) => void;
  deleteCartItem: (cartSeq: number) => void;
  fixCartItem: (cartSeq: number, fix: boolean) => void;
  checkCartItem: (cartSeq: number, check: boolean) => void;
  useCheckAllCartItem: (check: boolean) => void;
}) => {
  const [showCheckedItem, setShowCheckedItem] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartState);
  const sortList = useRecoilValue(cartSortState(showCheckedItem));
  const [totalPrice, setTotalPrice] = useRecoilState(cartProductPrice);
  const [discountPrice, setDiscountPrice] = useRecoilState(cartDiscountPrice);

  useEffect(() => {
    setCartList(cartItemList);
    setTotalPrice(0);
    setDiscountPrice(0);
  }, [cartItemList]);

  return (
    <div className="pb-[10px]">
      <CartControl
        deleteCartItem={deleteCartItem}
        setShowCheckedItem={setShowCheckedItem}
        useCheckAllCartItem={useCheckAllCartItem}
      />
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
