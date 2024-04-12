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
    purchaseSeq: number;
    purchaseProductName: string;
    purchaseProductVendor: string;
    productOptionSeq: number;
    purchaseProductOptionName: string;
    purchaseProductCount: number;
    purchaseProductPrice: number;
    purchaseProductDiscountPrice: number;
    productThumbnail: string;
    deliveryType: string;
    productState: string;
}

export interface OrderMemo {
    id: number;
    memo: string;
}
