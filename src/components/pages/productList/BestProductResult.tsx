import React from "react";

import ProductListCard from "@/components/pages/productList/ProductListCard";

interface BestProductList {
    bestProductSeqList: BestProduct[];
}

interface BestProduct {
    productSeq: number;
}

const BestProductResult = ({ bestProductSeqList }: BestProductList) => {
    return (
        <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
            {bestProductSeqList.map((item: BestProduct, idx: number) => (
                <div key={idx} className="basis-[48%]">
                    <ProductListCard productSeq={item.productSeq} best={idx + 1} />
                </div>
            ))}
        </div>
    );
};

export default BestProductResult;
