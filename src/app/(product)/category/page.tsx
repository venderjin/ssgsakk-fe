import React from "react";

import FloatingLeft from "@/components/common/FloatingLeft";
import CategoryFooter from "@/components/pages/category/CategoryFooter";
import CategoryList from "@/components/pages/category/CategoryList";
import ThemeList from "@/components/pages/category/ThemeList";

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
