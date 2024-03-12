import React from "react";

const Cart = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
            <g fill="#000" filter="url(#a)">
                <path d="M24.4 12.4H10v1.2h14.4v-1.2Z" />
                <path
                    fill-rule="evenodd"
                    d="M10 23.2c0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4-1.32 0-2.4 1.08-2.4 2.4Zm1.2 0c0-.72.48-1.2 1.2-1.2s1.2.48 1.2 1.2-.48 1.2-1.2 1.2-1.2-.48-1.2-1.2ZM19.6 23.2c0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4-1.32 0-2.4 1.08-2.4 2.4Zm1.2 0c0-.72.48-1.2 1.2-1.2s1.2.48 1.2 1.2-.48 1.2-1.2 1.2-1.2-.48-1.2-1.2Z"
                    clip-rule="evenodd"
                />
                <path d="M23.08 19.6H11.32L8.08 8.8H5.2V7.6h3.84l3.24 10.8h9.84l2.28-7.32 1.2.24-2.52 8.28Z" />
            </g>
            <defs>
                <filter id="a" width="32" height="32" x="0" y="4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_544" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_544" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default Cart;
