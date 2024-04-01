import { on } from "events";
import React from "react";

const CheckedStar = ({
  checked,
  onStarClick,
}: {
  checked: boolean;
  onStarClick: () => void;
}) => {
  return (
    <div
      onClick={onStarClick}
      className={`bg-review-icon 
      ${
        checked
          ? `bg-[position:-28px_-161px] bg-[length:220px_179px]`
          : `bg-[position:-56px_-161px] bg-[length:220px_179px]`
      }
        w-[18px] h-[18px]`}
    ></div>
  );
};

export default CheckedStar;
