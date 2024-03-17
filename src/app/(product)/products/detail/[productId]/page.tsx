"use client";
import React from "react";
import ImageSlider from "@/components/pages/products/detail/ImageSlider";
import { productDummy } from "@/dummy/product";

const page = ({ params }: { params: { productId: number } }) => {
  return <ImageSlider imageList={productDummy.images} />;
};

export default page;
