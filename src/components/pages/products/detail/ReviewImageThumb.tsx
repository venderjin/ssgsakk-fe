import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  reviewThumbList: string[];
  onChangeModal: () => void;
};

const ReviewImageThumb = ({ reviewThumbList, onChangeModal }: Props) => {
  return (
    <div
      onClick={onChangeModal}
      className="ml-[10px] pr-[20px] align-middle flex relative"
    >
      <div className="flex mr-[-1px] align-middle">
        {reviewThumbList.map((image, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden w-[22px] h-[22px] mr-[-6.5px] rounded-[50%] border-[1.5px] border-[#fff] bg-[#f1f1f1]"
          >
            <Image src={image} alt={`첨부이미지${idx}`} fill sizes="24px" />
          </div>
        ))}
      </div>
      <div className="ml-[6px] right-arrow"></div>
    </div>
  );
};

export default ReviewImageThumb;
