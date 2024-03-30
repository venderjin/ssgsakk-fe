import { LinkType } from "@/types/commonType";

export const myPagDeliveryStatusBoxData: LinkType[] = [
  {
    id: 1,
    name: "주문접수",
    value: "orderReceived",
    url: "/myPage/orderInfo?searchType=1",
  },
  {
    id: 2,
    name: "결제완료",
    value: "paymentComplete",
    url: "/myPage/orderInfo?searchType=2",
  },
  {
    id: 3,
    name: "상품준비중",
    value: "productPreparation",
    url: "/myPage/orderInfo?searchType=3",
  },
  {
    id: 4,
    name: "배송중",
    value: "shipping",
    url: "/myPage/orderInfo?searchType=4",
  },
  {
    id: 5,
    value: "deliveryComplete",
    name: "배송완료",
    url: "/myPage/orderInfo?searchType=5",
  },
];

export const myPageOrderStatusBoxData: LinkType[] = [
  {
    id: 6,
    name: "취소",
    value: "orderCancel",
    url: "/myPage/orderInfo?searchType=6",
  },
  {
    id: 7,
    name: "교환",
    value: "orderExchange",
    url: "/myPage/orderInfo?searchType=7",
  },
  {
    id: 8,
    name: "반품",
    value: "orderReturn",
    url: "/myPage/orderInfo?searchType=8",
  },
  {
    id: 9,
    name: "구매확정",
    value: "orderConfirm",
    url: "/myPage/orderInfo?searchType=9",
  },
];
