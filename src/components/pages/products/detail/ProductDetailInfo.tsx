"use client";
import { useState, useRef, useEffect } from "react";
import TriangleDown from "@/components/images/TriangleDown";

const ProductDetailInfo = ({
  productDescription,
}: {
  productDescription: string;
}) => {
  const [detailMore, setDetailMore] = useState<boolean>(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const [detailHeight, setDetailHeight] = useState<number>(1200);

  // 페이지 로드 시 상세정보의 높이 계산하여 저장
  useEffect(() => {
    if (detailRef.current) {
      setDetailHeight(detailRef.current.clientHeight);
    }
  }, []);

  // 펼치기/접기 버튼 클릭 시 상세정보의 높이 조절
  const toggleDetail = () => {
    setDetailMore(!detailMore);
    setDetailHeight(detailMore ? 1200 : detailRef.current?.scrollHeight || 0);
  };

  return (
    <div className=" px-[20px] mb-[52px] border-t-[15px] border-t-[#f5f5f5] font-Pretendard">
      <div className="relative ml-[2px] mb-[15px] pt-[40px]">
        <h3 className="text-[19px] relative inline-block text-[#222222] pb-[4px] font-semibold">
          상세정보
        </h3>
        <div className="h-[1px] bg-[#cfcfcf]"></div>
      </div>

      <div
        className="overflow-hidden"
        ref={detailRef}
        style={{ maxHeight: detailMore ? "none" : `${detailHeight}px` }}
      >
        <div dangerouslySetInnerHTML={{ __html: productDescription }} />
      </div>

      {/* 상세정보 펼쳐보기 */}
      <div className="bg-white">
        <button
          onClick={toggleDetail}
          className="w-full h-[50px] text-[14px] flex items-center justify-center"
        >
          <span>{!detailMore ? "상세정보 펼쳐보기" : "상세정보 접기"}</span>
          <div className="ml-[5px]">
            <TriangleDown rotate={detailMore ? "180" : ""} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
