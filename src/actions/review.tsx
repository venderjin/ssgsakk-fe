"use server";

import { useGetServerToken } from "./useGetServerToken";

type ImageType = {
  priority: number;
  contentUrl: string;
};

export async function CreateReview(
  purchaseProductSeq: number,
  productSeq: number,
  purchaseProductOption: string,
  content: string,
  images: ImageType[],
  rating: number
) {
  const token = await useGetServerToken();
  if (!token) return;

  const res = await fetch(`${process.env.BASE_URL}/reviews`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      purchaseProductSeq: purchaseProductSeq,
      productSeq: productSeq,
      purchaseProductOption: purchaseProductOption,
      reviewParagraph: content,
      reviewContentsVoList: images,
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

export async function GetProductReviewList(productSeq: number) {
  const res = await fetch(
    `${process.env.BASE_URL}/reviews/products/${productSeq}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (res.ok) {
    return data.result;
  } else {
    console.log(data);
  }
}
