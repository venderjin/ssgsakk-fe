import { LinkType, MenuGroupType } from "@/types/commonType";

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
    url: "/myPage/myInfoManage/password",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_modify@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
  {
    id: 15,
    name: "내정보관리",
    value: "myinfoManage",
    url: "/myPage/myInfoManage",
    icon: "https://sui.ssgcdn.com/ui/mssgmall-ssg/images/myssg/img_manage@3x.png?q=9993980f30cae195a7e529ef232d81222c660c29",
  },
];

export const myPageMenuGroupData: MenuGroupType[] = [
  {
    group: "나의 주문관리",
    menus: [
      {
        id: 1,
        name: "주문/배송조회",
        value: "orderInfo",
        url: "/myPage/orderInfo",
      },
      {
        id: 2,
        name: "구매내역",
        value: "purchaseHistory",
        url: "/myPage/purchaseHistory",
      },
      {
        id: 3,
        name: "항공권 예약조회",
        value: "airlineReservation",
        url: "/myPage/airlineReservation",
      },
      {
        id: 4,
        name: "호텔 예약조회",
        value: "hotelReservation",
        url: "/myPage/hotelReservation",
      },
      {
        id: 5,
        name: "선물함",
        value: "giftBox",
        url: "/myPage/giftBox",
      },
      {
        id: 6,
        name: "자주구매 상품",
        value: "frequentlyOrderItem",
        url: "/myPage/frequentlyOrderItem",
      },
      {
        id: 7,
        name: "정기배송 설정 관리",
        value: "regularDelivery",
        url: "/myPage/regularDelivery",
      },
      {
        id: 8,
        name: "SSGPAY 결제수단",
        value: "payment",
        url: "/myPage/payment",
      },
    ],
  },
  {
    group: "나의 혜택관리",
    menus: [
      {
        id: 1,
        name: "쿠폰",
        value: "coupon",
        url: "/myPage/coupon",
      },
      {
        id: 2,
        name: "SSG MONEY",
        value: "ssgMoney",
        url: "/myPage/ssgMoney",
      },
      {
        id: 3,
        name: "신세계포인트",
        value: "ssgPoint",
        url: "/myPage/ssgPoint",
      },
      {
        id: 4,
        name: "미식 MONEY",
        value: "ssgMoney",
        url: "/myPage/ssgMoney",
      },
      {
        id: 5,
        name: "맘키즈 클럽 관리",
        value: "benefit",
        url: "/myPage/myInfoManage/benefit",
      },
      {
        id: 6,
        name: "SSG VOUCHER",
        value: "ssgVoucher",
        url: "/myPage/ssgVoucher",
      },
    ],
  },
  {
    group: "나의 활동관리",
    menus: [
      {
        id: 1,
        name: "좋아요",
        value: "like",
        url: "/myPage/like",
      },
      {
        id: 2,
        name: "상품 리뷰",
        value: "review",
        url: "/myPage/review",
      },
      {
        id: 3,
        name: "새벽배송 알비백 관리",
        value: "albiBagInfo",
        url: "/myPage/albiBagInfo",
      },
      {
        id: 4,
        name: "이벤트 참여현황",
        value: "event",
        url: "/myPage/event",
      },
      {
        id: 5,
        name: "e-mail 답변확인",
        value: "counselList",
        url: "/myPage/counselList",
      },
      {
        id: 6,
        name: "상품 Q&A",
        value: "qna",
        url: "/myPage/qna",
      },
      {
        id: 7,
        name: "입고알림내역",
        value: "itemNotiList",
        url: "/myPage/itemNotiList",
      },
      {
        id: 8,
        name: "우르르 앵콜내역",
        value: "urrEncoreList",
        url: "/myPage/urrEncoreList",
      },
      {
        id: 9,
        name: "행사알림내역",
        value: "eventNotiList",
        url: "/myPage/eventNotiList",
      },
    ],
  },
  {
    group: "나의 정보관리",
    menus: [
      {
        id: 1,
        name: "회원정보 변경",
        value: "myInfoManage",
        url: "/myPage/myInfoManage/password",
      },
      {
        id: 2,
        name: "비밀번호 변경",
        value: "changePassword",
        url: "/myPage/myInfoManage/changePassword",
      },
      {
        id: 3,
        name: "배송지 관리",
        value: "shippingList",
        url: "/myPage/shippingList",
      },
      {
        id: 4,
        name: "맞춤정보 관리",
        value: "custFitInfoReg",
        url: "/myPage/custFitInfoReg",
      },
      {
        id: 5,
        name: "마케팅 정보 수신 동의",
        value: "marketingInfoAgree",
        url: "/myPage/marketingInfoAgree",
      },
      {
        id: 6,
        name: "개인정보 제3자 제공 동의",
        value: "infoUtlAgree",
        url: "/myPage/infoUtlAgree",
      },
      {
        id: 7,
        name: "제휴 멤버십 관리",
        value: "membership",
        url: "/myPage/membership",
      },
      {
        id: 8,
        name: "로그인 정보 관리",
        value: "loginInfo",
        url: "/myPage/myinfoManage/loginInfo",
      },
      {
        id: 9,
        name: "SNS 연결 설정",
        value: "snsConnect",
        url: "/myPage/myinfoManage",
      },
      {
        id: 10,
        name: "회원 탈퇴",
        value: "withdrawMember",
        url: "/myPage/myinfoManage/withdrawMember",
      },
      {
        id: 11,
        name: "개인정보 관리",
        value: "personalDeleteInfo",
        url: "/myPage/personalDeleteInfo",
      },
    ],
  },
];
