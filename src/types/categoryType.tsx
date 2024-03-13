export interface categoryType {
  id: number;
  name: string;
}

export interface topCategoryType extends categoryType {
  subCategories: categoryType[];
  height: number;
}
