export interface OptionCombination {
  explain?: string;
  explain2?: string;
  explain3?: string;
  stock: number;
  optionAndStockSeq: number;
}

export interface OptionInfo {
  type: string;
  optionList: string[];
}

export interface SelectedOptionAndQuantity {
  optionAndStockSeq: number;
  optionString?: string;
  quantity: number;
}

export interface OrderData {
  productId: number;
  optionList: SelectedOptionAndQuantity[];
}
