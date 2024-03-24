import { useState } from "react";
import FormLabel from "./FormLabel";
import CardTtile from "@/components/UI/CardTtile";
import JoinAgreeList from "@/components/pages/join/form/JoinAgreeList";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import SearchZipcode from "./SearchZipcode";

type Address = {
  zipCode?: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
};

const JoinForm = ({ userName }: { userName: string }) => {
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

  const onChangeAddress = (address: Address) => {
    setSelectedAddress({ ...address });
    console.log(address);
  };

  return (
    <div className="font-Pretendard">
      <BackArrowHeader title="신세계포인트 통합회원 가입" />
      {!openAddress ? (
        <>
          <CardTtile title="회원 정보" />
          <form>
            <section className="px-[20px] text-[#666]">
              {/* 아이디 */}
              <div className="py-[15px] flex ">
                <FormLabel labelName="아이디" />
                <div className="w-full relative">
                  <div className="relative pr-[100px] overflow-hidden">
                    <input
                      type="text"
                      name="loginId"
                      placeholder="영어 또는 숫자로 6~20자리"
                      maxLength={20}
                      className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                    />
                  </div>
                  <button className="absolute top-0 right-0 w-[90px] h-[40px] text-[13px] text-[#222] bg-[#f5f5f5] font-medium border border-[#e0e0e0]">
                    중복확인
                  </button>
                </div>
              </div>

              {/* 비밀번호 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="비밀번호" />
                <div className="w-full">
                  <input
                    type="password"
                    name="loginPassword"
                    placeholder="영문, 숫자 조합 8~20자리"
                    maxLength={20}
                    className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                  <input
                    type="password"
                    name="passwordCheck"
                    placeholder="비밀번호 재확인"
                    maxLength={20}
                    className="mt-[10px] w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                </div>
              </div>

              {/* 이름 자동 입력 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="이름" />
                <div className="w-full h-[40px] py-[10px]  text-[#666] text-[14px]">
                  서여진
                </div>
              </div>

              {/* 주소 */}
              <div className="pt-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="주소" />
                <div className="w-full relative">
                  <div className="relative pr-[100px] overflow-hidden">
                    <input
                      value={selectedAddress.zipCode}
                      readOnly
                      type="text"
                      name="loginId"
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

              {/* 휴대폰 번호 자동 입력 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="휴대폰번호" />
                <div className="w-full h-[40px] py-[10px] px-[11px]  text-[#666] text-[14px]">
                  010-9779-7441
                </div>
              </div>

              {/* 이메일주소 */}
              <div className="py-[15px] flex border-t border-t-[#eee]">
                <FormLabel labelName="이메일주소" />
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일주소"
                    maxLength={50}
                    className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
                  />
                </div>
              </div>
            </section>

            <JoinAgreeList />
            <div className="mt-[10px] mb-[30px] px-[20px]">
              <button className="w-full bg-primary-red text-[#fff] text-[18px] h-[48px]">
                가입하기
              </button>
            </div>
          </form>
        </>
      ) : (
        <SearchZipcode
          onChangeAddress={onChangeAddress}
          setOpenAddress={setOpenAddress}
        />
      )}
    </div>
  );
};

export default JoinForm;
