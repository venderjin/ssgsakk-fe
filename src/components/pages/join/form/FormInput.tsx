import React from "react";

type Props = {
  type: string;
  name: string;
  placeholder?: string;
  maxLength?: number;
};

const FormInput = ({ type, name, placeholder, maxLength }: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      maxLength={maxLength}
      className="w-full h-[40px] py-[10px] px-[11px] border border-[#c9c9c9] text-[#222] text-[13px]"
    />
  );
};

export default FormInput;
