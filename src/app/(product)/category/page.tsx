import CategoryFooter from "@/components/category/categoryFooter";
import CategoryList from "@/components/category/categoryList";
import ThemeList from "@/components/category/themeList";
import React from "react";

const CategoryPage = () => {
  return (
    <div>
      <CategoryList />
      <ThemeList />
      <CategoryFooter />
    </div>
  );
};

export default CategoryPage;
