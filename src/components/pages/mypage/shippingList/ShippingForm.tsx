"use client";
import { useState, useEffect } from "react";
import BackArrowHeader from "@/components/common/BackArrowHeader";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ShippingFormTextField from "@/components/pages/mypage/shippingList/ShippingFormTextField";
import DetailAddressBox from "./DetailAddressBox";
import regex from "@/utils/regex";
import SearchZipcode from "@/components/pages/signup/form/SearchZipcode";
import { ShippingInfoType } from "@/types/memberInfoType";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ShippingFormData {
  addressNickname: string;
  receiverName: string;
  receiverMobileNum: string;
  zipCode: string;
}

interface AddressInfoData {
  zipCode: string;
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
}

const schema = yup.object().shape({
  addressNickname: yup.string().required("주소별칭을 입력해주세요"),
  receiverName: yup.string().required("받는 분을 입력해주세요"),
  receiverMobileNum: yup
    .string()
    .required("휴대폰 번호를 입력해주세요")
    .matches(regex.phone, "'-' 제외 11자리를 입력해주세요"),
  zipCode: yup.string().required("주소를 입력해주세요"),
});

const ShippingForm = ({
  shippingData,
  callbackUrl,
}: {
  shippingData: ShippingInfoType;
  callbackUrl: string | null;
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [openAddress, setOpenAddress] = useState<boolean>(false);
  const [addressData, setAddressData] = useState<AddressInfoData>({
    zipCode: "",
    roadAddress: "",
    jibunAddress: "",
    detailAddress: "",
  });

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
      if (shippingData) {
        setAddressData({
          zipCode: shippingData.zipCode,
          roadAddress: shippingData.roadAddress,
          jibunAddress: shippingData.jibunAddress,
          detailAddress: shippingData.detailAddress,
        });
        return {
          addressNickname: shippingData.addressNickname,
          receiverName: shippingData.receiverName,
          receiverMobileNum: shippingData.receiverMobileNum,
          zipCode: shippingData.zipCode,
        };
      } else {
        return {
          addressNickname: "",
          receiverName: "",
          receiverMobileNum: "",
          zipCode: "",
        };
      }
    },
  });

  const resetHandler = () => {
    setValue("addressNickname", "");
    setValue("receiverName", "");
    setValue("receiverMobileNum", "");
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

  const onSubmit: SubmitHandler<ShippingFormData> = async (data) => {
    const updateData = {
      ...shippingData,
      addressNickname: data.addressNickname,
      receiverName: data.receiverName,
      receiverMobileNum: data.receiverMobileNum,
      zipCode: data.zipCode,
      roadAddress: addressData.roadAddress,
      jibunAddress: addressData.jibunAddress,
      detailAddress: addressData.detailAddress,
    };

    //수정
    if (shippingData) {
      const updateShippingData = async () => {
        const res = await fetch(
          `${process.env.BASE_URL}/shipping-addr/${shippingData.shippingAddressSeq}`,
          {
            method: "PUT",
            headers: {
              Authorization: session?.user?.token || "",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          }
        );
        const response = await res.json();
        if (res.ok) {
          console.log(callbackUrl);
          alert("배송지가 수정되었습니다.");
          if (callbackUrl && callbackUrl !== "undefined")
            router.push(callbackUrl);
          else router.push("/mypage/shippingList");
        } else {
          console.log(response.message);
          alert("배송지 수정에 실패했습니다");
        }
      };

      updateShippingData();
    } else {
      //등록
      const addShippingData = async () => {
        const res = await fetch(`${process.env.BASE_URL}/shipping-addr`, {
          method: "POST",
          headers: {
            Authorization: session?.user?.token || "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });
        const response = await res.json();
        if (res.ok) {
          alert("배송지가 등록되었습니다.");
          if (callbackUrl && callbackUrl !== "undefined")
            router.push(`${callbackUrl}?isModalOpen=true`);
          else router.push("/mypage/shippingList");
        } else {
          console.log(response.message);
          alert("배송지 등록에 실패했습니다.");
        }
      };

      addShippingData();
    }
  };

  return (
    <div>
      <BackArrowHeader title={shippingData ? "배송지 수정" : "배송지 추가"} />
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
            name="addressNickname"
            text="주소별칭"
            placeholder="주소별칭 입력"
            register={register}
            errorMsg={errors.addressNickname?.message}
          />

          <ShippingFormTextField
            name="receiverName"
            text="받는 분"
            placeholder="받는 분 성함 입력"
            register={register}
            errorMsg={errors.receiverName?.message}
          />

          <ShippingFormTextField
            name="receiverMobileNum"
            text="휴대폰"
            placeholder="휴대폰(숫자만 입력)"
            register={register}
            errorMsg={errors.receiverMobileNum?.message}
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
              onClick={() => router.push("/mypage/shippingList")}
              className="rounded-[2px] border border-[#ccc] bg-[#fff] w-full h-[38px] shadow-inner"
              type="button"
            >
              취소
            </button>
            <button
              className="rounded-[2px] border border-[#ccc] bg-[#efefef] w-full h-[38px] shadow-inner"
              type="submit"
            >
              {shippingData ? "수정완료" : "등록"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ShippingForm;
