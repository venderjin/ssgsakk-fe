import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import CategoryHeader from "@/components/pages/category/CategoryHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import React from "react";

export default function Page({ params, searchParams }: { params: { categoryId: number }; searchParams: { [key: string]: string | string[] | undefined } }) {
    const big = searchParams?.big;
    const mid = searchParams?.mid;
    const small = searchParams?.small;
    return (
        <>
            <TopHeader />
            <CategoryHeader categorySeq={params.categoryId} bigCategorySeq={big as string} midCategorySeq={mid as string} smallCategorySeq={small as string} />
            <div>여기는 카테고리{params.categoryId}페이지 입니다.</div>
            <div>parents = {big as string}</div>
            <FloatingLeft />
            <Footer />
        </>
    );
}
