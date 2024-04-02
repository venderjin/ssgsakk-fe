"use client";
import { useState, useEffect } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSearchParams } from "next/navigation";
import ShippingFormTextField from "@/components/pages/mypage/shippingList/ShippingFormTextField";
import DetailAddressBox from "./DetailAddressBox";
import regex from "@/utils/regex";
import SearchZipcode from "@/components/pages/signup/form/SearchZipcode";

interface ShippingFormData {
  addressName: string;
  receiverName: string;
  receiverPhone: string;
  zipCode: string;
}

interface AddressInfoData {
  zipCode: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
}

const schema = yup.object().shape({
  addressName: yup.string().required("주소별칭을 입력해주세요"),
  receiverName: yup.string().required("받는 분을 입력해주세요"),
  receiverPhone: yup
    .string()
    .required("휴대폰 번호를 입력해주세요")
    .matches(regex.phone, "'-' 제외 11자리를 입력해주세요"),
  zipCode: yup.string().required("주소를 입력해주세요"),
});

const ShippingForm = () => {
  const params = useSearchParams();
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<AddressInfoData>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });
  const shippingAddressId = params.get("shippingAddressId")
    ? Number(params.get("shippingAddressId"))
    : null;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ShippingFormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: async () => {
      if (shippingAddressId) {
        const response = await fetch("http://localhost:3300/shippingAddress");
        const data = await response.json();
        setAddressData({
          zipCode: data.zipCode,
          roadAddress: data.roadAddress,
          jibunAddress: data.jibunAddress,
          detailAddress: data.detailAddress,
        });
        return {
          addressName: data.addressName,
          receiverName: data.receiverName,
          receiverPhone: data.receiverPhone,
          zipCode: data.zipCode,
        };
      } else {
        return {
          addressName: "",
          receiverName: "",
          receiverPhone: "",
          zipCode: "",
        };
      }
    },
  });

  const resetHandler = () => {
    setValue("addressName", "");
    setValue("receiverName", "");
    setValue("receiverPhone", "");
    setValue("zipCode", "");
    setAddressData({
      zipCode: "",
      roadAddress: "",
      jibunAddress: "",
      detailAddress: "",
    });
  };

  const onChangeAddress = (data: AddressInfoData) => {
    setValue("zipCode", data.zipCode);
    setAddressData(data);
  };

  const onSubmit: SubmitHandler<ShippingFormData> = (data) => {
    //서버에 전달
    if (shippingAddressId) {
      //수정
    } else {
      //등록
    }
    console.log(data);
  };

  return (
    <div>
      <BackArrowHeader
        title={shippingAddressId ? "배송지 수정" : "배송지 추가"}
      />
      {openAddress ? (
        <SearchZipcode
          onChangeAddress={onChangeAddress}
          setOpenAddress={setOpenAddress}
        />
      ) : (
        <form
          className="px-[12px] pb-[40px] font-Pretendard"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ShippingFormTextField
            name="addressName"
            text="주소별칭"
            placeholder="주소별칭 입력"
            register={register}
            errorMsg={errors.addressName?.message}
          />

          <ShippingFormTextField
            name="receiverName"
            text="받는 분"
            placeholder="받는 분 성함 입력"
            register={register}
            errorMsg={errors.receiverName?.message}
          />

          <ShippingFormTextField
            name="receiverPhone"
            text="휴대폰"
            placeholder="휴대폰(숫자만 입력)"
            register={register}
            errorMsg={errors.receiverPhone?.message}
          />

          <ShippingFormTextField
            name="zipCode"
            text="배송주소"
            placeholder=""
            register={register}
            errorMsg={errors.zipCode?.message}
            openAddressModal={() => setOpenAddress(true)}
          />

          {getValues("zipCode") && (
            <DetailAddressBox
              roadAddress={addressData.roadAddress}
              jibunAddress={addressData.jibunAddress}
              detailAddress={addressData.detailAddress}
            />
          )}

          {/* 제출 이벤트 */}
          <div className="pt-[13px] text-[12px] text-[#666] text-center w-full font-semibold flex gap-1">
            <button
              onClick={resetHandler}
              className="rounded-[2px] border border-[#ccc] bg-[#fff] w-full h-[38px] shadow-inner"
              type="button"
            >
              초기화
            </button>
            <button
              onClick={() => window.history.back()}
              className="rounded-[2px] border border-[#ccc] bg-[#fff] w-full h-[38px] shadow-inner"
              type="button"
            >
              취소
            </button>
            <button
              className="rounded-[2px] border border-[#ccc] bg-[#efefef] w-full h-[38px] shadow-inner"
              type="submit"
            >
              {shippingAddressId ? "수정완료" : "등록"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ShippingForm;
