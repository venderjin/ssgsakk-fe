"use server";
import { useGetServerToken } from "./useGetServerToken";

export async function addCart(productSeq: number, optionSeq: number) {
  const token = await useGetServerToken();
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/carts/add`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productSeq: productSeq,
      optionAndStockSeq: optionSeq,
      quantity: 1,
      checkbox: 0,
      fixItem: 0,
    }),
  });

  const data = await res.json();
  if (res.ok) {
    if (data.result !== "success") return data.result;
    else return "장바구니에 상품이 추가되었습니다.";
  } else {
    console.log(data);
  }
}
