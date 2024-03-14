import { topCategoryType, themeType } from "@/types/categoryType";
import { FooterNavigationType } from "@/types/navigationType";

export const footerData: FooterNavigationType[] = [
  {
    id: 1,
    title: "고객센터",
    url: "https://m.ssg.com/customer/main.ssg?aplSiteNo=6005&_mpop=new",
  },
  {
    id: 2,
    title: "공지사항",
    url: "https://m.ssg.com/customer/noticeList.ssg?_mpop=new&siteNo=6005",
  },
  {
    id: 3,
    title: "입점상담",
    url: "https://partners.ssgadm.com/;jsessionid=36A6C46718A1FB6CA39F42A4220F7FEE",
  },
  {
    id: 4,
    title: "로그인",
    url: "/login",
  },
];

export const themeData: themeType[] = [
  {
    id: 1,
    name: "SHINSEGAE GOLF",
    img: "golf",
    url: "https://m-shinsegaemall.ssg.com/page/dept/golf_shop",
  },
  {
    id: 2,
    name: "SSG 랜더스",
    img: "landers",
    url: "https://ssglanders.mfamily.ssg.com/",
  },
  {
    id: 3,
    name: "갤러리",
    img: "gallery",
    url: "https://m.ssg.com/disp/category.ssg?dispCtgId=6000237091",
  },
  {
    id: 4,
    name: "건강식품전문관 BIOPUBLIC",
    img: "bioPublic",
    url: "https://biopublic.mblossom.ssg.com/",
  },
  {
    id: 5,
    name: "와인픽업",
    img: "winePickup",
    url: "https://m.ssg.com/page/winepickup.ssg",
  },
  {
    id: 6,
    name: "신선직송",
    img: "farmersMarket",
    url: "https://m.ssg.com/page/farmersmarket",
  },
  {
    id: 7,
    name: "중소상공인 상생관",
    img: "sbMarket",
    url: "https://m.ssg.com/page/sbmarket.ssg",
  },
  {
    id: 8,
    name: "라이프매거진",
    img: "lifeMagazine",
    url: "https://m.ssg.com/contents/lifeMagazineMain.ssg",
  },
  {
    id: 9,
    name: "유아동 LITTLE SSG",
    img: "ssgBaby",
    url: "https://m.ssg.com/page/ssgbaby/main.ssg",
  },
  {
    id: 10,
    name: "반려동물 Molly's SSG",
    img: "ssgPet",
    url: "https://m.ssg.com/page/ssgpet/main.ssg",
  },
];

export const categoryData: topCategoryType[] = [
  {
    id: 1,
    name: "패션의류",
    height: 184,
    subCategories: [
      {
        id: 1,
        name: "상품 전체보기",
      },
      {
        id: 101,
        name: "여성브랜드패션",
      },
      {
        id: 102,
        name: "여성트렌드패션",
      },
      {
        id: 103,
        name: "남성패션",
      },
      {
        id: 104,
        name: "캐주얼/유니섹스",
      },
      {
        id: 105,
        name: "언더웨어",
      },
      {
        id: 106,
        name: "디자이너샵",
      },
    ],
  },
  {
    id: 2,
    name: "패션잡화",
    height: 146,
    subCategories: [
      {
        id: 2,
        name: "상품 전체보기",
      },
      {
        id: 201,
        name: "가방/지갑",
      },
      {
        id: 202,
        name: "모자/장갑/ACC",
      },
      {
        id: 203,
        name: "시계/쥬얼리",
      },
      {
        id: 204,
        name: "슈즈/운동화",
      },
    ],
  },
  {
    id: 3,
    name: "명품",
    height: 108,
    subCategories: [
      {
        id: 3,
        name: "상품 전체보기",
      },
      {
        id: 301,
        name: "여성명품",
      },
      {
        id: 302,
        name: "남성명품",
      },
    ],
  },
  {
    id: 4,
    name: "뷰티",
    height: 222,
    subCategories: [
      {
        id: 4,
        name: "상품 전체보기",
      },
      {
        id: 401,
        name: "스킨케어",
      },
      {
        id: 402,
        name: "메이크업",
      },
      {
        id: 403,
        name: "향수",
      },
      {
        id: 404,
        name: "헤어케어",
      },
      {
        id: 405,
        name: "바디케어",
      },
      {
        id: 406,
        name: "미용기기/소품",
      },
      {
        id: 407,
        name: "남성화장품",
      },
      {
        id: 408,
        name: "뷰티선물세트",
      },
    ],
  },
  {
    id: 5,
    name: "스포츠/레저",
    height: 222,
    subCategories: [
      {
        id: 5,
        name: "상품 전체보기",
      },
      {
        id: 501,
        name: "스포츠웨어/용품",
      },
      {
        id: 502,
        name: "등산/아웃도어",
      },
      {
        id: 503,
        name: "캠핑/낚시",
      },
      {
        id: 504,
        name: "골프",
      },
      {
        id: 505,
        name: "헬스/요가/격투기",
      },
      {
        id: 506,
        name: "자전거/스케이트/롤러",
      },
      {
        id: 507,
        name: "구기/라켓스포츠",
      },
      {
        id: 508,
        name: "수영/수상레저",
      },
      {
        id: 509,
        name: "스키/보드",
      },
    ],
  },
  {
    id: 6,
    name: "생활/주방",
    height: 184,
    subCategories: [
      {
        id: 6,
        name: "상품 전체보기",
      },
      {
        id: 601,
        name: "화장지/생리대",
      },
      {
        id: 602,
        name: "세제/청소용품",
      },
      {
        id: 603,
        name: "건강/위생용품",
      },
      {
        id: 604,
        name: "주방용품",
      },
      {
        id: 605,
        name: "욕실용품",
      },
      {
        id: 606,
        name: "생활잡화/공구",
      },
      {
        id: 607,
        name: "자동차용품",
      },
    ],
  },
  {
    id: 7,
    name: "가구/인테리어",
    height: 184,
    subCategories: [
      {
        id: 7,
        name: "상품 전체보기",
      },
      {
        id: 701,
        name: "침실가구",
      },
      {
        id: 702,
        name: "거실/주방가구",
      },
      {
        id: 703,
        name: "서재/유아동 가구",
      },
      {
        id: 704,
        name: "침구/패브릭",
      },
      {
        id: 705,
        name: "갤러리/인테리어소품",
      },
      {
        id: 706,
        name: "DIY/시공",
      },
    ],
  },
  {
    id: 8,
    name: "유아동",
    height: 260,
    subCategories: [
      {
        id: 8,
        name: "상품 전체보기",
      },
      {
        id: 801,
        name: "기저귀/물티슈",
      },
      {
        id: 802,
        name: "분유/유아식",
      },
      {
        id: 803,
        name: "출산/육아용품",
      },
      {
        id: 804,
        name: "유모차/실내용품",
      },
      {
        id: 805,
        name: "완구/교구",
      },
      {
        id: 806,
        name: "신생아/유아패션",
      },
      {
        id: 807,
        name: "아동/주니어패션",
      },
      {
        id: 808,
        name: "유아동신발/잡화",
      },
      {
        id: 809,
        name: "오가닉",
      },
      {
        id: 810,
        name: "국민템",
      },
    ],
  },
  {
    id: 9,
    name: "디지털/렌탈",
    height: 260,
    subCategories: [
      {
        id: 9,
        name: "상품 전체보기",
      },
      {
        id: 901,
        name: "컴퓨터/노트북/태블릿",
      },
      {
        id: 902,
        name: "게임/타이틀",
      },
      {
        id: 903,
        name: "PC주변기기/저장장치",
      },
      {
        id: 904,
        name: "카메라/캠코더",
      },
      {
        id: 905,
        name: "에어컨/계절가전",
      },
      {
        id: 906,
        name: "내비/블랙박스",
      },
      {
        id: 907,
        name: "냉장고/주방가전",
      },
      {
        id: 908,
        name: "세탁기/생활가전",
      },
      {
        id: 909,
        name: "영상/음향가전",
      },
      {
        id: 910,
        name: "휴대폰/스마트기기",
      },
      {
        id: 911,
        name: "렌탈",
      },
    ],
  },
  {
    id: 10,
    name: "여행/e쿠폰/\n문구/도서",
    height: 184,
    subCategories: [
      {
        id: 10,
        name: "상품 전체보기",
      },
      {
        id: 1001,
        name: "e쿠폰/상품권",
      },
      {
        id: 1002,
        name: "서비스",
      },
      {
        id: 1003,
        name: "여행",
      },
      {
        id: 1004,
        name: "문구/미술/사무/취미",
      },
      {
        id: 1005,
        name: "도서",
      },
      {
        id: 1006,
        name: "악기",
      },
      {
        id: 1007,
        name: "음반/DVD",
      },
    ],
  },
  {
    id: 11,
    name: "신선식품",
    height: 184,
    subCategories: [
      {
        id: 11,
        name: "상품 전체보기",
      },
      {
        id: 1101,
        name: "과일",
      },
      {
        id: 1102,
        name: "채소",
      },
      {
        id: 1103,
        name: "쌀/잡곡/견과",
      },
      {
        id: 1104,
        name: "수산물/건해산",
      },
      {
        id: 1105,
        name: "정육/계란류",
      },
      {
        id: 1106,
        name: "친환경/유기농",
      },
      {
        id: 1107,
        name: "손질/소포장",
      },
    ],
  },
  {
    id: 12,
    name: "가공/건강식품",
    height: 298,
    subCategories: [
      {
        id: 12,
        name: "상품 전체보기",
      },
      {
        id: 1201,
        name: "우유/유제품",
      },
      {
        id: 1202,
        name: "밀키트/간편식",
      },
      {
        id: 1203,
        name: "김치/반찬/델리",
      },
      {
        id: 1204,
        name: "면류/통조림",
      },
      {
        id: 1205,
        name: "생수/음료/주류",
      },
      {
        id: 1206,
        name: "커피/원두/차",
      },
      {
        id: 1207,
        name: "과자/간식/시리얼/빙과",
      },
      {
        id: 1208,
        name: "장류/양념/가루/오일",
      },
      {
        id: 1209,
        name: "베이커리/잼",
      },
      {
        id: 1210,
        name: "건강식품",
      },
      {
        id: 1211,
        name: "친환경/유기농",
      },
      {
        id: 1212,
        name: "손질/소포장",
      },
    ],
  },
  {
    id: 13,
    name: "반려동물",
    height: 184,
    subCategories: [
      {
        id: 13,
        name: "상품 전체보기",
      },
      {
        id: 1301,
        name: "강아지사료/간식",
      },
      {
        id: 1302,
        name: "고양이사료/간식",
      },
      {
        id: 1303,
        name: "반려동물용품",
      },
      {
        id: 1304,
        name: "반려동물서비스",
      },
      {
        id: 1305,
        name: "소동물/곤충/조류",
      },
      {
        id: 1306,
        name: "관상어용품",
      },
    ],
  },
];
