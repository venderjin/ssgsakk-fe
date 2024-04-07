export interface NavigationType {
    id: number;
    title: string;
    url: string;
}

export interface HomeHeaderNavigationType {
    id: number;
    title: string;
    url?: string;
}

export interface FooterNavigationType {
    id: number;
    title: string;
    url: string;
}

export interface MainNavigationType {
    id: number;
    title: string;
    url: string;
    icon: string;
}

export interface deliveryType {
    id: number;
    deliveryType: string;
    unCheckedImgpath: string;
    checkedImgpath: string;
    route: string;
}

export interface categoryType {
    id: number;
    title: string;
    categorySeq: number | null;
    route: string;
}
