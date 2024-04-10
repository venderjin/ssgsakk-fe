import { atom } from "recoil";
import { CartStateType, CartItemInfoType } from "@/types/cartType";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartState = atom<CartStateType[]>({
  key: "cartState",
  default: [],
  effects_UNSTABLE: [persistAtom],
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
