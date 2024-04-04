"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ShippingInfoType } from "@/types/memberInfoType";

const ShippingInfoBox = ({
  shippingData,
  setCheckedAddressId,
  checkedAddressId,
}: {
  shippingData: ShippingInfoType;
  setCheckedAddressId: (id: number) => void;
  checkedAddressId: number | null;
}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const modifyHandler = () => {
    router.push(
      `/mypage/shippingForm?shippingAddressSeq=${shippingData.shippingAddressSeq}`
    );
  };

  const deleteHandler = async () => {
    if (confirm("선택한 주소를 삭제하시겠습니까?")) {
      const res = await fetch(
        `${process.env.BASE_URL}/shipping-addr/${shippingData.shippingAddressSeq}`,
        {
          method: "DELETE",
          headers: {
            Authorization: session?.user?.token || "",
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        alert("배송지가 삭제되었습니다.");
        location.reload();
      } else {
        alert("배송지 삭제에 실패했습니다.");
      }
    }
  };

  return (
    <div className="block">
      <input
        type="radio"
        checked={shippingData.shippingAddressSeq === checkedAddressId}
        onChange={() => setCheckedAddressId(shippingData.shippingAddressSeq)}
        className="block absolute left-0 top-[50%] w-[20px] h-[20px]"
      />

      <div className="relative block text-[13px] text-[#222]">
        <strong className="block pr-[35px]">
          <span>{shippingData.addressNickname}</span>
          {shippingData.defaultAddressCheck === 1 && (
            <span className="px-[10px] ml-[6px] text-[12px] text-[#fff] bg-primary-red rounded-[10px] py-[1px] font-medium">
              기본배송지
            </span>
          )}
        </strong>
        <span className="block mt-[5px]">(1234)</span>
        <span className="block mt-[5px]">
          도로명주소: {shippingData.roadAddress + shippingData.detailAddress}
        </span>
        <span className="block mt-[5px]">
          지번주소: {shippingData.jibunAddress + shippingData.detailAddress}
        </span>
      </div>

      <div className="absolute right-0 top-[20px] text-[12px] text-[#888] bg-none">
        <button onClick={modifyHandler} className="px-[10px]">
          <span>수정</span>
        </button>
        {!shippingData.defaultAddressCheck && (
          <>
            <span className="border-r border-r-[#e5e5e5] h-[12px]" />
            <button onClick={deleteHandler} className="px-[10px]">
              <span>삭제</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingInfoBox;
