interface AddressInfoData {
  roadAddress?: string;
  jibunAddress?: string;
  detailAddress?: string;
}

const DetailAddressBox = ({
  roadAddress,
  jibunAddress,
  detailAddress,
}: AddressInfoData) => {
  return (
    <div className="pb-[10px] text-[13px]">
      <strong className="mr-[30px] float-left font-normal leading-4 w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
        도로명
      </strong>
      <span className="break-words leading-4 block overflow-hidden py-[5px] text-[#222]">
        {`${roadAddress} ${detailAddress}`}
      </span>

      <strong className="mr-[30px] float-left font-normal w-[48px] my-[4px]  bg-[#f6f6f6] text-[#888] text-[12px] text-center ">
        지번
      </strong>
      <span className="leading-4 block overflow-hidden py-[5px] text-[#222]">
        {`${jibunAddress} ${detailAddress}`}
      </span>
    </div>
  );
};

export default DetailAddressBox;
