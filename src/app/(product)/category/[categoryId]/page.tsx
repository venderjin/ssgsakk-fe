import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import CategoryHeader from "@/components/pages/category/CategoryHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import React from "react";

export default function Page({ params }: { params: { categoryId: number } }) {
    return (
        <>
            <TopHeader />
            <CategoryHeader categorySeq={params.categoryId} />
            <div>여기는 카테고리{params.categoryId}페이지 입니다.</div>
            <FloatingLeft />
            <Footer />
        </>
    );
}
