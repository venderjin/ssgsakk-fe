"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import DataNotFound from "@/components/common/DataNotFound";
import ProductList from "@/components/pages/productList/ProductList";

interface ProductSeq {
    productSeq: number;
}

const SearchResult = () => {
    const [notFound, setNotFound] = useState<boolean | null>(null); //검색 결과 없음 [true, false
    const [productSeqData, setProductSeqData] = useState<number[]>([]); //검색 결과 데이터 [productSeq, productSeq, ...
    const searchkeyword = useSearchParams().get("keyword");

    useEffect(() => {
        const fetchKeywordData = async (searchkeyword: string) => {
            const searchResponse = await fetch(`${process.env.BASE_URL}/products/search?keyword=${searchkeyword}`, { cache: "no-store" });
            const searchResult = await searchResponse.json();
            const searchResultProductSeq = searchResult.result.map((product: ProductSeq) => product.productSeq);
            if (searchResultProductSeq.length === 0) {
                setNotFound(true);
                setProductSeqData([]);
            } else if (searchResultProductSeq.length > 0) {
                setNotFound(false);
                setProductSeqData(searchResultProductSeq);
            }
        };
        fetchKeywordData(searchkeyword as string);
    }, [searchkeyword]);

    return (
        <>
            {notFound ? (
                <DataNotFound />
            ) : (
                <div className="flex flex-row h-auto px-3 w-full flex-wrap justify-between ">
                    {productSeqData.map((productSeq: number, idx: number) => (
                        <div key={idx} className="basis-[48%]">
                            <ProductList productSeq={productSeq} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchResult;
