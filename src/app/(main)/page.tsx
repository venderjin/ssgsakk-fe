import React from "react";
import HomeAdCarousel from "@/components/pages/home/HomeAdCarousel";
import WhiteSpace from "@/components/common/WhiteSpace";

export default function Home() {
  return (
    <div>
      <HomeAdCarousel />
      <WhiteSpace height={30} backgroundColor="#ffffff" />
    </div>
  );
}
