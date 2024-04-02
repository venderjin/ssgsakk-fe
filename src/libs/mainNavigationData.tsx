import { MainNavigationType } from "@/types/navigationType";

export const mainNavigationData: MainNavigationType[] = [
    {
        id: 1,
        title: "카테고리",
        url: "/category",
        icon: "/images/bottomNav/category.svg",
    },
    {
        id: 2,
        title: "선물하기",
        url: "/",
        icon: "/images/bottomNav/gift.svg",
    },
    {
        id: 3,
        title: "홈",
        url: "/",
        icon: "/images/bottomNav/home.svg",
    },
    {
        id: 4,
        title: "MY",
        url: "/mypage",
        icon: "/images/bottomNav/my.svg",
    },
    {
        id: 5,
        title: "최근본",
        url: "/",
        icon: "/images/bottomNav/recently.svg",
    },
];
