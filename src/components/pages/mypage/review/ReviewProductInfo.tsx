import Image from "next/image";

const ReviewProductInfo = () => {
  return (
    <div className="mt-[15px] ml-[15px] mr-[15px] pb-[15px] border-b border-b-[#e5e5e5] flex">
      <div className="w-[50px] flex items-center">
        <Image
          src="https://sitem.ssgcdn.com/00/76/49/item/1000414497600_i1_100.jpg"
          width={100}
          height={100}
          alt="상품이미지"
        />
      </div>
      <div className="pl-[15px] h-[50px] text-[#969696] text-[14px] flex items-center w-full">
        <div className="h-[17px] text-ellipsis overflow-hidden">
          <span className="mr-[2px]">브랜드</span>
          <span>
            오트밀 500g 귀리 100% 시리얼오트밀 500g 귀리 100% 시리얼오트밀 500g
            귀리 100% 시리얼 오트밀 500g 귀리 100% 시리얼
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewProductInfo;
