export interface categoryType {
  id: number;
  name: string;
}

export interface topCategoryType extends categoryType {
  subCategories: categoryType[];
  height: number;
}

export interface themeType {
  id: number;
  name: string;
  img: string;
  url: string;
}
