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

export const myPageQuickMenuData: LinkType[] = [
  {
    id: 1,
    name: "좋아요",
    value: "like",
    url: "/myPage/like",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_like@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 2,
    name: "자주구매",
    value: "frequentlyOrderItem",
    url: "/myPage/frequentlyOrderItem",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_freq@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 3,
    name: "이벤트현황",
    value: "event",
    url: "/myPage/event",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_event@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 4,
    name: "상품Q&A",
    value: "like",
    url: "/myPage/qna",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_qna@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 5,
    name: "입고알림",
    value: "itemNotiList",
    url: "/myPage/itemNotiList",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_alert@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 6,
    name: "선물함",
    value: "giftBox",
    url: "/myPage/orderInfo?searchType=gift",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_gift@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 7,
    name: "상품권전환",
    value: "giftSwap",
    url: "/myPage/ssgMoney/giftSwap",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_giftcard@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 8,
    name: "알비백관리",
    value: "albiBagInfo",
    url: "/myPage/albiBagInfo",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_albi@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 9,
    name: "결제수단관리",
    value: "payment",
    url: "/myPage/payment",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_payment@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 10,
    name: "정기배송관리",
    value: "regularDelivery",
    url: "/myPage/regularDelivery",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_regular_delivery@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 11,
    name: "알림함",
    value: "noticeBoard",
    url: "/myPage/noticeBoard",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_notification@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 12,
    name: "고객센터톡",
    value: "webchat",
    url: "/myPage/webchat",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_chat@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 13,
    name: "유니버스클럽",
    value: "universeClub",
    url: "/myPage/universeClub",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_universe@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 14,
    name: "회원정보변경",
    value: "myinfoMoidfy",
    url: "/myPage/myinfoManage/password",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_modify@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 15,
    name: "내정보관리",
    value: "myinfoManage",
    url: "/myPage/myinfoManage",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_manage@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
];
