import { useState } from "react";
import FormLabel from "./FormLabel";
import CardTtile from "@/components/UI/CardTtile";
import JoinAgreeList from "@/components/pages/signup/form/JoinAgreeList";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import SearchZipcode from "./SearchZipcode";
import { signupErrorMessage } from "@/libs/errorMessage";

type Address = {
  zipCode?: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
};

type SigninDataType = {
  [key: string]: string;
};

const JoinForm = ({ userEmail }: { userEmail: string }) => {
  const [signinData, setSigninData] = useState<SigninDataType>({
    loginId: "",
    password: "",
    passwordCheck: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState<SigninDataType>({
    loginId: "",
    password: "",
    passwordCheck: "",
    name: "",
  });
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

  const idRegex = /^[a-zA-Z0-9]{6,20}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
  const phoneRegex = /^01[0-9]-\d{3,4}-\d{4}$/;

  const onChangeAddress = (address: Address) => {
    setSelectedAddress({ ...address });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateSigninData = { ...signinData };
    updateSigninData[e.target.name] = e.target.value;
    setSigninData(updateSigninData);
  };

  const onBlurHandler = (type: string) => {
    const updateErrorMessage = { ...errorMessage };

    if (type === "loginId") {
      if (signinData.loginId === "")
        updateErrorMessage[type] = signinErrorMessage.id.empty;
      else if (!idRegex.test(signinData.loginId))
        updateErrorMessage[type] = signinErrorMessage.id.invalid;
      else updateErrorMessage[type] = "";
    } else if (type === "password") {
      if (signinData[type] === "")
        updateErrorMessage[type] = signinErrorMessage.password.empty;
      else if (!passwordRegex.test(signinData.password))
        updateErrorMessage[type] = signinErrorMessage.password.invalid;
      else updateErrorMessage[type] = "";
    } else if (type === "passwordCheck") {
      if (signinData.passwordCheck === "")
        updateErrorMessage[type] = signinErrorMessage.passwordCheck.empty;
      else if (signinData.passwordCheck !== signinData.password)
        updateErrorMessage[type] = signinErrorMessage.passwordCheck.invalid;
      else updateErrorMessage[type] = "";
    }

    setErrorMessage(updateErrorMessage);
  };

  const checkDuplicteId = () => {};

  return (
    <div className="font-Pretendard">
      {/* <BackArrowHeader title="신세계포인트 통합회원 가입" /> */}
      {openAddress ? (
        <SearchZipcode
          onChangeAddress={onChangeAddress}
          setOpenAddress={setOpenAddress}
        />
      ) : (
        <>
          <CardTtile title="회원 정보" />
          <div>
            <section className="px-[20px] text-[#666]">
              {/* 아이디 */}
              <div className="py-[15px] flex ">
                <FormLabel labelName="아이디" />
                <div className="w-full relative">
                  <div className="relative pr-[100px] overflow-hidden">
                    <input
                      onBlur={() => onBlurHandler("loginId")}
                      type="text"
                      name="loginId"
                      placeholder="영어 또는 숫자로 6~20자리"
                      maxLength={20}
                      className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                      value={signinData.loginId}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <button
                    onClick={() => checkDuplicteId()}
                    className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#222] bg-[#f5f5f5] font-medium border border-[#e0e0e0]"
                  >
                    중복확인
                  </button>
                  <div className="mt-[3px] text-[12px] text-[red] tracking-tighter">
                    {errorMessage.loginId}
                  </div>
                </div>
              </div>

              {/* 비밀번호 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="비밀번호" />
                <div className="w-full">
                  <input
                    onBlur={() => onBlurHandler("password")}
                    onChange={onChangeHandler}
                    type="password"
                    name="password"
                    placeholder="영문, 숫자 조합 8~20자리"
                    maxLength={20}
                    className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                  <div className="mt-[3px] text-[12px] text-[red] tracking-tighter">
                    {errorMessage.password}
                  </div>
                  <input
                    onBlur={() => onBlurHandler("passwordCheck")}
                    onChange={onChangeHandler}
                    type="password"
                    name="passwordCheck"
                    placeholder="비밀번호 재확인"
                    maxLength={20}
                    className="mt-[10px] w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                  <div className="mt-[3px] text-[12px] text-[red] tracking-tighter">
                    {errorMessage.passwordCheck}
                  </div>
                </div>
              </div>

              {/* 이름 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="이름" />
                <div className="w-full">
                  <input
                    onBlur={() => onBlurHandler("name")}
                    onChange={onChangeHandler}
                    type="text"
                    name="name"
                    placeholder="이름"
                    maxLength={50}
                    className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                </div>
              </div>

              {/* 주소 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="주소" />
                <div className="w-full relative">
                  <div className="relative pr-[100px] overflow-hidden">
                    <input
                      value={selectedAddress.zipCode}
                      readOnly
                      type="text"
                      name="address"
                      placeholder=""
                      maxLength={20}
                      className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
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

              {selectedAddress.roadAddress === "" ? (
                ""
              ) : (
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
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="휴대폰번호" />
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    readOnly
                    placeholder="휴대폰번호"
                    maxLength={50}
                    className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                </div>
              </div>

              {/* 인증된 이메일주소 자동 입력*/}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="이메일주소" />
                <div className="w-full h-[40px] py-[10px] px-[11px]  text-[#666] text-[14px]">
                  {userEmail}
                </div>
              </div>
            </section>

            <JoinAgreeList />
            <div className="mt-[10px] mb-[30px] px-[20px]">
              <button className="w-full bg-primary-red text-[#fff] text-[18px] h-[48px]">
                가입하기
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JoinForm;
