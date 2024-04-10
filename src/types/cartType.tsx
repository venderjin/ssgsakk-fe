export interface CartItemType {
  cartSeq: number;
  productSeq: number;
  productOption: string;
  productVendor: string;
  productPrice: number;
  discountPercent: number;
  productName: string;
  quantity: number;
  productImage: string;
  optionAndStockSeq: number;
  stock: number;
  checkbox: number;
  fixItem: number;
}

export interface CartStateType {
  cartSeq: number;
  checkbox: number;
  fixItem: number;
  optionAndStockSeq: number;
  quantity: number;
  productSeq: number;
}
