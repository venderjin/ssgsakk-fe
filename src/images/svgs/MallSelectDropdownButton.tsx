import React from "react";

const MallSelectDropdownButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
            <g filter="url(#a)">
                <path stroke="#000" stroke-width="1.5" d="M8.375 6.687 11 9.312l2.625-2.625" />
                <circle cx="11" cy="8" r="6.5" stroke="#FAFAFA" />
            </g>
            <defs>
                <filter id="a" width="22" height="22" x="0" y="1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_569" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_569" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default MallSelectDropdownButton;
