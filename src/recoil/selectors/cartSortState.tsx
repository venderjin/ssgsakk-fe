import { selector, selectorFamily } from "recoil";
import { cartState } from "@/recoil/atoms/cartState";

export const cartSortState = selectorFamily({
  key: "cartSortState",
  get:
    (cartToggle) =>
    ({ get }) => {
      const cartList = get(cartState);
      const result = cartToggle
        ? cartList.filter((cartItem) => cartItem.checkbox === 1)
        : cartList;

      return result;
    },
});

export const cartSelectedCountState = selector({
  key: "cartSelectedCountState",
  get: ({ get }) => {
    const cartList = get(cartState);
    const selectedCount = cartList.filter(
      (cartItem) => cartItem.checkbox === 1
    );
    if (selectedCount.length === 0) return cartList.length;
    return selectedCount.length;
  },
});
