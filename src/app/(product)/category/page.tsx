import CategoryList from "@/components/category/categoryList";
import ThemeList from "@/components/category/themeList";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="w-full">
      <CategoryList />
      <ThemeList />
    </div>
  );
};

export default CategoryPage;
