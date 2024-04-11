"use server";

import { useGetServerToken } from "./useGetServerToken";

export async function getOption(productSeq: number) {
  const token = await useGetServerToken();
  if (!token) return;

  const res = await fetch(`${process.env.BASE_URL}/optionstock/${productSeq}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (res.ok) {
    console.log(data);
  } else {
    console.log(data);
  }
}
