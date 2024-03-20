import { url } from "inspector";

export interface HomeMainAdvertisementCarouselType {
    id: number;
    imgPath: string;
    title: string;
    subtitle: string;
}

export interface HomeGridItemsType {
    position: "upper" | "lower";
    items: {
        id: number;
        title: string;
        url: string;
        imgsrc: string;
    }[];
}

export interface HomeCreditCardEventBannerType {
    id: number;
    discountRate?: string;
    discountUnit?: string;
    imgPath: string;
    title: string;
    subtitle: string;
    firstGradientColor: string;
    secondGradientColor: string;
}

export interface HomeSpeicalPriceType {
    type: "totalSpecialPrice" | "ssgSpecialPrice" | "todayGrocery";
    title: "전체\n보기" | "쓱~\n특가" | "오늘의\n장보기";
    category: {
        id: number;
        title: string;
    }[];
}
