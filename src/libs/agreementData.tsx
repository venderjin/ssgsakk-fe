import { AgreementType } from "@/types/agreementType";

export const authAgreementData: AgreementType[] = [
  {
    id: 1,
    title: "개인정보 이용 및 제공 동의",
    type: "termsPrivacy",
    content: "",
  },
  {
    id: 2,
    title: "고유식별정보 처리 동의",
    type: "termsUnique",
    content: "",
  },
  {
    id: 3,
    title: "서비스 이용약관 동의",
    type: "termsService",
    content: "",
  },
  {
    id: 4,
    title: "전체동의",
    type: "checkAll",
    content: "",
  },
];
