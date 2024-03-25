import React from "react";

const CardTtile = ({ title }: { title: string }) => {
  return (
    <div className="px-[20px] py-[15px] bg-[#f8f8f8]">
      <h3 className="text-[14px] font-medium text-[#666] font-Pretendard">
        {title}
      </h3>
    </div>
  );
};

export default CardTtile;
