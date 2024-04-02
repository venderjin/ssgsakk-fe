import React from "react";

import DeliverySSG from "@/components/images/DeliverySSG";
import DeliveryTraders from "@/components/images/DeliveryTraders";
import DeliveryEarly from "@/components/images/DeliveryEarly";

interface Props {
    deliveryType: string;
}

const DeliveryLabel = ({ deliveryType }: Props) => {
    if (deliveryType === "SSG") {
        return <DeliverySSG />;
    } else if (deliveryType === "TRADERS") {
        return <DeliveryTraders />;
    } else if (deliveryType === "EARLY") {
        return <DeliveryEarly />;
    } else if (deliveryType === "DEPARTMENT") {
        return <p className="font-Pretendard text-[#666666] text-[12px]">신세계백화점</p>;
    } else if (deliveryType === "Normal") {
        return <p className="font-Pretendard text-transparent text-[12px]">일반배송</p>;
    }
};
export default DeliveryLabel;
