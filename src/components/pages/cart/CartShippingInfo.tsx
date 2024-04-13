"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ShippingPoint from "@/components/images/ShippingPoint";
import { ShippingInfoType } from "@/types/memberInfoType";
import SliderModal from "@/components/common/SliderModal";
import SliderModalHeader from "@/components/common/SliderModalHeader";
import ModalSlider from "@/components/images/ModalSlider";
import ShippingInfoBox from "@/components/pages/mypage/shippingList/ShippingInfoBox";

const CartShippingInfo = ({
  shippingData,
  modalOpen,
}: {
  shippingData: ShippingInfoType[];
  modalOpen: boolean;
}) => {
  const [selectedShipping, setSelectedShipping] =
    useState<ShippingInfoType | null>(null);
  const [checkedAddressId, setCheckedAddressId] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  const defaultShipping = shippingData.filter(
    (data) => data.defaultAddressCheck === 1
  )[0];

  useEffect(() => {
    setSelectedShipping(defaultShipping);
    setCheckedAddressId(defaultShipping.shippingAddressSeq);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      ModalHandler();
    }
  }, [modalOpen]);

  const selectShippingAddress = () => {
    const updateData = shippingData.filter(
      (data) => data.shippingAddressSeq === checkedAddressId
    )[0];
    setSelectedShipping(updateData);
    ModalHandler();
  };

  const changeDefaultShippingAddress = async () => {
    const formData = new FormData();
    formData.append("shippingAddressSeq", checkedAddressId.toString());

    try {
      const response = await fetch("/api/shippingAddress", {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        alert("기본 배송지로 설정되었습니다.");
        setIsModalOpen(false);
        location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("기본 배송지 설정에 실패했습니다.");
    }
  };

  return (
    <>
      <div className="my-[20px] mx-[16px] font-Pretendard">
        <div className="my-[11px]">
          <div className="flex gap-[3px] items-center">
            <ShippingPoint width={24} height={24} />
            <span className="text-[18px] font-bold text-[#222222]">
              {selectedShipping?.addressNickname}
            </span>
            {selectedShipping?.defaultAddressCheck === 1 && (
              <span className="pt-[2px] pb-[1px] px-[5px] bg-primary-red text-[12px] text-[#fff]">
                기본배송지
              </span>
            )}
          </div>
          <p className="text-[13px] text-[#666666]">
            [{selectedShipping?.zipCode}]{selectedShipping?.roadAddress},
            {selectedShipping?.detailAddress}
          </p>
        </div>

        <div className="mt-[11px]">
          <button
            onClick={() => ModalHandler()}
            className="w-full h-[37px] border border-[#e5e5e5] text-[13px] text-[#666666]"
          >
            배송지 변경
          </button>
        </div>
      </div>

      <SliderModal
        isModalOpen={isModalOpen}
        onChangeModal={ModalHandler}
        backgroundClose={false}
      >
        <ModalSlider />
        <SliderModalHeader title="배송지 변경" onChangeModal={ModalHandler} />
        <section className="font-Pretendard h-[75vh] overflow-y-auto">
          <ul className="px-[20px] mb-[80px] ">
            {shippingData &&
              shippingData.map((item: ShippingInfoType) => (
                <li
                  key={item.shippingAddressSeq}
                  className="relative block py-[20px] pl-[40px] border-b border-b-[#f1f1f1] h-min-[19px]"
                >
                  <ShippingInfoBox
                    type="cart"
                    shippingData={item}
                    setCheckedAddressId={setCheckedAddressId}
                    checkedAddressId={checkedAddressId}
                  />
                </li>
              ))}
            <Link
              href={`/mypage/shippingForm?shippingAddressId=&callbackUrl=${usePathname()}`}
            >
              <button className="w-full h-[52px] border border-[#d8d8d8] text-[13px] text-[#222]">
                + 주소 추가하기
              </button>
            </Link>
          </ul>
          <div className="flex w-full absolute bottom-0">
            <button
              onClick={selectShippingAddress}
              className="basis-1/2 h-[52px] bg-[#666666] font-bold text-[#fff] text-[18px]"
            >
              이번만 배송지 변경
            </button>
            <button
              onClick={changeDefaultShippingAddress}
              className="basis-1/2 h-[52px] bg-primary-red font-bold text-[#fff] text-[18px]"
            >
              기본배송지 변경
            </button>
          </div>
        </section>
      </SliderModal>
    </>
  );
};

export default CartShippingInfo;
