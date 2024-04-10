import { topCategoryType, themeType } from "@/types/categoryType";
import { FooterNavigationType } from "@/types/navigationType";

export const footerLoginData: FooterNavigationType[] = [
    {
        id: 1,
        title: "고객센터",
        url: "https://m.ssg.com/customer/main.ssg?aplSiteNo=6005&_mpop=new",
    },
    {
        id: 2,
        title: "공지사항",
        url: "https://m.ssg.com/customer/noticeList.ssg?_mpop=new&siteNo=6005",
    },
    {
        id: 3,
        title: "입점상담",
        url: "https://partners.ssgadm.com/;jsessionid=36A6C46718A1FB6CA39F42A4220F7FEE",
    },
    {
        id: 4,
        title: "로그아웃",
        url: "/",
    },
];

export const footerData: FooterNavigationType[] = [
    {
        id: 1,
        title: "고객센터",
        url: "https://m.ssg.com/customer/main.ssg?aplSiteNo=6005&_mpop=new",
    },
    {
        id: 2,
        title: "공지사항",
        url: "https://m.ssg.com/customer/noticeList.ssg?_mpop=new&siteNo=6005",
    },
    {
        id: 3,
        title: "입점상담",
        url: "https://partners.ssgadm.com/;jsessionid=36A6C46718A1FB6CA39F42A4220F7FEE",
    },
    {
        id: 4,
        title: "로그인",
        url: "/login",
    },
];

export const themeData: themeType[] = [
    {
        id: 1,
        name: "SHINSEGAE GOLF",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714133944674672161567_122.png",
        url: "https://m-shinsegaemall.ssg.com/page/dept/golf_shop",
    },
    {
        id: 2,
        name: "SSG 랜더스",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202308/2023083101191656208092398809_329.jpg",
        url: "https://ssglanders.mfamily.ssg.com/",
    },
    {
        id: 3,
        name: "갤러리",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202305/2023050412514694202124345212_399.png",
        url: "https://m.ssg.com/disp/category.ssg?dispCtgId=6000237091",
    },
    {
        id: 4,
        name: "건강식품전문관 BIOPUBLIC",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714150647969219240031_515.jpg",
        url: "https://biopublic.mblossom.ssg.com/",
    },
    {
        id: 5,
        name: "와인픽업",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714160577133110627311_24.jpg",
        url: "https://m.ssg.com/page/winepickup.ssg",
    },
    {
        id: 6,
        name: "신선직송",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202402/2024022808572677154449748444_929.jpg",
        url: "https://m.ssg.com/page/farmersmarket",
    },
    {
        id: 7,
        name: "중소상공인 상생관",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714172941527942395794_424.jpg",
        url: "https://m.ssg.com/page/sbmarket.ssg",
    },
    {
        id: 8,
        name: "라이프매거진",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714170439572783411378_395.jpg",
        url: "https://m.ssg.com/contents/lifeMagazineMain.ssg",
    },
    {
        id: 9,
        name: "유아동 LITTLE SSG",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714152471760495859049_100.jpg",
        url: "https://m.ssg.com/page/ssgbaby/main.ssg",
    },
    {
        id: 10,
        name: "반려동물 Molly's SSG",
        imgUrl: "https://sui.ssgcdn.com/cmpt/banner/202304/2023040714154330783174712417_872.jpg",
        url: "https://m.ssg.com/page/ssgpet/main.ssg",
    },
];

export const categoryData: topCategoryType[] = [
    {
        id: 1,
        name: "패션의류",
        categorySeq: 1,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202205/2022052715323630486875175787_152.jpg&w=150&h=150&edit=c&t=2888160467dd529e49963b1f2c4a99bd9efbe707",
    },
    {
        id: 2,
        name: "패션잡화",
        categorySeq: 2,
        height: 146,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072114393459688641690964_438.jpg&w=150&h=150&edit=c&t=d7fb37600f15e8a0a36f961d254a8862b9a6959b",
    },
    {
        id: 3,
        name: "명품",
        categorySeq: 3,
        height: 108,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202309/2023091316533605979685806078_770.jpg&w=150&h=150&edit=c&t=4f9b786539288882a8bdb0cc6979d96795d7b32c",
    },
    {
        id: 4,
        name: "뷰티",
        categorySeq: 4,
        height: 222,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072114395544822427384242_240.jpg&w=150&h=150&edit=c&t=df8dd9e4b45f7bc2c94b689dfbd3de0990289ce2",
    },
    {
        id: 5,
        name: "스포츠/레저",
        categorySeq: 5,
        height: 222,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072114401652224140854414_993.jpg&w=150&h=150&edit=c&t=b307d1d0853bd6662c614d783ef6b2991cb0023b",
    },
    {
        id: 6,
        name: "생활/주방",
        categorySeq: 6,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202108/2021082715571416016294783629_536.jpg&w=150&h=150&edit=c&t=f80e3a0be52c0cc1905df05132b922fc8a679bb4",
    },
    {
        id: 7,
        name: "가구/인테리어",
        categorySeq: 7,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202007/2020072114435685703321603332_446.jpg&w=150&h=150&edit=c&t=d21fafc444801db38c6c6c7bba6bc914b8cd565b",
    },
    {
        id: 8,
        name: "유아동",
        categorySeq: 8,
        height: 260,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202108/2021082715435395419791160789_721.jpg&w=150&h=150&edit=c&t=8c8d1ab09145be52030a13825929cc0114bc2762",
    },
    {
        id: 9,
        name: "디지털/렌탈",
        categorySeq: 9,
        height: 260,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202108/2021082715441465403746388474_754.jpg&w=150&h=150&edit=c&t=2893b121cbe0da32775099aa8f1a99cf590638be",
    },
    {
        id: 10,
        name: "여행/e쿠폰/\n문구/도서",
        categorySeq: 10,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202112/2021120208063004997226756822_375.jpg&w=150&h=150&edit=c&t=6c17aa0f322bf176913ec6ff75e70f40af2c132c",
    },
    {
        id: 11,
        name: "신선식품",
        categorySeq: 11,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202112/2021120208064724360560114156_388.jpg&w=150&h=150&edit=c&t=e7ac5adf6d471528ec581fa9224405eab200c636",
    },
    {
        id: 12,
        name: "가공/건강식품",
        categorySeq: 12,
        height: 298,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202112/2021120208065932731184991218_891.jpg&w=150&h=150&edit=c&t=2566bec8d9e7f45e7eb19a4e3d3597c4a83e9326",
    },
    {
        id: 13,
        name: "반려동물",
        categorySeq: 13,
        height: 184,
        imgUrl: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202110/2021101209162383633316135331_967.jpg&w=150&h=150&edit=c&t=4fe4a6e70a7dfe335bad1c2f8e01675fb8b813a0",
    },
];
