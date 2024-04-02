import Image from "next/image";

const ManageShippingListTitle = () => {
  return (
    <section className="bg-[#f5f5f5] pt-[11px] pb-[12px] px-[19px] flex">
      <div className="w-[13px] h-[17px]">
        <Image
          src={"https://sui.ssgcdn.com/ui/m_ssg/img/ico_myodr_location.png"}
          alt="배송지 아이콘"
          width={13}
          height={17}
        />
      </div>
      <h3 className="text-[13px] ml-[7px] font-semibold">[MY배송지] 집</h3>
    </section>
  );
};

export default ManageShippingListTitle;
