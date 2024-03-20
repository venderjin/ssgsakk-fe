export type ImageType = {
  id: number;
  priority: number;
  url: string;
};

export type productType = {
  id: number;
  productName: string;
  productPrice: number;
  vendor: string;
  productDetail: string;
  discountPercent: number;
  averageRating: number;
  reviewCount: number;
  images: ImageType[];
  reviewList: reviewType[];
};

export interface reviewType {
  reviewId: number;
  writerId: string;
  content: string;
  rating: number;
  createdDate: string;
  images: ImageType[];
}
