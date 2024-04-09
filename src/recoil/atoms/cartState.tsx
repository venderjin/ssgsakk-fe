import { atom } from "recoil";
import { CartStateType } from "@/types/cartType";

export const cartState = atom<CartStateType[]>({
  key: "cartState",
  default: [],
});

export const cartProductPrice = atom<number>({
  key: "cartProductPrice",
  default: 0,
});

export const cartDiscountPrice = atom<number>({
  key: "cartDiscountPrice",
  default: 0,
});

export const cartShippingFee = atom<number>({
  key: "cartShippingFee",
  default: 0,
});
