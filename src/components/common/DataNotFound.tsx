import React from "react";
import Image from "next/image";

const DataNotFound = () => {
    return (
        <div className="w-full h-[40vh] flex flex-col justify-center items-center ">
            <div className="w-[100px] h-[120px]">
                <Image src="https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/img_nodata.png" alt="data not found" width={100} height={120} />
            </div>
            <p className="font-Pretendard text-[24px] text-[#222222] font-bold">상품 준비중</p>
            <p className="font-Pretendard text-[14px] text-[#222222]">좋은 상품으로 찾아 뵙겠습니다.</p>
        </div>
    );
};

export default DataNotFound;
