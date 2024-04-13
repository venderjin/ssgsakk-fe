import React from "react";

const BottomSoldOutButton = () => {
  return (
    <>
      <div className="w-full h-[52px] fixed left-0 right-0 bottom-0 bg-white flex font-Pretendard ">
        <button className="w-1/2 border-t-[1px] bg-[#cfcfcf] flex justify-center items-center">
          <span className="text-[17px] text-[#666]">일시품절</span>
        </button>

        <button className="w-1/2 h-[52px] bg-primary-red border-t-[1px] flex justify-center items-center">
          <span className="text-[17px] text-[#fff]">입고알림</span>
        </button>
      </div>
    </>
  );
};

export default BottomSoldOutButton;
