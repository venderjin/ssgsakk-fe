"use client";
import CartItemCard from "@/components/pages/cart/CartItemCard";
import CartControl from "@/components/pages/cart/CartControl";
import { CartStateType } from "@/types/cartType";
import { cartState } from "@/recoil/atoms/cartState";
import { cartSortState } from "@/recoil/selectors/cartSortState";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDiscountPrice, cartProductPrice } from "@/recoil/atoms/cartState";
import { set } from "react-hook-form";

const CartProductList = ({
  cartItemList,
  updateQuantity,
  deleteCartItem,
  fixCartItem,
  checkCartItem,
  checkAllCartItem,
}: {
  cartItemList: CartStateType[];
  updateQuantity: (cartSeq: number, quantity: number) => void;
  deleteCartItem: (cartSeq: number) => void;
  fixCartItem: (cartSeq: number, fix: boolean) => void;
  checkCartItem: (cartSeq: number, check: boolean) => void;
  checkAllCartItem: (check: boolean) => void;
}) => {
  const [showCheckedItem, setShowCheckedItem] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartState);
  const [displayList, setDisplayList] = useState<CartStateType[]>([]);
  const sortList = useRecoilValue(cartSortState(showCheckedItem));
  const [totalPrice, setTotalPrice] = useRecoilState(cartProductPrice);
  const [discountPrice, setDiscountPrice] = useRecoilState(cartDiscountPrice);

  useEffect(() => {
    setCartList(cartItemList);
    //showCheckedItem가 1이면 checkbox가 1인 상품만 보여주고, 0이면 전체 상품을 보여줌
    setDisplayList(cartList.map((item) => ({ ...item, checkbox: 0 })));
    setTotalPrice(0);
    setDiscountPrice(0);
  }, [cartItemList]);

  useEffect(() => {
    setDisplayList(sortList);
  }, [sortList]);

  return (
    <div className="pb-[10px]">
      {displayList.length === 0 && (
        <div className="my-[40px] px-[50px] font-Pretendard">
          <p className="text-[18px] text-[#222] text-center">
            장바구니에 담긴 상품이 없습니다.
          </p>
        </div>
      )}

      {displayList.length > 0 && (
        <>
          <CartControl
            deleteCartItem={deleteCartItem}
            setShowCheckedItem={setShowCheckedItem}
            checkAllCartItem={checkAllCartItem}
          />
          {displayList.map((cartItem) => (
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
