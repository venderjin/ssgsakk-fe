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
