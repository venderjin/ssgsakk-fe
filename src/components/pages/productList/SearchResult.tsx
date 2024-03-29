"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import DataNotFound from "@/components/common/DataNotFound";

interface ProductSeq {
    productSeq: number;
}

const SearchResult = () => {
    const searchkeyword = useSearchParams().get("keyword");
    console.log("searchkeyword is", searchkeyword); //입력값 없으면 null

    const fetchKeywordData = async () => {
        const searchResponse = await fetch(`${process.env.BASE_URL}/products/search?keyword=${searchkeyword}`);
        const searchResult = await searchResponse.json();
        const searchResultProductSeq = searchResult.result.map((product: ProductSeq) => product.productSeq);
        if (searchResultProductSeq.length === 0) {
            console.log("검색 결과가 없습니다.");
            return;
        } else if (searchResultProductSeq.length > 0) {
            fetchProductData(searchResultProductSeq);
        }
    };

    const fetchProductData = async (productSeq: Array<number>) => {
        productSeq.forEach(async (seq) => {
            const productResponse = await fetch(`${process.env.BASE_URL}/products/${seq}`);
            const productResult = await productResponse.json();
            console.log("productResult is", productResult);
        });
    };

    fetchKeywordData();

    return (
        <div>
            SearchResult
            <DataNotFound />
        </div>
    );
};

export default SearchResult;
