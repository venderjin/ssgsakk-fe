export interface OrderInfo {
    purchaser: string;
    purchaserPhoneNum: string;
    purchaseEmail: string;
    recipient: string;
    recipientPhoneNum: string;
    recipientEmail: string;
    purchaseZipcode: string;
    purchaseRoadAddress: string;
    purchaseJibunAddress: string;
    purchaseDetailAddress: string;
    deliverymessage: string;
}

export interface OrderProductInfo {
    productSeq: number;
    purchaseProductName: string;
    purchaseProductVendor: string;
    productOptionSeq: number;
    purchaseProductCount: number;
    purchaseProductPrice: number;
    purchaseProductOptionName: string;
    purchaseProductDiscountPrice: number;
    productThumbnail: string;
    deliveryType: string;
    productState: number;
}

export interface OrderMemo {
    id: number;
    memo: string;
}
