"use server";

import { useGetServerToken } from "./useGetServerToken";
import { PoroductReviewType } from "@/types/reviewType";

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

const getReviewThumbList = (reviewList: PoroductReviewType[]) => {
  return reviewList
    ?.map(
      (review: PoroductReviewType) => review.reviewContentsList?.[0].contentUrl
    )
    .slice(0, 3);
};

const getPhotoReviewList = (reviewList: PoroductReviewType[]) => {
  return reviewList
    .filter((review: PoroductReviewType) => review.reviewContentsList)
    .map((review: PoroductReviewType) => ({
      reviewId: review.reviewSeq,
      photoCount: review.reviewContentsList.length,
      thumbImage: review.reviewContentsList[0].contentUrl,
    }));
};

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
  const reviewList = data.result;
  const thumbList = getReviewThumbList(reviewList);
  const photoReviewList = getPhotoReviewList(reviewList);

  const reviewData = {
    reviewList: reviewList,
    thumbList: thumbList,
    photoReviewList: photoReviewList,
  };

  if (res.ok) {
    return reviewData;
  } else {
    console.log(data);
  }
}
