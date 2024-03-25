"use client";
//import React, { useEffect, useState, Suspense } from "react";
import React, { Suspense } from "react";
//import { useSearchParams } from "next/navigation";

import EventProductList from "@/components/pages/productList/EventProductList";
import FloatingLeft from "@/components/UI/FloatingLeft";
import FloatingUp from "@/components/UI/FloatingUp";
import SpecialPriceNavigation from "@/components/pages/productList/SpecialPriceNavigation";

//import { specialPriceCategoryData } from "@/libs/specialPriceCategoryData";

// totalSpecialPrice || ssgSpecialPrice || todayGrocery

const TestSpecialPricePage = () => {
  //   const [specialPriceType, setSpecialPriceType] =
  //     useState<string>("totalSpecialPrice");
  //   const [specialPriceTitle, setSpecialPriceTitle] =
  //     useState<string>("전체\n보기");
  //   const searchParams = useSearchParams();
  //   const type = searchParams.get("type");

  //   useEffect(() => {
  //     if (type) {
  //       setSpecialPriceType(type);
  //       const category = specialPriceCategoryData.find(
  //         (item) => item.type === type
  //       );
  //       if (category) {
  //         setSpecialPriceTitle(category.title);
  //       }
  //     }
  //   }, [type]);

  return (
    <div className="bg-white">
      <Suspense>
        <SpecialPriceNavigation
        //   type={specialPriceType as string}
        //   title={specialPriceTitle}
        />
      </Suspense>
      <EventProductList />
      <FloatingLeft />
      <FloatingUp />
    </div>
  );
};

export default TestSpecialPricePage;
