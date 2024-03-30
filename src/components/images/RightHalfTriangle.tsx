import React from "react";

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const RightHalfTriangle: React.FC<Props> = ({ height, width, color }) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      focusable="false"
      name="ChevronRightSmallIcon"
    >
      <path
        d="M10.4521 16.536L9.6001 15.684L13.4161 11.868L9.6001 8.05201L10.4521 7.20001L15.1081 11.868L10.4521 16.536Z"
        fill={color ? color : "currentColor"}
      ></path>
    </svg>
  );
};

export default RightHalfTriangle;
