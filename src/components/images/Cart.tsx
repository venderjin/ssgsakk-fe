import React from "react";

interface Props {
    width?: string;
    height?: string;
}

const Cart: React.FC<Props> = ({ width, height }) => {
    return (
        <svg width={width ? width : 13} height={height ? height : 13} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7.91006H5V8.91007H17V7.91006Z" fill="black" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 16.91C5 18.01 5.9 18.91 7 18.91C8.1 18.91 9 18.01 9 16.91C9 15.81 8.1 14.91 7 14.91C5.9 14.91 5 15.81 5 16.91ZM6.00003 16.91C6.00003 16.31 6.40003 15.91 7.00003 15.91C7.60003 15.91 8.00003 16.31 8.00003 16.91C8.00003 17.51 7.60003 17.91 7.00003 17.91C6.40003 17.91 6.00003 17.51 6.00003 16.91Z"
                fill="black"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 16.91C13 18.01 13.9 18.91 15 18.91C16.1 18.91 17 18.01 17 16.91C17 15.81 16.1 14.91 15 14.91C13.9 14.91 13 15.81 13 16.91ZM14.0001 16.91C14.0001 16.31 14.4001 15.91 15.0001 15.91C15.6001 15.91 16.0001 16.31 16.0001 16.91C16.0001 17.51 15.6001 17.91 15.0001 17.91C14.4001 17.91 14.0001 17.51 14.0001 16.91Z"
                fill="black"
            />
            <path d="M15.9 13.91H6.1L3.4 4.91H1V3.91H4.2L6.9 12.91H15.1L17 6.81L18 7.01L15.9 13.91Z" fill="black" />
        </svg>
    );
};

export default Cart;
