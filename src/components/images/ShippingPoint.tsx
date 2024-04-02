import React from "react";

interface Props {
  height?: number;
  width?: number;
}

const ShippingPoint: React.FC<Props> = ({ height, width }) => {
  return (
    <svg
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      focusable="false"
      name="LocationIcon"
    >
      <path
        d="M16.6799 21.36H7.31995V22.56H16.6799V21.36Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.98 12.23C10.11 12.23 8.59998 10.71 8.59998 8.85C8.59998 6.99 10.12 5.47 11.98 5.47C13.85 5.47 15.36 6.99 15.36 8.85C15.36 10.71 13.84 12.23 11.98 12.23ZM11.98 6.66C10.78 6.66 9.79998 7.64 9.79998 8.84C9.79998 10.04 10.78 11.02 11.98 11.02C13.18 11.02 14.16 10.04 14.16 8.84C14.16 7.64 13.18 6.66 11.98 6.66Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.98 19.32L6.99999 14.28C5.53999 12.89 4.73999 11 4.73999 8.98C4.73999 4.95 7.98999 1.67 11.99 1.67C15.99 1.67 19.23 4.95 19.23 8.98C19.23 11.01 18.43 12.89 16.96 14.28L11.98 19.32ZM11.98 2.87C8.63999 2.87 5.92999 5.61 5.92999 8.98C5.92999 10.67 6.59999 12.26 7.82999 13.42L11.97 17.61L16.1 13.43C17.33 12.25 18 10.67 18 8.98C18.01 5.6 15.3 2.87 11.98 2.87Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ShippingPoint;
