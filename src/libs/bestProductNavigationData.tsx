import { deliveryType, categoryType } from "@/types/navigationType";

export const deliveryData: deliveryType[] = [
    {
        id: 1,
        deliveryType: "Normal",
        unCheckedImgpath: "/images/home/deliveryCategory/nomalUnchecked.png",
        checkedImgpath: "/images/home/deliveryCategory/normalChecked.png",
        route: "delivery=Normal",
    },
    {
        id: 2,
        deliveryType: "SSG",
        unCheckedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_emart_off.png",
        checkedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_emart_on.png",
        route: "delivery=SSG",
    },
    {
        id: 3,
        deliveryType: "EARLY",
        unCheckedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_earlymorning_off.png",
        checkedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_earlymorning_on.png",
        route: "delivery=EARLY",
    },
    {
        id: 4,
        deliveryType: "TRADERS",
        unCheckedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_traders_off.png",
        checkedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_traders_on.png",
        route: "delivery=TRADERS",
    },
    {
        id: 5,
        deliveryType: "DEPARTMENT",
        unCheckedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_department_off.png",
        checkedImgpath: "https://sstatic.ssgcdn.com/ui/m_ssg/img/design/common/badge_filter_department_on.png",
        route: "delivery=DEPARTMENT",
    },
];

export const categoryData: categoryType[] = [
    {
        id: 0,
        title: "전체",
        categorySeq: null,
        route: "",
    },
    {
        id: 1,
        title: "패션의류",
        categorySeq: 1,
        route: "category=1",
    },
    {
        id: 2,
        title: "패션잡화",
        categorySeq: 2,
        route: "category=2",
    },
    {
        id: 3,
        title: "명품",
        categorySeq: 3,
        route: "category=3",
    },
    {
        id: 4,
        title: "뷰티",
        categorySeq: 4,
        route: "category=4",
    },
    {
        id: 5,
        title: "스포츠/레저",
        categorySeq: 5,
        route: "category=5",
    },
    {
        id: 6,
        title: "생활/주방",
        categorySeq: 6,
        route: "category=6",
    },
    {
        id: 7,
        title: "가구/인테리어",
        categorySeq: 7,
        route: "category=7",
    },
    {
        id: 8,
        title: "유아동",
        categorySeq: 8,
        route: "category=8",
    },
    {
        id: 9,
        title: "디지털/렌탈",
        categorySeq: 9,
        route: "category=9",
    },
    {
        id: 10,
        title: "여행/e쿠폰/문구/도서",
        categorySeq: 10,
        route: "category=10",
    },
    {
        id: 11,
        title: "신선식품",
        categorySeq: 11,
        route: "category=11",
    },
    {
        id: 12,
        title: "가공/건강식품",
        categorySeq: 12,
        route: "category=12",
    },
];
