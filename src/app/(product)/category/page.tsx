import React from "react";

import FloatingLeft from "@/components/common/FloatingLeft";
import CategoryList from "@/components/pages/category/CategoryList";
import CategoryFooter from "@/components/pages/category/CategoryFooter";
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
