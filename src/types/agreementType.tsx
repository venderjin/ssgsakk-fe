export interface AgreementType {
  id: number;
  title: string;
  type: string;
  content?: string;
}

export interface CheckListType extends AgreementType {
  parent: string;
}

export interface BeforeSignupAgreementType {
  title: string;
  terms: AgreementType[];
}

export interface MarketingAgreementType {
  title: string;
  terms: AgreementType[];
  checkList: CheckListType[];
}
