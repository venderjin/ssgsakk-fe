import { NavigationType } from "@/types/navigationType";
import { SnsLogin } from "@/types/snsLoginType";

export const snsLoginData: SnsLogin[] = [
  {
    id: 1,
    name: "이메일",
    type: "email",
    img: "-61px 0px",
  },
  {
    id: 2,
    name: "네이버",
    type: "naver",
    img: "-122px 0px",
  },
  {
    id: 3,
    name: "카카오",
    type: "kakao",
    img: "-61px -61px",
  },
  {
    id: 4,
    name: "애플",
    type: "apple",
    img: "0px 0px",
  },
];

export const joinIntroCouponDatas: NavigationType[] = [
  {
    id: 1,
    title: "멤버십 신규 가입 축하\n1만원 할인 쿠폰",
    url: "https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_03@3x.png",
  },
  {
    id: 2,
    title: "매월 전상품\n7% 할인 쿠폰",
    url: "https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_01@3x.png",
  },
  {
    id: 3,
    title: "매월 전상품\n5% 할인 쿠폰",
    url: "https://sui.ssgcdn.com/ui/m_ssg/img/member/img_member_intro_asset_01@3x.png",
  },
];
