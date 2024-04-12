"use client";
import React, { useState } from "react";
import { ImageType } from "@/types/productType";
import BottomPurchaseMain from "@/components/pages/products/purchase/BottomPurchaseMain";
import BottomPurchaseSwitcher from "@/components/pages/products/purchase/BottomPurchaseSwitcher";

type Props = {
    productSeq: number;
    productName: string;
    productPrice: number;
    vendor: string;
    discountPercent: number;
    deliveryType: string;
    contents: ImageType[];
};

const BottomActionButtons = ({ productSeq, productName, productPrice, vendor, discountPercent, deliveryType, contents }: Props) => {
    const [bottomMode, setBottomMode] = useState<string>("default");
    const onChangeBottomMode = (mode: string) => {
        setBottomMode(mode);
    };

    return (
        <>
            {bottomMode === "default" ? (
                <BottomPurchaseMain changeMode={onChangeBottomMode} productSeq={productSeq} />
            ) : (
                <>
                    <BottomPurchaseSwitcher
                        productSeq={productSeq}
                        productName={productName}
                        productPrice={productPrice}
                        discountPercent={discountPercent}
                        vendor={vendor}
                        deliveryType={deliveryType}
                        contents={contents}
                        changeMode={onChangeBottomMode}
                        mode={bottomMode}
                    />
                </>
            )}
        </>
    );
};

export default BottomActionButtons;
