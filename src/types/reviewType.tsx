export interface WritableReviewType {
  purchaseSeq: number;
  purchaseProductSeq: number;
  purchaseCode: string;
  purchaseDate: string;
  productSeq: number;
  purchaseProductName: string;
  purchaseProductImage: string;
}

export interface ReviewImageType {
  contentUrl: string;
  priority: number;
  contentDescription: string;
}

export interface PoroductReviewType {
  reviewSeq: number;
  reviewParagraph: string;
  reviewScore: number;
  reviewDate: string;
  reviewContentVoList: ReviewImageType[];
  userId: string;
  purchaseProductOption: string;
}
