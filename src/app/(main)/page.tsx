import React from "react";
import HomeAdCarousel from "@/components/pages/home/HomeAdCarousel";
import WhiteSpace from "@/components/common/WhiteSpace";
import HomeGridItems from "@/components/pages/home/HomeGridItems";

export default function Home() {
  return (
    <div>
      <HomeAdCarousel />
      <WhiteSpace height={20} backgroundColor="#ffffff" />
      <HomeGridItems />
      <WhiteSpace height={30} backgroundColor="#ffffff" />
    </div>
  );
}