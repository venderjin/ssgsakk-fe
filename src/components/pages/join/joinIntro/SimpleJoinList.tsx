import React from "react";
import { snsLoginData } from "@/libs/joinIntroDatas";
import SnsButton from "@/components/common/SnsButton";

const SimpleJoinList = () => {
  return (
    <div>
      <div className="py-[15px] px-[20px] bg-[#f8f8f8]">
        <h3 className="text-[14px] text-[#666] font-normal font-Pretendard">
          간편회원
        </h3>
      </div>

      <div className="px-[20px]">
        <ul className="w-full my-[40px] flex justify-around items-center">
          {snsLoginData.map((sns) => (
            <SnsButton
              key={sns.id}
              snsType={sns.type}
              snsName={sns.name}
              iconPosition={sns.img}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleJoinList;
