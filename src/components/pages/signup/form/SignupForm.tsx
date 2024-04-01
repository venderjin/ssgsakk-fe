"use client";
import { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import regex from "@/utils/regex";
import FormLabel from "@/components/pages/signup/form/FormLabel";
import SearchZipcode from "@/components/pages/signup/form/SearchZipcode";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import CardTtile from "@/components/UI/CardTtile";
import ErrorMessage from "@/components/pages/signup/form/ErrorMessage";
import MarketingAgreeList from "@/components/pages/signup/form/MarketingAgreeList";
import TextField from "@/components/pages/signup/form/TextField";
import BeforeSignupAgreement from "@/components/pages/signup/auth/BeforeSignupAgreement";
import { useSearchParams } from "next/navigation";

type CheckBoxType = {
  [key: string]: boolean;
};

interface SignupFormData {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  email: string;
  zipCode: string;
}

type Address = {
  zipCode: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
};

const schema = yup.object().shape({
  id: yup
    .string()
    .required("아이디를 입력해주세요")
    .matches(regex.id, "6~20자의 영문 소문자와 숫자만 사용 가능합니다"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(regex.password, "8~20자의 영문, 숫자를 모두 포함해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), ""], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력해주세요"),
  name: yup
    .string()
    .required("이름을 입력해주세요")
    .matches(regex.name, "올바른 이름을 입력해주세요"),
  phone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요")
    .matches(regex.phone, "'-' 제외 11자리를 입력해주세요"),
  email: yup.string().required(),
  zipCode: yup.string().required("주소를 입력해주세요"),
});

const SignupFormComponent = () => {
  const [marketingAgreement, setMarketingAgreement] = useState<CheckBoxType>({
    emailS: false,
    smsS: false,
    mailS: false,
    telS: false,
    email: false,
    sms: false,
  });
  const [agreement, setAgreement] = useState<boolean>(false);
  const [checkId, setCheckId] = useState<boolean>(false);
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

  const params = useSearchParams();
  const userEmail = params.get("userEmail") || "";

  const onChangeAgreement = useCallback(() => {
    setAgreement(true);
  }, []);

  const onChangeMarketingAgreement = useCallback((data: CheckBoxType) => {
    setMarketingAgreement({ ...data });
  }, []);

  const onChangeAddress = useCallback((address: Address) => {
    setSelectedAddress({ ...address });
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<SignupFormData>({
    defaultValues: {
      id: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phone: "",
      email: userEmail,
      zipCode: selectedAddress.zipCode,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("zipCode", selectedAddress.zipCode);
  }, [selectedAddress, setValue]);

  const idDuplicateCheck = async () => {
    const id = getValues("id");
    if (!id) return alert("아이디를 입력해주세요");
    if (errors.id) return;

    const res = await fetch(`${process.env.BASE_URL}/auth/id-duplicate-check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id }),
    });

    //const data = await res.json();
    if (res.ok) {
      alert("사용 가능한 아이디입니다.");
      setCheckId(true);
      return;
    }

    if (res.status === 406) {
      alert("이미 사용중인 아이디입니다.");
      setCheckId(false);
    }
  };

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    if (!checkId) return alert("아이디 중복확인을 해주세요");

    const res = await fetch(`${process.env.BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: data.id,
        userPassword: data.password,
        userName: data.name,
        userEmail: data.email,
        userMobileNum: data.phone,
        zipCode: data.zipCode,
        roadAddress: selectedAddress.roadAddress,
        jibunAddress: selectedAddress.jibunAddress,
        detailAddress: selectedAddress.detailAddress,
      }),
    });

    if (res.ok) {
      alert("회원가입이 완료되었습니다!\n로그인 페이지로 이동합니다.");
      //redirect("/login");
    }

    if (res.status === 500) {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div className="font-Pretendard">
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      {!agreement ? (
        <BeforeSignupAgreement onChangeAgreement={onChangeAgreement} />
      ) : (
        <>
          {openAddress ? (
            <SearchZipcode
              onChangeAddress={onChangeAddress}
              setOpenAddress={setOpenAddress}
            />
          ) : (
            <>
              <CardTtile title="회원 정보" />
              <form className=" text-[#666]" onSubmit={handleSubmit(onSubmit)}>
                <div className="px-[20px]">
                  {/* 아이디 */}
                  <div className="py-[15px] flex ">
                    <FormLabel labelName="아이디" />
                    <div className="w-full relative">
                      <div className="relative pr-[100px] overflow-hidden">
                        <input
                          className="w-full h-[40px] py-[10px] px-[11px] border bg-[#fff] border-[#c9c9c9] text-[#222] text-[13px]"
                          type="text"
                          {...register("id")}
                        />
                        <button
                          type="button"
                          onClick={idDuplicateCheck}
                          className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#222] bg-[#f5f5f5] font-medium border border-[#e0e0e0]"
                        >
                          중복확인
                        </button>
                      </div>
                      {errors.id && <ErrorMessage error={errors.id.message} />}
                    </div>
                  </div>

                  {/* 비밀번호 */}
                  <div className="py-[15px] flex border-t border-t-[#eee]">
                    <FormLabel labelName="비밀번호" />
                    <div className="w-full">
                      <input
                        className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                        type="password"
                        {...register("password")}
                      />
                      {errors.password && (
                        <ErrorMessage error={errors.password.message} />
                      )}
                      <input
                        className="mt-[10px] w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                        type="password"
                        {...register("passwordConfirm")}
                      />
                      {errors.passwordConfirm && (
                        <ErrorMessage error={errors.passwordConfirm.message} />
                      )}
                    </div>
                  </div>

                  {/* 이름 */}
                  <TextField
                    text="이름"
                    name="name"
                    register={register}
                    errorMsg={errors.name?.message}
                  />

                  {/* 주소 */}
                  <div className="py-[15px] flex border-t border-t-[#eee]">
                    <FormLabel labelName="주소" />
                    <div className="w-full relative">
                      <div className="relative pr-[100px] overflow-hidden">
                        <input
                          className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                          {...register("zipCode")}
                          type="text"
                          readOnly
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setOpenAddress(!openAddress)}
                        className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#fff] bg-[#666] font-semibold border border-[#666]"
                      >
                        우편번호
                      </button>
                      {errors.zipCode && (
                        <ErrorMessage error={errors.zipCode.message} />
                      )}
                    </div>
                  </div>

                  {selectedAddress.roadAddress && (
                    <>
                      {/* 우편번호 검색 후 나타나는 폼 */}
                      <div className="my-[10px] pb-[10px] text-[13px]">
                        <strong className="mr-[30px] float-left font-normal leading-4 w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                          도로명
                        </strong>
                        <span className="break-words leading-4 block overflow-hidden py-[5px] text-[#222]">
                          {`${selectedAddress.roadAddress} ${selectedAddress.detailAddress}`}
                        </span>

                        <strong className="mr-[30px] float-left font-normal w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                          지번
                        </strong>
                        <span className="leading-4 block overflow-hidden py-[5px] text-[#222]">
                          {`${selectedAddress.jibunAddress} ${selectedAddress.detailAddress}`}
                        </span>
                      </div>
                    </>
                  )}

                  {/* 휴대폰 번호 */}
                  <TextField
                    text="휴대폰번호"
                    name="phone"
                    register={register}
                    errorMsg={errors.phone?.message}
                  />

                  {/* 인증된 이메일주소 자동 입력*/}
                  <div className="py-[15px] flex border-t border-t-[#eee]">
                    <FormLabel labelName="이메일주소" />
                    <input
                      readOnly
                      className="w-full h-[40px] py-[10px] px-[11px]  text-[#222] text-[13px]"
                      type="text"
                      {...register("email")}
                    />
                    {/* <div className="w-full h-[40px] py-[10px] px-[11px]  text-[#666] text-[14px]">
                {userEmail}
              </div> */}
                  </div>
                </div>

                <MarketingAgreeList
                  onChangeMarketingAgreement={onChangeMarketingAgreement}
                />
                <div className="mt-[10px] mb-[30px] px-[20px]">
                  <button
                    type="submit"
                    className="w-full bg-primary-red text-[#fff] text-[18px] h-[48px]"
                  >
                    가입하기
                  </button>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SignupFormComponent;
