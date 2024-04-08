import { atom } from "recoil";
import { CartStateType } from "@/types/cartType";

export const cartState = atom<CartStateType[]>({
  key: "cartState",
  default: [],
});

export const cartItemState = atom({
  key: "cartItemState",
  default: [],
});
