export type productImage = {
  id: number;
  priority: number;
  url: string;
  alt: string;
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
  images: productImage[];
};
