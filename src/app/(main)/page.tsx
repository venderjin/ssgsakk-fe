import React from "react";
import HomeAdCarousel from "@/components/pages/home/HomeAdCarousel";
import WhiteSpace from "@/components/common/WhiteSpace";
import HomeGridItems from "@/components/pages/home/HomeGridItems";
import HomeSingleAdImage from "@/components/pages/home/HomeSingleAdImage";
import HomeSectionTitle from "@/components/pages/home/HomeSectionTitle";
import FloatingUp from "@/components/common/FloatingUp";
import { HomeGradientSectionTitle } from "@/components/pages/home/HomeExtraUI";

export default function Home() {
    return (
        <div>
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
            <HomeSectionTitle title="카드 할인받고 즐겁게 쇼핑해요" subtitle="SSGPAY로 결제하셔도 혜택 받을 수 있어요" />
            <FloatingUp />
        </div>
    );
}
