import CategoryFooter from "@/components/pages/category/categoryFooter";
import CategoryList from "@/components/pages/category/categoryList";
import ThemeList from "@/components/pages/category/themeList";
import FloatingLeft from "@/components/common/FloatingLeft";
import React from "react";

const CategoryPage = () => {
    return (
        <div>
            <CategoryList />
            <ThemeList />
            <CategoryFooter />
            <FloatingLeft />
        </div>
    );
};

export default CategoryPage;
