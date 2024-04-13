import React from "react";

const BottomUpBox = ({ children, onClickHandler, bottom }: { children: React.ReactNode; onClickHandler: () => void; bottom: number }) => {
    return (
        <div style={{ bottom: `${bottom}px` }} className="w-full fixed  left-0 right-0 bg-white z-[300] font-Pretendard animate-[bottom-sheet-up_400ms_ease] ">
            <div className="absolute top-[-12px] left-0 right-0 h-[14px] bg-gradient-to-b from-transparent to-black opacity-15"></div>

            {/* 옵션바 닫기 */}
            <div
                onClick={() => onClickHandler()}
                className="w-full py-[10px] flex items-center justify-center  rounded-tl-[8px] rounded-tr-[8px] relative animate-[bottom-sheet-down_400ms_ease]"
            >
                <div className="w-[24px] h-[24px]  bg-product-opt-icon bg-[position:0px_-92px] bg-[size:194px_171px] align-middle"></div>
            </div>

            {children}
        </div>
    );
};

export default BottomUpBox;
