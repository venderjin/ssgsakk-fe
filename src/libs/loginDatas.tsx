import { SnsLogin } from "@/types/snsLoginType";
import { NavigationType } from "@/types/navigationType";

export const loginSupportData: NavigationType[] = [
  {
    id: 1,
    title: "아이디 찾기",
    url: "/findAccount",
  },

  {
    id: 2,
    title: "비밀번호 찾기",
    url: "/findAccount",
  },
  {
    id: 3,
    title: "회원가입",
    url: "/signup/intro",
  },
];

export const snsLoginData: SnsLogin[] = [
  {
    id: 1,
    name: "네이버",
    type: "naver",
    img: "-122px 0px",
  },
  {
    id: 2,
    name: "카카오",
    type: "kakao",
    img: "-61px -61px",
  },
  {
    id: 3,
    name: "애플",
    type: "apple",
    img: "0px 0px",
  },
  {
    id: 4,
    name: "토스",
    type: "toss",
    img: "0px -122px",
  },
  {
    id: 5,
    name: "휴대폰",
    type: "phone",
    img: "-122px -61px",
  },
];
