import MyMenuGroup from "@/components/pages/mypage/MyMenuGroup";
import MyOrderSummary from "@/components/pages/mypage/MyOrderSummary";
import MyPoint from "@/components/pages/mypage/MyPoint";
import MyReviewSummary from "@/components/pages/mypage/MyReviewSummary";
import QuickMenu from "@/components/pages/mypage/QuickMenu";
import BottomNav from "@/components/layouts/BottomNav";
import Footer from "@/components/layouts/Footer";
import TopHeaderIncludeIcon from "@/components/layouts/TopHeaderIncludeIcon";

const Page = () => {
  return (
    <div className="font-Pretendard">
      <TopHeaderIncludeIcon title="MY SSG" icon="cart" />
      <MyPoint />
      <MyOrderSummary />
      <QuickMenu />
      <MyReviewSummary />
      <MyMenuGroup />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Page;
