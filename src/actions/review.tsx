"use server";

import { useGetServerToken } from "./useGetServerToken";

export async function createReview(
  purchaseProductSeq: number,
  productSeq: number,
  purchaseProductOtpion: string,
  content: string,
  images: string[],
  rating: number
) {
  const token = await useGetServerToken();
  if (!token) return;

  const res = await fetch(`${process.env.BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      purchaseProductSeq: purchaseProductSeq,
      productSeq: productSeq,
      purchaseProductOtpion: purchaseProductOtpion,
      reviweParagraph: content,
      contentsUrl: images,
      reviewScore: rating,
    }),
  });

  const data = await res.json();
  if (res.ok) {
    console.log(data);
  } else {
    console.log(data);
  }
}
