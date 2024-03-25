import React from "react";

const FormLabel = ({ labelName }: { labelName: string }) => {
  return (
    <div className="relative w-[98px] h-[40px] pt-[9px] pl-[7px] text-[14px] align-top">
      <span className="absolute top-[8px] left-0 text-primary-red">*</span>
      <label className="text-[14px] tracking-tight" htmlFor="">
        {labelName}
      </label>
    </div>
  );
};

export default FormLabel;
