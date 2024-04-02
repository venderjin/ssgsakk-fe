import MyMenuGroup from "@/components/pages/mypage/MyMenuGroup";
import MyOrderSummary from "@/components/pages/mypage/MyOrderSummary";
import MyPoint from "@/components/pages/mypage/MyPoint";
import MyReviewSummary from "@/components/pages/mypage/MyReviewSummary";
import QuickMenu from "@/components/pages/mypage/QuickMenu";
import BackArrowHeader from "@/components/common/BackArrowHeader";

const Page = () => {
  return (
    <div className="font-Pretendard">
      <BackArrowHeader title="MY SSG" />
      <MyPoint />
      <MyOrderSummary />
      <QuickMenu />
      <MyReviewSummary />
      <MyMenuGroup />
    </div>
  );
};

export default Page;
