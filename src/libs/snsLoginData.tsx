import { SnsLogin } from "@/types/snsLoginType";

export const snsLoginData: SnsLogin[] = [
    {
        id: 1,
        name: "네이버",
        type: "naver",
        icon: "/images/login/naver.svg",
    },
    {
        id: 2,
        name: "카카오",
        type: "kakao",
        icon: "/images/login/kakao.svg",
    },
    {
        id: 3,
        name: "애플",
        type: "apple",
        icon: "/images/login/apple.svg",
    },
    {
        id: 4,
        name: "토스",
        type: "toss",
        icon: "/images/login/toss.svg",
    },
    {
        id: 5,
        name: "휴대폰",
        type: "phone",
        icon: "/images/login/phone.svg",
    },
];
