import React from "react";

import TopHeader from "@/components/layouts/TopHeader";
import FloatingLeft from "@/components/UI/FloatingLeft";
import CategoryList from "@/components/pages/category/CategoryList";
import CategoryFooter from "@/components/pages/category/CategoryFooter";
import ThemeList from "@/components/pages/category/ThemeList";
import BottomNav from "@/components/layouts/BottomNav";

const CategoryPage = () => {
    return (
        <>
            <TopHeader />
            <CategoryList />
            <ThemeList />
            <CategoryFooter />
            <FloatingLeft />
            <BottomNav />
        </>
    );
};

export default CategoryPage;
