import React from "react";
import DataNotFound from "@/components/common/DataNotFound";
import ProductListCard from "@/components/pages/productList/ProductListCard";

interface BestProduct {
    productSeq: number;
}
async function getBestProductData() {
    const res = await fetch(`${process.env.BASE_URL}/products/best`);
    const data = await res.json();
    return data.result;
}

const BestProductListpage = async () => {
    const bestProductList: BestProduct[] = await getBestProductData();
    console.log(bestProductList);
    return (
        <>
            <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
                {bestProductList.map((item: BestProduct, idx: number) => (
                    <div key={idx} className="basis-[48%]">
                        <ProductListCard productSeq={item.productSeq} best={idx + 1} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default BestProductListpage;
