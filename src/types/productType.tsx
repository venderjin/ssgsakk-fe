export type ImageType = {
  priority: number;
  contentUrl: string;
  contentDescription: string;
};

export type productType = {
  productId: number;
  productName: string;
  productPrice: number;
  discountPercent: number;
  vendor: string;
  reviewCount: number;
  averageRating: number;
  productDescription: string;
  contents: ImageType[];
};

export interface reviewType {
  reviewId: number;
  writerId: string;
  content: string;
  rating: number;
  createdDate: string;
  images: ImageType[];
}

export interface ProductNavigationType {
  id: number;
  title: string;
  value: string;
}
