import BackArrowHeader from "@/components/common/BackArrowHeader";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingUp from "@/components/UI/FloatingUp";
import FloatingLeft from "@/components/UI/FloatingLeft";
import LikeHeader from "@/components/pages/mypage/like/LikeHeader";

const MyLikePage = () => {
    return (
        <>
            <BackArrowHeader title="좋아요" />
            <LikeHeader />
            <BottomNav />
            <FloatingLeft />
            <FloatingUp />
        </>
    );
};

export default MyLikePage;
