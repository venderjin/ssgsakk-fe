import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import CategoryHeader from "@/components/pages/category/CategoryHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import React from "react";

export default function Page({ params, searchParams }: { params: { categoryId: number }; searchParams: { [key: string]: string | string[] | undefined } }) {
    const parents = searchParams?.parents;
    console.log("parents = ", parents, typeof parents);
    return (
        <>
            <TopHeader />
            <CategoryHeader categorySeq={params.categoryId} parentsCategorySeq={parents} />
            <div>여기는 카테고리{params.categoryId}페이지 입니다.</div>
            <div>parents = {searchParams.parents}</div>
            <FloatingLeft />
            <Footer />
        </>
    );
}
