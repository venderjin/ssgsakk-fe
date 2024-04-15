export interface WritableReviewType {
  purchaseSeq: number;
  purchaseProductSeq: number;
  purchaseCode: string;
  purchaseDate: string;
  productSeq: number;
  purchaseProductName: string;
  purchaseProductOption: string;
  productContentsVo: ReviewImageType;
}

export interface WrittenReviewType {
  purchaseSeq: number;
  purchaseProductSeq: number;
  purchaseCode: string;
  purchaseDate: string;
  productSeq: number;
  purchaseProductName: string;
  purchaseProductOption: string | null;
  reviewSeq: number;
  reviewScore: number;
  reviewParagraph: string;
  reviewDate: string;
  productContentsVo: ReviewImageType;
}

export interface ReviewImageType {
  contentUrl: string;
  priority: number;
  contentDescription: string;
}

export interface PhotoReviewType {
  reviewId: number;
  photoCount: number;
  thumbImage: string;
}

export interface PoroductReviewType {
  reviewSeq: number;
  reviewParagraph: string;
  reviewScore: number;
  reviewDate: string;
  reviewContentsList: ReviewImageType[];
  userId: string;
  purchaseProductOption: string;
}
