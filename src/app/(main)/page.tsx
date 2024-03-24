import React from "react";

import Footer from "@/components/layouts/Footer";
import TopHeader from "@/components/layouts/TopHeader";
import BottomHeader from "@/components/layouts/BottomHeader";
import BottomNav from "@/components/layouts/BottomNav";

import HomeAdCarousel from "@/components/pages/home/HomeAdCarousel";
import WhiteSpace from "@/components/UI/WhiteSpace";
import HomeGridItems from "@/components/pages/home/HomeGridItems";
import HomeSingleAdImage from "@/components/pages/home/HomeSingleAdImage";
import HomeSectionTitle from "@/components/pages/home/HomeSectionTitle";
import FloatingUp from "@/components/UI/FloatingUp";
import { HomeGradientSectionTitle } from "@/components/pages/home/HomeExtraUI";
import HomeCreaditCardBanner from "@/components/pages/home/HomeCreaditCardBanner";
import EventProductList from "@/components/pages/productList/EventProductList";

export default function Home() {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      {/* TopHeader and BottomHeader */}

      <HomeAdCarousel />
      <WhiteSpace height={20} backgroundColor="#ffffff" />
      <HomeGridItems />
      <WhiteSpace height={30} backgroundColor="#ffffff" />
      <HomeSingleAdImage
        imgPath="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202307/2023072514344365854650363565_696.jpg&w=750&h=0"
        title="universeCLubSingleAdImage"
      />
      <WhiteSpace height={30} backgroundColor="#ffffff" />
      <HomeSectionTitle title="가볍고 맛있는 장보기" />
      <HomeGradientSectionTitle title="나혼산 장보기 8%쿠폰으로 장보기!" />
      <HomeSectionTitle
        title="카드 할인받고 즐겁게 쇼핑해요"
        subtitle="SSGPAY로 결제하셔도 혜택 받을 수 있어요"
      />
      <HomeCreaditCardBanner />
      <WhiteSpace height={40} backgroundColor="#ffffff" />
      <HomeSectionTitle title="가장 인기 있는 특가 상품이에요!" />
      <HomeSingleAdImage
        imgPath="https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202310/2023101109160643017797103779_551.png&w=750&h=0                "
        title="universeCLubSingleAdImage"
      />
      <FloatingUp />
      <EventProductList visiableProductList={3} />

      {/* Footer and BottomNav */}
      <Footer />
      <BottomNav />
    </>
  );
}
