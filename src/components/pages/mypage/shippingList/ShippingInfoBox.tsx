"use client";
import { useRouter } from "next/navigation";
interface ShippingInfo {
  shippingAddressId: number;
  addressName: string;
  zipCode: string;
  roadAddress: string;
  jibunAddress: string;
  detailAddress: string;
  defaultAddress: boolean;
}

const ShippingInfoBox = ({
  shippingInfo,
  setCheckedAddressId,
  checkedAddressId,
}: {
  shippingInfo: ShippingInfo;
  setCheckedAddressId: (id: number) => void;
  checkedAddressId: number | null;
}) => {
  const router = useRouter();
  const modifyHandler = () => {
    router.push(
      `/mypage/shippingForm?shippingAddressId=${shippingInfo.shippingAddressId}`
    );
  };
  const deleteHandler = () => {
    if (confirm("선택한 주소를 삭제하시겠습니까?")) {
      console.log(shippingInfo.shippingAddressId, "삭제");
    }
    //삭제 로직
    // const res = await fetch("http://localhost:3300/shippingList", {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ shippingAddressId: shippingInfo.shippingAddressId }),
    // });
  };

  return (
    <div className="block">
      <input
        type="radio"
        checked={shippingInfo.shippingAddressId === checkedAddressId}
        onChange={() => setCheckedAddressId(shippingInfo.shippingAddressId)}
        className="block absolute left-0 top-[50%] w-[20px] h-[20px]"
      />

      <div className="relative block text-[13px] text-[#222]">
        <strong className="block pr-[35px]">
          <span>{shippingInfo.addressName}</span>
          {shippingInfo.defaultAddress && (
            <span className="px-[10px] ml-[6px] text-[12px] text-[#fff] bg-primary-red rounded-[10px] py-[1px] font-medium">
              기본배송지
            </span>
          )}
        </strong>
        <span className="block mt-[5px]">(1234)</span>
        <span className="block mt-[5px]">
          도로명주소: {shippingInfo.roadAddress + shippingInfo.detailAddress}
        </span>
        <span className="block mt-[5px]">
          지번주소: {shippingInfo.jibunAddress + shippingInfo.detailAddress}
        </span>
      </div>

      <div className="absolute right-0 top-[20px] text-[12px] text-[#888] bg-none">
        <button onClick={modifyHandler} className="px-[10px]">
          <span>수정</span>
        </button>
        {!shippingInfo.defaultAddress && (
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
