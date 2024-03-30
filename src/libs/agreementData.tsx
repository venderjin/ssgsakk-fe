import {
  AgreementType,
  BeforeSignupAgreementType,
  MarketingAgreementType,
} from "@/types/agreementType";

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

export const marketingAgreementData: MarketingAgreementType[] = [
  {
    title: "신세계포인트",
    terms: [
      {
        id: 1,
        title: "마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의",
        type: "terms01",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms03",
      },
      {
        id: 2,
        title: "선택 정보 이마트/신세계백화점 공동개인정보 수집 및 이용 동의",
        type: "terms01",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms04",
      },
    ],
    checkList: [
      {
        id: 1,
        title: "이메일",
        type: "emailS",
        parent: "terms01",
      },
      {
        id: 2,
        title: "문자",
        type: "smsS",
        parent: "terms01",
      },
      {
        id: 3,
        title: "우편물",
        type: "mailS",
        parent: "terms01",
      },
      {
        id: 4,
        title: "텔레마케팅",
        type: "telS",
        parent: "terms01",
      },
    ],
  },
  {
    title: "SSG.COM",
    terms: [
      {
        id: 1,
        title: "마케팅 정보 제공을 위한 개인정보 수집 및 이용 동의",
        type: "terms02",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02",
      },
    ],
    checkList: [
      {
        id: 1,
        title: "이메일",
        type: "email",
        parent: "terms02",
      },
      {
        id: 2,
        title: "문자",
        type: "sms",
        parent: "terms02",
      },
    ],
  },
];

export const beforesignupAgreementData: BeforeSignupAgreementType[] = [
  {
    title: "신세계포인트",
    terms: [
      {
        id: 1,
        title: "(필수) 신세계포인트 회원 이용약관",
        type: "terms01",
        content:
          "https://member.shinsegaepoint.com/shinsegaepoint/group/stplat/terms",
      },
      {
        id: 2,
        title: "(필수) 개인정보 수집 및 이용 동의",
        type: "terms02",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms01",
      },
      {
        id: 3,
        title:
          "(필수) 필수 정보 이마트/신세계백화점 공동 개인정보 수집 이용 동의",
        type: "terms03",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms02",
      },
      {
        id: 4,
        title: "(필수) 통합회원 서비스 제공을 위한 개인정보 제3자 제공 동의",
        type: "terms04",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms06",
      },
    ],
  },
  {
    title: "SSG.COM",
    terms: [
      {
        id: 1,
        title: "(필수) SSG.COM회원 이용약관",
        type: "terms05",
        content:
          "https://member.shinsegaepoint.com/shinsegaepoint/group/stplat/terms",
      },
      {
        id: 2,
        title: "(필수) 개인정보 수집 및 이용 동의",
        type: "terms06",
        content:
          "https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms01",
      },
    ],
  },
];
