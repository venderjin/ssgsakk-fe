import { useState } from "react";
import Image from "next/image";
import DaumPostcode from "react-daum-postcode";

type Address = {
  zipCode?: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
};

const SearchZipcode = ({
  onChangeAddress,
  setOpenAddress,
}: {
  onChangeAddress: (address: Address) => void;
  setOpenAddress: (open: boolean) => void;
}) => {
  const [selectedAddress, setSelectedAddress] = useState<Address>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

  const completeHandler = (data: any) => {
    let defaultAddress = "";
    if (data.buildingName === "") {
      defaultAddress = "";
    } else if (data.buildingName === "N") {
      defaultAddress = "(" + data.apartment + ")";
    } else {
      defaultAddress = "(" + data.buildingName + ")";
    }
    const address = {
      zipCode: data.zonecode,
      roadAddress: `${data.roadAddress} ${defaultAddress}`,
      jibunAddress: `${data.jibunAddress} ${defaultAddress}`,
    };

    setSelectedAddress(address);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress({
      ...selectedAddress,
      detailAddress: e.target.value,
    });
  };

  const confirmAddress = () => {
    onChangeAddress(selectedAddress);
    setOpenAddress(false);
  };

  return (
    <div className="font-Pretendard">
      <div className="relative pt-[32px] pb-[7px] pl-[15px] pr-[66px] border border-b-[#222]">
        <h1 className="text-[23px] text-[#222]">우편번호 찾기</h1>
        <Image
          onClick={() => setOpenAddress(false)}
          className="absolute top-[5px] right-[4px]"
          alt="우편번호 찾기 닫기"
          src={
            "https://sui.ssgcdn.com/ui/m_ssg/img/common/btn_fullpop_close.png"
          }
          width={58}
          height={58}
        />
      </div>

      {selectedAddress.zipCode === "" ? (
        <div className="h-[600px] py-[22px] px-[20px] text-[13px]">
          <DaumPostcode
            onComplete={completeHandler}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      ) : (
        <>
          {/* 상세주소 입력 */}
          <div className="my-[20px] text-[13px]">
            <div className="mx-[20px] pb-[17px]">
              <dl>
                <dt className="float-left min-w-[78px] my-[10px] mr-[10px] bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                  우편번호
                </dt>
                <dd className="leading-5 block overflow-hidden py-[10px] text-[#222]">
                  <span className="font-normal text-[16px]">
                    {selectedAddress.zipCode}
                  </span>
                </dd>
                <dt className="float-left min-w-[78px] my-[10px] mr-[10px] bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                  도로명 주소
                </dt>
                <dd className="leading-5 block overflow-hidden py-[10px] text-[#222]">
                  <span className="text-[#222]">
                    {selectedAddress.roadAddress}
                  </span>
                </dd>
                <dt className="float-left min-w-[78px] my-[10px] mr-[10px] bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
                  지번 주소
                </dt>
                <dd className="leading-5 block overflow-hidden py-[10px] text-[#222]">
                  <span className="text-[#222]">
                    {selectedAddress.jibunAddress}
                  </span>
                </dd>
              </dl>
            </div>

            <div className="mx-[20px]">
              <span className="relative block h-[40px] px-[7px] py-[8px] border-[1px] border-[#c3c3c3]">
                <input
                  name="detailAddress"
                  type="text"
                  title="상세주소 입력"
                  placeholder="상세주소를 입력해주세요."
                  className="border-none text-[12px] text-[#222] leading-5 outline-0 bg-[#fff]"
                  maxLength={40}
                  onChange={handleChange}
                />
              </span>
              <div className="mt-[35px] pb-[50px] text-center">
                <button
                  className="min-h-[40px] min-w-[157px] text-[14px]  bg-[#222] text-[#fff]"
                  type="button"
                  onClick={confirmAddress}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchZipcode;
