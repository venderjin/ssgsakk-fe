import React from "react";

interface Props {
  width?: string;
  height?: string;
  color?: string;
  rotate?: string;
}

const TriangleDown: React.FC<Props> = ({ width, height, color, rotate }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 8}
      height={height ? height : 7}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      viewBox="0 0 8 7"
      fill="none"
    >
      <path d="M4 6.18093L0 0.466675H8L4 6.18093Z" fill="black" />
    </svg>
  );
};

export default TriangleDown;
