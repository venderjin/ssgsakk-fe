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

export const cartSelectedState = selector({
  key: "cartSelectedState",
  get: ({ get }) => {
    const cartList = get(cartState);
    const selectedCartList = cartList.filter(
      (cartItem) => cartItem.checkbox === 1
    );
    //if (selectedCartList.length === 0) return cartList;
    return selectedCartList;
  },
});
