"use client";
import CartItemCard from "@/components/pages/cart/CartItemCard";
import CartControl from "@/components/pages/cart/CartControl";
import { CartStateType } from "@/types/cartType";
import { useGetClientToken } from "@/actions/useGetClientToken";
import { useRecoilState } from "recoil";
import { cartState, cartItemState } from "@/store/cartAtom";
import { useEffect } from "react";

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
  const [displayList, setDiplayList] = useRecoilState(cartState);
  const [cartItemInfoList, setCartItemInfoList] = useRecoilState(cartItemState);
  const token = useGetClientToken();

  useEffect(() => {
    setDiplayList(cartItemList);
  }, [cartItemList]);

  return (
    <div className="pb-[120px]">
      <CartControl />
      {displayList.map((cartItem) => (
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
