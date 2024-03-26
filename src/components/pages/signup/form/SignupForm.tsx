import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import regex from "@/utils/regex";
import FormLabel from "@/components/pages/signup/form/FormLabel";
import SearchZipcode from "@/components/pages/signup/form/SearchZipcode";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import CardTtile from "@/components/UI/CardTtile";
import ErrorMessage from "@/components/pages/signup/form/ErrorMessage";
import JoinAgreeList from "@/components/pages/signup/form/JoinAgreeList";
import TextField from "@/components/pages/signup/form/TextField";

interface SignupFormData {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
}

type Address = {
  zipCode?: string;
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
});

const SignupFormComponent = ({ userEmail }: { userEmail: string }) => {
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

  const onChangeAddress = (address: Address) => {
    setSelectedAddress({ ...address });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="font-Pretendard">
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      {openAddress ? (
        <SearchZipcode
          onChangeAddress={onChangeAddress}
          setOpenAddress={setOpenAddress}
        />
      ) : (
        <>
          <CardTtile title="회원 정보" />
          <form
            className="px-[20px] text-[#666]"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  <button className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#222] bg-[#f5f5f5] font-medium border border-[#e0e0e0]">
                    중복확인
                  </button>
                  {errors.id && <ErrorMessage error={errors.id.message} />}
                </div>
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
                    value={selectedAddress.zipCode}
                    type="text"
                    readOnly
                  />
                </div>
                <button
                  onClick={() => setOpenAddress(!openAddress)}
                  className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#fff] bg-[#666] font-semibold border border-[#666]"
                >
                  우편번호
                </button>
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
              <div className="w-full h-[40px] py-[10px] px-[11px]  text-[#666] text-[14px]">
                {userEmail}
              </div>
            </div>

            <JoinAgreeList />
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
    </div>
  );
};

export default SignupFormComponent;
