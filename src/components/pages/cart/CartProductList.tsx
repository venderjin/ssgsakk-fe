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
  updateQuantity,
  deleteCartItem,
  fixCartItem,
  checkCartItem,
  useCheckAllCartItem,
}: {
  cartItemList: CartStateType[];
  updateQuantity: (cartSeq: number, quantity: number) => void;
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
      {sortList.length === 0 && (
        <div className="my-[40px] px-[50px] font-Pretendard">
          <p className="text-[18px] text-[#222] text-center">
            장바구니에 담긴 상품이 없습니다.
          </p>
        </div>
      )}

      {sortList.length > 0 && (
        <>
          <CartControl
            deleteCartItem={deleteCartItem}
            setShowCheckedItem={setShowCheckedItem}
            useCheckAllCartItem={useCheckAllCartItem}
          />
          {sortList.map((cartItem) => (
            <CartItemCard
              key={cartItem.cartSeq}
              cartItemState={cartItem}
              updateQuantity={updateQuantity}
              deleteCartItem={deleteCartItem}
              fixCartItem={fixCartItem}
              checkCartItem={checkCartItem}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default CartProductList;
