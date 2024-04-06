import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import CategoryHeader from "@/components/pages/category/CategoryHeader";
import CategoryProductList from "@/components/pages/category/CategoryProductList";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingLeft from "@/components/UI/FloatingLeft";
import React from "react";
import FloatingUp from "@/components/UI/FloatingUp";

async function GetCategoryProductList(categorySeq: number) {
    const res = await fetch(`${process.env.BASE_URL}/products/filter?categorySeq=${categorySeq}`, { cache: "no-store" });
    const data = await res.json();
    return data.result;
}

export default async function Page({
    params,
    searchParams,
}: {
    params: { categoryId: number };
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> {
    const big = searchParams?.big;
    const mid = searchParams?.mid;
    const small = searchParams?.small;

    const categoryProductList = await GetCategoryProductList(params.categoryId);

    return (
        <>
            <TopHeader />
            <CategoryHeader categorySeq={params.categoryId} bigCategorySeq={big as string} midCategorySeq={mid as string} smallCategorySeq={small as string} />
            <CategoryProductList categorySeqList={categoryProductList} />
            <FloatingUp />
            <FloatingLeft />
            <Footer />
            <BottomNav />
        </>
    );
}
