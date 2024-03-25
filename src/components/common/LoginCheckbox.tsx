import React from "react";

type Props = {
  id: string;
  isChecked: boolean;
  labelName: string;
  onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconSize: number;
};

export default function LoginCheckbox({
  id,
  isChecked,
  labelName,
  onChangeCheckbox,
  iconSize,
}: Props) {
  return (
    <span className="flex content-center items-center">
      <input
        checked={isChecked}
        onChange={onChangeCheckbox}
        type="checkBox"
        id={id}
        style={{ height: `${iconSize}px`, width: `${iconSize}px` }}
        className={`appearance-none mr-[5px] bg-login-icon bg-no-repeat ${
          isChecked ? "bg-[position:0px_-18px]" : "bg-[position:-24px_-18px]"
        } bg-[length:250px_250px]`}
      />
      <label
        htmlFor={id}
        className="text-[14px] text-[#222222] font-Pretendard"
      >
        {labelName}
      </label>
    </span>
  );
}
