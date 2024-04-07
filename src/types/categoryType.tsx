export interface categoryType {
    id: number;
    name: string;
}

export interface topCategoryType extends categoryType {
    categorySeq: number;
    height: number;
    imgUrl: string;
}

export interface themeType {
    id: number;
    name: string;
    imgUrl: string;
    url: string;
}
