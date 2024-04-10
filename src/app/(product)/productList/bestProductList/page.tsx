import React from "react";
import BestProductResult from "@/components/pages/productList/BestProductResult";
import DataNotFound from "@/components/common/DataNotFound";
import BestProductNavigation from "@/components/pages/productList/BestProductNavigation";

interface BestProduct {
    productSeq: number;
}

interface GetBestProductList {
    category: string | undefined;
    delivery: string | undefined;
}

async function getBestProductData({ category, delivery }: GetBestProductList) {
    if (category === undefined && delivery === undefined) {
        const res = await fetch(`${process.env.BASE_URL}/products/best`, {
            cache: "no-cache",
        });
        const data = await res.json();
        return data.result;
    } else if (category !== undefined && delivery === undefined) {
        const res = await fetch(`${process.env.BASE_URL}/products/best?categorySeq=${category}`, {});
        const data = await res.json();
        return data.result;
    } else if (category === undefined && delivery !== undefined) {
        const res = await fetch(`${process.env.BASE_URL}/products/best?deliveryType=${delivery}`, {
            cache: "no-cache",
        });
        const data = await res.json();
        return data.result;
    } else if (category !== undefined && delivery !== undefined) {
        const res = await fetch(`${process.env.BASE_URL}/products/best?categorySeq=${category}&deliveryType=${delivery}`, {
            cache: "no-cache",
        });
        const data = await res.json();
        return data.result;
    }
}

const BestProductListpage = async ({
    params,
    searchParams,
}: {
    params: { categoryId: number };
    searchParams: { [key: string]: string | undefined };
}): Promise<JSX.Element> => {
    const category = searchParams?.category;
    const delivery = searchParams?.delivery;
    let catogoryToNumber = undefined;
    if (category !== undefined) {
        catogoryToNumber = parseInt(category);
    } else if (category === undefined) {
        catogoryToNumber = 0;
    }

    const bestProductList: BestProduct[] = await getBestProductData({ category, delivery });
    return (
        <>
            <BestProductNavigation deliveryType={delivery} categorySeq={catogoryToNumber} />
            {bestProductList === undefined || bestProductList.length === 0 ? <DataNotFound /> : <BestProductResult bestProductSeqList={bestProductList} />}
        </>
    );
};

export default BestProductListpage;
