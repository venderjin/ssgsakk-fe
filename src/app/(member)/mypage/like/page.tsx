import BackArrowHeader from "@/components/common/BackArrowHeader";
import BottomNav from "@/components/layouts/BottomNav";
import FloatingUp from "@/components/UI/FloatingUp";
import FloatingLeft from "@/components/UI/FloatingLeft";
import LikeHeader from "@/components/pages/mypage/like/LikeHeader";
import LikeContents from "@/components/pages/mypage/like/LikeContents";
import Footer from "@/components/layouts/Footer";

const MyLikePage = async ({
    params,
    searchParams,
}: {
    params: { categoryId: number };
    searchParams: { [key: string]: string | string[] | undefined };
}): Promise<JSX.Element> => {
    const folder = searchParams.folder;

    return (
        <>
            <BackArrowHeader title="좋아요" />
            <LikeHeader />
            <LikeContents />
            <FloatingLeft />
            <FloatingUp />
            <Footer />
            <BottomNav />
        </>
    );
};

export default MyLikePage;
