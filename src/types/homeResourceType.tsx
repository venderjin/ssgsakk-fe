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
