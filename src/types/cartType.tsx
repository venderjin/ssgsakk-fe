export interface CartItemType {
  productSeq: number;
  productOption: string;
  productVendor: string;
  productPrice: number;
  discountPercent: number;
  productName: string;
  quantity: number;
  productImage: string;
}

export interface CartStateType {
  cartSeq: number;
  checkbox: number;
  fixItem: number;
  optionAndStockSeq: number;
  quantity: number;
  productSeq: number;
}

export interface CartItemInfoType {
  cartSeq: number;
  productSeq: number;
  productOption: string;
  productVendor: string;
  productPrice: number;
  discountPercent: number;
  productName: string;
  quantity: number;
  productImage: string;
  checkbox: number;
  fixItem: number;
  optionAndStockSeq: number;
}
