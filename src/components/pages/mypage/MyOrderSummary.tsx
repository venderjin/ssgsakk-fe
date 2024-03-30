import Link from "next/link";
import RightHalfTriangle from "@/components/images/RightHalfTriangle";
import ShippingPoint from "@/components/images/ShippingPoint";
import {
  myPagDeliveryStatusBoxData,
  myPageOrderStatusBoxData,
} from "@/libs/myPageData";
import { LinkType } from "@/types/commonType";

const MyOrderSummary = () => {
  return (
    <div className="px-[16px]">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <strong className="text-[18px] mr-[5px]">주문/배송 조회</strong>
          <RightHalfTriangle />
        </Link>

        <Link
          href={"/"}
          className=" flex flex-row items-center justify-center w-[92px] h-[20px] border border-[#cfcfcf] rounded-[5px]"
        >
          <ShippingPoint width={12} height={12} />
          <span className="text-[12px]">배송지 관리</span>
        </Link>
      </div>

      <div className="mt-[8px]">
        <ul className="flex justify-around">
          {myPagDeliveryStatusBoxData.map((item: LinkType, index) => (
            <li key={item.id} className="flex">
              <Link
                className="felx items-center justify-center mr-[5px]"
                href={item.url}
              >
                <div className="w-[50px] h-[50px] bg-[#f5f5f5] rounded-[18px] text-[#e5e5e5] text-[18px] flex items-center justify-center">
                  0
                </div>
                <div className="leading-4 text-center">
                  <span className="text-[12px] text-[#444444] ">
                    {item.name}
                  </span>
                </div>
              </Link>
              {index !== myPagDeliveryStatusBoxData.length - 1 && (
                <div className="h-[50px] flex items-center">
                  <RightHalfTriangle width={16} height={16} color="#e5e5e5" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 취소/교환/반품/구매확정 정보 */}
      <div className="mt-[12px] bg-[#f5f5f5] h-[40px] rounded-[10px] mb-[20px]  flex items-center justify-around">
        {myPageOrderStatusBoxData.map((item: LinkType, index) => (
          <Link
            key={item.id}
            href={"/"}
            className="px-[10px] flex justify-between items-center w-[25%]"
          >
            <span className="text-[#444444] text-[12px]">{item.name}</span>
            <strong className="text-[14px] text-[#e5e5e5]">0</strong>
            {index !== myPageOrderStatusBoxData.length - 1 && (
              <span className="border-r border-r-[#e5e5e5] h-[12px]" />
            )}
          </Link>
        ))}
      </div>

      {/* 주문/배송조회 바로가기 */}
      <Link
        href={"/myPage/orderInfo"}
        className="h-[45px] flex items-center justify-center text-[13px] text-[#444444]"
      >
        주문/배송 조회 보러가기
        <RightHalfTriangle />
      </Link>
    </div>
  );
};

export default MyOrderSummary;
